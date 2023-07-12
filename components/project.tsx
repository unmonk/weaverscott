import { FC } from "react";
import { projects, Project } from "@/lib/consts";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import TechIcons from "./TechIcons";

interface ProjectProps {
  project: Project;
}

const Project: FC<ProjectProps> = ({
  project: { name, description, techStack, demo, repo, external },
}) => {
  return (
    <div className="border rounded-xl col-span-1 flex flex-col">
      <div className="w-full h-16 overflow-ellipsis p-2">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="flex flex-1">
        <p className="text-sm text-start text-muted-foreground p-2">
          {description}
        </p>
      </div>
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
