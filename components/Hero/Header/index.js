import React from "react";
import Image from "next/image";

import nameLogo from "../../../public/hero-footer/nameLogo.svg";
import logo from "../../../public/hero-footer/logo.svg";
import search from "../../../public/hero-header/search.svg"

export default function index() {
  return (
    <div className="flex flex-wrap max-w-screen-2xl mx-auto justify-between items-center py-4">
      <div className="flex gap-5">
        <Image src='/logo-fundo-branco.svg' alt="Picture of the author" width="70" height="30" />
        <Image
          src={nameLogo}
          alt="Picture of the author"
          width="120"
          height="40"
        />
      </div>
      <div className="w-64 border-2 border-sky-400 rounded-xl pl-4 items-center flex">
      <Image
          src={search}
          alt="Picture of the author"
          width="20"
          height="20"
        />
        <input
          className="w-auto px-4 py-2 bg-transparent"
        />

      </div>
      <div className="space-x-5 font-bold text-white italic text-xl">
        <span>Featured NFTs</span>
        <span>Latest Drops</span>
        <span>Top Collections</span>
      </div>
      <div className="transform -skew-x-12 rounded-xl bg-sky-400 h-16 w-40 text-xl italic text-center font-bold items-center flex justify-center">
        Conect Wallet
      </div>
    </div>
  );
}
