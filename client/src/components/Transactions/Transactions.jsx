import React, { useContext } from "react";
import { TradeContext } from "../../context/TradeContext";
import { Button } from "../Button/Button";
import { shortenAddress } from "../../utils/shortenAddress";
const Transactions = () => {
  const { connectWallet, currentAccount, transactions } =
    useContext(TradeContext);

  const NoTransaction = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2>Connect wallet to see your transactions</h2>
          <Button buttonColor={"pink"} onClick={connectWallet}>
            Connect Wallet
          </Button>
        </div>
      </>
    );
  };
  const TransactionsCard = ({ transaction }) => {
    console.log(transaction);
    return (
      <>
        <div
          style={{
            margin: "10px 0 10px ",
            padding: "1rem",
            borderRadius: "20px",
          }}
          className={"mytransparent"}
        >
          <h4>Address From:{shortenAddress(transaction.addressFrom)}</h4>
          <h4>Address To:{transaction.To ?? ""}</h4>
          <h4>Message:{transaction.message}</h4>
          <h4>Keyword:{transaction.keyword}</h4>
          <h4>Amount:{transaction.amount} ETH</h4>
          <div className="pink" style={{ padding: "10px" }}>
            <h4>Date:{transaction.timestamp}</h4>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div style={{ color: "white" }}>
        {currentAccount ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Your transactions</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {transactions.map((transaction) => (
                <TransactionsCard transaction={transaction} />
              ))}
            </div>
          </div>
        ) : (
          <NoTransaction />
        )}
      </div>
    </>
  );
};

export default Transactions;
