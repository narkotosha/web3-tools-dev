# Simple Web3 Project

Simple Web3 Project is a JavaScript library that provides a simple interface for interacting with the Ethereum blockchain using Web3.js.

## Features

- Fetch the latest block number on the Ethereum blockchain.
- Get the balance of an Ethereum address.
- Call methods of Ethereum smart contracts.

## Installation

To use Simple Web3 Project in your project, you can install it via npm:

```bash
npm install simple-web3-project

Usage:
        const SimpleWeb3Project = require('simple-web3-project');

        // Create an instance with your preferred Ethereum node endpoint
        const web3Project = new SimpleWeb3Project('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

        // Get the latest block number
        web3Project.getBlockNumber()
        .then(blockNumber => {
            console.log('Latest block number:', blockNumber);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // Get the balance of an Ethereum address
        const address = '0x1234567890123456789012345678901234567890'; // Replace with the desired address
        web3Project.getBalance(address)
        .then(balance => {
            console.log('Balance:', balance, 'ETH');
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // Call a method of a smart contract
        const contractAddress = '0x1234567890123456789012345678901234567890'; // Replace with the contract address
        const abi = []; // Replace with the contract ABI
        const methodName = 'methodName'; // Replace with the method name
        const methodParams = []; // Replace with method parameters
        web3Project.callContractMethod(contractAddress, abi, methodName, methodParams)
        .then(result => {
            console.log('Result:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });

License

This project is licensed under the MIT License - see the LICENSE file for details.