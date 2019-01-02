# Hyperledger

**What is Hyperledger?**

Hyperledger is an open sources consortium hosted by The Linux Foundation. Hyperledger's mission is to create enterprise grade open source distributed leger frameworks and code bases, create a technical community to benefit the Hyperledger community, and provide infrastructure/a neutral home for meetings, events, and collaborative discussions.

**Charter:** https://www.hyperledger.org/about/charter

## Sawtooth

**Version:** 1.1

**Summary:** Hyperledger Sawtooth is an open source enterprise solution that was contributed to the Hyperledger consortium by Intel. Sawtooth is a platform for building, deploying, and running permissioned distributed ledgers (also called blockchains). It provides an extremely modular and flexible platform for implementing transaction-based updates to shared state between untrusted parties coordinated by consensus algorithms.

### Features

#### Ethereum Contract Compatibility

Ethereum contracts can be deployed to Sawtooth  using Sawtooth-Ethereum integration (Seth)

#### Smart Contract Abstraction

Sawtooth provieds a smart contract abstractiont that allows developers to write contract logic in the language of their choice. 

**Current Transaction Processor SDKs:**

* Python
* JavaScript,
* Go
* C++
* Java
* Rust

#### Pre-Built REST API

The provided transaction processing API comes with a translator to convert Sawtooth's validator communication to HTTP/JSON

#### Permissions

Built to solve challenges of permissioned/private networks and you can easily deploy a cluster of nodes with seperate permissioning

#### Parallel Transaction Exicution 

Sawtooth inclues an advanced parallel scheduler that splits transactions into parallel flows. This could potentially lead to a significant performance increase over serial transaction processing

#### Consensus

Sawtooth currently supports the following consensus implimentations:

* Proof of Elapsed Time (PoET) - a Nakamoto-style consensus algorithm designed for production grade applications
* PoET Simulator - provides PoET consensus on any type of hardware
* Dev Mode - a simplified random leader algorithm for easier development and testing

###Resources

Sawtooth Documenation: https://sawtooth.hyperledger.org/docs/core/releases/latest/introduction.html

Community Proposal: https://docs.google.com/document/d/1j7YcGLJH6LkzvWdOYFIt2kpkVlLEmILErXL6t-Ky2zU/edit

## Iroha

**Version:** 1.0.0_Beta

**Summary:** Hyperledger Iroha is a general purpose permissioned blockchain system that can be used to manage digital assets, identity, and serialized data. This can be useful for applications such as interbank settlement, central bank digital currencies, payment systems, national IDs, and logistics, among others.

### Features

#### Permissions

Iroha has a robust permissioning system allowing permissions to be set granularly for commands, queries, and joining networks.

#### Common Functions

Iroha allows users to perform common functions, such as creating and transferring a digital asset using prebuild commands

#### Consensus

Iroha has a novel, Byzantine fault tolerant consensus algorithm called Yet Another Consensus or YAC

## Fabric

A network can have many channels. Each contract can be installed on a peer node by an admin and then the admin can control which network channels have access to the contract.

Chaincode - https://hyperledger-fabric.readthedocs.io/en/latest/chaincode.html

**Version:** 1.4 

**Summary:** Fabric is a permissioned blockchain framework that allows for modular plug and play configuration of consensus, membership, peer relationship, smart contract, ledger, and transaction endorsment moduals.

Fabric was contributed to Hyperledger by Digital Asset and IBM.

Explaination: https://www.youtube.com/watch?v=js3Zjxbo8TM

Documentation: https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html

**Solidity Integration:** Fabric can support Solidity smart contracts by utilizing Hyperledger's Fabric Chaincode EVM. In its current state, once you have added the EVM chaincode support to the network, deploying solidity chaincode to a Fabric network is relatively simple and just requires the smart contracts byte code to deploy.

**Resources:**

Fabric Chaincode EVM: https://github.com/hyperledger/fabric-chaincode-evm

Solidity Smart Contract Deployment: https://medium.com/coinmonks/solidity-smart-contract-on-hyperledger-fabric-3d50f25e577b

### Features

#### New Transaction Achitecture

Fabric impliments a new transaction architecture they call "execute-order-validate".

**Steps:**

* Execute a transaction and check its correctness, thereby endorsing it
* Order transactions via your consensus protocal of choice
* Validate transactions against an application specific endorsement policy before commiting to the ledger

Fabric executes the transaction before reaching final agreement on the order. Each application has its own endorsement policy that specifies which peer nodes and or how many need to vouch for the correct execution of a smart contract which allows for parallel transactions execution.

#### Language Support

As of version 1.1.0 smart contracts can be written in the following languages:

* Go
* Node.js
* Java

#### Consensus

Fabric has modular consensus that is decoupled from all peers that execute transactions and maintain the ledger which means consensus can be swapped out depeneding on the deployment or solution. 

Currently supported consensus:

* Crash Fault Tolerant (Kafka and Zookeeper)
  * Kafka - https://kafka.apache.org/
  * Zookeeper - https://zookeeper.apache.org/

### Terminology

**CSR:** Certificate Signing Request

* This is used to create new public an private keys for a user that can then be stored in a wallet.

**CA:** Certified Authority

**Registrar:** A record of all users and permission levels

## Burrow

**Version:** 0.17

**Summary:** Hyperledger Burrow is a permissioned Ethereum smart-contract blockchain node. It executes Ethereum EVM smart contract code (usually written in [Solidity](https://solidity.readthedocs.io/)) on a permissioned virtual machine. Burrow provides transaction finality and high transaction throughput on a proof-of-stake [Tendermint](https://tendermint.com/) consensus engine.

### Resources

GitHub: https://github.com/hyperledger/burrow

Wiki: https://wiki.hyperledger.org/projects/burrow

## Indy

**Version:** Pre-versioning

**Summary:** Hyperledger Indy is a distributed ledger, purpose-built for decentralized identity. It provides tools, libraries, and reusable components for creating and using independent digital identities rooted on blockchains or other distributed ledgers so that they are interoperable across administrative domains, applications, and any other “silo.”

## Explorer

**Verion:** 3.8

**Summary:** Hyperledger Explorer is open source browser for viewing the activity of an underlying blockchain network. That currently supports Hyperledger Fabric

## Quilt

**Version:** Pre-versioning

**Summary:** Quilt offers interoperability between ledgers by implimentatiing the [Interledger](https://interledger.org/) protocal. (The interledger protocal provides atomic swaps)