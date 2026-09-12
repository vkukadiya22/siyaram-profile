import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Industrial Gallery & Machinery",
  description: "Browse photos of Siyaram Profile factory floor, state-of-the-art CNC cutting machines, and finished engineering products in Bhavnagar.",
  canonicalUrl: "/gallery",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
