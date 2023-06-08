import { atom, useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useState } from "react";
import BlurImage from "./blur-image";
import { Dialog, DialogContent } from "./ui/dialog";

export const photoViewAtom = atom({
  user: { username: "", portfolio_url: "", profile_image: { large: "" } },
  urls: { regular: "" },
});
export const openViewAtom = atom(false);

export default function PhotoView() {
  const [show, setShow] = useAtom(openViewAtom);
  const photo = useAtomValue(photoViewAtom);
  return (
    <Dialog open={show} onOpenChange={(e) => setShow(false)}>
      <DialogContent className="sm:max-w-[425px] max-w-[425px] lg:max-w-screen-md p-0 top-1/2 -translate-y-1/2">
        <div className="relative">
          <BlurImage alt="" src={photo.urls.regular} />
          <a
            href={photo.user.portfolio_url}
            target="_blank"
            className="bg-[#0F172A]/30 backdrop-blur-lg rounded-lg absolute bottom-5 left-5 min-w-[320px] p-4"
          >
            <div className="flex items-center gap-4">
              <PhotoViewAvatar
                alt={photo.user.username}
                src={photo.user.profile_image.large}
              />
              <p className="text-base text-white font-medium">
                {photo.user.username}
              </p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PhotoViewAvatar({ alt, src }: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative w-14 h-14 rounded-full bg-muted">
      <Image
        fill
        loading="lazy"
        className={`object-cover duration-500 rounded-full ${
          isLoading ? "blur-md grayscale" : "blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
        alt={alt}
        src={src}
      />
    </div>
  );
}
