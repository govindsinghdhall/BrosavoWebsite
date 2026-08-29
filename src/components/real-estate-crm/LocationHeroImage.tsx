"use client";

import Image from "next/image";
import { useState } from "react";

type LocationHeroImageProps = {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
  className?: string;
  aspectClassName?: string;
};

export function LocationHeroImage({
  src,
  alt,
  label,
  priority = false,
  className = "",
  aspectClassName = "aspect-[16/9]",
}: LocationHeroImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border border-border/70 bg-surface ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-background to-accent-violet/10" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-blue">
            Image placeholder
          </span>
          <p className="mt-3 max-w-md text-sm font-medium text-foreground">
            {label}
          </p>
          <p className="mt-2 max-w-lg text-xs leading-5 text-muted">
            Add hero image at{" "}
            <code className="rounded bg-background px-1.5 py-0.5 text-[11px]">
              public{src}
            </code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/70 ${aspectClassName} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

type LocationCardImageProps = {
  src: string;
  alt: string;
  cityName: string;
  className?: string;
};

export function LocationCardImage({
  src,
  alt,
  cityName,
  className = "",
}: LocationCardImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-28 items-center justify-center border-b border-border/60 bg-surface px-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-xs text-muted">{cityName}</span>
      </div>
    );
  }

  return (
    <div className={`relative h-28 overflow-hidden border-b border-border/60 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
