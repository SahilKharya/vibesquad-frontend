import React from "react";
import { Spotlight } from "@components/ui/Spotlight";

export function EarlyBird() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-red-400/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50">
          VibeSquad <br /> is your new home.
        </h1>
        <p className="mt-4 font-normal text-base text-slate-200 max-w-lg text-center mx-auto">
          Use your influence to earn and distribute rewards to your followers. Be part of exclusive events, invite-only product offerings and more.
        </p>
      </div>
    </div>
  );
}
