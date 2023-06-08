import { atom, useAtom, useAtomValue } from "jotai";
import BlurImage from "./blur-image";
import { Dialog, DialogContent } from "./ui/dialog";
export const photoViewAtom = atom("");
export const openViewAtom = atom(false);

export default function PhotoView() {
  const [show, setShow] = useAtom(openViewAtom);
  const photoSrc = useAtomValue(photoViewAtom)
  return (
    <Dialog open={show} onOpenChange={(e) => setShow(false)}>
      <DialogContent className="sm:max-w-[425px] max-w-[425px] lg:max-w-screen-md p-0 top-1/2 -translate-y-1/2">
        <BlurImage  alt="" src={photoSrc} />
      </DialogContent>
    </Dialog>
  );
}
