"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@components/ui/images-slider";

export default function CTA() {
  const images = [
    "/influencer/if-1.jpg",
    "/influencer/if-2.jpg",
    "/influencer/if-3.jpg",
    "/influencer/if-4.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-pink-50 to-pink-400 py-4">
          Own Your Influence.<br />
          Enjoy the benegits you deserve.
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-red-400 border-pink-500 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
