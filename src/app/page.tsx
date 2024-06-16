import { Button } from "@/components/ui/button";
import Download from "@/components/ui/download";
import View from "@/components/view";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Gauge } from "lucide-react";
import Link from "next/link";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { LuShieldCheck } from "react-icons/lu";
import { PiStackSimple } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <View />
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
      <div className="flex flex-1 w-full min-h-[60dvh] flex-col items-center justify-center text-center px-4  mt-11 max-md:mt-[9dvh] background-gradient sm:py-16 py-4 md:gap-11 gap-5">
        <h1 className="mx-auto max-w-6xl font-display text-5xl font-medium tracking-tight sm:text-6xl  text-[45px]   leading-[48px] sm:leading-none">
          Ship your files without internet
        </h1>
        <div className="flex space-x-2">
          <Download />
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
            <p>Fast</p>
          </div>
          <div className="flex items-center gap-1 text-xs tracking-tight leading-tight">
            <PiStackSimple className="h-4 w-4" />
            <p>Open source</p>
          </div>
          <div className="flex items-center gap-0.5 text-xs tracking-tight leading-tight">
            <LuShieldCheck className="h-4 w-4" />
            <p>Secure</p>
          </div>
          <div className="flex items-center gap-0.5 text-xs tracking-tight leading-tight">
            <HiOutlineClipboardCopy className="h-4 w-4" />
            <p>Clipboard Sync</p>
          </div>
        </div>

        <div className="md:px-[14dvw]">
          <video
            src="/demo.mp4"
            muted
            controls
            loop
            autoPlay
            playsInline
            preload="true"
            className=" border rounded-md"
          ></video>
        </div>
        <p className="mx-auto max-w-6xl font-display tracking-tight leading-relaxed text-zinc-300 font-normal sm:leading-none pb-11 md:text-base text-sm">
          Ship is an Electron-based application designed for Windows, enabling
          seamless file transfers from your phone to your PC over the same Wi-Fi
          network. This app provides a convenient and secure way to transfer
          files without relying on internet access or using cables.
        </p>
      </div>

      <footer className="flex border-t bottom-0 w-full py-4 justify-center items-start leading-tight tracking-tight text-xs text-zinc-400 hover:text-zinc-200 duration-300 transition-all">
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
