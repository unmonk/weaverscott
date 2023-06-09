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
import { employers, organizations, education } from "@/lib/consts";
import va from "@vercel/analytics";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const onResumeClick = () => {
    va.track("resume_download");
  };
  return (
    <Menubar className="rounded-none border-b border-none max-w-full overflow-hidden">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Scott</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild className="cursor-pointer">
            <a href="/">Go Home</a>
          </MenubarItem>

          <MenubarItem>Contact Me</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>CV | Resume</MenubarTrigger>
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
          <MenubarItem>View</MenubarItem>
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
        <MenubarTrigger>Projects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Coming Soon</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Art</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Coming Soon</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Blog</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Coming Soon</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
