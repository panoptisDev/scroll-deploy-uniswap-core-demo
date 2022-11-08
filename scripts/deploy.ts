import { ethers } from "hardhat";
const { writeFileSync } = require("fs");

async function main() {

  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const address = ((await ethers.getSigners())[0].address);

  const factory = await UniswapV2Factory.deploy(address);

  await factory.deployed();

  console.log(`Deployed to ${factory.address}`);
  console.log(`Block explorer URL: https://l2scan.scroll.io/address/${factory.address}`);


  writeFileSync(
    "deployedAddress.json",
    JSON.stringify({ contractAddress: factory.address }, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
