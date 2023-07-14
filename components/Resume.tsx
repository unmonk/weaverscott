"use client";
import { FC } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BeautifulEducation from "./BeautifulEducation";
import TraditionalResume from "./TraditionalResume";
import { employers } from "@/lib/consts";

interface ResumeProps {}

const Resume: FC<ResumeProps> = ({}) => {
  return (
    <div className="flex justify-center p-4">
      <Tabs defaultValue={"beautiful"} className="h-full space-y-6">
        <div className="space-between flex items-center w-full justify-center">
          <TabsList className="rounded-xl">
            <TabsTrigger value={"beautiful"} className="rounded-xl">
              Beautiful
            </TabsTrigger>
            <TabsTrigger value={"traditional"} className="rounded-xl">
              Traditional
            </TabsTrigger>
            <TabsTrigger value={"json"} className="rounded-xl">
              JSON
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value={"beautiful"}>
          <BeautifulEducation />
        </TabsContent>
        <TabsContent value={"traditional"}>
          <TraditionalResume />
        </TabsContent>
        <TabsContent value={"json"}>
          <div className="bg-secondary">
            <code>{JSON.stringify({ employers }, null, 2)}</code>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resume;
