import EducationCards from "@/components/EducationCards";
import DownloadPDFButton from "@/components/ui/DownloadPDFButton";
import { Button } from "@/components/ui/button";
import { educationParagraphs } from "@/lib/consts";
import { DownloadIcon } from "lucide-react";

export default function CVPage() {
  return (
    <div className="w-full flex-1  items-center text-center justify-between xl:self-center xl:w-3/4">
      <div>
        <DownloadPDFButton />
      </div>
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
      <section className="mb-2 p-3 md:p-16 ">
        <div className="grid grid-cols-2">
          <EducationCards />
          <div>
            <h3 className="text-lg font-semibold mb-2">Employment</h3>
            {educationParagraphs &&
              educationParagraphs.map((paragraph) => {
                return (
                  <p className="text-left mb-4" key={paragraph}>
                    {paragraph}
                  </p>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
