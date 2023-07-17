import { FC } from "react";
import { TechList, aboutMeParagraphs, employers } from "@/lib/consts";
import ExperienceRow from "@/components/ExperienceRow";

interface TraditionalResumeProps {}

const TraditionalResume: FC<TraditionalResumeProps> = ({}) => {
  return (
    <div className="md:min-h-[11in] max-w-[9in] md:p-4 p-2 bg-white text-black text-left font-sans">
      <h1 className="text-xl font-bold">Scott Weaver</h1>
      <h2 className="text-lg font-bold">Lead Software Engineer</h2>
      <small>WeaverScott.com | Scott@WeaverScott.com | Illinois, USA</small>
      <h3 className="text-lg font-bold py-2">Technical Skills</h3>
      <ul className="list-none flex flex-row flex-wrap">
        {TechList.map((tech, i) => (
          <li className="mx-0.5 text-xs" key={tech.name}>
            {tech.name}
            {i !== TechList.length - 1 ? "," : ""}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold py-2">Summary</h3>
      <p className="text-base">
        {aboutMeParagraphs.map((paragraph, i) => {
          return (
            <span key={i}>
              {paragraph} <br />
            </span>
          );
        })}
      </p>
      <h3 className="text-lg font-bold py-2">Experience</h3>
      <div className="flex flex-col">
        {employers.map((employer, i) => {
          if (employer.name === "Available") return null;
          return <ExperienceRow key={i} employer={employer} />;
        })}
      </div>
    </div>
  );
};

export default TraditionalResume;
