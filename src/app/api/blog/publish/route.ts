import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import slugify from "slugify";

import {
  BLOG_ADMIN_COOKIE,
  verifyBlogAdminToken,
} from "@/lib/blog-auth";

import {
  blogFileExists,
  buildMarkdownDocument,
} from "@/lib/blogs";

import {
  normalizeTagsInput,
  normalizeTakeawaysInput,
  publishBlogSchema,
} from "@/lib/blog-schema";

import {
  GitHubPublishError,
  publishBlogToGitHub,
  publishImageToGitHub,
} from "@/lib/github";

import { BLOG_TITLE_SUFFIX } from "@/lib/site";

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

function getImageExtension(type: string) {
  switch (type) {
    case "image/jpeg":
      return "jpg";
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/avif":
      return "avif";
    default:
      return null;
  }
}

export async function POST(request: Request) {
  try {
    /*
     * ============================================================
     * 1. AUTHENTICATE ADMIN
     * ============================================================
     */

    const cookieStore = await cookies();
    const session = cookieStore.get(BLOG_ADMIN_COOKIE)?.value;

    if (!(await verifyBlogAdminToken(session))) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    /*
     * ============================================================
     * 2. READ FORM DATA
     * ============================================================
     */

    const formData = await request.formData();

    /*
     * ============================================================
     * 3. GET BLOG FIELDS
     * ============================================================
     */

    const body = {
      title: String(formData.get("title") || ""),
      slug: String(formData.get("slug") || ""),
      description: String(formData.get("description") || ""),
      category: String(formData.get("category") || ""),
      author: String(formData.get("author") || ""),
      tags: String(formData.get("tags") || ""),
      image: String(formData.get("image") || ""),
      imageAlt: String(formData.get("imageAlt") || ""),
      seoTitle: String(formData.get("seoTitle") || ""),
      seoDescription: String(
        formData.get("seoDescription") || ""
      ),
      keyTakeaways: String(
        formData.get("keyTakeaways") || ""
      ),
      markdown: String(formData.get("markdown") || ""),
      faqs: formData.get("faqs")
        ? JSON.parse(String(formData.get("faqs")))
        : undefined,
    };

    /*
     * ============================================================
     * 4. VALIDATE BLOG DATA
     * ============================================================
     */

    const parsed = publishBlogSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ||
            "Validation failed",
          issues: parsed.error.issues,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    /*
     * ============================================================
     * 5. CREATE SLUG
     * ============================================================
     */

    const slug = slugify(data.slug, {
      lower: true,
      strict: true,
    });

    const tags = normalizeTagsInput(data.tags);

    const keyTakeaways = normalizeTakeawaysInput(
      data.keyTakeaways
    );

    const date = new Date()
      .toISOString()
      .slice(0, 10);

    const title = data.title.trim();

    /*
     * ============================================================
     * 6. CHECK IF BLOG ALREADY EXISTS
     * ============================================================
     */

    if (blogFileExists(slug)) {
      return NextResponse.json(
        {
          error: `A blog with slug "${slug}" already exists.`,
        },
        { status: 409 }
      );
    }

    /*
     * ============================================================
     * 7. GET IMAGE FILE
     * ============================================================
     */

    const imageFile = formData.get("imageFile");

    let imagePath = data.image.trim();

    if (imageFile instanceof File) {
      /*
       * Validate image type
       */
      if (!ALLOWED_IMAGE_TYPES.includes(imageFile.type)) {
        return NextResponse.json(
          {
            error:
              "Invalid image type. Please upload JPG, PNG, WebP or AVIF.",
          },
          { status: 400 }
        );
      }

      /*
       * Validate image size
       */
      if (imageFile.size > MAX_IMAGE_SIZE) {
        return NextResponse.json(
          {
            error:
              "Image must be smaller than 10MB.",
          },
          { status: 400 }
        );
      }

      /*
       * Get extension
       */
      const extension = getImageExtension(
        imageFile.type
      );

      if (!extension) {
        return NextResponse.json(
          {
            error: "Invalid image extension.",
          },
          { status: 400 }
        );
      }

      /*
       * Create image filename
       *
       * Example:
       * how-to-buy-property-in-gurgaon-1755101234567.webp
       */

      const filename =
        `${slug}-${Date.now()}.${extension}`;

      /*
       * GitHub path
       */

      const githubImagePath =
        `public/images/blog/${filename}`;

      /*
       * Website path
       */

      imagePath =
        `/images/blog/${filename}`;

      /*
       * Convert image to Base64
       */

      const arrayBuffer =
        await imageFile.arrayBuffer();

      const base64 =
        Buffer.from(arrayBuffer).toString("base64");

      /*
       * ==========================================================
       * UPLOAD IMAGE TO GITHUB
       * ==========================================================
       */

      const githubToken =
        process.env.GITHUB_TOKEN;

      const githubOwner =
        process.env.GITHUB_OWNER;

      const githubRepo =
        process.env.GITHUB_REPO;

      const githubBranch =
        process.env.GITHUB_BRANCH || "main";

      if (
        !githubToken ||
        !githubOwner ||
        !githubRepo
      ) {
        throw new GitHubPublishError(
          "GitHub configuration is missing.",
          500
        );
      }

      const githubUrl =
        `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${githubImagePath}`;

      const githubResponse = await fetch(
        githubUrl,
        {
          method: "PUT",

          headers: {
            Authorization:
              `Bearer ${githubToken}`,

            Accept:
              "application/vnd.github+json",

            "Content-Type":
              "application/json",

            "X-GitHub-Api-Version":
              "2022-11-28",
          },

          body: JSON.stringify({
            message:
              `Upload blog wallpaper: ${filename}`,

            content: base64,

            branch: githubBranch,
          }),
        }
      );

      const githubData =
        await githubResponse.json();

      if (!githubResponse.ok) {
        console.error(
          "GitHub image upload failed:",
          githubData
        );

        throw new GitHubPublishError(
          githubData?.message ||
            "Failed to upload blog wallpaper.",
          githubResponse.status
        );
      }
    }

    /*
     * ============================================================
     * 8. REQUIRE IMAGE
     * ============================================================
     */

    if (!imagePath) {
      return NextResponse.json(
        {
          error:
            "Please upload a blog wallpaper.",
        },
        { status: 400 }
      );
    }

    /*
     * ============================================================
     * 9. BUILD MARKDOWN
     * ============================================================
     */

    const markdown = buildMarkdownDocument({
      title,

      description:
        data.description.trim(),

      date,

      updatedAt: date,

      author:
        data.author.trim(),

      category:
        data.category.trim(),

      tags,

      /*
       * This is now the uploaded image path.
       */

      image: imagePath,

      imageAlt:
        data.imageAlt?.trim() || title,

      slug,

      seoTitle:
        data.seoTitle?.trim() ||
        `${title}${BLOG_TITLE_SUFFIX}`,

      seoDescription:
        data.seoDescription?.trim() ||
        data.description.trim(),

      keyTakeaways,

      faqs: data.faqs,

      markdown: data.markdown,
    });

    /*
     * ============================================================
     * 10. PUBLISH BLOG MARKDOWN TO GITHUB
     * ============================================================
     */

    const result =
      await publishBlogToGitHub({
        slug,

        title,

        markdown,
      });

    /*
     * ============================================================
     * 11. SUCCESS
     * ============================================================
     */

    return NextResponse.json({
      success: true,

      slug,

      path: result.path,

      commitSha:
        result.commitSha,

      image:
        imagePath,

      url:
        `/blog/${slug}`,
    });
  } catch (error) {
    /*
     * ============================================================
     * GITHUB ERROR
     * ============================================================
     */

    if (
      error instanceof GitHubPublishError
    ) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: error.status,
        }
      );
    }

    /*
     * ============================================================
     * UNKNOWN ERROR
     * ============================================================
     */

    console.error(
      "Publish error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to publish blog",
      },
      {
        status: 500,
      }
    );
  }
}