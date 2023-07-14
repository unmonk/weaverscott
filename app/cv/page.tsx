import EducationCards from "@/components/EducationCards";
import Resume from "@/components/Resume";
import DownloadPDFButton from "@/components/ui/DownloadPDFButton";
import { educationParagraphs } from "@/lib/consts";

export default function CVPage() {
  return (
    <div className="w-full flex-1  items-center text-center justify-between xl:self-center xl:w-3/4">
      <DownloadPDFButton />
      <Resume />
    </div>
  );
}
