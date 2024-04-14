import { createContext, useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const ChainContext = createContext();

const ChainProvider = ({ children }) => {
    const [selectedChain, setselectedChain] = useState("binance");
    // const [zakatDue, setZakatDue] = useState("");
    
    const contractAddresses = {
        base: "0xED38773d4CF7c5cd725A33E06E54f03c490ddE0F",
        binance: "0xC0c0F8D572f2Bf4Da4F88Dbf8A665C121D0A6576"
    };
    const usdcChain = {
        base: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        binance: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
    }
    const zakatAddresses = {
        base: "0xc7edba479783ba0064cbfe2b87e929e1d0dc867d",
        binance: "0x1493ba30119398ee284ff844cb3669d7d734b39b"
    }

    return (
        <ThirdwebProvider
            activeChain={selectedChain}
            clientId="c24255f27090571ead1beac4706f9b3a"
        >
            <ChainContext.Provider
                value={{ selectedChain, setselectedChain, contractAddresses, usdcChain, zakatAddresses }}
            >
                {children}
            </ChainContext.Provider>
        </ThirdwebProvider>
    );
};

export { ChainProvider, ChainContext };
