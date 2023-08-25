"use client";
import { FC } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "./ui/menubar";
import { DownloadIcon } from "lucide-react";
import { employers, organizations, education, socials } from "@/lib/consts";
import va from "@vercel/analytics";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const onResumeClick = () => {
    va.track("resume_download");
  };
  return (
    <Menubar className="rounded-none border-b border-none max-w-full overflow-hidden">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">
          <Link href="/">Scott</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Resume</MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            asChild
            className="cursor-pointer"
            onClick={onResumeClick}
          >
            <a href="/ScottWeaverResume.pdf" download>
              Download (PDF)
              <MenubarShortcut>
                <DownloadIcon size={15} />
              </MenubarShortcut>
            </a>
          </MenubarItem>
          <MenubarItem
            asChild
            className="cursor-pointer"
            onClick={onResumeClick}
          >
            <Link href={"/cv"}>View </Link>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Employers</MenubarSubTrigger>
            <MenubarSubContent>
              {employers.map((employer) => (
                <MenubarItem
                  key={employer.name}
                  className={employer.link ? "cursor-pointer" : ""}
                  asChild
                >
                  <a
                    href={employer.link ?? "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {employer.name}
                    <MenubarShortcut>{employer.navYear}</MenubarShortcut>
                  </a>
                </MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Organizations</MenubarSubTrigger>
            <MenubarSubContent>
              {organizations.map((organization) => (
                <MenubarItem
                  asChild
                  className="cursor-pointer flex flex-row justify-between"
                  key={organization.name}
                >
                  <a
                    href={organization.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {organization.name}
                    <span className="ml-0.5 text-xs">{organization.title}</span>
                  </a>
                </MenubarItem>
              ))}
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href={socials.github} target="_blank">
            Github
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href={socials.linkedin} target="_blank">
            Linkedin
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
