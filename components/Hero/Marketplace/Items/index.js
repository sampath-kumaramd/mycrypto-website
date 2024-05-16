import React, { useState } from "react";
import Image from "next/image";

import { itemList, itemList2, list3 } from "./item-list-data";

export default function index() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectChange = (itemId, optionId) => {
    setSelectedOptions((prevState) => ({ ...prevState, [itemId]: optionId }));
  };

  return (
    <div className="flex gap-5">
      <div className="h-auto p-3 bg-[#12385E] rounded-lg space-y-3">
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

      <div className="flex flex-col space-y-5 w-full">
        <div className="flex gap-5 w-full">
          {list3.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col bg-[#0ED4FA] border-gray-400 border rounded-lg w-48 px-5 py-2"
              >
                <div className="text-lg font-medium">{item.name}hfhf</div>
                <div className="text-xl font-bold text-white">{item.value}</div>
              </div>
            );
          })}
        </div>
        <div className="flex w-full gap-5">
          <div className="w-64 border-2 rounded-lg border-[#0ED4FA]">
            <select
              className="outline-none bg-[#0E1824] text-white w-full py-4 px-1 rounded-lg"
            >
              <option className="text-xl">Search Assets</option>
            </select>
          </div>
          <div className="w-64 border-2 rounded-lg border-[#0ED4FA]">
            <select
              className="outline-none bg-[#0E1824] text-white w-full py-4 px-1 rounded-lg"
            >
              <option className="text-xl">ETH</option>
            </select>
          </div>
          <div className="w-64 border-2 rounded-lg border-[#0ED4FA]">
            <select
              className="outline-none bg-[#0E1824] text-white w-full py-4 px-1 rounded-lg"
            >
              <option className="text-xl">Price(Low-to High)</option>
            </select>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
