import { FC } from "react";
import { GithubIcon, LinkedinIcon, DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialsProps {}

const Socials: FC<SocialsProps> = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Button variant="outline" className="rounded-xl p-1" asChild>
        <a
          href="https://github.com/unmonk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="mr-2 h-10 w-10" />
          <span className="text-lg">Github</span>
        </a>
      </Button>

      <Button variant="outline" className="rounded-xl  p-1" asChild>
        <a
          href="https://linkedin.com/in/scottweaverdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="mr-2 h-10 w-10" />
          <span className="text-lg">LinkedIn</span>
        </a>
      </Button>

      <Button variant="outline" className="rounded-xl  p-1" asChild>
        <a href="/ScottWeaverResume.pdf" download>
          <DownloadIcon className="mr-2 h-10 w-10" />
          <span className="text-lg">Resume</span>
        </a>
      </Button>
    </div>
  );
};

export default Socials;
