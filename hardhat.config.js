require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const {API_KEY,PRIVATE_KEY,POLY_SCAN} = process.env;
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks:{
    mumbai:{
      url:`${API_KEY}`,
      accounts:[`0x${PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: `${POLY_SCAN}`
  }

};