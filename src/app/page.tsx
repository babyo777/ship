import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FolderSync, Gauge } from "lucide-react";
import Link from "next/link";
import { PiStackSimple } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <header className=" border-b p-4 w-full items-center flex justify-between md:justify-around">
        <div className="flex items-center gap-1.5 font-bold text-2xl leading-tight tracking-wide">
          <p className="mt-0.5">Ship</p>
        </div>
        <div className="flex items-center gap-2.5">
          <Link target="blank" href={"https://github.com/babyo77/ship"}>
            <Button
              size={"sm"}
              className="font-semibold items-center flex gap-1"
            >
              <GitHubLogoIcon className="h-4 w-4" />
              Star on Github
            </Button>
          </Link>
        </div>
      </header>
      <div className="flex flex-1 w-full min-h-[60dvh] flex-col items-center justify-center text-center px-4  mt-11 max-md:mt-[9dvh] background-gradient sm:py-16 py-11 md:gap-11 gap-5">
        <h1 className="mx-auto max-w-6xl font-display text-5xl font-medium tracking-tight sm:text-6xl  text-[45px]   leading-[48px] sm:leading-none">
          Ship your files without internet
        </h1>
        <div className="flex space-x-2">
          <Link
            href={
              "https://github.com/babyo77/ship/releases/download/1.0.5/ship-setup.exe"
            }
          >
            <Button size={"sm"} className="font-semibold">
              Download (windows)
            </Button>
          </Link>
          <Link
            target="blank"
            href={"https://github.com/babyo77/ship/releases/"}
          >
            <Button size={"sm"} className="font-semibold">
              Latest Release
            </Button>
          </Link>
        </div>
        <div className=" flex justify-center gap-2">
          <div className="flex items-center gap-1  text-xs tracking-tight leading-tight">
            <Gauge className="h-4 w-4" />
            <p>High speed</p>
          </div>
          <div className="flex items-center gap-1 text-xs tracking-tight leading-tight">
            <PiStackSimple className="h-4 w-4" />
            <p>Simple to use</p>
          </div>
        </div>

        <div className="md:px-[14dvw] pb-11">
          <video
            src="/demo.mp4"
            muted
            loop
            autoPlay
            playsInline
            className=" border rounded-md"
          ></video>
        </div>
      </div>

      <footer className="flex max-md:absolute border-t bottom-0 w-full py-4 justify-center items-start leading-tight tracking-tight text-xs text-zinc-400 hover:text-zinc-200 duration-300 transition-all">
        <p>
          Made by{" "}
          <a target="blank" href="https://tanmayo7.vercel.app">
            @babyo7_
          </a>
        </p>
      </footer>
    </>
  );
}
