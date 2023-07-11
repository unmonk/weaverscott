import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import Project from "@/components/project";
import About from "@/components/about";
import Socials from "@/components/socials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="p-16 items-center text-center flex-1 justify-between">
      <section className="mb-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Avatar className="h-24 w-24 mr-2">
            <AvatarImage src="/me.jpg" alt="Scott Weaver" s />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-6xl font-bold">Scott Weaver</h1>
            <p className="text-2xl">Software Engineer</p>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <Socials />
      </section>
      <Separator className="my-4" />
      <section>
        <div className="relative"></div>
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}

{
  /* <ScrollArea>
  <div className="flex space-x-4 pb-4">
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>; */
}
