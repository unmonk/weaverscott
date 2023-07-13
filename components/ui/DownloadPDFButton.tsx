"use client";
import { FC, useState } from "react";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadPDFButtonProps {}

const DownloadPDFButton: FC<DownloadPDFButtonProps> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      asChild
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="/ScottWeaverResume.pdf"
        className="rounded-xl relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600  shadow-2xl group"
      >
        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-primary rounded-full blur-md ease"></span>
        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-slate-300 rounded-full blur-md"></span>
          <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-slate-500 rounded-full blur-md"></span>
        </span>
        <span className="relative flex flex-row items-center text-center text-black font-bold">
          <DownloadIcon
            size={15}
            className={`${isHovered ? "animate-tada" : ""} mr-1`}
          />
          Download PDF
        </span>
      </a>
    </Button>
  );
};

export default DownloadPDFButton;
