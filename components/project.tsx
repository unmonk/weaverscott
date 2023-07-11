import { FC } from "react";
import Image from "next/image";

interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  return (
    <div className="w-[150px] space-y-3">
      <div className="overflow-hidden rounded-md">
        <Image
          src={"/yoshi.png"}
          alt={"Yoshi"}
          width={250}
          height={330}
          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">Project Name</h3>
        <p className="text-xs text-muted-foreground">Description</p>
      </div>
    </div>
  );
};

export default Project;
