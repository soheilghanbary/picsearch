import { AirVent, GithubIcon, MoonIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 sticky top-0 backdrop-blur-xl z-30">
      <div className="flex items-center space-x-3">
        <AirVent className="w-6 h-6" />
        <h2 className="font-bold">Picsearch</h2>
      </div>
      <div>
        <Link href={'https://github.com/soheilghanbary'} target="_blank" className={cn(buttonVariants({ size: 'sm' , variant: 'ghost' }))}>
          <GithubIcon className="w-5 h-5" />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
