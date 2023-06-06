import { ReactNode } from "react";
import Navbar from "./navbar";
import Provider from "./provider";

export default function LayoutContent({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <section className="container mx-auto py-2 px-4">
        <Navbar />
        {children}
      </section>  
    </Provider>
  );
}
