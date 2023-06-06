"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { searchAtom } from "@/atoms";
import { useAtom } from "jotai";
import useDebounce from "@/hooks/use-debounce";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useAtom(searchAtom);

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setQuery(searchText)
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-sm items-center space-x-2 mx-auto mb-8"
    >
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="search image"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
