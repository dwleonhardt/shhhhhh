# Fabric Dev Environment

### Prerequisites

* Docker and Docker Compose
* Go programming language
* Node.js (not required but useful for utilizing the JavaScript SDK)

### Installing Fabric Samples

Use the following command to install the Fabric Samples, binaries, and Docker images

```curl -sSL http://bit.ly/2ysbOFE | bash -s 1.4.0-rc2```

### Running the first-network Example

* Navigate to ```fabric-samples/first-network``` directory then use ```./byfn.sh up``` to start the network.

* Now you can type ```docker exec -it cli bash ``` to access the example Fabric network's docker container.

* To stop the network type ```./byfn.sh down```

```export PATH=PWD/bin:PATH```

```cryptogen generate --config=./crypto-config.yaml```

```configtxgen -profile TwoOrgsOrdererGenesis -outputBlock ./channel-artifacts/genesis.block```

```./bin/configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID "testchannel"```

```./bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/OrgMSPanchors.tx -channelID "testchannel" -asOrg OrgMSP```

```export CHANNEL_NAME=testchannel  && ./bin/configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID testchannel```

```./bin/configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/OrgMSPanchors.tx -channelID testchannel -asOrg OrgMSP```

```
peer channel join -b 
```

https://hyperledger-fabric-ca.readthedocs.io

MSP - Membership Service Provider

CA - Certified Authority

One CA per organization (a CA can be interacted with via the SDK or the built in REST API)

### Binaries

configtxgen - allows users to create and view config related artifiacts (for example genesis block)

cryptogen - a tool used for preconfiguring a network for testing purposes and would usually not be used in production