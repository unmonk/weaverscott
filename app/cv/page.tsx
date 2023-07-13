import EducationCards from "@/components/EducationCards";
import { educationParagraphs } from "@/lib/consts";

export default function CVPage() {
  return (
    <div className="p-3 md:p-16 items-center text-center flex-1 justify-between xl:self-center xl:w-3/4">
      <section className="mb-2">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Education Details</h3>
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
      <section>Employment History</section>
    </div>
  );
}
