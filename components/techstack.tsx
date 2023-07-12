import Image from "next/image";
import { FC } from "react";
import { TechList } from "@/lib/consts";

interface TechstackProps {
  stack: string[];
}

const Techstack: FC<TechstackProps> = ({ stack }) => {
  return (
    <>
      {stack.map((tech) => {
        const stackItem = TechList.find((item) => item.name === tech);
        if (!stackItem) return null;
        return (
          <div
            className="border border-slate-300  rounded-xl hover:border-slate-400"
            key={stackItem.name}
          >
            <div className="flex flex-row items-center justify-between px-3 py-1">
              <Image
                src={stackItem.icon}
                alt={stackItem.name}
                width={40}
                height={40}
                className=""
              />
              <p className="ml-2 text-lg">{stackItem.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Techstack;
