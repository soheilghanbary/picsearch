import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

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
      <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute text-center p-4 gap-8 flex flex-col justify-center items-center backdrop-blur-lg top-0 left-0 rounded-lg w-full h-full">
        <p className="text-white font-medium leading-6">{alt}</p>
        <Button
          variant={"default"}
          onClick={() =>
            navigator.clipboard.writeText(src).then((res) => {
              toast.success("Copy Link successfully");
            })
          }
        >
          <CopyIcon className="w-5 h-5 mr-2" />
          Copy URL
        </Button>
      </div>
    </div>
  );
}
