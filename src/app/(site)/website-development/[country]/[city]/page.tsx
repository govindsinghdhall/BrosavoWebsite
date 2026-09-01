import {
  DigitalCityPage,
  digitalCityMetadata,
  digitalCityStaticParams,
} from "@/components/digital-growth/DigitalLocationPages";

const SERVICE = "website-development";

export const dynamicParams = false;

export function generateStaticParams() {
  return digitalCityStaticParams(SERVICE);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  return digitalCityMetadata(SERVICE, params);
}

export default function Page({
  params,
}: {
  params: Promise<{ country: string; city: string }>;
}) {
  return <DigitalCityPage serviceSlug={SERVICE} params={params} />;
}
