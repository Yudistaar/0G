require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      evmVersion: "istanbul",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    "0g-chain": {
      url: process.env["0G_RPC_URL"], // Modified this line
      accounts: [process.env.PRIVATE_KEY],
      chainId: 16600 // Confirm this chain ID with 0G documentation
    }
  }
};