import { createContext, useState} from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const ChainContext = createContext();

const ChainProvider = ({ children }) => {

    const [selectedChain, setselectedChain] = useState("base");
    // const [ contractAddress, setContractAddress] = useState(contractAddresses[0][selectedChain])
    // console.log(selectedChain)
    // console.log(contractAddress)
    const contractAddresses = {
        base: "0x72c1E8AfB5a097CEdb02581c303F04a0A109912c",
        binance: "0x7B9A5E48E1Cb2AF872e088d19FDb8D779246461F"
    }


    return(
        <ThirdwebProvider
        activeChain={selectedChain}
        clientId="c24255f27090571ead1beac4706f9b3a"
      >
        <ChainContext.Provider value={{ selectedChain, setselectedChain, contractAddresses }}>
            {children}
        </ChainContext.Provider>
        </ThirdwebProvider>
    );
};

export { ChainProvider, ChainContext }