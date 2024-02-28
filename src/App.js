import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home";
import Page from "./routes/pay/page";
import Donate from "./routes/donate/page";
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
          <Route path="/pay" element={<Page />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
