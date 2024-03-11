import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/zakat-chain-logo.svg";
import { Link } from "react-router-dom";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative flex justify-between py-3 items-center">
      {/* Logo */}
      <div>
        <Link to="/">
          <Logo className="h-8 sm:h-16" />
        </Link>
      </div>
      {/* Links */}
      <div className="hidden md:block">
        <ul className="flex space-x-6">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li id="showcase">Showcase</li>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="faucet">
            <li>Faucet</li>
          </Link>
        </ul>
      </div>
      {/* Button */}
      <div className="hidden md:flex">
        {/* <Link className="bg-[#FF9606] text-white px-4 py-3 rounded-full cursor-pointer"> */}
        <ConnectWallet
          theme={lightTheme({
            colors: {
              accentButtonBg: "#ff9606",
              accentText: "#ff9606",
              modalBg: "#f5f5f5",
              dropdownBg: "#f5f5f5",
              borderColor: "#ff9606",
              primaryText: "#000000",
              connectedButtonBg: "#ff9606",
              primaryButtonText: "#ffffffd9",
              primaryButtonBg: "#1a1523",
              accentButtonText: "#ffffffd9",
              selectedTextColor: "#fdfcfd",
              separatorLine: "#ff9606",
            },
          })}
          modalSize="wide"
          modalTitle="Connect with ZakatChain"
          className="connectButton bg-[#FF9606] text-white px-4 py-3 rounded-full cursor-pointer"
          switchToActiveChain={true}
        />
        {/* </Link> */}
      </div>

      {/* Mobile Menu */}
      <div className=" flex gap-x-4 md:hidden">
        <div className="">
          {/* <Link className="bg-[#FF9606] text-white px-4 py-3 rounded-full cursor-pointer"> */}
          <ConnectWallet
            theme={lightTheme({
              colors: {
                accentButtonBg: "#ff9606",
                accentText: "#ff9606",
                modalBg: "#f5f5f5",
                dropdownBg: "#f5f5f5",
                borderColor: "#ff9606",
                primaryText: "#000000",
                connectedButtonBg: "#ff9606",
                primaryButtonText: "#ffffffd9",
                primaryButtonBg: "#1a1523",
                accentButtonText: "#ffffffd9",
                selectedTextColor: "#fdfcfd",
                separatorLine: "#ff9606",
              },
            })}
            modalSize="wide"
            modalTitle="Connect with ZakatChain"
            className="connectButton bg-[#FF9606] text-white px-4 py-3 rounded-full cursor-pointer"
            switchToActiveChain={true}
          />
          {/* </Link> */}
        </div>
        <div className="cursor-pointer" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 block md:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute bg-white top-[100%] z-30 right-0 border-t border-[#FF9606]">
          <ul className="flex flex-col space-y-4 py-3 md:hidden">
            <Link to="/">
              <li className="px-10 hover:border-b hover:border-gray-500">
                Home
              </li>
            </Link>
            <Link>
              <li
                id="showcase"
                className="px-10 hover:border-b hover:border-gray-500"
              >
                <a href="#showcase">Showcase</a>
              </li>
            </Link>
            <Link to="/about">
              <li className="px-10 hover:border-b hover:border-gray-500">
                About Us
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
