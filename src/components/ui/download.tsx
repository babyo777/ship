"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { useEffect, useState } from "react";

function Download() {
  const [url, seturl] = useState<string>();
  useEffect(() => {
    fetch("https://ship-backend.vercel.app/version")
      .then((response) => response.json())
      .then((res) => {
        seturl(res.downloadURL);
      });
  }, []);
  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild size={"sm"} className="font-semibold">
          <p>Download (Windows)</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-md:w-[90dvw] max-h-[90dvh] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-start">Important!</DialogTitle>
          <DialogDescription className="text-start">
            You might see a warning when opening the setup because the software
            is not{" "}
            <a
              href="https://www.electronjs.org/docs/latest/tutorial/code-signing"
              target="blank"
              className="text-white underline underline-offset-2"
            >
              code-signed.
            </a>
            <br />
            <br />
            <span className=" font-semibold text-white py-2">
              What is Code-Signing?
            </span>
            <br />
            Code-signing shows the software is from a trusted source and
            hasn&apos;t been changed. It requires a certificate that costs
            money, which I don&apos;t have the
            <span className="text-white"> funds </span>
            to buy. If you&apos;d like to help,
            <span className="text-white"> sponsors </span>
            are welcome!
          </DialogDescription>
        </DialogHeader>
        <div>
          <Image
            src="/warn.webp"
            height={500}
            width={500}
            priority
            className=" rounded-md border w-[100%]"
            alt="code-signed-warning"
          />
        </div>
        <DialogFooter className="max-md:gap-2">
          <Link target="blank" href={"https://twitter.com/tanmay11117"}>
            <Button
              variant={"default"}
              size={"sm"}
              className="font-semibold cursor-pointer w-full"
            >
              Sponsor
            </Button>
          </Link>
          <Link href={url ? url : ""}>
            <Button
              variant={"default"}
              size={"sm"}
              className="font-semibold cursor-pointer w-full"
            >
              Download
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Download;
