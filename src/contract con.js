import { contractABI, contractAddress } from "../src/config";
import { ethers } from "ethers";

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

export async function toWei(amount) {
    const wei =  ethers.utils.parseEther(amount.toString());
    console.log(wei)
}

export async function paybnb(amount) {
    try {
        const contract = await connectTocon();
        await contract.payBNB(amount, { value: toWei(amount) });
        console.log('Payment Successful');
        
    } catch (error) {
        console.log('Error paying in BNB', error);
        throw error;
    }
}
