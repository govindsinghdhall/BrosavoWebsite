import type { Metadata } from "next";
import { Products } from "@/components/sections/Products";

export const metadata: Metadata = {
  title: "Products | Brosavo",
  description:
    "Explore software products and business platforms built by Brosavo, including real estate, customer management, automation, AI, and industry-specific solutions.",
};

export default function ProductsPage() {
  return (
    <>
      <Products showHeader={false} />
    </>
  );
}