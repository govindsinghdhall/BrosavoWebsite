import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  CONTACT_FORM_SUBMIT_ERROR_MESSAGE,
  contactFormSchema,
} from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail =
      process.env.CONTACT_TO_EMAIL || "hellobrosavo@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.error("Contact API: RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: CONTACT_FORM_SUBMIT_ERROR_MESSAGE },
        { status: 500 }
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Validation failed",
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Brosavo <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `Demo request from ${data.name}${data.city ? ` · ${data.city}` : ""}${data.interest ? ` · ${data.interest}` : ""}`,
      html: buildContactEmailHtml(data),
      text: buildContactEmailText(data),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: CONTACT_FORM_SUBMIT_ERROR_MESSAGE },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: CONTACT_FORM_SUBMIT_ERROR_MESSAGE },
      { status: 500 }
    );
  }
}
