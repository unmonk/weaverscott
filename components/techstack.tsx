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
      {stack.map((tech) => (
        <div
          className="border rounded-xl flex flex-row items-center justify-center"
          key={tech.name}
        >
          <Image src={tech.icon} alt={tech.name} width={50} height={50} />
          <span className="ml-2">{tech.name}</span>
        </div>
      ))}
    </>
  );
};

export default Techstack;
