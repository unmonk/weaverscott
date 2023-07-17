import { FC } from "react";
import { employers, Employer } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface EmploymentCardsProps {}

const EmploymentCards: FC<EmploymentCardsProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {employers.map((item: Employer, index) => {
        if (item.name === "Available") return null;
        const opacityClass = index === 0 ? "opacity-100" : "opacity-75";
        let borderClass = "border-2";
        let textClass = "text-black";
        let backgroundClass = item.logo ? "absolute inset-0 z-10 p-3" : "p-3";

        return (
          <div
            key={item.name}
            className={cn(
              "relative overflow-hidden max-h-[300px] col-span-1 rounded-xl w-full h-full animate-gradient bg-gradient-to-br dark:from-gray-700 via-background dark:via-background dark:to-slate-700 from-gray-200 to-slate-300",
              opacityClass,
              borderClass
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
            <div className={backgroundClass}>
              <h2 className="text-xl font-bold text-left">{item.name}</h2>
              <h3 className="text-lg font-semibold text-left">{item.title}</h3>
              <h4 className="text-sm text-left">
                {item.dateStart} - {item.dateEnd}
              </h4>
              <div className="p-2">
                <div className="text-md font-semibold mb-2 text-left">
                  <ul className="list-inside">
                    {item.experience &&
                      item.experience.map((experience) => {
                        return (
                          <li
                            className="text-left list-disc text-xs mb-4"
                            key={experience}
                          >
                            {experience}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmploymentCards;
