import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { contractABI, contractAddress } from "../utils/constants";

export const TradeContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const tradeContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  // console.log({ provider, signer, tradeContract });
  return tradeContract;
};

export const TradesProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);
  const initialValues = { address: "", amount: "", keyword: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");
      const tradeContract = getEthereumContract();

      const availableTransactions = await tradeContract.getAllTrades();
      const structuredTransactions = availableTransactions.map(
        (transaction) => ({
          addressTo: transaction.reciever,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );
      setTransactions(structuredTransactions);
      console.log("Transactions " + structuredTransactions);
    } catch (error) {
      console.log(error);

      // throw new Error("No Ethereum object");
    }
  };

  const checkIfTransactions = async () => {
    try {
      const tradeContract = getEthereumContract();
      const transactionCount = await tradeContract.getTradesCount();

      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.log(error);

      // throw new Error("No Ethereum object");
    }
  };
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("no accounts found");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactions();
  }, []);

  const sendTransactions = async () => {
    console.log("send Transacation is running");
    try {
      if (!ethereum) return alert("Please install Metamask");

      //   console.log(formValues);
      const tradeContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(formValues.amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: formValues.address,
            gas: "0x5208", //2100 gwei, go to ethereum coverter to know what it means
            value: parsedAmount._hex,
          },
        ],
      });
      const addressTo = formValues.address;
      const transactionHash = await tradeContract.addToBlockchain(
        "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
        parsedAmount,
        formValues.message,
        formValues.keyword
      );
      setLoading(true);
      console.log(`loading -${transactionHash.hash}`);
      await transactionHash.wait();
      setLoading(false);
      console.log(`success -${transactionHash.hash}`);
      const transactionCount = await tradeContract.getTradesCount();
      setTransactionCount(transactionCount.toNumber());
      window.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No Ethereum object");
    }
  };
  return (
    <TradeContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formValues,
        setFormValues,
        sendTransactions,
        transactions,
        loading,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
