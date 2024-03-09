import { contractABI, contractAddress, USDTadd, USDCadd, contractABi} from "../src/config";
import { ethers } from "ethers";
import { toast } from "react-toastify"

export async function connectTocon() {
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

export async function connectTotoc() {
    try {
        if (window.ethereum) {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            return new ethers.Contract(USDCadd, contractABi, signer);
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

export async function paybnb(amount) {
    try {
        console.log(amount);
        const contract = await connectTocon();
        const bnbAmount = toWei(amount);
        await contract.payBNB(bnbAmount, { value: bnbAmount });
        console.log('Payment Successful');
        toast.success("Payment Sucessful")
        
        
    } catch (error) {
        console.log('Error paying in BNB', error);
        toast.error("Payment Error", error)
        throw error;
    }
}

export async function payusdt(amount) {
    try {
        const contract = await connectTocon();
        const approval = await connectTotok();
        const USDTa = toWei(amount);
        await approval.approve(contractAddress, USDTa);
        await contract.payUSDT(USDTa, { gasLimit: 300000 });
        console.log("Payment Sucessful");
        toast.success("Payment Sucessful")
    
    } catch (error) {
        console.log('Error paying in BNB', error);
        toast.error("Payment Error", error)
        throw error;
    }
}

export async function payusdc(amount) {
    try {
        const contract = await connectTocon();
        const approval = await connectTotoc();
        const USDc = toWei(amount);
        await approval.approve(contractAddress, USDc);
        await contract.payUSDC(USDc, { gasLimit: 300000 });
        console.log("Payment Sucessful");
        toast.success("Payment Sucessful");
    } catch (error) {
        console.log('Error paying in BNB', error);
        toast.error("Payment Error", error)
        throw error;
    }
}
