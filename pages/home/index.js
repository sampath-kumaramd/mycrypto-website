import React from "react";
import Image from "next/image";

import HeroHeader from "../../components/Hero/Header";
import HeroFooter from "../../components/Hero/Footer";
import HeroProfile from "../../components/Hero/Profile";
import HeroMarketplace from "../../components/Hero/Marketplace"
import bg from "../../public/bg.png";

export default function HomePage() {
  return (
    <div className="flex flex-col relative">
      <Image
        src={bg}
        alt="Picture of the author"
        width="1950"
        height="3200"
        className="absolute"
      />
      <div className="absolute z-20">
        <HeroHeader />
        <HeroProfile />
        <HeroMarketplace />
        <HeroFooter />
      </div>
    </div>
  );
}
