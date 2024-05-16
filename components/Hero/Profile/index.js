import React, { useState } from "react";
import Image from "next/image";

import profileBanner from "../../../public/hero-profile/profileBanner.png";
import bullet from "../../../public/hero-profile/bullet.svg";
import correctIcon from "../../../public/hero-profile/correctIcon.svg";

import logoFundo from "../../../public/hero-profile/logoFundo.png";

export default function index() {
  const uniqueItems = 255;
  const totalItems = 31.9;
  const createdMOnthe = "Oct";
  const createdYear = "2023";
  const creatorEarning = 1;
  const chain = "Poligon";

  const totalVolume = 359811;
  const floorPrice = 1.2839;
  const bestOffer = 1.2452;
  const listedValue = 3;
  const ownersCount = 33927;
  const uniqueOwnersPercentage = 34;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full relative">
      <Image
        src={profileBanner}
        alt="Background image"
        width="1950"
        height="450"
        className="absolute z-10"
      />
      <div className=" flex-wrap max-w-screen-2xl mx-auto relative -mt-36 z-20 mb-3">
        <Image
          src={logoFundo}
          alt="Logo image"
          width={200}
          height={200}
        />
      </div>

      <div className=" flex-wrap max-w-screen-2xl mx-auto">
        <div className="text-3xl font-medium italic text-white py-2">
          My Crypto Soccer Team NFT
          <span>
            <Image
              src={correctIcon}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
          </span>
        </div>
        <div className="flex flex-col space-y-3 text-lg text-white mx-6">
          <div className="flex gap-1">
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
            <div>Nfts of your favourite Team</div>
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
          </div>
          <div className="flex gap-1">
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
            <div>Our Dao will Buy a Soccer Team</div>
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
          </div>
          <div className="flex gap-1">
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
            <div>Nfts do seu time favourite</div>
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
          </div>
          <div className="flex gap-1">
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
            <div>Nosa Dao vai Comprar um time de futebol</div>
            <Image
              src={bullet}
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
          </div>
        </div>
        <div className="p-3 mx-8">
          <button
            className=" text-white font-bold py-1 px-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "See less" : "See more"}
          </button>

          {isExpanded && (
            <p className="my-4 text-white font-light -mx-4">
              <span> Unique items {uniqueItems} . </span>
              <span> Total items {totalItems}k . </span>
              <span>
                {" "}
                Created {createdMOnthe} {createdYear} .{" "}
              </span>
              <br />
              <span> Creator Earnings {creatorEarning}% . </span>
              <span> Chain {chain}.</span>
            </p>
          )}
        </div>
        <div className="flex space-x-16 text-white">
          <div>
            <div className="font-bold text-2xl">{totalVolume} ETH</div>
            <div className="text-lg">total volume</div>
          </div>
          <div>
            <div className="font-bold text-2xl">{floorPrice} ETH</div>
            <div className="text-lg">floor price</div>
          </div>
          <div>
            <div className="font-bold text-2xl">{bestOffer} WETH</div>
            <div className="text-lg">best offer</div>
          </div>
          <div>
            <div className="font-bold text-2xl">{listedValue} %</div>
            <div className="text-lg">listed</div>
          </div>
          <div>
            <div className="font-bold text-2xl">{ownersCount}</div>
            <div className="text-lg">owners</div>
          </div>
          <div>
            <div className="font-bold text-2xl">{uniqueOwnersPercentage} %</div>
            <div className="text-lg">unique owners</div>
          </div>
        </div>
      </div>
    </div>
  );
}
