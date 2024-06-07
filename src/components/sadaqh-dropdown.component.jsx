import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/sadaqah-dropdown-logo.svg";
import { ReactComponent as DropdownIcon } from "../assets/dropdown-icon.svg";
import FeedThePoor from "../assets/feed-the-poor.png";
import SupportAnOrphan from "../assets/support-an-orphan-through-school.png";
import ProvideAccessToClean from "../assets/provide-access-to-clean-and-safe-water.png";
// import HelpTreatASickMuslim from "../assets/help-treat-a-sick-muslim.png";
import feed from "../../src/assets/images.jpeg";
import { Link } from "react-router-dom";

const SadaqhDropdown = () => {
  const [isDropped, setIsDropped] = useState(false);
  const handleDropdown = () => {
    setIsDropped(!isDropped);
  };
  const details = [
    {
      topic: "Feed The Poor",
      subTopic: `  “He who feeds a hungry person will be fed by Allah on the Day
      of Resurrection” (Al-Tirmidhi).`,
      img: FeedThePoor,
      to: "/donate",
    },
    {
      topic: "Support an orphan through school",
      subTopic: `“Seeking knowledge is a duty upon every Muslim.” (Ibn Majah).
      Empower an orphan fulfill their educational aspirations.`,
      img: SupportAnOrphan,
      to: "/donate",
    },
    {
      topic: "Provide access to clean and safe water",
      subTopic: `"The best form of charity is giving water to drink." (Ibn
        Majah)`,
      img: ProvideAccessToClean,
      to: "/donate",
    },
    {
      topic: "Zakat ul-Fitr",
      subTopic: `"Whoever pays the Zakatul-Fitr before the Eid prayer, it is accepted as Zakat, but whoever pays it after the prayer, it is simply a form of charity. " Pay Zakatul-Fitr for each family member using the value of any of the listed food items.`,
      img: feed,
      to: "/donate",
    },
  ];
  return (
    <div className="bg-[#17163E] rounded-lg md:px-7">
      <div className="pt-2 px-1 flex justify-between mt-5 space-x-4 sm:px-3 md:space-x-0">
        <div className="flex gap-x-1">
          <span>
            <Logo className="w-10 sm:w-auto" />
          </span>
          <span className="text-2xl font-bold text-white self-center md:text-4xl">
            Sadaqah
          </span>
        </div>
        <div className="text-white text-2xl self-center -ml-10 md:text-4xl">
          صدقات
        </div>

        <div className="self-center">
          <Link
            to="/donate"
            className="bg-white rounded-full py-2 px-2 sm:px-6"
          >
            Pay Now
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        {isDropped && (
          <div className="border-t border-white mt-5 px-3">
            {details.map((detail, index) => (
              <div className="flex flex-row p-4">
                <div className="flex flex-col">
                  <div className="h-32 sm:h-40">
                    <img
                      src={detail.img}
                      alt="feed-the-poor"
                      className="h-full w-full"
                    />
                  </div>
                  <Link
                    to={detail.to}
                    reloadDocument
                    className="bg-white text-black rounded-full px-3 py-1 self-start block sm:hidden my-3"
                  >
                    Donate
                  </Link>
                </div>
                <div className="flex flex-col ml-5 gap-y-2 w-1/2 md:pr-8 md:ml-32 ">
                  <h1 className="text-[15px] sm:text-2xl font-bold text-white">
                    {detail.topic}
                  </h1>
                  <p className="text-gray-200 w-full text-[10px] leading-3 sm:leading-5 sm:text-lg">
                    {detail.subTopic}
                  </p>
                  <Link
                    to={detail.to}
                    reloadDocument
                    className="bg-white text-black rounded-full px-3 py-1 sm:px-5 sm:py-3 text-lg self-start sm:block hidden "
                  >
                    Donate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center">
          {isDropped ? (
            <DropdownIcon
              className="ml-10 cursor-pointer"
              onClick={handleDropdown}
            />
          ) : (
            <DropdownIcon
              className="ml-10 cursor-pointer rotate-180"
              onClick={handleDropdown}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SadaqhDropdown;
