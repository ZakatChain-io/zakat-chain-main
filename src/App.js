import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home";
import Page from "./routes/pay-zakat/page";
import Donate from "./routes/donate/page";
import About from "./routes/about/page";
import Calculate from "./routes/calculate-zakat/page";
import Faucet from "./routes/faucet/page";
import { ToastContainer} from "react-toastify";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import 'react-toastify/dist/ReactToastify.css';

const customChain = {
  // Required information for connecting to the network
  chainId: 11155111, // Chain ID of the network
  rpc: ["11155111.rpc.thirdweb.com"], // Array of RPC URLs to use
 
  // Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia ETH",
    symbol: "ETH",
  },
  shortName: "Sepolia", // Display value shown in the wallet UI
  slug: "Sepolia", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "Ethereum-Sepolia", // Name of the network
  name: "Ethereum Sepolia", // Name of the network
};

function App() {
  return (
    <div className="App">
      <ThirdwebProvider
        activeChain={customChain}
        clientId="c24255f27090571ead1beac4706f9b3a"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay-zakat" element={<Page />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculate-zakat" element={<Calculate />} />
          <Route path="/faucet" element={<Faucet />}/>
        </Routes>
        <ToastContainer />
      </ThirdwebProvider>
    </div>
  );
}

export default App;
