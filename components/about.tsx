import { FC } from "react";
import { aboutMeParagraphs, TechList } from "@/lib/consts";
import Image from "next/image";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <section className="flex flex-col max-w-4xl">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <div className=" rounded-xl border-primary relative">
        <div className="bg-gradient-to-tr from-gray-300 via-background to-gray-400 w-full h-full rounded-xl blur-xl hover:blur-2xl hover:opacity-30 opacity-20 absolute"></div>
        {/* About me area */}
        {aboutMeParagraphs.map((paragraph) => (
          <p className="text-left p-4 md:text-lg" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
