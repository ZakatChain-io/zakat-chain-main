import React from "react";
import { useState } from "react";
import sick from "../../src/assets/help-treat-a-sick-muslim.png";
import tap from "../../src/assets/provide-access-to-clean-and-safe-water.png";
import support from "../../src/assets/support-an-orphan-through-school.png";

const Donation = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleButtonClick = (value, index) => {
    const newValues = [...selectedValues];
    newValues[index] = value.replace(/\D/g, ""); // Extract only numbers
    setSelectedValues(newValues);
  };

  const details = [
    {
      topic: "Donate to the poor",
      subTopic: `"He who feeds an hungry person would be fed by Allah on the Day of Resurrection" (Al Tirmidhi)`,
      img: sick,
    },
    {
      topic: "Support an orphan through school",
      subTopic:
        "Through ZakatChain, you can make an orphan smile, always. There's an estimated 153 million orphans in the world today, your token will go a long way in catering for some of them.",
      img: support,
    },
    {
      topic: "Provide access to clean and safe water",
      subTopic: `"The best form of charity is giving water to drink." (Ibn Majah).`,
      img: tap,
    },
    {
      topic: "Help treat a sick Muslim",
      subTopic: `"Treat your sick ones with charity." (Saheeh al-Jaami)`,
      img: sick,
    },
  ];

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl md:container">
      {details.map((detail, index) => (
        <div className="p-5 sm:my-12 my-4 border rounded-lg">
          <div className="  p-2 sm:p-6 justify-between rounded-lg text-black grid grid-cols-2 gap-4 items-center xl:gap-16 sm:py-8 xl:px-12 ">
            <div className="m-auto sm:h-[280px] h-48 overflow-hidden items-center justify-center ">
              <img
                src={detail.img}
                alt="sick treatment"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col sm:gap-3  items-start">
              <h2 className="text-[15px] sm:text-3xl font-bold p-3 items-start">
                {detail.topic}
              </h2>
              <p className="text-[10px] text-gray-600 sm:text-lg sm:p-2 items-start sm:leading-7">
                {detail.subTopic}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="justify-end items-end flex pt-5">
              <p className="w-auto p-3 border rounded-full ">0x02d.....no20</p>
            </div>
            {/* <input
              id="file"
              className="p-3 sm:p-5 rounded-lg my-5 w-full border border-gray-700"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            /> */}
            <div
              key={index}
              className="flex justify-between p-[6px] sm:p-2 rounded-lg my-1 sm:my-3 border border-gray-700"
            >
              <input
                id={`file-${index}`}
                className="w-full border-none p-2"
                value={selectedValues[index]}
                onChange={(e) => {
                  const newValues = [...selectedValues];
                  newValues[index] = e.target.value;
                  setSelectedValues(newValues);
                }}
              />
              <div className="flex justify-end">
                <select
                  id={`country-${index}`}
                  name={`country-${index}`}
                  autoComplete="country-name"
                  className="block py-1 px-6 rounded-2xl border-none bg-gray-300 mx-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>USDT</option>
                  <option>USDC</option>
                  <option>BNB</option>
                </select>
              </div>
            </div>
            {/* Buttons */}
            <div className="percentages justify-center items-center gap-5 flex flex-row">
              <button
                className="rounded-full py-2 sm:py-3.5 px-4 sm:px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white"
                onClick={() => handleButtonClick("25 USDT", index)}
              >
                25 USDT
              </button>
              <button
                className="rounded-full py-2 sm:py-3.5 px-4 sm:px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white"
                onClick={() => handleButtonClick("50 USDT", index)}
              >
                50 USDT
              </button>
              <button
                className="rounded-full py-2 sm:py-3.5 px-4 sm:px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white hidden md:block"
                onClick={() => handleButtonClick("100 USDT", index)}
              >
                100 USDT
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 ">Message </label>
            <input
              id="file"
              class=" p-3 sm:p-5 rounded-lg sm:my-5 my-2  border border-gray-700"
              placeholder="(optional)"
            />

            <div className="!justify-end !items-end !flex">
              <button className=" rounded-full py-2 sm:py-3.5 px-4 sm:px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white w-auto">
                Donate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donation;
