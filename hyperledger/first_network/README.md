# First Fabric Network

## Environment Setup

1. Install Docker

2. Install GoLang

3. Pull down the latest Hyperledger Docker containers

   ```
     docker pull hyperledger/fabric-peer:latest
     docker pull hyperledger/fabric-membersrvc:latest
   ```

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

Copy `docker-compose-ca-template.yaml` and add your organizations CA private key path `crypto-config/peerOrganizations/org.test.com/ca/PRIVATE_KEY`to initialize the CA server

```
peer channel create -o orderer.test.com:7050 -c $CHANNEL_NAME -f ./channel-artifacts/channel.tx --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/test.com/orderers/orderer.test.com/msp/tlscacerts/tlsca.test.com-cert.pem


export CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org.test.com/users/Admin@org.test.com/msp

export CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org.test.com/peers/peer0.org.test.com/tls/ca.crt

export CHANNEL_NAME=testchannel


CORE_PEER_LOCALMSPID="OrgMSP"

CORE_PEER_ADDRESS=peer0.org.test.com:7051

peer channel join -b testchannel.block

peer channel list

CORE_PEER_ADDRESS=peer1.org.test.com:7051 
CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org.test.com/peers/peer1.org.test.com/tls/ca.crt peer channel join -b testchannel.block


```

**Fabric SDK:** https://fabric-sdk-node.github.io/