import { ethers } from "hardhat";
const {
  abi,
} = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");

async function main() {
  const payload = require("fs").readFileSync("deployedAddress.json");
  const deployedAddress = JSON.parse(payload).contractAddress;
  const MyContract = await ethers.getContractFactory("UniswapV2Factory");
  const contract = await MyContract.attach(
    deployedAddress // The deployed contract address
  );
  const a = await contract.getInitHash();
  console.log(a);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
