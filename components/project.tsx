import { FC } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { projects, TechList } from "@/lib/consts";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    link: string;
    techStack: string[];
  };
}

const Project: FC<ProjectProps> = ({
  project: { name, description, link, techStack },
}) => {
  return (
    <div className="border rounded-xl col-span-1 flex flex-col">
      <div className="w-full h-8 overflow-ellipsis p-2">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="flex flex-1">
        <p className="text-sm text-start text-muted-foreground p-2">
          {description}
        </p>
      </div>
      <div>
        <div className="flex flex-row gap-1 flex-wrap justify-center items-center w-full p-2">
          {techStack.map((tech, index) => {
            const stackItem = TechList.find((item) => item.name === tech);
            const delay = `delay-${index * 100}`;
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
      </div>
    </div>
    // <Card className="rounded-xl col-span-1">
    //   <CardHeader>
    //     <CardTitle>
    //       <a href={link} target="_blank" rel="noopener noreferrer">
    //         <h3>{name}</h3>
    //       </a>
    //     </CardTitle>
    //   </CardHeader>
    //   <CardContent className="p-2">
    //     <p className="text-sm text-start text-muted-foreground">
    //       {description}
    //     </p>
    //   </CardContent>
    //   <CardFooter>

    //   </CardFooter>
    // </Card>
  );
};

const Projects: FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {projects.map((project) => {
        return <Project project={project} key={project.name} />;
      })}
    </div>
  );
};

export { Project, Projects };
