"use client";

import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { HandMetal } from 'lucide-react';
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import React from 'react';

export default function NavBar({ session }: { session: Session | null }) {
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      {/* <div className='container flex items-center justify-between'>
        <Link href='/'>
          <HandMetal />
        </Link>
        <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
      </div> */}

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
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <>
                <Link href="/sign-in">
                  <button className="rounded-md border border-white bg-transparent p-1.5 px-8 text-sm text-white transition-all hover:bg-white hover:text-black">
                    Log In
                  </button>{" "}
                </Link>
                &ensp;
                {/* <Link href="/sign-up">
                  <button className="rounded-md border border-white bg-white p-1.5 px-8 text-sm text-black transition-all hover:bg-white hover:text-black">
                    Sign Up
                  </button>
                </Link> */}
              </>
            )}
          </div>
        </div>
    </div>
  );
};