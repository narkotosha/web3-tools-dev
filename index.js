const Web3 = require('web3');

class Web3Tools {
    constructor(providerUrl) {
        this.web3 = new Web3(providerUrl);
    }

    // Existing methods (with minor comment additions)
    async getBlockNumber() {
        try {
            // Get the latest block number from the blockchain
            const blockNumber = await this.web3.eth.getBlockNumber();
            return blockNumber;
        } catch (error) {
            console.error('Error fetching block number:', error);
            throw error;
        }
    }

    async getBalance(address) {
        try {
            // Get the balance of an Ethereum address in ETH
            const balance = await this.web3.eth.getBalance(address);
            return this.web3.utils.fromWei(balance, 'ether');
        } catch (error) {
            console.error('Error fetching balance:', error);
            throw error;
        }
    }

    async callContractMethod(contractAddress, abi, methodName, methodParams) {
        try {
            // Interact with a smart contract method
            const contract = new this.web3.eth.Contract(abi, contractAddress);
            const method = contract.methods[methodName](...methodParams);
            const result = await method.call();
            return result;
        } catch (error) {
            console.error('Error calling contract method:', error);
            throw error;
        }
    }

    // Additional methods:

    async sendTransaction(transactionObject) {
        try {
            // Send a transaction to the blockchain
            const transactionHash = await this.web3.eth.sendTransaction(transactionObject);
            return transactionHash;
        } catch (error) {
            console.error('Error sending transaction:', error);
            throw error;
        }
    }

    async getTransactionReceipt(transactionHash) {
        try {
            // Retrieve the receipt of a transaction
            const transactionReceipt = await this.web3.eth.getTransactionReceipt(transactionHash);
            return transactionReceipt;
        } catch (error) {
            console.error('Error fetching transaction receipt:', error);
            throw error;
        }
    }

    async getBlockByNumber(blockNumber) {
        try {
            // Get a specific block by its number
            const block = await this.web3.eth.getBlock(blockNumber);
            return block;
        } catch (error) {
            console.error('Error fetching block:', error);
            throw error;
        }
    }

    async getGasPrice() {
        try {
            // Get the current gas price on the network
            const gasPrice = await this.web3.eth.getGasPrice();
            return this.web3.utils.fromWei(gasPrice, 'gwei'); // Convert to gwei for better readability
        } catch (error) {
            console.error('Error fetching gas price:', error);
            throw error;
        }
    }

    async estimateGas(transactionObject) {
        try {
            // Estimate the gas required for a transaction
            const estimatedGas = await this.web3.eth.estimateGas(transactionObject);
            return estimatedGas;
        } catch (error) {
            console.error('Error estimating gas:', error);
            throw error;
        }
    }

    async getPastEvents(contractAddress, abi, eventName, filterOptions = {}) {
        try {
            // Get past events from a smart contract
            const contract = new this.web3.eth.Contract(abi, contractAddress);
            const events = await contract.getPastEvents(eventName, filterOptions);
            return events;
        } catch (error) {
            console.error('Error fetching past events:', error);
            throw error;
        }
    }
}

module.exports = Web3Tools;
