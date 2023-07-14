import { FC } from "react";
import { educationParagraphs } from "@/lib/consts";
import EducationCards from "./EducationCards";

interface BeautifulEducationProps {}

const BeautifulEducation: FC<BeautifulEducationProps> = ({}) => {
  return (
    <section className="mb-2 p-3 md:p-16 ">
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          {educationParagraphs &&
            educationParagraphs.map((paragraph) => {
              return (
                <p className="text-left mb-4" key={paragraph}>
                  {paragraph}
                </p>
              );
            })}
        </div>
        <EducationCards />
      </div>
    </section>
  );
};

export default BeautifulEducation;
