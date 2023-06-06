'use client'
import { MoonIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant={"ghost"}
      size={"sm"}
    >
      <MoonIcon />
    </Button>
  );
}
