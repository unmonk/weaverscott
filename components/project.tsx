import { FC } from "react";
import { projects, Project } from "@/lib/consts";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import TechIcons from "./TechIcons";
import Image from "next/image";

interface ProjectProps {
  project: Project;
}

const Project: FC<ProjectProps> = ({
  project: {
    name,
    description,
    techStack,
    demo,
    repo,
    external,
    live,
    library,
    command,
  },
}) => {
  return (
    <div className="border w-full min-w-[250px] hover:border-slate-400 border-slate-300  rounded-xl col-span-1 flex flex-col">
      <div className="w-full h-16 overflow-ellipsis p-2">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-sm text-start text-muted-foreground p-2">
          {description}
        </p>
      </div>
      {live && (
        <div className="flex flex-row items-center justify-center py-1 animate-pulse">
          <div className="rounded-full w-3 h-3 overflow-hidden bg-green-500"></div>
          <p className="text-muted text-xs ml-1">Active Development</p>
        </div>
      )}
      {library && command && (
        <code className="text-xs bg-gray-500 p-2 m-2 text-primary border rounded">
          {command}
        </code>
      )}
      <div className="flex flex-col md:flex-row gap-2 py-1 justify-evenly">
        {demo && (
          <Button variant="outline" size="sm" className="rounded-xl" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon size={15} className="mr-1 md:block hidden" />
              <b>Demo</b>
            </a>
          </Button>
        )}
        {external && (
          <Button variant="outline" size="sm" className="rounded-xl" asChild>
            <a href={external} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon size={15} className="mr-1 md:block hidden" />
              <b>Link</b>
            </a>
          </Button>
        )}
        {repo && (
          <Button variant="outline" size="sm" className="rounded-xl" asChild>
            <a href={repo} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={15} className="mr-1 md:block hidden" />
              <b>Repo</b>
            </a>
          </Button>
        )}
      </div>
      <div>
        <TechIcons list={techStack} />
      </div>
    </div>
  );
};

const Projects: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {projects.map((project) => {
        return <Project project={project} key={project.name} />;
      })}
    </div>
  );
};

export { Project, Projects };
