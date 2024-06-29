export const PionerV1Default = {
  "_format": "hh-sol-artifact-1",
  "contractName": "PionerV1Default",
  "sourceName": "contracts/Functions/PionerV1Default.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_pionerV1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_pionerV1Compliance",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "flashAuctionBuyBackEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "liquidatedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "settledEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "settleAndLiquidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60803461008f57601f62001cff38819003918201601f19168301916001600160401b0383118484101761009457808492604094855283398101031261008f57610053602061004c836100aa565b92016100aa565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055604051611c409081620000bf8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008f5756fe608080604052600436101561001357600080fd5b6000803560e01c635a03f9ca1461002957600080fd5b3461081a57602036600319011261081a57805463a1595d4560e01b835260048035908401526001600160a01b0316916101c0908181602481875afa908115611b015783916119fb575b5060408101516040519485916301d3e56960e61b835260048301528160246103809384935afa948515611654578495611852575b505060015460405163a840d60b60e01b815233600482015290602090829060249082906001600160a01b03165afa801561165457849061181f575b60069150146117ed576002610120820151036117bb5761010a8285015161016086015190611b79565b421161178a576080810151936101a081015160a083015160c08401516101008501519160e08601511515936040519963629acbc760e11b8b5260048b015260248a015260448901526064880152608487015260a486015260408560c48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af49485156116545784908596611749575b5060808301516101a083015160a08501516101e08501516102208601516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af490811561173e57869161170c575b5060808401516101a084015160a08601516102008601516102408701516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af49081156108f75787916116da575b50670de0b6b3a7640000610299608087015160a088015190611b9c565b1061169557670de0b6b3a76400006102ba608087015160a088015190611b9c565b0497879015610ece5782841115610dea57828410610da557875461033e906020906001600160a01b03166102ee8688611bfd565b8951838b015160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529283919082908d90829060a4820190565b03925af1908115610d60578991610d73575b5061035c819486611bfd565b03610d6b575b15610b11575061038b90670de0b6b3a7640000610384896101e0870151611b9c565b0490611b79565b6103a061024084015161020085015190611b79565b6102208401518754604051631f8366b360e11b81526001600160a01b0390911694929190602081600481895afa908115610b06578a91610ad4575b50670de0b6b3a764000081810311610ac0579961040d670de0b6b3a76400009384610384610412958e9f830390611b9c565b611b9c565b049061041e8282611b79565b9384808510610945575050875460208781015160405163e95e380f60e01b815293919284926001600160a01b039182169284928e92849261046492169060048401611bcf565b03925af1801561093a57610906575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f75787916108e3575b5050818111610868575b50505b81516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845460208401519082169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610845578591610854575b5050835482516001600160a01b039182169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af190811561084557859161082c575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a15b83546001600160a01b0316803b15610828576103609385610564926101a0829660405198899788966391cd1cbf60e01b8852815160048901526020820151602489015260018060a01b036040830151166044890152606082015160648901526080820151608489015260a082015160a489015260c082015160c489015260018060a01b0360e08301511660e489015261010082015161010489015261012082015161012489015260ff61014083015116610144890152610160820151610164890152610180820151610184890152848201516101a48901528101516101c48801526101e08101516101e48801526102008101516102048801526102208101516102248801526102408101516102448801526102608101516102648801526102808101516102848801526102a08101516102a48801526102c08101516102c48801526102e08101516102e488015260018060a01b03610300820151166103048801526103208101511515610324880152610340810151610344880152015161036486015260018060a01b0381511661038486015260018060a01b036020820151166103a486015260408101516103c486015260018060a01b036060820151166103e4860152608081015161040486015260a081015161042486015260c081015161044486015260e081015115156104648601526101008101516104848601526101208101516104a486015260018060a01b03610140820151166104c486015260018060a01b03610160820151166104e486015260018060a01b036101808201511661050486015201516105248401526004356105448401525af1801561081d5761080a5750f35b61081390611b0c565b61081a5780f35b80fd5b6040513d84823e3d90fd5b8480fd5b61083590611b0c565b610840578338610575565b505050fd5b6040513d87823e3d90fd5b8580fd5b61085d90611b0c565b61084057833861052e565b855484516001600160a01b03918216939116916108859190611bfd565b823b156108df576040516310f29c1d60e11b81526001600160a01b0392909216600483015260248201529085908290604490829084905af1908115610845578591156104be576108d490611b0c565b6108405783386104be565b8680fd5b6108ec90611b0c565b6108505785386104b4565b6040513d89823e3d90fd5b8780fd5b6020809298503d8311610933575b61091e8183611b36565b8101031261092e57869538610473565b600080fd5b503d610914565b6040513d8a823e3d90fd5b60209193506109609061095b6109959487611b9c565b611baf565b61096a8186611bfd565b9360018060a01b03838a015116918b60405180968195829463e95e380f60e01b845260048401611bcf565b03925af1801561093a57610a91575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f7578791610a7d575b505085546001600160a01b0316916109fd9190611bfd565b835160208501516001600160a01b0391821693911690803b156109025760405163387743f760e21b815260048101939093526001600160a01b039384166024840152921660448201529085908290606490829084905af1908115610845578591610a69575b50506104c1565b610a7290611b0c565b610840578338610a62565b610a8690611b0c565b6108505785386109e5565b6020809298503d8311610ab9575b610aa98183611b36565b8101031261092e578695386109a4565b503d610a9f565b634e487b7160e01b8a52601160045260248afd5b90506020813d602011610afe575b81610aef60209383611b36565b8101031261092e5751386103db565b3d9150610ae2565b6040513d8c823e3d90fd5b90508596670de0b6b3a7640000610b3760018060a01b0389541692610220870151611b9c565b604051631f8366b360e11b8152919004602082600481865afa918215610d60578992610d28575b5090610b6991611b9c565b813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f7578791610d14575b5050610be991610bb960209260018060a01b0389541692611b79565b8583015160405163e95e380f60e01b81529485939284928b92849290916001600160a01b03169060048401611bcf565b03925af1801561084557610ce5575b508354825160808401516101a08401516101e0850151936001600160a01b03938416939192911690813b15610ce15760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c481015b03925af1908115610845578591610ccd575b50506101a08101516080830152828101516101008301527f9b57fb9f981408812d891144415d662cd21510220f5b721f8f6c06f61b93774960206040516004358152a16105a4565b610cd690611b0c565b610840578338610c85565b8880fd5b6020809295503d8311610d0d575b610cfd8183611b36565b8101031261092e57839238610bf8565b503d610cf3565b610d1d90611b0c565b610850578538610b9d565b915097506020813d602011610d58575b81610d4560209383611b36565b8101031261092e57518897610b69610b5e565b3d9150610d38565b6040513d8b823e3d90fd5b506001610362565b90506020813d602011610d9d575b81610d8e60209383611b36565b8101031261092e575138610350565b3d9150610d81565b60405162461bcd60e51b815260206004820152601760248201527f44656661756c743a556e646572666c6f77436865636b330000000000000000006044820152606490fd5b91838110610e89578754610e3e916020916001600160a01b031690610e10908790611bfd565b885160405163e95e380f60e01b81529485939284928e92849290916001600160a01b03169060048401611bcf565b03925af190811561093a578891610e57575b5091610362565b90506020813d602011610e81575b81610e7260209383611b36565b8101031261092e575138610e50565b3d9150610e65565b60405162461bcd60e51b815260206004820152601760248201527f44656661756c743a556e646572666c6f77436865636b340000000000000000006044820152606490fd5b508654610f3d9291906020906001600160a01b0316610eed8387611b79565b88830151895160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529485919082908c90829060a4820190565b03925af192831561093a57889361165f575b50610f5a9084611b79565b82146114225750610f7d90670de0b6b3a764000061038489610200870151611b9c565b610f926102208401516101e085015190611b79565b6102408401518754604051631f8366b360e11b81526001600160a01b0390911694929190602081600481895afa908115610b06578a916113f0575b50670de0b6b3a764000081810311610ac0579961040d670de0b6b3a76400009384610384610fff958e9f830390611b9c565b049061100b8282611b79565b938480851061127c5750508754865160405163e95e380f60e01b81529260209284926001600160a01b039182169284928e928492611050929091169060048401611bcf565b03925af1801561093a5761124d575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f7578791611239575b50508181116111bf575b50505b60208201516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845483519082169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af19081156108455785916111ab575b5050835460208301516001600160a01b039182169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610845578591611197575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a16105a4565b6111a090611b0c565b610840578338611164565b6111b490611b0c565b61084057833861111a565b855460208501516001600160a01b03918216939116916111df9190611bfd565b823b156108df576040516310f29c1d60e11b81526001600160a01b0392909216600483015260248201529085908290604490829084905af1908115610845578591156110aa5761122e90611b0c565b6108405783386110aa565b61124290611b0c565b6108505785386110a0565b6020809298503d8311611275575b6112658183611b36565b8101031261092e5786953861105f565b503d61125b565b60209193506112929061095b6112c59487611b9c565b61129c8186611bfd565b9360018060a01b03895116918b60405180968195829463e95e380f60e01b845260048401611bcf565b03925af1801561093a576113c1575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f75787916113ad575b505085546001600160a01b03169161132d9190611bfd565b602084015184516001600160a01b0391821693911690803b156109025760405163387743f760e21b815260048101939093526001600160a01b039384166024840152921660448201529085908290606490829084905af1908115610845578591611399575b50506110ad565b6113a290611b0c565b610840578338611392565b6113b690611b0c565b610850578538611315565b6020809298503d83116113e9575b6113d98183611b36565b8101031261092e578695386112d4565b503d6113cf565b90506020813d60201161141a575b8161140b60209383611b36565b8101031261092e575138610fcd565b3d91506113fe565b9596879150670de0b6b3a764000061144960018060a01b0384541692610220870151611b9c565b604051631f8366b360e11b8152919004602082600481865afa90811561165457849161161a575b61147a9250611b9c565b90803b15611616576024839260405194859384926357b00f1d60e01b845260048401525af180156108f757611603575b508481106115be57855486956114fe926020926001600160a01b0316916114d091611bfd565b855160405163e95e380f60e01b81529485939284928b92849290916001600160a01b03169060048401611bcf565b03925af180156108455761158f575b508354602083015160808401516101a0840151610200850151936001600160a01b03938416939192911690813b15610ce15760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c48101610c73565b6020809295503d83116115b7575b6115a78183611b36565b8101031261092e5783923861150d565b503d61159d565b60405162461bcd60e51b815260206004820152601860248201527f44656661756c743a556e646572666c6f77436865636b313200000000000000006044820152606490fd5b61160f90969196611b0c565b94386114aa565b8280fd5b90506020823d60201161164c575b8161163560209383611b36565b810103126116485761147a915190611470565b8380fd5b3d9150611628565b6040513d86823e3d90fd5b9092506020813d60201161168d575b8161167b60209383611b36565b81010312610902575191610f5a610f4f565b3d915061166e565b60405162461bcd60e51b815260206004820152601760248201527f44656661756c743a556e646572666c6f77436865636b320000000000000000006044820152606490fd5b90506020813d602011611704575b816116f560209383611b36565b810103126108df57513861027c565b3d91506116e8565b90506020813d602011611736575b8161172760209383611b36565b81010312610850575138610205565b3d915061171a565b6040513d88823e3d90fd5b9550506040853d604011611782575b8161176560409383611b36565b810103126116485761177b602086519601611b6c565b943861018e565b3d9150611758565b60405162461bcd60e51b81526020600482015260096024820152682232b330bab63a191960b91b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a6024820152692232b330bab63a1918b160b11b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a60248201526944656661756c7432316160b01b6044820152606490fd5b506020813d60201161184a575b8161183960209383611b36565b8101031261164857600690516100e1565b3d915061182c565b908092955081813d83116119f4575b61186b8183611b36565b810103126116485760405191820182811067ffffffffffffffff8211176119e05760405280518252602081015160208301526118a960408201611b58565b6040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526118e260e08201611b58565b60e083015261010080820151908301526101208082015190830152610140808201519060ff8216820361085057830152610160808201519083015261018080820151908301526101a0808201519083015282810151838301526101e08082015190830152610200808201519083015261022080820151908301526102408082015190830152610260808201519083015261028080820151908301526102a080820151908301526102c080820151908301526102e080820151908301526103006119ac818301611b58565b908301526103206119be818301611b6c565b90830152610340808201519083015261036080910151908201529238806100a6565b634e487b7160e01b85526041600452602485fd5b503d611861565b90508181813d8311611afa575b611a128183611b36565b81010312611616576040519082820182811067ffffffffffffffff8211176119e057604052611a4081611b58565b8252611a4e60208201611b58565b602083015260408101516040830152611a6960608201611b58565b60608301526080810151608083015260a081015160a083015260c081015160c0830152611a9860e08201611b6c565b60e083015261010080820151908301526101208082015190830152610140611ac1818301611b58565b90830152610160611ad3818301611b58565b90830152610180611ae5818301611b58565b908301526101a0809101519082015238610072565b503d611a08565b6040513d85823e3d90fd5b67ffffffffffffffff8111611b2057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611b2057604052565b51906001600160a01b038216820361092e57565b5190811515820361092e57565b91908201809211611b8657565b634e487b7160e01b600052601160045260246000fd5b81810292918115918404141715611b8657565b8115611bb9570490565b634e487b7160e01b600052601260045260246000fd5b9081526001600160a01b03909116602082015260006040820181905260016060830152608082015260a00190565b91908203918211611b865756fea26469706673582212201e6e8f7b60525ed38d93834c95dc634b3bf4d41df61f2ee740337a8d2470271c64736f6c63430008140033",
  "deployedBytecode": "0x608080604052600436101561001357600080fd5b6000803560e01c635a03f9ca1461002957600080fd5b3461081a57602036600319011261081a57805463a1595d4560e01b835260048035908401526001600160a01b0316916101c0908181602481875afa908115611b015783916119fb575b5060408101516040519485916301d3e56960e61b835260048301528160246103809384935afa948515611654578495611852575b505060015460405163a840d60b60e01b815233600482015290602090829060249082906001600160a01b03165afa801561165457849061181f575b60069150146117ed576002610120820151036117bb5761010a8285015161016086015190611b79565b421161178a576080810151936101a081015160a083015160c08401516101008501519160e08601511515936040519963629acbc760e11b8b5260048b015260248a015260448901526064880152608487015260a486015260408560c48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af49485156116545784908596611749575b5060808301516101a083015160a08501516101e08501516102208601516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af490811561173e57869161170c575b5060808401516101a084015160a08601516102008601516102408701516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af49081156108f75787916116da575b50670de0b6b3a7640000610299608087015160a088015190611b9c565b1061169557670de0b6b3a76400006102ba608087015160a088015190611b9c565b0497879015610ece5782841115610dea57828410610da557875461033e906020906001600160a01b03166102ee8688611bfd565b8951838b015160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529283919082908d90829060a4820190565b03925af1908115610d60578991610d73575b5061035c819486611bfd565b03610d6b575b15610b11575061038b90670de0b6b3a7640000610384896101e0870151611b9c565b0490611b79565b6103a061024084015161020085015190611b79565b6102208401518754604051631f8366b360e11b81526001600160a01b0390911694929190602081600481895afa908115610b06578a91610ad4575b50670de0b6b3a764000081810311610ac0579961040d670de0b6b3a76400009384610384610412958e9f830390611b9c565b611b9c565b049061041e8282611b79565b9384808510610945575050875460208781015160405163e95e380f60e01b815293919284926001600160a01b039182169284928e92849261046492169060048401611bcf565b03925af1801561093a57610906575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f75787916108e3575b5050818111610868575b50505b81516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845460208401519082169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610845578591610854575b5050835482516001600160a01b039182169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af190811561084557859161082c575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a15b83546001600160a01b0316803b15610828576103609385610564926101a0829660405198899788966391cd1cbf60e01b8852815160048901526020820151602489015260018060a01b036040830151166044890152606082015160648901526080820151608489015260a082015160a489015260c082015160c489015260018060a01b0360e08301511660e489015261010082015161010489015261012082015161012489015260ff61014083015116610144890152610160820151610164890152610180820151610184890152848201516101a48901528101516101c48801526101e08101516101e48801526102008101516102048801526102208101516102248801526102408101516102448801526102608101516102648801526102808101516102848801526102a08101516102a48801526102c08101516102c48801526102e08101516102e488015260018060a01b03610300820151166103048801526103208101511515610324880152610340810151610344880152015161036486015260018060a01b0381511661038486015260018060a01b036020820151166103a486015260408101516103c486015260018060a01b036060820151166103e4860152608081015161040486015260a081015161042486015260c081015161044486015260e081015115156104648601526101008101516104848601526101208101516104a486015260018060a01b03610140820151166104c486015260018060a01b03610160820151166104e486015260018060a01b036101808201511661050486015201516105248401526004356105448401525af1801561081d5761080a5750f35b61081390611b0c565b61081a5780f35b80fd5b6040513d84823e3d90fd5b8480fd5b61083590611b0c565b610840578338610575565b505050fd5b6040513d87823e3d90fd5b8580fd5b61085d90611b0c565b61084057833861052e565b855484516001600160a01b03918216939116916108859190611bfd565b823b156108df576040516310f29c1d60e11b81526001600160a01b0392909216600483015260248201529085908290604490829084905af1908115610845578591156104be576108d490611b0c565b6108405783386104be565b8680fd5b6108ec90611b0c565b6108505785386104b4565b6040513d89823e3d90fd5b8780fd5b6020809298503d8311610933575b61091e8183611b36565b8101031261092e57869538610473565b600080fd5b503d610914565b6040513d8a823e3d90fd5b60209193506109609061095b6109959487611b9c565b611baf565b61096a8186611bfd565b9360018060a01b03838a015116918b60405180968195829463e95e380f60e01b845260048401611bcf565b03925af1801561093a57610a91575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f7578791610a7d575b505085546001600160a01b0316916109fd9190611bfd565b835160208501516001600160a01b0391821693911690803b156109025760405163387743f760e21b815260048101939093526001600160a01b039384166024840152921660448201529085908290606490829084905af1908115610845578591610a69575b50506104c1565b610a7290611b0c565b610840578338610a62565b610a8690611b0c565b6108505785386109e5565b6020809298503d8311610ab9575b610aa98183611b36565b8101031261092e578695386109a4565b503d610a9f565b634e487b7160e01b8a52601160045260248afd5b90506020813d602011610afe575b81610aef60209383611b36565b8101031261092e5751386103db565b3d9150610ae2565b6040513d8c823e3d90fd5b90508596670de0b6b3a7640000610b3760018060a01b0389541692610220870151611b9c565b604051631f8366b360e11b8152919004602082600481865afa918215610d60578992610d28575b5090610b6991611b9c565b813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f7578791610d14575b5050610be991610bb960209260018060a01b0389541692611b79565b8583015160405163e95e380f60e01b81529485939284928b92849290916001600160a01b03169060048401611bcf565b03925af1801561084557610ce5575b508354825160808401516101a08401516101e0850151936001600160a01b03938416939192911690813b15610ce15760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c481015b03925af1908115610845578591610ccd575b50506101a08101516080830152828101516101008301527f9b57fb9f981408812d891144415d662cd21510220f5b721f8f6c06f61b93774960206040516004358152a16105a4565b610cd690611b0c565b610840578338610c85565b8880fd5b6020809295503d8311610d0d575b610cfd8183611b36565b8101031261092e57839238610bf8565b503d610cf3565b610d1d90611b0c565b610850578538610b9d565b915097506020813d602011610d58575b81610d4560209383611b36565b8101031261092e57518897610b69610b5e565b3d9150610d38565b6040513d8b823e3d90fd5b506001610362565b90506020813d602011610d9d575b81610d8e60209383611b36565b8101031261092e575138610350565b3d9150610d81565b60405162461bcd60e51b815260206004820152601760248201527f44656661756c743a556e646572666c6f77436865636b330000000000000000006044820152606490fd5b91838110610e89578754610e3e916020916001600160a01b031690610e10908790611bfd565b885160405163e95e380f60e01b81529485939284928e92849290916001600160a01b03169060048401611bcf565b03925af190811561093a578891610e57575b5091610362565b90506020813d602011610e81575b81610e7260209383611b36565b8101031261092e575138610e50565b3d9150610e65565b60405162461bcd60e51b815260206004820152601760248201527f44656661756c743a556e646572666c6f77436865636b340000000000000000006044820152606490fd5b508654610f3d9291906020906001600160a01b0316610eed8387611b79565b88830151895160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529485919082908c90829060a4820190565b03925af192831561093a57889361165f575b50610f5a9084611b79565b82146114225750610f7d90670de0b6b3a764000061038489610200870151611b9c565b610f926102208401516101e085015190611b79565b6102408401518754604051631f8366b360e11b81526001600160a01b0390911694929190602081600481895afa908115610b06578a916113f0575b50670de0b6b3a764000081810311610ac0579961040d670de0b6b3a76400009384610384610fff958e9f830390611b9c565b049061100b8282611b79565b938480851061127c5750508754865160405163e95e380f60e01b81529260209284926001600160a01b039182169284928e928492611050929091169060048401611bcf565b03925af1801561093a5761124d575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f7578791611239575b50508181116111bf575b50505b60208201516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845483519082169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af19081156108455785916111ab575b5050835460208301516001600160a01b039182169116813b156108505785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610845578591611197575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a16105a4565b6111a090611b0c565b610840578338611164565b6111b490611b0c565b61084057833861111a565b855460208501516001600160a01b03918216939116916111df9190611bfd565b823b156108df576040516310f29c1d60e11b81526001600160a01b0392909216600483015260248201529085908290604490829084905af1908115610845578591156110aa5761122e90611b0c565b6108405783386110aa565b61124290611b0c565b6108505785386110a0565b6020809298503d8311611275575b6112658183611b36565b8101031261092e5786953861105f565b503d61125b565b60209193506112929061095b6112c59487611b9c565b61129c8186611bfd565b9360018060a01b03895116918b60405180968195829463e95e380f60e01b845260048401611bcf565b03925af1801561093a576113c1575b5086546001600160a01b031690813b156109025787916024839260405194859384926357b00f1d60e01b845260048401525af19081156108f75787916113ad575b505085546001600160a01b03169161132d9190611bfd565b602084015184516001600160a01b0391821693911690803b156109025760405163387743f760e21b815260048101939093526001600160a01b039384166024840152921660448201529085908290606490829084905af1908115610845578591611399575b50506110ad565b6113a290611b0c565b610840578338611392565b6113b690611b0c565b610850578538611315565b6020809298503d83116113e9575b6113d98183611b36565b8101031261092e578695386112d4565b503d6113cf565b90506020813d60201161141a575b8161140b60209383611b36565b8101031261092e575138610fcd565b3d91506113fe565b9596879150670de0b6b3a764000061144960018060a01b0384541692610220870151611b9c565b604051631f8366b360e11b8152919004602082600481865afa90811561165457849161161a575b61147a9250611b9c565b90803b15611616576024839260405194859384926357b00f1d60e01b845260048401525af180156108f757611603575b508481106115be57855486956114fe926020926001600160a01b0316916114d091611bfd565b855160405163e95e380f60e01b81529485939284928b92849290916001600160a01b03169060048401611bcf565b03925af180156108455761158f575b508354602083015160808401516101a0840151610200850151936001600160a01b03938416939192911690813b15610ce15760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c48101610c73565b6020809295503d83116115b7575b6115a78183611b36565b8101031261092e5783923861150d565b503d61159d565b60405162461bcd60e51b815260206004820152601860248201527f44656661756c743a556e646572666c6f77436865636b313200000000000000006044820152606490fd5b61160f90969196611b0c565b94386114aa565b8280fd5b90506020823d60201161164c575b8161163560209383611b36565b810103126116485761147a915190611470565b8380fd5b3d9150611628565b6040513d86823e3d90fd5b9092506020813d60201161168d575b8161167b60209383611b36565b81010312610902575191610f5a610f4f565b3d915061166e565b60405162461bcd60e51b815260206004820152601760248201527f44656661756c743a556e646572666c6f77436865636b320000000000000000006044820152606490fd5b90506020813d602011611704575b816116f560209383611b36565b810103126108df57513861027c565b3d91506116e8565b90506020813d602011611736575b8161172760209383611b36565b81010312610850575138610205565b3d915061171a565b6040513d88823e3d90fd5b9550506040853d604011611782575b8161176560409383611b36565b810103126116485761177b602086519601611b6c565b943861018e565b3d9150611758565b60405162461bcd60e51b81526020600482015260096024820152682232b330bab63a191960b91b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a6024820152692232b330bab63a1918b160b11b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a60248201526944656661756c7432316160b01b6044820152606490fd5b506020813d60201161184a575b8161183960209383611b36565b8101031261164857600690516100e1565b3d915061182c565b908092955081813d83116119f4575b61186b8183611b36565b810103126116485760405191820182811067ffffffffffffffff8211176119e05760405280518252602081015160208301526118a960408201611b58565b6040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526118e260e08201611b58565b60e083015261010080820151908301526101208082015190830152610140808201519060ff8216820361085057830152610160808201519083015261018080820151908301526101a0808201519083015282810151838301526101e08082015190830152610200808201519083015261022080820151908301526102408082015190830152610260808201519083015261028080820151908301526102a080820151908301526102c080820151908301526102e080820151908301526103006119ac818301611b58565b908301526103206119be818301611b6c565b90830152610340808201519083015261036080910151908201529238806100a6565b634e487b7160e01b85526041600452602485fd5b503d611861565b90508181813d8311611afa575b611a128183611b36565b81010312611616576040519082820182811067ffffffffffffffff8211176119e057604052611a4081611b58565b8252611a4e60208201611b58565b602083015260408101516040830152611a6960608201611b58565b60608301526080810151608083015260a081015160a083015260c081015160c0830152611a9860e08201611b6c565b60e083015261010080820151908301526101208082015190830152610140611ac1818301611b58565b90830152610160611ad3818301611b58565b90830152610180611ae5818301611b58565b908301526101a0809101519082015238610072565b503d611a08565b6040513d85823e3d90fd5b67ffffffffffffffff8111611b2057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117611b2057604052565b51906001600160a01b038216820361092e57565b5190811515820361092e57565b91908201809211611b8657565b634e487b7160e01b600052601160045260246000fd5b81810292918115918404141715611b8657565b8115611bb9570490565b634e487b7160e01b600052601260045260246000fd5b9081526001600160a01b03909116602082015260006040820181905260016060830152608082015260a00190565b91908203918211611b865756fea26469706673582212201e6e8f7b60525ed38d93834c95dc634b3bf4d41df61f2ee740337a8d2470271c64736f6c63430008140033",
  "linkReferences": {
    "contracts/Libs/PionerV1Utils.sol": {
      "PionerV1Utils": [
        {
          "length": 20,
          "start": 552
        },
        {
          "length": 20,
          "start": 673
        },
        {
          "length": 20,
          "start": 792
        }
      ]
    }
  },
  "deployedLinkReferences": {
    "contracts/Libs/PionerV1Utils.sol": {
      "PionerV1Utils": [
        {
          "length": 20,
          "start": 361
        },
        {
          "length": 20,
          "start": 482
        },
        {
          "length": 20,
          "start": 601
        }
      ]
    }
  }
}
