import useSWR from "swr";

const API_KEY = process.env.API_KEY;

export const usePhotos = (query: string) => {
  const fetcher = async (query: string) => {
    const searchUrl = `https://api.unsplash.com/search/photos?page=1&per_page=8&query=${query}&client_id=${API_KEY}`;
    const url = `https://api.unsplash.com/photos?page=1&per_page=8&client_id=${API_KEY}`;
    const res = await fetch(query !== "all" ? searchUrl : url);
    const photos = await res.json();
    return query !== "all" ? photos.results : photos;
  };

  const { data, isLoading, isValidating } = useSWR(query || "all", fetcher);

  return { photos: data, isLoading, isValidating };
};
