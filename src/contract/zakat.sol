// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";


contract payContract {
    address  payable public receiver;
    IERC20 public USDT;
    IERC20 public USDC;
    address public owner;

    event Paid(
        uint amount,
        address sender,
        uint date
    );

    constructor (address payable  _receiver, address _USDT, address _USDC) {
        USDT = IERC20(_USDT);
        USDC = IERC20(_USDC);
        receiver = _receiver;
        owner = msg.sender;
    }

    modifier  onlyOwner {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function payNAT(address _zakAdd) external payable {
        (bool sent,bytes memory  data) = _zakAdd.call{value: msg.value}("");
        require(sent, "Failed to send");
        emit Paid(msg.value, msg.sender, block.timestamp);
    }

    function payUSDT(uint amount) external payable {
        USDT.transferFrom(msg.sender, receiver, amount);
        emit Paid(amount, msg.sender, block.timestamp);
    }

    function payUSDC(uint amount) external payable {
        USDC.transferFrom(msg.sender, receiver, amount);
        emit Paid(amount, msg.sender, block.timestamp);
    }

    function changedepAdd( address payable  nReceiver) public onlyOwner {
        receiver = nReceiver;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }
}