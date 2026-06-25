"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/assets";

export default function Whistle42Banner() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <Link
        href="https://whistle42.com"
        target="_blank"
        rel="noopener noreferrer"
        className="whistle42-banner"
      >
        <div className="whistle42-banner-fallback">
          <div className="whistle42-banner-inner">
            <span className="whistle42-logo">Whistle 42</span>
            <span className="whistle42-tagline">SECURE INFO TO WHISTLE42.COM</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="https://whistle42.com"
      target="_blank"
      rel="noopener noreferrer"
      className="whistle42-banner"
    >
      <Image
        src={IMAGES.whistle42Banner}
        alt="Whistle42 - Secure Info to Whistle42.com"
        width={728}
        height={90}
        className="whistle42-banner-img"
        onError={() => setImgError(true)}
      />
    </Link>
  );
}
