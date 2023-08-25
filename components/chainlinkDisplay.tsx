import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export async function ChainLinkDisplay() {
  return (
    <div className="border-black/10 border bg-accent flex flex-col lg:flex-row rounded-xl p-4 lg:h-96 hover:border-white/20 overflow-hidden">
      <div className="flex flex-col lg:w-1/2 gap-4 p-2">
        <Image
          src="/images/chainlink.svg"
          width={100}
          height={100}
          alt="ChainLink"
          className="rounded-xl dark:bg-black/30 bg-black/80 h-24 w-24"
        />
        <h3 className="text-2xl font-semibold text-left">ChainLink</h3>
        <p className="text-left">
          Pick the winner on matchups drawn from different sports and events
          from around the world, including NFL, MLB, NBA, and College Football
        </p>
        <div className="flex flex-col lg:flex-row justify-around gap-4 py-6">
          <Button asChild>
            <Link href="https://chainlink.st" target="_blank">
              Play Now ⚾
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://github.com/unmonk/chainlink" target="_blank">
              <Image
                src="/icons/github-original.svg"
                width={20}
                height={20}
                alt="Github"
                className="mr-2"
              />
              Repo
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <div className="relative mx-auto border-black/90 dark:border-black/90 bg-gray-500 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] rotate-6">
          <div className="h-[32px] w-[3px] bg-black/70 dark:bg-black/70 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-black/70 dark:bg-black/70 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-black/70 dark:bg-black/70 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-black/70 dark:bg-black/70 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-black/90">
            <Image
              src="/images/chainlink.png"
              height={572}
              width={272}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
