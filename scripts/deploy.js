const main = async () => {
  const ContractNFT = await ethers.getContractFactory("FireRangers");
  const metaDeployed = await ContractNFT.deploy();
  console.log("address", metaDeployed.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("error");
    process.exit(1);
  });
