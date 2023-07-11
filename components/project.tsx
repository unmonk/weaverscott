import { FC } from "react";
import Image from "next/image";
import { Card, CardHeader, CardFooter, CardTitle } from "./ui/card";
import { projects } from "@/lib/consts";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectProps {
  project: {
    name: string;
    description: string;
    link: string;
  };
}

const Project: FC<ProjectProps> = ({
  project: { name, description, link },
}) => {
  return (
    <Card className="rounded-xl col-span-1">
      <CardHeader>
        <CardTitle>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3>{name}</h3>
          </a>
        </CardTitle>

        <p className="text-sm text-start text-muted-foreground">
          {description}
        </p>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-row gap-1 flex-wrap align-middle items-center">
          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            }
            alt={"test"}
            width={20}
            height={20}
            className="animate-bounce delay-100"
          />

          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            }
            alt={"test"}
            width={20}
            height={20}
            className="animate-bounce delay-200"
          />

          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            }
            alt={"test"}
            width={20}
            height={20}
            className="animate-bounce delay-300"
          />

          <Image
            src={
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            }
            alt={"test"}
            width={20}
            height={20}
            className="animate-bounce delay-400"
          />
        </div>
      </CardFooter>
    </Card>
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
