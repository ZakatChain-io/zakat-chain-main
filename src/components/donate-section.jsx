import React from "react";
import sick from "../../src/assets/help-treat-a-sick-muslim.png";
import tap from "../../src/assets/provide-access-to-clean-and-safe-water.png";
import support from "../../src/assets/support-an-orphan-through-school.png";

const Donation = () => {
  const details = [
    {
      topic: "Donate to the poor",
      subTopic:
        "He who feeds an hungry person would be fed by Allah on the day of resurrection",
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
        <div className="p-5 my-16 border rounded-lg">
          <div className="  p-2 sm:p-6 justify-between rounded-lg text-black grid grid-cols-2 gap-4 items-center xl:gap-16 sm:py-8 xl:px-12 ">
            <div className="m-auto sm:h-[280px] h-[220px] w-full overflow-hidden items-center justify-center ">
              <img
                src={detail.img}
                alt="sick treatment"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <h2 className="text-2xl sm:text-4xl font-bold p-3 items-start">
                {detail.topic}
              </h2>
              <p className="text-sm sm:text-md p-2 items-start sm:leading-7">
                {detail.subTopic}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="!justify-end !items-end !flex pt-5">
              <p className="w-auto p-3 border rounded-full ">0x02d.....no20</p>
            </div>
            <input
              id="file"
              class=" p-5 rounded-lg my-5 w-full border border-gray-700"
            />
            <div className="percentages justify-center items-center gap-5 flex flex-row">
              <button className="rounded-full py-3.5 px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white">
                25 USDT
              </button>
              <button className="rounded-full py-3.5 px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white">
                50 USDT
              </button>
              <button className="rounded-full py-3.5 px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white hidden md:block">
                100 USDT
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 ">Message </label>
            <input
              id="file"
              class=" p-5 rounded-lg my-5  border border-gray-700"
              placeholder="(optional)"
            />
            <div className="!justify-end !items-end !flex">
              <button className=" rounded-full py-3.5 px-7 bg-[#17163e] hover:bg-[#17163eaa] text-white w-auto">
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
