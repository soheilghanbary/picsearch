import Image from "next/image";
import { useState } from "react";

export default function BlurImage({ src, alt }: { src: string; alt: string }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="relative aspect-square bg-muted">
      <Image
        fill
        alt={alt}
        src={src}
        loading="lazy"
        className={`object-cover rounded-lg duration-700 ease-in-out group-hover:opacity-75 ${
          isLoading ? "blur-md grayscale" : "blur-0 grayscale-0"
        })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
