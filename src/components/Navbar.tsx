"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    // <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
    <div className="bg-red-400 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
        <Link href="/" className="flex items-center font-display text-2xl">
          {/* <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image> */}
          <p>VibeSquad</p>
        </Link>
        <div>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            {session && (
              <>
                {" "}
                <li>
                  <button
                    onClick={() => signOut()}
                    className="rounded-md border border-white bg-transparent p-1.5 px-8 text-sm text-white transition-all hover:bg-white hover:text-black"
                  >
                    Logout
                  </button>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src={"/logo-VS.png"}
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Link
                    href="/home/profile"
                    className="text-blue-600 hover:underline"
                  >
                    {session.user?.name || "Profile"}
                  </Link>
                </li>
              </>
            )}
            {!session && (
              <>
                  <button  onClick={() => signIn()} className="rounded-md border border-white bg-transparent p-1.5 px-8 text-sm text-white transition-all hover:bg-white hover:text-black">
                    Log In
                  </button>{" "}
                &ensp;
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
