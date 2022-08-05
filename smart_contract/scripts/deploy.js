const main = async () => {
  const Trade = await hre.ethers.getContractFactory("Trade");
  const trades = await Trade.deploy();

  await trades.deployed();

  console.log("Transactions trade deployed to: ", trades.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
