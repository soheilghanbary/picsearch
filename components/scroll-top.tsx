"use client";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      className={`fixed bottom-4 right-4 z-50 duration-200 transition-all rounded-full h-12 w-12 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      variant={"secondary"}
      size={"sm"}
      onClick={scrollToTop}
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
}
