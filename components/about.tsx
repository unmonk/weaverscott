import { FC } from "react";
import Techstack from "./techstack";
import { techStack, aboutMeParagraphs } from "@/lib/consts";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        <h2 className="hidden md:block md:order-1 col-span-1 text-xl  font-semibold">
          Preferred Tech
        </h2>
        <h2 className="order-1 md:order-2 col-span-3 text-xl font-semibold">
          About Me
        </h2>
        <div className="order-4 hidden md:flex md:order-3 col-span-1  flex-col gap-2">
          {/* Tech Stack List */}
          <Techstack stack={techStack} />
        </div>
        <div className="order-2 md:order-4 border rounded-xl col-span-3">
          {/* About me area */}
          {aboutMeParagraphs.map((paragraph) => (
            <p className="text-left p-4" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
