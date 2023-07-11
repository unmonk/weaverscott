import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Socials from "@/components/socials";
import { randomTitle } from "@/lib/utils";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
      <section className="mb-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Avatar className="h-24 w-24 mr-2">
            <AvatarImage src="/me.jpg" alt="Scott Weaver" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-6xl font-bold">Scott Weaver</h1>
            <p className="text-2xl">{randomTitle()}</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <Socials />
      </section>
    </>
  );
};

export default Header;
