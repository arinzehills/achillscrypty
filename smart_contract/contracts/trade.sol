// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;


contract Trade{
    uint256 tradeCounter;

    event Transfer(address from, address receiver,uint amount,string message,
        uint256 timestamp,string keyword
    );

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    TransferStruct [] trades;

    function addToBlockchain(address payable receiver,uint amount,string memory message,string memory keyword) public{
        tradeCounter +=1;
        trades.push(TransferStruct(msg.sender, receiver,amount,message,block.timestamp,keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTrades() public view returns(TransferStruct[] memory){
    return trades ;      
    }
    function getTradesCount() public view returns(uint256){
        return tradeCounter;
    }
}