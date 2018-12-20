# The Graph
Research by Amber Johnson

## What is The Graph?

* A protocol for building decentralized apps on Ethereum using the IPFS and GraphQL
* IPFS - Interplanetary File System, a P2P network sharing hashed files
* GraphQL - query language and runtime developed by Facebook
* Built on Rust, JavaScript, TypeScript, Web3, and Postgres

## Maturity

* Not currently available
* Created June 2018
* From a November 2018 blog post - "We plan to have an alpha version of the hosted service ready internally by Christmas."
* The Graph is hosting [Graph Day](https://thegraph.com/graphday) in San Francisco on January 25, 2019

## Use Cases
Since The Graph is not yet widely available, the follow uses cases are theoretical:

* An app to track Cryptokitties
* Example dApp queries
  * What are the token balances for this wallet address?
  * Who is looking for credit matching my desired risk profile?
  * Who owns land in my VR district and how much did they pay?
* Example query:
```
query {
  account(where:{id:"cjhnca848phk00b626reke6tt"}) {
    address
      balances(first: 5) {
        asset {
          name
            symbol
        }
        amount
      }
    transfersFrom {
      to {
        address
      }
      asset {
        symbol
      }
      amount
    }
  }
}
```
Returns:
```
{
  "data": {
    "account": {
      "address": "0x0113a6b755fbad36b4249fd63002e2035e401143",
        "balances": [
        {
          "asset": {
            "name": "Ethereum",
            "symbol": "ETH"
          },
          "amount": 1
        },
        {
          "asset": {
            "name": "0x",
            "symbol": "ZRX"
          },
          "amount": 20
        },
        {
          "asset": {
            "name": "District0x",
            "symbol": "DNT"
          },
          "amount": 30
        },
        {
          "asset": {
            "name": "Decentraland",
            "symbol": "MANA"
          },
          "amount": 45
        },
        {
          "asset": {
            "name": "Cosmos",
            "symbol": "ATOM"
          },
          "amount": 60
        }
      ],
      "transfersFrom": [
      {
        "to": {
          "address": "0x13ca7527cbdafd84894b025470e699fb86ded2df"
        },
        "asset": {
          "symbol": "ETH"
        },
        "amount": 0
      }
      ]
    }
  }
}
```

## Comparison to Minotaur

### Similarities to Minotaur

* Wrapper for web3 to make data easier to consume
* Focused on indexing, speed of data retrieval
* Provides validation
* Handles reorgs
* Uses postgres

### Differences from Minotaur

* Built on JavaScript, TypeScript, and Rust
* GraphQL query language
* IPFS file management

### Advantages Compared to Minotaur

* Thorough token handling
* Run your own Ethereum nodes or use their provided nodes (which are not up and running yet)
* User friendly searching
* Queries processed on a decentralized network, making them faster
* Multiple node storage means built-in backups
* No infrastructure to manage

### Disadvantages Compared to Minotaur

* Not as customizable (although this will always be true compared to building custom software)
* Does not exist yet and will take a while to be fully supported
* It seems like you need to store a full copy of the Ethereum blockchain on your personal hard drive, and then that data gets shared with everyone else over IPFS

## Trying it out!
Although the full product is not currently available, The Graph has two services that can be installed now - [Graph Node](https://github.com/graphprotocol/graph-node) and [Graph CLI](https://github.com/graphprotocol/graph-cli). Below are notes on trying these services.

### Graph Node
https://github.com/graphprotocol/graph-node

* Quick start guide is easy to follow
* Had to install Rust (which was easy) and IPFS (which was a pain)
* Since they don't have their own nodes set up yet I had to provide my own Infura endpoint. Definitely takes some of the ease out of the process
* Rust dependencies took a long time to install
* When starting the app, compiling was also REALLY slow (15 minutes)
* One thing they failed to mention in this quick start is that sharing files with IPFS is great, but it also means commiting to storing the full blockchain on my personal hard drive. Major disadvantage
* The quick start tutorial worked fine, but there's not a way to integrate it into an actual app yet

### Graph CLI
https://github.com/graphprotocol/graph-cli

Graph CLI is a thin layer providing commands for working with subgraphs, which contain references to a GraphQL schema, smart contract ABIs, and TypesScript mappings. Honestly there's not a whole lot of functionality.

## Summary
Overall, The Graph could be useful in the future but is not there yet. If they manage to fulfill all their promises, it will be a powerful tool.

## Resources

* [Website](https://thegraph.com/)
* [Blog](https://medium.com/graphprotocol)
* [Github](https://github.com/graphprotocol)
* [Discord](https://discordapp.com/invite/vtvv7FP)
* [Graph Day](https://thegraph.com/graphday)
* [Graph Node](https://github.com/graphprotocol/graph-node)
* [Graph CLI](https://github.com/graphprotocol/graph-cli)

