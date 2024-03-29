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
        <div>
          <div className="h-28 w-28 absolute rounded-full bg-gradient-radial from-emerald-300 via-emerald-900 to-background blur-lg opacity-75 animate-gradient" />
          <Avatar className="h-24 w-24 mr-2 inset-0">
            <AvatarImage src={profile.image} alt={profile.name} />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold">{profile.name}</h1>
      </div>
    </section>
  );
};

export default Header;
