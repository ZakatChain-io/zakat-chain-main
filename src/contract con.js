import {contractABI, USDTadd, contractABi} from "../src/config";
import {  ethers } from "ethers";
import { toast } from "react-toastify"


export async function connectTocon(contractAddress) {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            return new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            throw new Error("Ethereum provider not found.");
        }
    } catch (error) {
        console.error('Error connecting to contract', error);
        throw error;
    }
}

export async function connectTotok() {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            return new ethers.Contract(USDTadd, contractABi, signer);
        } else {
            throw new Error("Ethereum provider not found.");
        }
    } catch (error) {
        console.error('Error connecting to contract', error);
        throw error;
    }
}

export async function connectTotoc(usdcAddress) {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            return new ethers.Contract(usdcAddress, contractABi, signer);
        } else {
            throw new Error("Ethereum provider not found.");
        }
    } catch (error) {
        console.error('Error connecting to contract', error);
        throw error;
    }
}

export function toWei(amount) {
    return ethers.utils.parseEther(amount.toString());
}

export async function paybnb(amount, contractAddress, zakatAddress) {
   try {
    const contract = await connectTocon(contractAddress);
    const amounT = toWei(amount);
    await contract.payNAT(zakatAddress, {value: amounT});
    console.log("Payment Sucessfull")
    toast.success("Payment Sucessful");
   } catch (error) {
    console.log("Error paying", error);
    toast.error(`Payment error: ${error.message}`);
    throw error;
   }
}

export async function payusdt(amount, contractAddress, selectedChain) {
    try {
        let USDTa;
        const contract = await connectTocon(contractAddress);
        const approval = await connectTotok();
        if (selectedChain === "base") {
            toast.error("USDT payment not available on Base");
        } else {
            USDTa = toWei(amount);
            await approval.approve(contractAddress, USDTa);
            await contract.payUSDT(USDTa, { gasLimit: 300000 });
            console.log("Payment Successful");
            toast.success("Payment Successful");
        }
    } catch (error) {
        console.log('Error paying in USDT', error);
        toast.error(`Payment Error: ${error.message}`);
        throw error;
    }
}


export async function payusdc(amount, contractAddress, usdcAddress, selectedChain) {
    try {
        let USDc;
        const contract = await connectTocon(contractAddress);
        const approval = await connectTotoc(usdcAddress);
        if (selectedChain === "base") {
            USDc = amount * 10 **6;
        } else {
            USDc = toWei(amount);
        }
        await approval.approve(contractAddress, USDc);
        await contract.payUSDC(USDc, { gasLimit: 300000 });
        console.log("Payment Sucessful");
        toast.success("Payment Sucessful");
    } catch (error) {
        console.log('Error paying in BNB', error);
        toast.error(`Payment Error: ${error.message}`)
        throw error;
    }
}