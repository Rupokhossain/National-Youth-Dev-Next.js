"use client";

import React, { useState } from "react";
import { BookOpen } from "lucide-react";

interface CourseThumbnailProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  title?: string;
}

export default function CourseThumbnail({
  src,
  alt,
  className = "w-full h-full object-cover",
  category,
  title,
}: CourseThumbnailProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 border border-emerald-400/20">
          <BookOpen className="w-7 h-7" />
        </div>
        {title && <span className="text-white font-extrabold text-sm sm:text-base max-w-xs leading-snug">{title}</span>}
        {category && <span className="text-emerald-400 text-xs sm:text-sm font-semibold mt-1">{category}</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
