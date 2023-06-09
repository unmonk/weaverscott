import { FC } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-row items-center justify-end w-full p-2 border-t border-t-primary gap-2">
      Scott Weaver &copy; {new Date().getFullYear()}
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
