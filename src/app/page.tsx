import Campaigns from "@components/landing/campaigns";
import CTA from "@components/landing/cta";
import { EarlyBird } from "@components/landing/earlybird";
import Header from "@components/landing/header";
import Partners from "@components/landing/partners";
import React from "react";

export default async function Home() {
  return (
    <>
      <Header />
      <Partners />
      <EarlyBird />
      <Campaigns />
      <CTA />
    </>
  );
}
