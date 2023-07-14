import { Employer } from "@/lib/consts";
import { FC } from "react";

interface ExperienceRowProps {
  employer: Employer;
}

const ExperienceRow: FC<ExperienceRowProps> = ({ employer }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <div>
          <span className="font-semibold">{employer.title} </span>|{" "}
          <span className="font-semibold">{employer.name}</span> |{" "}
          <small>Remote</small>
        </div>
        <span>
          {employer.dateStart} - {employer.dateEnd}
        </span>
      </div>
      <ul className="list-disc list-inside text-sm pl-1">
        {employer.experience &&
          employer.experience.map((experience, i) => {
            return <li key={i}>{experience}</li>;
          })}
      </ul>
    </div>
  );
};

export default ExperienceRow;
