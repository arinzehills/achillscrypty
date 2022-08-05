import React, { useContext } from "react";
import { Navbar, Footer, Hero, Uniqueness, HoriCounter } from "../components";
import Services from "../components/Services/Services";
import { TradeContext } from "../context/TradeContext";

const homeData = {
  headline: "Buy and Sell Ethereum Here",
  description:
    "Leverage on any tokens with a protocol trusted with billions" +
    " for its price execution, super low fees and reliability.",
  showButton: true,
  buttonLabel: ["Send crypto", "Sign up"],
  buttonLinks: ["/trade", "/"],
  img: "../../images/Graphic-Oracle.png",
  imgStart: "",
  alt1: "da",
  alt2: "da",
};

const homeData2 = {
  headline: "Buy and sell Crypto on this platform ",
  description:
    "You can send and receive any crypto on " +
    "this platform fart and secure and more roubust ",
  showButton: false,
  buttonLabel: ["Send crypto", "Sign up"],
  buttonLinks: ["/trade", "/"],
  img: "../../images/bitcoin.png",
  imgStart: "start",
  alt1: "da",
  alt2: "da",
};
const homeData3 = {
  headline: "Fully decentralized. Completely secure.",
  description:
    "We have all been in this industry too long not to make the security of your " +
    " funds our absolute top priority.  That’s why, so far, we’ve spent upwards" +
    " of $450k on audits " +
    "from Open Zeppelin and Trail of Bits, as well as code reviews from white hats.",
  showButton: false,
  buttonLabel: ["Send crypto", "Sign up"],
  buttonLinks: ["/trade", "/"],
  img: "../../images/Graphic-Decentralized-Box-p-500.png",
  imgStart: "",
  alt1: "da",
  alt2: "da",
};
const homeData4 = {
  headline: "Built on top of Ethereum blockchain  ",
  description:
    "We have all been in this industry too long not to make the security of your " +
    " funds our absolute top priority.  That’s why, so far, we’ve spent upwards" +
    " of $450k on audits " +
    "from Open Zeppelin and Trail of Bits, as well as code reviews from white hats.",
  showButton: false,
  buttonLabel: ["Send crypto", "Sign up"],
  buttonLinks: ["/trade", "/"],
  img: "../../images/Graphic-Fees.png",
  imgStart: "",
  alt1: "da",
  alt2: "da",
};

const Home = () => {
  const { connectWallet } = useContext(TradeContext);

  return (
    <div>
      <Hero {...homeData} />
      <HoriCounter />
      <Uniqueness />
      <Hero {...homeData2} />
      <Hero {...homeData3} />
      <Hero {...homeData4} />
      <Services />
    </div>
  );
};
export default Home;
