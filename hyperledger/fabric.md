# Fabric Dev Environment

### Prerequisites

* Docker and Docker Compose
* Go programming language
* Node.js (not required but useful for utilizing the JavaScript SDK)

### Installing Fabric Samples

Use the following command to install the Fabric Samples, binaries, and Docker images

```curl -sSL http://bit.ly/2ysbOFE | bash -s 1.4.0-rc2```

### Running the first-network Example

* Navigate to ```fabric-samples/first-network``` directory then use ```byfn.sh up``` to start the network.

* Now you can type ```docker exec -it cli bash ``` to access the example Fabric network's docker container.

* To stop the network type ```byfn.sh down```

