import { FC } from "react";
import Image from "next/image";
import { CardTitle, CardDescription } from "./ui/card";
import { Education, education } from "../lib/consts";
import { cn } from "../lib/utils";

interface EducationCardsProps {}

const EducationCards: FC<EducationCardsProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-2 place-items-center">
      {education.map((item: Education, index) => {
        const opacityClass = index === 0 ? "opacity-100" : "opacity-75";
        let borderClass = "border-2";
        let textClass = "text-black";
        let backgroundClass = "";
        if (item.appreviation === "SIU") {
          borderClass = `border-2 border-siuPrimary`;
          textClass = `text-siuPrimary dark:text-black font-mono`;
        }
        if (item.appreviation === "MCC") {
          borderClass = `border-2 dark:border-mccPrimary border-mccSecondary`;
          textClass = `dark:text-mccSecondary text-mccPrimary font-mono`;
        }

        return (
          <div
            key={item.name}
            className={cn(
              "rounded-xl w-full max-h-40 max-w-md overflow-hidden relative h-full animate-gradient bg-gradient-to-br dark:from-gray-700 via-background dark:via-background dark:to-slate-700 from-gray-200 to-slate-300",
              opacityClass,
              borderClass,
              backgroundClass
            )}
          >
            {item.logo && (
              <Image
                src={item.logo}
                alt={item.name}
                width={400}
                height={400}
                className={cn(
                  "object-cover transition-all hover:scale-105 w-full h-full opacity-20"
                )}
              />
            )}
            <div className="absolute inset-0 z-10 p-1">
              <CardTitle className={cn("font-bold", textClass)}>
                {item.name}
              </CardTitle>
              <div className="z-10 mt-2 text-black dark:text-white hidden sm:block ">
                <h4 className="text-lg font-mono">{item.degree}</h4>
                {item.minor && (
                  <div className="text-xs text-black dark:text-white md:block hidden">
                    <span className="text-primary mr-1">
                      {Array.isArray(item.minor) ? "Minors" : "Minor:"}
                    </span>
                    {Array.isArray(item.minor)
                      ? item.minor.map((minor, index) => {
                          if (item.minor)
                            return index === item.minor.length - 1
                              ? `${minor}`
                              : `${minor}, `;
                        })
                      : item.minor}
                  </div>
                )}
                {item.courses && (
                  <div className="text-xs text-black dark:text-white md:block hidden">
                    <span className="text-primary mr-1">Courses:</span>
                    {item.courses.map((course, index) => {
                      if (item.courses) {
                        return index === item.courses.length - 1
                          ? `${course}`
                          : `${course}, `;
                      }
                    })}
                  </div>
                )}
              </div>
              <p className="z-10 mt-2 text-xs text-black dark:text-white">
                <span className="text-primary mr-1">Dates:</span>
                {item.dateStart} - {item.dateEnd}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationCards;
