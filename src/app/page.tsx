import React from "react";
// import { Github, Twitter } from "@/components/shared/icons";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-full">
        <h1
          className="opacity-0 animate-fade-in bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-center font-display text-5xl font-bold tracking-tight text-transparent drop-shadow-lg md:text-6xl md:leading-tight"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Elevate Your Influence.
        </h1>
        <p className="mt-4 text-center text-lg text-white md:text-xl">
          Join us to enhance your social presence and connect with like-minded
          individuals.
        </p>
        <div className="mt-8 flex space-x-4"></div>
        <div className="mt-12">
          <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
