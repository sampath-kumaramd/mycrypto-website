import React, { useState } from "react";
import Image from "next/image";

import Items from "./Items";

export default function index() {



  const [activeTab, setActiveTab] = useState("tab1");

  const content = {
    tab1: <Items/>,
    tab2: <div className="p-4 bg-white shadow rounded">Content for Tab 2</div>,
    tab3: <div className="p-4 bg-white shadow rounded">Content for Tab 3</div>,
  };

  return (
    <div>
      <div>
        <div className="w-full text-center text-6xl text-[#0ED4FA] font-bold pt-12">Explore Marketplace</div>
        <Image src='/hero-marketplace/players/line.png' alt='line' width={1950} height={20}/>
      </div>
      <div className="flex flex-wrap max-w-screen-2xl mx-auto mt-10">
        <div className="flex mb-4 space-x-12 text-xl">
          <button
            className={`${
              activeTab === "tab1" ? "undeline text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Items
          </button>
          <button
            className={`${
              activeTab === "tab2" ? "undeline text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
           Analytics <span className="bg-sky-500 rounded-xl px-2 ml-2 text-white">BETA</span>
          </button>
          <button
            className={`${
              activeTab === "tab3" ? "undeline text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Activity
          </button>
        </div>

        {content[activeTab]}
      </div>
    </div>
  );
}
