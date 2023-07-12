import { Separator } from "@/components/ui/separator";
import { Projects } from "@/components/project";
import About from "@/components/about";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Education, education } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CVPage() {
  return (
    <div className="p-3 md:p-16 items-center text-center flex-1 justify-between xl:self-center xl:w-3/4">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          {education.map((item: Education, index) => {
            const opacityClass = index === 0 ? "opacity-100" : "opacity-75";
            let borderClass = "border-2";
            let textClass = "text-black";
            let backgroundClass = "";
            if (item.appreviation === "SIU") {
              borderClass = `border-2 border-siuPrimary`;
              textClass = `text-siuPrimary`;
              //backgroundClass = `bg-siuPrimary`;
            }
            if (item.appreviation === "MCC") {
              borderClass = `border-2 dark:border-mccPrimary border-mccPrimary`;
              textClass = `dark:text-mccSecondary text-mccPrimary`;
              //backgroundClass = `bg-mccPrimary`;
            }

            return (
              <div
                key={item.name}
                className={cn(
                  "rounded-xl md:w-1/2 overflow-hidden relative w-5/6 h-full animate-gradient bg-gradient-to-br dark:from-gray-700 via-background dark:via-background dark:to-slate-700 from-gray-200 to-slate-300",
                  opacityClass,
                  borderClass,
                  backgroundClass
                )}
              >
                <CardTitle
                  className={cn("z-10 absolute inset-x-0 top-3", textClass)}
                >
                  {item.name}
                </CardTitle>
                <CardDescription className="z-10 mt-2 text-black dark:text-white absolute top-0 inset-y-12 md:inset-y-16 inset-x-0 ">
                  {item.degree}
                </CardDescription>

                <p className="z-10 mt-2 text-xs text-black dark:text-white absolute bottom-0 inset-x-0">
                  {item.dateStart} - {item.dateEnd}
                </p>

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
              </div>
            );
          })}
        </div>
      </section>

      <section>Employment History</section>
    </div>
  );
}
