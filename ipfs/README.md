# Interplanetary File System Testing

Testing a local IPFS setup. See below for instructions for storing and accessing encrypted documents. For more general information on IPFS, see the [research page](ipfs.md).

##### Table of Contents  
[What is IPFS?](#what-is-ipfs)  
[Basic Setup](#basic-setup)  
[Share an Encrypted Document](#share-an-encrypted-document)  
[Resources](#resources)

## What is IPFS?
The Interplanetary File System, or IPFS, is a protocol for file storage. Files are hashed before storage, with the optional addition of asymmetric encryption. Files are then stored on a peer-to-peer network and can be shared securely.

## Basic Setup
For a more thorough setup and how-to guide, see [this Medium article](https://medium.com/@mycoralhealth/learn-to-securely-share-files-on-the-blockchain-with-ipfs-219ee47df54c).

1. Clone down this repo and run `cd research/ipfs`.
1. Install GPG (for encryption) - on a Mac, run `brew install gnupg`. Follow [these instructions](http://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/) for other operating systems.
1. Generate a keypair with `gpg --gen-key`, following the prompts.
1. Install IPFS - visit the [IPFS install page](https://docs.ipfs.io/introduction/install/) to download the prebuilt package and install it.

## Share an Encrypted Document
Note: you will need two computers to complete the following steps.

1. Complete the [basic setup](#basic-setup) on both computers.
1. On the first computer, choose a file to share. It can be any file. Move this file to your working directory.
1. On the second computer, in a directory that is **not** a git repository, run `gpg --export --armor -email > pubkey.asc`. This will create the file `pubkey.asc`.
1. Securely send the `pubkey.asc` file to the first computer.
1. On the first computer:
  1. Move `pubkey.asc` to the cloned `research/ipfs` directory.
  1. Run `gpg --import pubkey.asc`.
  1. Run `gpg --list-keys`. This will display your local public key as `[ultimate]` and the second computer's public key as `[unknown]`. Take note of the name of the second computer's public key, which will be the string following `[unknown]`.  For this example, we'll say the name is "dwleonhardt".
  1. Run `gpg --encrypt --recipient "dwleonhardt" doc.pdf`, replacing `dwleonhardt` with your second computer's key and `doc.pdf` with your filename. This will create a new .gpg file.
  1. Start IPFS by running `ipfs init` and `ipfs daemon`.
  1. Add the encrypted file to IPFS by running `ipfs add doc.pdf.gpg`, again replacing `doc.pdf.gpg` with your .gpg filename. This command will output a text hash starting with `Qm...`.
  1. Share this `Qm...` hash with the second computer.
1. On the second computer:
  1. Start IPFS by running `ipfs init` and `ipfs daemon`.
  1. Run `ipfs get QmYqSCWuzG8Cyo4MFQzqKcC14ct4ybAWyrAc9qzdJaFYTL`, replacing `Qm...` with the hash received from the first computer. This will download the encrypted file.
  1. Decrypt the file by running `gpg --decrypt QmYqSCWuzG8Cyo4MFQzqKcC14ct4ybAWyrAc9qzdJaFYTL > myriad.pdf`, again replacing `Qm...` with the appropriate hash and `myriad.pdf` with the filename to generate.
  1. The file has been decrypted and can now be accessed!

## Resources

* [IPFS Website](https://ipfs.io/)
* [File Sharing Tutorial](https://medium.com/@mycoralhealth/learn-to-securely-share-files-on-the-blockchain-with-ipfs-219ee47df54c)
