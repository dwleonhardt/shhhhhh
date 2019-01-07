const Fabric_Client = require('fabric-client')

const Client =  new Fabric_Client()
Client.loadFromConfig("sdk-config/client.yaml")

Client.initCredentialStores()
  .then((nothing) => {
    console.log(nothing)
  })