"use client";
import { searchAtom } from "@/atoms";
import useSWR from "swr";
import { useAtomValue } from "jotai";
import BlurImage from "./blur-image";
import { Skeleton } from "./ui/skeleton";
import { Toaster } from "sonner";

const url = `https://api.unsplash.com/photos?per_page=20&client_id=${process.env.API_KEY}`;

const fetcher = async (query: string) => {
  if (query !== "all") {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?per_page=20&query=${query}&client_id=${process.env.API_KEY}`
    );
    const photos = await res.json();
    return photos.results;
  } else {
    const res = await fetch(url);
    const photos = await res.json();
    return photos;
  }
};

export default function PhotoList() {
  const query = useAtomValue(searchAtom);
  const { data: photos, isValidating } = useSWR(
    query.length ? query : "all",
    fetcher
  );

  if (isValidating)
    return (
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
        <Skeleton className="aspect-square bg-muted rounded-lg" />
      </div>
    );

  return (
    <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
      {!photos.length ? (
        <p>Nothing Photo</p>
      ) : (
        photos.map((photo: any) => (
          <div key={photo.id} className="flex flex-col gap-4 relative group">
            <BlurImage alt={photo.alt_description} src={photo.urls.regular} />
          </div>
        ))
      )}
      <Toaster richColors />
    </section>
  );
}
