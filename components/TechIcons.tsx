import { Tech, TechList } from "@/lib/consts";
import { FC } from "react";
import Image from "next/image";
import { cn, randomDelay } from "@/lib/utils";

interface TechIconsProps {
  list: string[];
}

const TechIcons: FC<TechIconsProps> = ({ list }) => {
  return (
    <div className="flex flex-row gap-1 flex-wrap justify-center items-center w-full p-2">
      {list.map((tech) => {
        const stackItem = TechList.find((item) => item.name === tech);
        const delay = randomDelay();
        if (!stackItem) return null;
        return (
          <Image
            src={stackItem.icon}
            alt={stackItem.name}
            width={20}
            height={20}
            className={cn("animate-bounce", delay)}
            key={stackItem.name}
          />
        );
      })}
    </div>
  );
};

export default TechIcons;
