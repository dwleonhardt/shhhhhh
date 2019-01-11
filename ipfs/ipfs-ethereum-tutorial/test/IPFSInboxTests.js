const IPFSInbox = artifacts.require("./IPFSInbox.sol")
const truffleAssert = require('../client/node_modules/truffle-assertions')

contract("IPFSInbox", accounts => {
  it("...should emit an event when you send an IPFS address.",
  async () => {
    // Wait for the contract to be deployed
    const ipfsInbox = await IPFSInbox.deployed()

    // Call the contract function which sends an IPFS address
    const sent = await ipfsInbox.sendIPFS(accounts[1], "SampleAddress", { from: accounts[0] })

    // Assert the correct event was emitted
    truffleAssert.eventEmitted(sent, 'ipfsSent', (ev) => {
      return ev._ipfsHash == "SampleAddress"
    })
  })
})
