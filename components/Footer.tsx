import { FC } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-row justify-between relative items-center w-full p-2 border-t border-t-primary gap-2 bg-background">
      <div className="absolute inset-x-0 -top-20 h-32 -z-10 bg-gradient-radial from-emerald-300 via-emerald-900 to-background blur-lg opacity-75 animate-gradient" />

      <div className="justify-start">
        <Image
          src={"/images/il.svg"}
          alt={"Illustration"}
          width={40}
          height={25}
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
