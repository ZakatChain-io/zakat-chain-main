import React, { useState } from 'react';
import Navbar from '../../components/navbar.component';
import { usdcFaucet } from '../../contract con';
import { usdtFaucet } from '../../contract con';
import { toast } from 'react-toastify';

function Faucet() {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState("");
  const [token, setToken] = useState("USDT")

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleMintTokens = async () => {
    // Add logic to mint tokens with the given amount and address
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      toast.error("Please enter a valid number");
      return;
    }

    if (!address || typeof address !== 'string' || address.trim() === '') {
        toast.error("Please enter a valid Ethereum address");
        return;
    }

    try {
      switch (token) {
        case "USDT":
          await usdtFaucet(address, numericAmount);
          break;
        case "USDC":
          await usdcFaucet(address, numericAmount);
          break;
        default:
          toast.error("Invalid token selection");
          break;
      }
      console.log("Minting Sucessful");
    } catch (error) {
      console.error("Minting Unsuccessful", error);
    }
  };

  return (
    <div>
        <Navbar></Navbar>
        <div>
            <label>
        Amount:
        <div>
            <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
        <div className="flex justify-end">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  class="block py-3 px-6  rounded-xl border-none bg-blue-200 mx-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="USDT">USDT</option>
                  <option value="USDC">USDC</option>
                </select>
              </div>
        </div>
        
      </label>
      <br />
      <label>
        Address:
        <div>
            <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter address"
        />
        </div>
        
      </label>
      <br />
      <button onClick={handleMintTokens}>Mint Tokens</button>
        </div>
    </div>
  );
}

export default Faucet;
