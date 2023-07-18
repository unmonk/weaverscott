import { FC } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-row justify-between items-center w-full p-2 border-t border-t-primary gap-2">
      <div className="justify-start">
        <Image
          src={"/images/il.svg"}
          alt={"Illustration"}
          width={60}
          height={40}
          className="animate-flag"
        />
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        Scott Weaver &copy; {new Date().getFullYear()}
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
