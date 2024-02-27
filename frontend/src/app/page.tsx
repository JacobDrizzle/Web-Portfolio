import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Button } from './components/ui/moving-border'
import { Navbar } from "./components/ui/navbar";
import { TracingBeamDemo } from "./components/Home/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-2xl mt-20 mx-auto p-4">
          <Navbar className="top-2" />
          <p className="text-neutral-200 max-w-lg mx-auto my-2 text-md relative z-10">
            Hi, my name is
          </p>
          <h1 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 font-sans font-bold">
            Jacob Dorrill
          </h1>
          <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 font-sans font-bold">
            I like to build things
          </h1>
          <p></p>
          <p className="text-neutral-300 max-w-lg mx-auto mt-5 my-2 text-sm relative z-10">
             Im a passionate software engineer with 3 years of experience specializing in full-stack web development. 
             Throughout my journey,Ive been dedicated to crafting robust and scalable web solutions that empower businesses and delight users.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-2 bg-neutral-950 placeholder:text-neutral-700"
          />
          <div>
            <Button
              borderRadius="1.75rem"
              className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Get in touch
            </Button>
          </div>
          <BackgroundBeams />
          <div className="h-60"></div>
        </div>
        <TracingBeamDemo />
    </main>
  );
}
