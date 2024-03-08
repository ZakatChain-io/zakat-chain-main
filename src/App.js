import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home";
import Page from "./routes/pay-zakat/page";
import Donate from "./routes/donate/page";
import About from "./routes/about/page";
import Calculate from "./routes/calculate-zakat/page";

import { ThirdwebProvider } from "@thirdweb-dev/react";

function App() {
  return (
    <div className="App">
      <ThirdwebProvider
        activeChain="binance"
        clientId="c24255f27090571ead1beac4706f9b3a"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pay-zakat" element={<Page />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculate-zakat" element={<Calculate />} />
        </Routes>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
