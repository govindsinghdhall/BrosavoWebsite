import {
  DigitalCountryPage,
  digitalCountryMetadata,
  digitalCountryStaticParams,
} from "@/components/digital-growth/DigitalLocationPages";

const SERVICE = "geo";

export const dynamicParams = false;

export function generateStaticParams() {
  return digitalCountryStaticParams(SERVICE);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  return digitalCountryMetadata(SERVICE, params);
}

export default function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  return <DigitalCountryPage serviceSlug={SERVICE} params={params} />;
}
