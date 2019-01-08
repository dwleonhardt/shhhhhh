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

* BigchainDB provides a private blockchain stored on pre-built nodes
* Database setup is taken care of under the hood using MongoDB
* Drivers available for JavaScript, Python, and Java
* The BigchainDB ORM allows communication with the data
* Data is structured in assets and transactions on those assets

## Maturity

* BigchainDB was founded in Germany in 2014
* The core library `bigchaindb-driver` is currently on version 4.1.0
* Many real-world examples exist, and the product seems well-supported

## Use Cases

* Intellectual property - [Resonate](https://resonate.is/) leverages BlockchainDB to manage ownership of streaming music
* Identity - [Recruit](http://recruit-tech.co.jp/) is a Japanese company that uses BlockchainDB to help verify a person's education
* Supply chain - [innogy](https://www.innogy.com/web/cms/en/3087918/for-your-home/) tracks where products have been
* Government - [BenBen](http://www.benben.com.gh/) maintains a land registry in Ghana using BlockchainDB to prove ownership 

## Implementation Notes

* Setup is very straightforward
* Good documentation

## Proof of Concept
A test app can be cloned down from this [Farm To Fork](https://github.com/amberjohnsonsmile/farm-to-fork) repo, which is based on a [tutorial](https://medium.com/wearetheledger/bigchaindb-a-hands-on-approach-42e1d3b4e7a) by developer Artus Vranken. He also has a [deployed example](https://artus.github.io/FarmToFork/) of the POC.

## Summary
BigchainDB provides a user-friendly way to save blockchain data using MongoDB.

## Resources

* [Website](https://www.bigchaindb.com/)
* [Blog](https://blog.bigchaindb.com/)
* [Github](https://github.com/bigchaindb/bigchaindb)
* [Farm To Fork Tutorial](https://medium.com/wearetheledger/bigchaindb-a-hands-on-approach-42e1d3b4e7a)
