import { AirVent, GithubIcon, MoonIcon } from "lucide-react";
import { Button } from "../ui/button";
import ModeToggle from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center m-3">
      <div className="flex items-center space-x-3">
        <AirVent className="w-6 h-6" />
        <h2 className="font-bold">Picsearch</h2>
      </div>
      <div>
        <Button size={"sm"} variant={"ghost"}>
          <GithubIcon className="w-5 h-5" />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
