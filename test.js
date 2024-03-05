import { ethers } from "ethers";

export async function toWei(amount) {
    const wei =  ethers.utils.parseEther(amount.toString());
    console.log(wei)
}

toWei(1)