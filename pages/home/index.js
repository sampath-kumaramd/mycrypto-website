import React from "react";
import Image from "next/image";

import HeroHeader from "../../components/Hero/Header";
import HeroFooter from "../../components/Hero/Footer";
import HeroProfile from "../../components/Hero/Profile";
import HeroMarketplace from "../../components/Hero/Marketplace"
import bg from "../../public/bg.png";

export default function HomePage() {
  return (
    < >
      <div
        style={{
          backgroundImage: `url(/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '400vh',
        }}
        className=' relative'
      >
        <HeroHeader />
        <HeroProfile />
        <HeroMarketplace />
        <HeroFooter />
      </div>
    </>
  );
}
