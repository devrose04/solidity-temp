/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Greeter, GreeterInterface } from "../Greeter";
import type { PromiseOrValue } from "../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "GreeterError",
    type: "error",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "greeting",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "throwError",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000977380380620009778339810160408190526200003491620001e2565b620000646040518060600160405280602281526020016200095560229139826200008160201b620002911760201c565b805162000079906000906020840190620000f3565b505062000336565b620000ce82826040516024016200009a929190620002c8565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b17909152620000d216565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546200010190620002fa565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001cc578181015183820152602001620001b2565b83811115620001dc576000848401525b50505050565b600060208284031215620001f557600080fd5b81516001600160401b03808211156200020d57600080fd5b818401915084601f8301126200022257600080fd5b81518181111562000237576200023762000199565b604051601f8201601f19908116603f0116810190838211818310171562000262576200026262000199565b816040528281528760208487010111156200027c57600080fd5b6200028f836020830160208801620001af565b979650505050505050565b60008151808452620002b4816020860160208601620001af565b601f01601f19169290920160200192915050565b604081526000620002dd60408301856200029a565b8281036020840152620002f181856200029a565b95945050505050565b600181811c908216806200030f57607f821691505b6020821081036200033057634e487b7160e01b600052602260045260246000fd5b50919050565b61060f80620003466000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632f7643a814610051578063a41368621461005b578063cfae32171461006e578063ef690cc01461008c575b600080fd5b610059610094565b005b61005961006936600461041c565b6100ad565b610076610171565b604051610083919061051a565b60405180910390f35b610076610203565b60405163c8508fc360e01b815260040160405180910390fd5b61015a6040518060600160405280602381526020016105e060239139600080546100d690610534565b80601f016020809104026020016040519081016040528092919081815260200182805461010290610534565b801561014f5780601f106101245761010080835404028352916020019161014f565b820191906000526020600020905b81548152906001019060200180831161013257829003601f168201915b5050505050836102eb565b805161016d90600090602084019061036d565b5050565b60606000805461018090610534565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610534565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b5050505050905090565b6000805461021090610534565b80601f016020809104026020016040519081016040528092919081815260200182805461023c90610534565b80156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505081565b61016d82826040516024016102a792919061056e565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16634b5c427760e01b17905261034c565b6103478383836040516024016103039392919061059c565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16632ced7cef60e01b17905261034c565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b82805461037990610534565b90600052602060002090601f01602090048101928261039b57600085556103e1565b82601f106103b457805160ff19168380011785556103e1565b828001600101855582156103e1579182015b828111156103e15782518255916020019190600101906103c6565b506103ed9291506103f1565b5090565b5b808211156103ed57600081556001016103f2565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561042e57600080fd5b813567ffffffffffffffff8082111561044657600080fd5b818401915084601f83011261045a57600080fd5b81358181111561046c5761046c610406565b604051601f8201601f19908116603f0116810190838211818310171561049457610494610406565b816040528281528760208487010111156104ad57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156104f3576020818501810151868301820152016104d7565b81811115610505576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061052d60208301846104cd565b9392505050565b600181811c9082168061054857607f821691505b60208210810361056857634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600061058160408301856104cd565b828103602084015261059381856104cd565b95945050505050565b6060815260006105af60608301866104cd565b82810360208401526105c181866104cd565b905082810360408401526105d581856104cd565b969550505050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a164736f6c634300080d000a4465706c6f79696e67206120477265657465722077697468206772656574696e673a";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _greeting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  override getDeployTransaction(
    _greeting: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  override attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  override connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
