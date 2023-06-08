import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

interface BlurImageProps {
  src: string;
  alt: string;
  rounded?: boolean
}

export default function BlurImage({ src, alt, rounded }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(src);
      toast.success("Copy Link successfully");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
      <Image
        fill
        alt={alt}
        src={src}
        loading="lazy"
        className={`object-cover rounded-lg duration-500 ease-in-out group-hover:opacity-75 group-hover:scale-110 ${
          isLoading ? "blur-md grayscale" : "blur-0 grayscale-0"
        } ${rounded ? 'rounded-full' : ''}`}
        onLoadingComplete={() => setLoading(false)}
      />
      <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute text-center p-4 gap-8 flex flex-col justify-center items-center backdrop-blur-sm top-0 left-0 rounded-lg w-full h-full">
        <p className="text-white font-medium leading-6">{alt}</p>
        <Button variant={"default"} onClick={handleCopy}>
          <CopyIcon className="w-5 h-5 mr-2" />
          Copy URL
        </Button>
      </div>
    </div>
  );
}


