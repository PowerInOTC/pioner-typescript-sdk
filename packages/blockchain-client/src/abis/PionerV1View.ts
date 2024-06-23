export const PionerV1View = {
  _format: 'hh-sol-artifact-1',
  contractName: 'PionerV1View',
  sourceName: 'contracts/Libs/PionerV1View.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_pionerV1',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_pionerV1Compliance',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'contractId',
          type: 'uint256',
        },
      ],
      name: 'getContract',
      outputs: [
        {
          internalType: 'address',
          name: 'pA',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'pB',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'oracleId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'initiator',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interestRate',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isAPayingAPR',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'openTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'state',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'frontEnd',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'hedger',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'affiliate',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'cancelTime',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
      ],
      name: 'getKycData',
      outputs: [
        {
          internalType: 'bool',
          name: 'waitingKyc',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: 'kycLinkedAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'kycType',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'maxPosition',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'nextMaxPosition',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastKycUpdate',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isKycPaused',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'oracleId',
          type: 'uint256',
        },
      ],
      name: 'getOracle',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'assetHex',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'oracleType',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastBid',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastAsk',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'publicOracleAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'maxConfidence',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'x',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'parity',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'maxDelay',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastPrice',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastPriceUpdateTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'imA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'imB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'dfA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'dfB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiryA',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiryB',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'timeLock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'cType',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'forceCloseType',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'kycAddress',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'isPaused',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'deployTime',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
      ],
      name: 'getUserRelatedInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'openPositionNumber',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'owedAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalOwedAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalOwedAmountPaid',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gracePeriodLockedWithdrawBalance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gracePeriodLockedTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'minimumOpenPartialFillNotional',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'sponsorReward',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'oracleLength',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'contractLength',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'closeQuoteLength',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  bytecode:
    '0x60803461008d57601f610fd838819003918201601f19168301916001600160401b0383118484101761009257808492604094855283398101031261008d57610052602061004b836100a8565b92016100a8565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055604051610f1b90816100bd8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008d5756fe6101e08060405260048036101561001557600080fd5b600091823560e01c90816310a9de6014610aae575080636c54933a1461077a5780636ebc8c86146105275763e2201b801461004f57600080fd5b3461052357604036600319011261052357610068610e5b565b9082610072610e76565b8154604051630312cfbf60e31b81526001600160a01b038087168683018190529196921692909160249160209182898581895afa9889156104ab5787996104f2575b506040805163533cc35160e11b81526001600160a01b039283168a8201908152929093166020830152839183918291015b0381885afa9081156104e75786916104b6575b50604051635dee283960e01b815287810185905282818581895afa9081156104ab57879161047a575b50604051638738428d60e01b815288810186905290838286818a5afa91821561046f57889261043c575b50604051630b671e6f60e01b815289810187905292848487818b5afa9384156104315789946103fe575b506040516330edd9d960e11b81528a810188905294808688818c5afa958615610391578a966103cf575b5060405163db7e8c0f60e01b81528b8101899052818189818d5afa978815610353578c918c9961039c575b509082916040519a8b9263e47e445560e01b8452830152818c5afa978815610391578a9861035e575b506040516384ad716960e01b815298818a8d81845afa998a15610353578b9a610320575b50604051634e09898960e11b815282818e81855afa9b8c15610314579b6102e1575b5081906040519c8d809263734cd7c560e11b82525afa9a8b156102d6578d9b61029e575b506101609c506040519b8c528b015260408a01526060890152608088015260a087015260c086015260e0850152610100840152610120830152610140820152f35b90809b5081813d83116102cf575b6102b68183610e8c565b810103126102cb576101609c5051993861025d565b8c80fd5b503d6102ac565b6040513d8f823e3d90fd5b909a508181813d831161030d575b6102f98183610e8c565b8101031261030957519981610239565b8d80fd5b503d6102ef565b604051903d90823e3d90fd5b9099508181813d831161034c575b6103388183610e8c565b8101031261034857519838610217565b8a80fd5b503d61032e565b6040513d8d823e3d90fd5b9080985081813d831161038a575b6103768183610e8c565b81010312610386575196386101f3565b8980fd5b503d61036c565b6040513d8c823e3d90fd5b8380929a508193503d83116103c8575b6103b68183610e8c565b810103126103485751968b90826101ca565b503d6103ac565b9080965081813d83116103f7575b6103e78183610e8c565b810103126103865751943861019f565b503d6103dd565b9093508481813d831161042a575b6104168183610e8c565b8101031261042657519238610175565b8880fd5b503d61040c565b6040513d8b823e3d90fd5b9091508381813d8311610468575b6104548183610e8c565b810103126104645751903861014b565b8780fd5b503d61044a565b6040513d8a823e3d90fd5b90508281813d83116104a4575b6104918183610e8c565b810103126104a0575138610121565b8680fd5b503d610487565b6040513d89823e3d90fd5b90508181813d83116104e0575b6104cd8183610e8c565b810103126104dc5751386100f8565b8580fd5b503d6104c3565b6040513d88823e3d90fd5b9098508281813d831161051c575b61050a8183610e8c565b810103126104a05751976100e56100b4565b503d610500565b5080fd5b503461052357602036600319011261052357815460405163a1595d4560e01b81528235838201526101c093918490829060249082906001600160a01b03165afa92831561076f57829361064b575b50505060018060a01b038151169060018060a01b0360208201511690604081015160018060a01b03606083015116608083015160a084015160c085015160e0860151151590610100870151926101208801519460018060a01b036101408a0151169660018060a01b036101608b015116986101a060018060a01b036101808d0151169b01519b60206040519e8f908152015260408d015260608c015260808b015260a08a015260c089015260e08801526101008701526101208601526101408501526101608401526101808301526101a0820152f35b909192508382813d8311610768575b6106648183610e8c565b8101031261076457604051928484019184831067ffffffffffffffff84111761075157505060405261069581610ec4565b82526106a360208201610ec4565b6020830152604081015160408301526106be60608201610ec4565b60608301526080810151608083015260a081015160a083015260c081015160c08301526106ed60e08201610ed8565b60e083015261010080820151908301526101208082015190830152610140610716818301610ec4565b90830152610160610728818301610ec4565b9083015261018061073a818301610ec4565b908301526101a08091015190820152388080610575565b634e487b7160e01b825260419052602490fd5b8280fd5b503d61065a565b6040513d84823e3d90fd5b503461052357604036600319011261052357906107e791610799610e5b565b916107a2610e76565b600154604080516304cd5feb60e41b81526001600160a01b03878116828801908152948116602086810191909152989381169791969094909391928992889283920190565b0381895afa948515610aa3578495610a68575b506040516373a16ebb60e01b815290831682820181905296602493818386818b5afa9283156104e7578693610a31575b5060405163a840d60b60e01b81528481018a905292828487818c5afa9384156104ab578794610a02575b50604051636349878360e01b81528581018b905299838b88818d5afa95861561046f5788966109d0575b8a9b508488999a9b604051998a8092630464232760e01b825286868301525afa978815610391579089918b9961099d575b50858d6040519b8c8092630719343560e21b825287868301525afa998a15610353578b9a61096e575b50908592916040519d8e938492638c861b6160e01b84528301525afa978815610314578098610931575b5060e099506040519815158952169087015260408601526060850152608084015260a0830152151560c0820152f35b909750828a813d8311610967575b6109498183610e8c565b81010312610964575061095d60e099610ed8565b9638610902565b80fd5b503d61093f565b9099508581813d8311610996575b6109868183610e8c565b81010312610348575198856108d8565b503d61097c565b8680929a508193503d83116109c9575b6109b78183610e8c565b810103126103865788905197386108af565b503d6109ad565b9550838b813d83116109fb575b6109e78183610e8c565b8101031261046457995198998a999561087e565b503d6109dd565b9093508281813d8311610a2a575b610a1a8183610e8c565b810103126104a057519238610854565b503d610a10565b9092508181813d8311610a61575b610a498183610e8c565b810103126104dc57610a5a90610ec4565b913861082a565b503d610a3f565b9094508681813d8311610a9c575b610a808183610e8c565b81010312610a9857610a9190610ed8565b93386107fa565b8380fd5b503d610a76565b6040513d86823e3d90fd5b919050346107645760203660031901126107645782546301d3e56960e61b83528135838301526103809391908490849060249082906001600160a01b03165afa801561076f578261018052610cab575b6103406102606102406102206102006101e06101c06101a061016060ff61014061012061010060c0610180519d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e519e6020810151885260a0810151855201519e60e060018060a01b03910151169f01519f01519f0151169e01519e01519e01519e01519e01519e01519e01519e01519e610280810151610100526102a08101516080526102c081015160c0526102e08101516101c05260018060a01b036103008201511661012052610320810151151561016052015160e0526040518060a052526101a051602060a051015261014051604060a0510152606060a0510152608060a051015260a08051015260c060a051015260e060a051015261010060a051015261012060a051015261014060a051015261016060a051015261018060a05101526101a060a05101526101c060a05101526101e060a05101526101005161020060a051015260805161022060a051015260c05161024060a05101526101c05161026060a05101526101205161028060a0510152610160516102a060a051015260e0516102c060a05101526102e060a051f35b8383813d8311610e54575b610cc08183610e8c565b81010312610523576040519384019084821067ffffffffffffffff831117610e4157506040528151835260208201516020840152610d0060408301610ec4565b6040840152606082015160608401526080820151608084015260a082015160a084015260c082015160c0840152610d3960e08301610ec4565b60e084015261010080830151908401526101208083015190840152610140808301519160ff83168303610964575083015261016080820151908301526101808101516101808301526101a080820151908301526101c080820151908301526101e08082015190830152610200808201519083015261022080820151908301526102408082015190830152610260808201519083015261028080820151908301526102a080820151908301526102c080820151908301526102e08082015190830152610300610e08818301610ec4565b90830152610320610e1a818301610ed8565b90830152610340808201519083015261036080910151908201526101805238808080610afe565b634e487b7160e01b835260419052602482fd5b503d610cb6565b600435906001600160a01b0382168203610e7157565b600080fd5b602435906001600160a01b0382168203610e7157565b90601f8019910116810190811067ffffffffffffffff821117610eae57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203610e7157565b51908115158203610e715756fea26469706673582212205ab8649d22972cfcf3b0853334539de00e71ec211b2665d266a19840a47bc32264736f6c63430008140033',
  deployedBytecode:
    '0x6101e08060405260048036101561001557600080fd5b600091823560e01c90816310a9de6014610aae575080636c54933a1461077a5780636ebc8c86146105275763e2201b801461004f57600080fd5b3461052357604036600319011261052357610068610e5b565b9082610072610e76565b8154604051630312cfbf60e31b81526001600160a01b038087168683018190529196921692909160249160209182898581895afa9889156104ab5787996104f2575b506040805163533cc35160e11b81526001600160a01b039283168a8201908152929093166020830152839183918291015b0381885afa9081156104e75786916104b6575b50604051635dee283960e01b815287810185905282818581895afa9081156104ab57879161047a575b50604051638738428d60e01b815288810186905290838286818a5afa91821561046f57889261043c575b50604051630b671e6f60e01b815289810187905292848487818b5afa9384156104315789946103fe575b506040516330edd9d960e11b81528a810188905294808688818c5afa958615610391578a966103cf575b5060405163db7e8c0f60e01b81528b8101899052818189818d5afa978815610353578c918c9961039c575b509082916040519a8b9263e47e445560e01b8452830152818c5afa978815610391578a9861035e575b506040516384ad716960e01b815298818a8d81845afa998a15610353578b9a610320575b50604051634e09898960e11b815282818e81855afa9b8c15610314579b6102e1575b5081906040519c8d809263734cd7c560e11b82525afa9a8b156102d6578d9b61029e575b506101609c506040519b8c528b015260408a01526060890152608088015260a087015260c086015260e0850152610100840152610120830152610140820152f35b90809b5081813d83116102cf575b6102b68183610e8c565b810103126102cb576101609c5051993861025d565b8c80fd5b503d6102ac565b6040513d8f823e3d90fd5b909a508181813d831161030d575b6102f98183610e8c565b8101031261030957519981610239565b8d80fd5b503d6102ef565b604051903d90823e3d90fd5b9099508181813d831161034c575b6103388183610e8c565b8101031261034857519838610217565b8a80fd5b503d61032e565b6040513d8d823e3d90fd5b9080985081813d831161038a575b6103768183610e8c565b81010312610386575196386101f3565b8980fd5b503d61036c565b6040513d8c823e3d90fd5b8380929a508193503d83116103c8575b6103b68183610e8c565b810103126103485751968b90826101ca565b503d6103ac565b9080965081813d83116103f7575b6103e78183610e8c565b810103126103865751943861019f565b503d6103dd565b9093508481813d831161042a575b6104168183610e8c565b8101031261042657519238610175565b8880fd5b503d61040c565b6040513d8b823e3d90fd5b9091508381813d8311610468575b6104548183610e8c565b810103126104645751903861014b565b8780fd5b503d61044a565b6040513d8a823e3d90fd5b90508281813d83116104a4575b6104918183610e8c565b810103126104a0575138610121565b8680fd5b503d610487565b6040513d89823e3d90fd5b90508181813d83116104e0575b6104cd8183610e8c565b810103126104dc5751386100f8565b8580fd5b503d6104c3565b6040513d88823e3d90fd5b9098508281813d831161051c575b61050a8183610e8c565b810103126104a05751976100e56100b4565b503d610500565b5080fd5b503461052357602036600319011261052357815460405163a1595d4560e01b81528235838201526101c093918490829060249082906001600160a01b03165afa92831561076f57829361064b575b50505060018060a01b038151169060018060a01b0360208201511690604081015160018060a01b03606083015116608083015160a084015160c085015160e0860151151590610100870151926101208801519460018060a01b036101408a0151169660018060a01b036101608b015116986101a060018060a01b036101808d0151169b01519b60206040519e8f908152015260408d015260608c015260808b015260a08a015260c089015260e08801526101008701526101208601526101408501526101608401526101808301526101a0820152f35b909192508382813d8311610768575b6106648183610e8c565b8101031261076457604051928484019184831067ffffffffffffffff84111761075157505060405261069581610ec4565b82526106a360208201610ec4565b6020830152604081015160408301526106be60608201610ec4565b60608301526080810151608083015260a081015160a083015260c081015160c08301526106ed60e08201610ed8565b60e083015261010080820151908301526101208082015190830152610140610716818301610ec4565b90830152610160610728818301610ec4565b9083015261018061073a818301610ec4565b908301526101a08091015190820152388080610575565b634e487b7160e01b825260419052602490fd5b8280fd5b503d61065a565b6040513d84823e3d90fd5b503461052357604036600319011261052357906107e791610799610e5b565b916107a2610e76565b600154604080516304cd5feb60e41b81526001600160a01b03878116828801908152948116602086810191909152989381169791969094909391928992889283920190565b0381895afa948515610aa3578495610a68575b506040516373a16ebb60e01b815290831682820181905296602493818386818b5afa9283156104e7578693610a31575b5060405163a840d60b60e01b81528481018a905292828487818c5afa9384156104ab578794610a02575b50604051636349878360e01b81528581018b905299838b88818d5afa95861561046f5788966109d0575b8a9b508488999a9b604051998a8092630464232760e01b825286868301525afa978815610391579089918b9961099d575b50858d6040519b8c8092630719343560e21b825287868301525afa998a15610353578b9a61096e575b50908592916040519d8e938492638c861b6160e01b84528301525afa978815610314578098610931575b5060e099506040519815158952169087015260408601526060850152608084015260a0830152151560c0820152f35b909750828a813d8311610967575b6109498183610e8c565b81010312610964575061095d60e099610ed8565b9638610902565b80fd5b503d61093f565b9099508581813d8311610996575b6109868183610e8c565b81010312610348575198856108d8565b503d61097c565b8680929a508193503d83116109c9575b6109b78183610e8c565b810103126103865788905197386108af565b503d6109ad565b9550838b813d83116109fb575b6109e78183610e8c565b8101031261046457995198998a999561087e565b503d6109dd565b9093508281813d8311610a2a575b610a1a8183610e8c565b810103126104a057519238610854565b503d610a10565b9092508181813d8311610a61575b610a498183610e8c565b810103126104dc57610a5a90610ec4565b913861082a565b503d610a3f565b9094508681813d8311610a9c575b610a808183610e8c565b81010312610a9857610a9190610ed8565b93386107fa565b8380fd5b503d610a76565b6040513d86823e3d90fd5b919050346107645760203660031901126107645782546301d3e56960e61b83528135838301526103809391908490849060249082906001600160a01b03165afa801561076f578261018052610cab575b6103406102606102406102206102006101e06101c06101a061016060ff61014061012061010060c0610180519d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e9d8e519e6020810151885260a0810151855201519e60e060018060a01b03910151169f01519f01519f0151169e01519e01519e01519e01519e01519e01519e01519e01519e610280810151610100526102a08101516080526102c081015160c0526102e08101516101c05260018060a01b036103008201511661012052610320810151151561016052015160e0526040518060a052526101a051602060a051015261014051604060a0510152606060a0510152608060a051015260a08051015260c060a051015260e060a051015261010060a051015261012060a051015261014060a051015261016060a051015261018060a05101526101a060a05101526101c060a05101526101e060a05101526101005161020060a051015260805161022060a051015260c05161024060a05101526101c05161026060a05101526101205161028060a0510152610160516102a060a051015260e0516102c060a05101526102e060a051f35b8383813d8311610e54575b610cc08183610e8c565b81010312610523576040519384019084821067ffffffffffffffff831117610e4157506040528151835260208201516020840152610d0060408301610ec4565b6040840152606082015160608401526080820151608084015260a082015160a084015260c082015160c0840152610d3960e08301610ec4565b60e084015261010080830151908401526101208083015190840152610140808301519160ff83168303610964575083015261016080820151908301526101808101516101808301526101a080820151908301526101c080820151908301526101e08082015190830152610200808201519083015261022080820151908301526102408082015190830152610260808201519083015261028080820151908301526102a080820151908301526102c080820151908301526102e08082015190830152610300610e08818301610ec4565b90830152610320610e1a818301610ed8565b90830152610340808201519083015261036080910151908201526101805238808080610afe565b634e487b7160e01b835260419052602482fd5b503d610cb6565b600435906001600160a01b0382168203610e7157565b600080fd5b602435906001600160a01b0382168203610e7157565b90601f8019910116810190811067ffffffffffffffff821117610eae57604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203610e7157565b51908115158203610e715756fea26469706673582212205ab8649d22972cfcf3b0853334539de00e71ec211b2665d266a19840a47bc32264736f6c63430008140033',
  linkReferences: {},
  deployedLinkReferences: {},
};
