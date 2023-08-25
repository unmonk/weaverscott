import Image from "next/image";
import { FC } from "react";
import { TechList } from "@/lib/consts";
const FavoriteTech = [
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Javascript",
  "React",
  "PlanetScale",
  "Redis",
];
interface TechstackProps {
  stack: string[];
}

const Techstack: FC<TechstackProps> = ({ stack }) => {
  return (
    <>
      <div className="grid  grid-cols-2 lg:grid-cols-2 grid-rows-3 grid-flow-col gap-6">
        {stack.map((tech) => {
          const stackItem = TechList.find((item) => item.name === tech);
          if (!stackItem) return null;
          return (
            <div
              className="border border-primary flex flex-row items-center justify-center gap-2 opacity-70 hover:opacity-100 hover:border-slate-400 -rotate-6 p-2 shadow-lg group"
              key={stackItem.name}
            >
              <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-sky-600 transition-all duration-800 group-hover:w-full"></span>
              <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-sky-500 transition-all duration-200 group-hover:h-full"></span>
              <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-sky-400 transition-all duration-1200 group-hover:w-full"></span>
              <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-sky-300 transition-all duration-200 group-hover:h-full"></span>
              <Image
                src={stackItem.icon}
                alt={stackItem.name}
                width={40}
                height={40}
                className="rotate-3 group-hover:animate-tada"
              />
              <p className="ml-2 text-lg rotate-3 group-hover:text-sky-500">
                {stackItem.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Techstack;
