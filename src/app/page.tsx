// import Image from "next/image";

import HomePage from "@/components/Home";
import { ModeToggle } from "@/components/Theme";

export default function Home() {
  return (
    <div className=" h-full  w-full  relative flex items-center justify-center " >

      <HomePage />

      <div className="absolute  bottom-8 right-8 "  >
        <ModeToggle />
      </div>






    </div>
  );
}
