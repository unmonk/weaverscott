import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface TechstackProps {
  stack: {
    name: string;
    icon: string;
    color: string;
  }[];
}

const Techstack: FC<TechstackProps> = ({ stack }) => {
  return (
    <>
      {stack.map((tech) => {
        return (
          <div className="border rounded-xl" key={tech.name}>
            <div className="flex flex-row items-center justify-between px-3 py-1">
              <Image src={tech.icon} alt={tech.name} width={40} height={40} />
              <p className="ml-2 text-lg">{tech.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Techstack;
