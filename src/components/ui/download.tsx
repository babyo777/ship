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
      <DialogContent className="max-md:w-[90dvw] rounded-lg">
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
            placeholder="blur"
            className=" rounded-md"
            blurDataURL="data:image/webp;base64,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1Fbrcfv/zz8muNXgWKFr/MMdPavtuV3Nppkf3/d53+e9R7bV1bVWW9V0VOzZEqoMSZgGuFFK21eUgQAiU0apST0GIq2RVneBHm21tq6x1jWrpa61TKNux73Pez++37/nz55vxKsp3F8Xva32dG817Mf3+3nvuB1vx+241VKraTvu1Vplq7WqoraqCsG2wVWCMaMN1Jo0naNBZNBQMAJEIoFItO56DERaBmhp7bHW5eqyZqbNtZa61HLc6nK89/+f/4A08LZDM8Mnbhu2OQWQuLsfjH58v5/3jtvxXi0b17rUatZaZXNXYbNV1CbYKq68N4YpOJbYQscXzBwiABCJAJGrY4C69hjoMdTao2mzubbWsmZmLXWpxbWWutR23I7b533//PrvOZ9H9U5IAACFPk3RhjI/733e98jTY9b12IRaiqpqEarE2oQi2wYYAmIIr84g42UJhxDaoGm5i9S1B5u7UGsPrWu0udZlzUzXSXU73jvefnzf/37+szskAptdPz3bFga3YeMKdvDzvh/f3+PtuNVSS211qUsttdiOPde62uBTJW49tTwaN2oawksPCEHTGBwUCGZojQ3aXWukxeaupa5rrGXNxp7W4mrWUstx7/N9//z+71IQBgcC6G16Xgiv6s0bbd+G8eP7Pd6Oe7Ud92qry+YM3R17pllLXSoqhArvisQqQ6gyh6swHbcvGEOEzOitDUUDUHQregj0GOih1pbWlh5bTNPm2mKadamttrrVrW7He8e9z/v+PH/Ijfom3eOyvXp+DSQAgCT4ed/n+457tRy3y3xuTddabMdWm6utyqylSmYT3YnVGaJQmyCBgjHGELkZzQaaKUSIDFMHI5FIIDZtd6Eeh3aqNbq6mq7b93S8fb7PuMbsJo/A21718AZbkHyP3KK+z/uOe7XUVre61WaYrq5jSgey1VJlE9xV2arcCUJtpiEI4G6ILBR4DIPGL0eosUOxiLseAzF3sVbX1h4mnjBdXWuppS6mK+lSt7rVdtyOe6fbNvusGYHdrTdvgBLAIxr4fF9tx726GbXVUkvd7qjk7hqfWjF4wWa4ihtaMARAMCYoABEItJAoNMOgSBQanC0QcY2468FdS4+ma0trS4tri+nqYtTtPDtu56y22up2vO/zfQ+PM8C2bI8QUbhYPt3ice+4d9yrW2211eLiYpqmi8sD4equyjQG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"
            alt="code-signed-warning"
          />
        </div>
        <DialogFooter className="max-md:gap-2">
          <Link target="blank" href={"https://twitter.com/tanmay11117"}>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="font-semibold cursor-pointer"
            >
              Sponsor
            </Button>
          </Link>
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
