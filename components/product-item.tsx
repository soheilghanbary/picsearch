import { useAtom, useSetAtom } from "jotai";
import BlurImage from "./blur-image";
import { openViewAtom, photoViewAtom } from "./photo-view";

export default function PhotoItem(photo: any) { 
  const [show, setShow] = useAtom(openViewAtom);
  const setSrc = useSetAtom(photoViewAtom)
  return (
    <>
      <div
        key={photo.id}
        className="flex flex-col gap-4 relative group"
        onClick={() => {
          setSrc(photo.urls.regular)
          setShow(!show)
        }}
      >
        <BlurImage alt={photo.alt_description} src={photo.urls.regular} />
      </div>
    </>
  );
}


