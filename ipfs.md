# Interplanetary File System
https://ipfs.io/  
Research by Amber Johnson

##### Table of Contents
[What is IPFS?](#what-is-ipfs)  
[Maturity](#maturity)  
[Use Cases](#use-cases)  
[How-To Guide](#how-to-guide)  
[Summary](#summary)  
[Resources](#resources)  

## What is IPFS?
The Interplanetary File System, or IPFS, is a protocol for file storage written in Go. Files are hashed before storage, with the optional addition of asymmetric encryption. Files are then stored on a peer-to-peer network and can be shared securely.

## Maturity

* Developed by Protocol Labs
* 

## Use Cases

* Catalan independence referendum
* Wikipedia mirror
* Filecoin

## Implementation Notes

* 
* 

## How-To Guide
The instructions below will allow you to store and access encrypted documents.

### Basic Setup
For a more thorough setup and how-to guide, see [this Medium article](https://medium.com/@mycoralhealth/learn-to-securely-share-files-on-the-blockchain-with-ipfs-219ee47df54c).

1. Install GPG (for encryption) - on a Mac, run `brew install gnupg`. Follow [these instructions](http://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/) for other operating systems.
1. Generate a keypair with `gpg --gen-key`, following the prompts.
1. Install IPFS - visit the [IPFS install page](https://docs.ipfs.io/introduction/install/) to download the prebuilt package and install it.

### Share an Encrypted Document
Note: you will need two computers to complete the following steps.

1. Complete the [basic setup](#basic-setup) on both computers.
1. On the first computer, choose a file to share. It can be any file. Create an empty directory and move the file to it.
1. On the second computer, in a directory that is **not** a git repository, run `gpg --export --armor -email > pubkey.asc`. This will create the file pubkey.asc.
1. Securely send the pubkey.asc file to the first computer.
1. On the first computer:
    * Move pubkey.asc to the same directory as the file you're going to share.
    * Run `gpg --import pubkey.asc`.
    * Run `gpg --list-keys`. This will display your local public key as [ultimate] and the second computer's public key as [unknown]. Take note of the name of the second computer's public key, which will be the string following [unknown]. For this example, we'll say the name is "dwleonhardt".
    * Run `gpg --encrypt --recipient "dwleonhardt" doc.pdf`, replacing dwleonhardt with the second computer's key name and doc.pdf with your filename. This will create a new .gpg file.
    * Start IPFS by running `ipfs init` and `ipfs daemon`.
    * Add the encrypted file to IPFS by running `ipfs add doc.pdf.gpg`, again replacing doc.pdf.gpg with your .gpg filename. This command will output a text hash starting with "Qm...".
    * Share this "Qm..." hash with the second computer.
1. On the second computer:
    * Start IPFS by running `ipfs init` and `ipfs daemon`.
    * Run `ipfs get QmYqSCWuzG8Cyo4MFQzqKcC14ct4ybAWyrAc9qzdJaFYTL`, replacing "Qm..." with the hash received from the first computer. This will download the encrypted file.
    * Decrypt the file by running `gpg --decrypt QmYqSCWuzG8Cyo4MFQzqKcC14ct4ybAWyrAc9qzdJaFYTL > myriad.pdf`, again replacing "Qm..." with the appropriate hash and myriad.pdf with the name of the file you'd like to generate.
    * The file has been decrypted and can now be accessed!

## Summary



## Resources

* [IPFS Website](https://ipfs.io/)
* [IPFS Blog](https://blog.ipfs.io/)
* [IPFS Github](https://github.com/ipfs/ipfs)
* [Medium article - Learn to securely share files on the blockchain with IPFS!](https://medium.com/@mycoralhealth/learn-to-securely-share-files-on-the-blockchain-with-ipfs-219ee47df54c)
