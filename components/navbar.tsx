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

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <Menubar className="rounded-none border-b border-none">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Scott</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Go Home</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>CV | Resume</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Download (PDF)
            <MenubarShortcut>
              <DownloadIcon size={15} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>View</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Employers</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                Spot
                <MenubarShortcut>2023</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Olive
                <MenubarShortcut>2022</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Innovate Softworks
                <MenubarShortcut>2020</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Liberty Mutual
                <MenubarShortcut>2018</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Organizations</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                ACM
                <MenubarShortcut>President</MenubarShortcut>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Projects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Download (PDF)
            <MenubarShortcut>
              <DownloadIcon size={15} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>View</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Art</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Download (PDF)
            <MenubarShortcut>
              <DownloadIcon size={15} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>View</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
