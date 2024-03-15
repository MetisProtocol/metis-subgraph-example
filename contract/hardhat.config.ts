import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      evmVersion: "berlin",
      metadata: {
        bytecodeHash: "none",
      },
    },
  },
  networks: {
    devnet: {
      url: "http://localhost:8545",
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
    },
    "metis-sepolia": {
      url: "https://sepolia.metisdevops.link",
      accounts: [vars.get("LOCAL_TESTING_WALLET_KEY")],
      verify: {
        etherscan: {
          apiKey: "Not required",
          apiUrl: "https://sepolia-explorer-api.metisdevops.link",
        },
      },
    },
    "metis-andromeda": {
      accounts: [vars.get("LOCAL_TESTING_WALLET_KEY")],
      url: "https://andromeda.metis.io",
      verify: {
        etherscan: {
          apiKey: "Not required",
          apiUrl:
            "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
        },
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    customChains: [
      {
        network: "metis-andromeda",
        chainId: 1088,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
          browserURL: "https://explorer.metis.io",
        },
      },
      {
        network: "metis-sepolia",
        chainId: 59902,
        urls: {
          apiURL: "https://sepolia-explorer.metisdevops.link/api",
          browserURL: "https://sepolia-explorer-api.metisdevops.link",
        },
      },
    ],
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true",
    currency: "USD",
  },
};

export default config;
