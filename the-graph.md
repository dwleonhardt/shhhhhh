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

* Focus on indexing, speed of data retrieval
* Provides validation

### Differences from Minotaur

* 

### Advantages Compared to Minotaur

* Thorough token handling
* Run your own Ethereum nodes or use their provided nodes (which are not up and running yet)

### Disadvantages Compared to Minotaur

* Not as customizable, although this will always be true compared to building custom software

## Trying it out!

### Graph Node
https://github.com/graphprotocol/graph-node

* Note
* Note
* Note

### Graph CLI
https://github.com/graphprotocol/graph-cli

* Note
* Note
* Note

## Resources

[Website](https://thegraph.com/)
[Blog](https://medium.com/graphprotocol)
[Discord](https://discordapp.com/invite/vtvv7FP)
[Graph Day](https://thegraph.com/graphday)
[Graph Node getting started guide](https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md)

## Summary


## Questions

