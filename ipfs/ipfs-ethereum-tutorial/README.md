# IPFS Ethereum Tutorial
This React dApp was created based on this [Ethereum + IPFS + React DApp Tutorial](https://blog.goodaudience.com/ethereum-ipfs-react-dapp-tutorial-pt-1-a9dfd5079491) by Alexander Ma. Tools used include:

* React for the frontend
* Ganache for spinning up a local Ethereum blockchain
* Truffle for compiling smart contracts
* IPFS for file sharing
* MetaMask Chrome extension for for integrating with the browser

## Running the App Locally

1. Install the MetaMask extension for Chrome [here](https://metamask.io/).
1. In the terminal, install and start ganache-cli by running `npm install ganache-cli`, then `ganache-cli`. When Ganache starts, it generates a key phrase, labeled "Mnemonic". Make a note of this key phrase, you will use it later. You will leave Ganache running during the following steps.
1. Clone this repo locally with `git clone https://gitlab.com/ideas-by-nature/internal/research.git`
1. Navigate to the client folder with `cd research/ipfs/ipfs-ethereum-tutorial/client`.
1. Run `npm install`.
1. Start the app with `npm start`.
1. Use Chrome to visit "localhost:3000/".
1. A pop-up will ask you to sign into MetaMask. In the top right of the window, select "Localhost 8545" from the dropdown menu. Instead of logging in, click `Import using account seed phrase` and use the key phrase generated earlier by Ganache. Enter a password and click "Restore".
1. Upload a file by pressing "Choose FIle" and selecting a file. Add it to IPFS by clicking "Send it". Once the file is on IFPS, its reference hash will appear on the page.
1. To send this hash to another address, enter the address in "Receiver Address" and copy the hash into "IPFS Address", the click "Submit".
1. Another pop-up from MetaMask will appear asking for confirmation. Click "Confirm", and the IPFS hash has been sent as a notification!
1. To check for notifications, use MetaMask to navigate to the address you want to check and click "Receive IPFS". Any notifications that have been sent to that address will appear below!
