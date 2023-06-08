"use client";
import { searchAtom } from "@/atoms";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useInView } from "react-intersection-observer";
import { Toaster } from "sonner";
import ProductSkeleton from "./product-skeleton";
import { useEffect } from "react";
import PhotoItem from "./product-item";
import PhotoView from "./photo-view";

const API_KEY = process.env.API_KEY;

const fetcher = async (page: number, query: string) => {
  if (query.length) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${query}&client_id=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } else {
    const response = await fetch(
      `https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=${API_KEY}`
    );
    return response.json();
  }
};

const RQPhotoList = () => {
  const { ref, inView } = useInView();
  const query = useAtomValue(searchAtom);
  const {
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    data: photos,
  } = useInfiniteQuery(
    ["photos", query],
    ({ pageParam = 1 }) => fetcher(pageParam, query),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
      getPreviousPageParam: (firstPage, allPages) => firstPage,
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const renderPhotos = () => {
    if (isLoading) return <ProductSkeleton />;
    if (isError) return <p>Error loading photos</p>;
    if (photos.pages.length === 0) return <p>No photos found</p>;

    return photos.pages.map((page) =>
      page.map((photo: any) => <PhotoItem key={photo.id} {...photo} />)
    );
  };

  return (
    <>
      <section className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
        {renderPhotos()}
        <PhotoView />
      </section>
      <div ref={ref} />
      <Toaster richColors />
    </>
  );
};

export default RQPhotoList;
