import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Socials from "@/components/socials";
import { randomTitle } from "@/lib/utils";
import { profile } from "@/lib/consts";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="mb-6">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <Avatar className="h-24 w-24 mr-2 ">
          <AvatarImage src={profile.image} alt={profile.name} />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>

        <h1 className="text-4xl md:text-6xl font-bold">{profile.name}</h1>
      </div>
    </section>
  );
};

export default Header;
