import { Separator } from "@/components/ui/separator";
import { Projects } from "@/components/project";
import About from "@/components/about";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="p-16 items-center text-center flex-1 justify-between xl:self-center xl:w-3/4">
      <Header />
      <section>
        <About />
      </section>
      <Separator className="my-6" />
      <section>
        <h2 className="text-4xl font-bold p-2 mb-4">Featured Projects</h2>
        <Projects />
      </section>
    </div>
  );
}
