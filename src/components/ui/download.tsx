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

function Download() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild size={"sm"} className="font-semibold">
          <p>Download (windows)</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-md:w-[90dvw] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-start">Important!</DialogTitle>
          <DialogDescription className="text-start">
            You might see a warning when opening the setup because the software
            is not
            <span className="text-white"> code-signed.</span>
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
            <span className="text-white"> donations </span>
            are welcome!
          </DialogDescription>
        </DialogHeader>
        <div>
          <Image
            src="/warn.webp"
            height={500}
            width={500}
            alt="code-signed-warning"
          />
        </div>
        <DialogFooter className="max-md:gap-2">
          <Button
            variant={"secondary"}
            size={"sm"}
            disabled
            className="font-semibold cursor-pointer"
          >
            Donate
          </Button>
          <Link
            href={
              "https://github.com/babyo77/ship/releases/download/1.0.7/ship-setup.exe"
            }
          >
            <Button
              variant={"secondary"}
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
