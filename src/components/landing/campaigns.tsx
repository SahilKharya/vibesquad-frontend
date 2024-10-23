"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@components/ui/apple-cards-carousel";

export default function Campaigns() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Let your social score unlock exclusive rewards from leading brands!!
      </h2>
      {/* <span className="max-w-7xl pl-4 mx-auto mt-8 text-xl text-neutral-800 dark:text-neutral-200 font-sans">Colab with legacy brands, attend VIP events, get custom merch for your followers, get early access to products (and much more)</span> */}
      <Carousel items={cards} />
    </div>
  );
}

const CampaignContent = ({campaignId, campaignDetails, minScore}: {campaignId: number, campaignDetails: string, minScore: number}) => {
  return (
      <div
      key={campaignId}
      className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
      >
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {campaignDetails}
      </p>
      <p className="my-4 text-2xl font-semibold text-neutral-700">
          Social Score: {minScore}+
      </p>
      </div>
  );
};

const data = [
  {
    campaignId: 1,
    category: "Promote",
    title: "Promote Gucci upcoming summer collection",
    src: "https://i.pinimg.com/736x/91/c7/56/91c7562686ab4df43d005afb7c4f8b6d.jpg",
    content: <CampaignContent campaignId={1} campaignDetails={"Promote the upcoming summer collection by Gucci and be part of the immortal fashion series."} minScore={2500} />,
  },
  {
    campaignId: 2,
    category: "Review",
    title: "Review New Cola Flavour",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/f3afc3134095169.61cdb0df875c5.jpg",
    content: <CampaignContent campaignId={2} campaignDetails={"Review the new Coca Cola Rasberry Flavour Soda."} minScore={500} />,
  },
  {
    campaignId: 3,
    category: "Launch",
    title: "Launching the new improved Chanel No. 5.",
    src: "https://lombardo.agency/wp-content/uploads/2023/03/8-Principles-of-Luxury-Marketing.jpg",
    content: <CampaignContent campaignId={3} campaignDetails={"Launch the new Chanel No. 5"} minScore={12000} />,
  },
  {
    campaignId: 4,
    category: "Review",
    title: "Try the new Air Mag",
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/97e8c9114560477.603dcde03ba92.png",
    content: <CampaignContent campaignId={4} campaignDetails={"Try and review new air mag and write a comprehensive review on blog and also make a 15s video on it."} minScore={5000} />,
  },
  {
    campaignId: 5,
    category: "Casting",
    title: "Star in the new LEO collection.",
    src: "https://img.freepik.com/free-photo/portrait-woman-representing-leo-zodiac-sign-with-real-lion_23-2151006288.jpg",
    content: <CampaignContent campaignId={5} campaignDetails={"Be part of the new LEO collection cast and show-off your fashion sense."} minScore={7500} />,
  },
  {
    campaignId: 6,
    category: "Promote",
    title: "Promote the new sensation",
    src: "https://blogarchive.goodillustration.com/wp-content/uploads/2022/02/640-1.jpg",
    content: <CampaignContent campaignId={6} campaignDetails={"Do you have what it takes to become the next sensation?"} minScore={5000} />,
  },
];
