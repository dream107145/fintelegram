import Image, { type ImageProps } from "next/image";

/** Image served via /api/img — skip Next.js optimizer (server already fetched bytes). */
export default function ProxiedImage(props: ImageProps) {
  return <Image {...props} unoptimized />;
}
