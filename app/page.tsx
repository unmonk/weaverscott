"use client";
import About from "@/components/about";
import Header from "@/components/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChainLinkDisplay } from "@/components/chainlinkDisplay";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Testimonials from "@/components/testimonials";
import { testimonials } from "@/lib/consts";
import { useEffect, useState } from "react";

export default async function Home() {
  useEffect(() => {
    async function runOneSignal() {
      const OneSignal = (await import("react-onesignal")).default;
      OneSignal.Debug.setLogLevel("VERBOSE");

      await OneSignal.init({
        appId: "d193143b-872b-4f37-b713-06e2d5558f65",
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
          enable: true,
        },
      });
      OneSignal.Slidedown.promptPush();
      OneSignal.User.addTag("hello", "world");
      console.log(OneSignal.Notifications.isPushSupported());
    }
    runOneSignal();
  }, []);

  return (
    <div className="flex flex-col items-center text-center flex-1 xl:self-center xl:w-3/4 p-4 gap-6 mt-8">
      <Header />
      <section>
        <About />
      </section>

      <section className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 items-center gap-6 grid-flow-row-dense xl:w-3/4">
        <Testimonials testimonials={testimonials} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
        <div className="flex flex-col gap-6 max-w-2xl">
          <ChainLinkDisplay />
          <div className="flex flex-row justify-center gap-4">
            <div className="border-black/10 border bg-accent flex flex-col lg:flex-row rounded-xl p-4 lg:h-96 hover:border-white/20 overflow-hidden w-1/2 animate-fade-in">
              <div className="flex flex-col gap-4 p-2">
                <Image
                  src="/images/liberty.svg"
                  width={100}
                  height={100}
                  alt="Liberty Mutual"
                  className="rounded-xl w-24 h-24 dark:bg-black/30 bg-black/80"
                />
                <h3 className="text-2xl font-semibold text-left">RightTrack</h3>
                <p className="text-left text-xs flex-1 md:text-base">
                  RightTrack is a program that puts you in control of your auto
                  policy savings by evaluating your safe driving habits.
                </p>
                <div className="flex flex-col lg:flex-row justify-around gap-4 py-6">
                  <Button asChild>
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.lmig.pm.internet.mobile.android.libertymutual"
                      target="_blank"
                    >
                      <ExternalLinkIcon size={20} className="mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-black/10 border bg-accent flex flex-col lg:flex-row rounded-xl p-4 lg:h-96 hover:border-white/20 overflow-hidden w-1/2 animate-fade-in">
              <div className="flex flex-col gap-4 p-2">
                <Image
                  src="/images/olivelogo.webp"
                  width={100}
                  height={100}
                  alt="Wellforce Covid-19"
                  className="rounded-xl w-24 h-24 dark:bg-black/30 bg-black/80"
                />
                <h3 className="text-2xl font-semibold text-left">
                  Covid Testing
                </h3>
                <p className="text-left flex-1 text-xs md:text-base">
                  Built the systems for Tufts Medical Center (Wellforce) to
                  reduce testing time by 86%, and test 12% of all COVID tests in
                  the Boston area.
                </p>
                <div className="flex flex-col lg:flex-row justify-around gap-4 py-6">
                  <Button asChild>
                    <Link
                      href="https://hitinfrastructure.com/news/tufts-taps-olives-ai-centers-to-expand-covid-19-testing"
                      target="_blank"
                    >
                      <ExternalLinkIcon size={20} className="mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
