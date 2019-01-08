# BigchainDB
https://www.bigchaindb.com/  
Research by Amber Johnson

##### Table of Contents  
[What is BigchainDB?](#what-is-bigchaindb)  
[Maturity](#maturity)  
[Use Cases](#use-cases)  
[Implementation Notes](#implementation-notes)  
[Proof of Concept](#proof-of-concept)
[Summary](#summary)  
[Resources](#resources)

## What is BigchainDB?

* Library for setting up a private blockchain
* Database setup is taken care of under the hood using MongoDB
* Drivers are available for JavaScript, Python, and Java
* The BigchainDB ORM allows interaction with data
* Data is structured in assets and transactions on those assets

## Maturity

* BigchainDB was founded in Germany in 2014
* The core library `bigchaindb-driver` is currently on version 4.1.0
* Many real-world examples exist, and the product seems well-supported

## Use Cases

* Intellectual property - [Resonate](https://resonate.is/) leverages BigchainDB to manage ownership of streaming music
* Identity - [Recruit](http://recruit-tech.co.jp/) is a Japanese company that uses BigchainDB to help verify a person's education
* Supply chain - [innogy](https://www.innogy.com/web/cms/en/3087918/for-your-home/) tracks where products have been
* Government - [BenBen](http://www.benben.com.gh/) maintains a land registry in Ghana using BigchainDB to prove ownership 

## Implementation Notes

* Setup is very straightforward
* Good documentation

## Proof of Concept
A test app can be cloned down from this [Farm To Fork](https://github.com/amberjohnsonsmile/farm-to-fork) repo, which is based on a [tutorial](https://medium.com/wearetheledger/bigchaindb-a-hands-on-approach-42e1d3b4e7a) by developer Artus Vranken. He also has a [deployed example](https://artus.github.io/FarmToFork/) of the POC.

## Summary
BigchainDB provides a user-friendly way to save blockchain data using MongoDB. It is a useful tool for building new blockchains, but it would not be helpful for working with existing blockchains.

## Resources

* [BigchainDB Website](https://www.bigchaindb.com/)
* [BigchainDB Blog](https://blog.bigchaindb.com/)
* [BigchainDB Github](https://github.com/bigchaindb/bigchaindb)
* [Farm To Fork Tutorial](https://medium.com/wearetheledger/bigchaindb-a-hands-on-approach-42e1d3b4e7a)
