# Fabric EVM Cross-chain Exploration

## How to enable cross-chaincode invocation?

In Burrow EVM, when contract A invokes contract B, it calls `GetAccount` to load the bytecode of B, and execute it in the same vm. However, in Fabric, this type of call is routed through peer via `InvokeChaincode` interface. We could implement the semantic of “retrieving the code of a contract” in Fabric to fulfill `GetAccount`, e.g. translating it to `GetState`, in which case, contract code is stored in the evmscc ledger with key being the address of account. Also, there are `EXTCODESIZE`, `EXTCODECOPY` and `BALANCE` opcodes in Burrow EVM that call `GetAccount` as well (we probably don’t care about the last one).



**Burrow EVM Fabric Intigration DOC:** https://docs.google.com/document/d/1xZfdtFiIFvHI7UZAze2xbm5hhgaDHGRBMusozKfpOck/edit#