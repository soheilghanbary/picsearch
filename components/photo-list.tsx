"use client";
import { searchAtom } from "@/atoms";
import { HeartIcon } from "lucide-react";
import useSWR from "swr";
import { useAtomValue } from "jotai";
import { useState } from "react";
import BlurImage from "./blur-image";
import { Skeleton } from "./ui/skeleton";

const url =
  "https://api.unsplash.com/photos?per_page=20&client_id=U7DCc9zu9YT3-NDeVLi9if-SB91zIQFXZQxLvxGTqTA";

const fetcher = async (query: string) => {
  if (query !== "all") {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?per_page=20&query=${query}&client_id=U7DCc9zu9YT3-NDeVLi9if-SB91zIQFXZQxLvxGTqTA`
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
      <div className="grid grid-cols-4 gap-8">
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
    <section className="grid grid-cols-4 gap-8">
      {!photos.length ? (
        <p>Nothing Photo</p>
      ) : (
        photos.map((photo) => (
          <div key={photo.id} className="flex flex-col gap-4">
            <BlurImage alt="" src={photo.urls.regular} />
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <HeartIcon className="w-5 h-5" />
              <span>{photo.likes}</span>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
