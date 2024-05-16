import React, { useState } from "react";
import Image from "next/image";

import { itemList, itemList2, list3, playersInfo } from "./item-list-data";

export default function Index() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectChange = (itemId, optionId) => {
    setSelectedOptions((prevState) => ({ ...prevState, [itemId]: optionId }));
  };

  const [rows, setRows] = useState(3);

  const loadMore = () => {
    setRows(rows + 3);
  };

  return (
    <div className="flex gap-5 w-full">
      <div>
        <div className=" h-fit p-3 bg-[#12385E] rounded-lg space-y-3">
          {itemList.map((item) => (
            <div
              key={item.id}
              className="flex border-2 border-sky-400 rounded-full gap-1 px-3"
            >
              <Image
                src={item.scr}
                alt="Background image"
                width="25"
                height="25"
                className="absolute z-10"
              />
              <select
                className="outline-none bg-transparent text-white w-48 py-2"
                value={selectedOptions[item.id] || ""}
                onChange={(e) => handleSelectChange(item.id, e.target.value)}
              >
                <option value="">{item.name}</option>
                {item.options.map((option) => (
                  <option
                    className="bg-white text-black"
                    key={option.id}
                    value={option.id}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
          {itemList2.map((item) => (
            <div
              key={item.id}
              className="flex border-2 border-sky-400 rounded-full gap-1 px-3"
            >
              <select
                className="outline-none bg-transparent text-white w-[24vh] py-2"
                value={selectedOptions[item.id] || ""}
                onChange={(e) => handleSelectChange(item.id, e.target.value)}
              >
                <option value="">{item.name}</option>
                {item.options.map((option) => (
                  <option
                    className="bg-white text-black"
                    key={option.id}
                    value={option.id}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="-ml-56 mt-8">
          <Image
            src="/hero-marketplace/players/Arrow.png"
            alt="test"
            width={350}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-5 w-full">
        <div className="flex gap-5 w-full justify-end">
          {list3.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col bg-[#0ED4FA] border-gray-400 border rounded-lg w-48 px-5 py-2"
              >
                <div className="text-lg font-medium">{item.name}</div>
                <div className="text-xl font-bold text-white">{item.value}</div>
              </div>
            );
          })}
        </div>

        <div className="flex w-full gap-5 justify-end">
          <div className="w-16 h-16 border-2 border-[#0ED4FA] rounded-xl flex justify-center">
            <Image
              src="/hero-marketplace/items/categoryIcon.svg"
              alt="Background image"
              width="25"
              height="25"
              className="absolute z-10"
            />
          </div>
          <div className="w-[44vh] border-2 rounded-lg border-[#0ED4FA]">
            <div className="flex justify-between outline-none bg-[#0E1824] text-white text-xl w-full py-4 px-1 rounded-lg">
              <div>Search Assets</div>
              <Image
                src="/hero-marketplace/players/search.svg"
                alt="thishi"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="w-64 border-2 rounded-lg border-[#0ED4FA]">
            <select className="outline-none bg-[#0E1824] text-white w-full py-4 px-1 rounded-lg">
              <option className="text-xl">ETH</option>
            </select>
          </div>
          <div className="w-64 border-2 rounded-lg border-[#0ED4FA]">
            <select className="outline-none bg-[#0E1824] text-white w-full py-4 px-1 rounded-lg">
              <option className="text-xl">Price(Low-to High)</option>
            </select>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-4 py-8">
            {playersInfo.slice(0, rows * 6).map((player) => (
              <div key={player.id} className="w-full">
                <div className="bg-[#0E1824] w-auto rounded-2xl">
                {/* <div className="relative top-10 left-20 w-12 bg-black opacity-50 z-20">Hello</div> */}
                  <Image
                    src={player.src}
                    alt="Background image"
                    width="220"
                    height="250"
                    className="absolute z-10"
                  />
                  
                  <div className="mx-3 pt-2">
                    <div className="text-[#0ED4FA] font-bold text-3xl">
                      {player.name}
                    </div>
                    <div className="text-white text-xs">
                      Creator{" "}
                      <span className="text-[#0ED4FA]">{player.team}</span>
                    </div>
                    <div className="space-x-1 items-center mt-3">
                      <span className="text-white text-sm">Current bid</span>
                      <span>
                        <Image
                          src="/hero-marketplace/players/eth.svg"
                          alt="Background image"
                          width="15"
                          height="15"
                          className="absolute z-10"
                        />
                      </span>
                      <span className="text-[#0ED4FA] text-sm">
                        {player.bid}
                      </span>
                    </div>
                    <button className="rounded-lg bg-[#0ED4FA] p-2 w-full my-2">
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center">
            <button
              onClick={loadMore}
              className="bg-[#080712] w-40 py-2 mt-4 rounded-full border-2 border-[#0ed4fa] text-[#0ed4fa]"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
