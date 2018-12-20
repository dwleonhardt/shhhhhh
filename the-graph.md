# The Graph
Research by Amber Johnson

### What is The Graph?

* A protocol for building decentralized apps on Ethereum using the IPFS and GraphQL
* IPFS - Interplanetary File System, a P2P network sharing hashed files
* GraphQL - query language and runtime developed by Facebook
* Built on Rust, JavaScript, TypeScript, Web3, and Postgres

### Maturity

* Not currently available
* Created June 2018
* From a November 2018 blog post - "We plan to have an alpha version of the hosted service ready internally by Christmas."
* The Graph is hosting [Graph Day](https://thegraph.com/graphday) in San Francisco on January 25, 2019

### Use Cases
Since The Graph is not yet widely available, the follow uses cases are theoretical:

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

### Compare/Contrast with Minotaur

#### Comparison point

Details

#### Comparison point

Details

### Trying it out!

## Graph Node
https://github.com/graphprotocol/graph-node

* Note
* Note
* Note

## Graph CLI
https://github.com/graphprotocol/graph-cli

* Note
* Note
* Note

### Resources

[Website](https://thegraph.com/)
[Blog](https://medium.com/graphprotocol)
[Discord](https://discordapp.com/invite/vtvv7FP)
[Graph Day](https://thegraph.com/graphday)

## Summary


## Questions

