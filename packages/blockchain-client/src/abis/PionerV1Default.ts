export const PionerV1Default = {
  _format: 'hh-sol-artifact-1',
  contractName: 'PionerV1Default',
  sourceName: 'contracts/Functions/PionerV1Default.sol',
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
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'bContractId',
          type: 'uint256',
        },
      ],
      name: 'flashAuctionBuyBackEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'bContractId',
          type: 'uint256',
        },
      ],
      name: 'liquidatedEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'bContractId',
          type: 'uint256',
        },
      ],
      name: 'settledEvent',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'bContractId',
          type: 'uint256',
        },
      ],
      name: 'settleAndLiquidate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode:
    '0x60803461008f57601f62001b2138819003918201601f19168301916001600160401b0383118484101761009457808492604094855283398101031261008f57610053602061004c836100aa565b92016100aa565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055604051611a629081620000bf8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b038216820361008f5756fe608080604052600436101561001357600080fd5b6000803560e01c635a03f9ca1461002957600080fd5b346108db5760203660031901126108db57805463a1595d4560e01b835260048035908401526001600160a01b0316916101c0908181602481875afa908115611943578391611839575b5060408101516040519485916301d3e56960e61b835260048301528160246103809384935afa9485156115bd578495611690575b505060015460405163a840d60b60e01b815233600482015290602090829060249082906001600160a01b03165afa80156115bd57849061165d575b600691501461162b576002610120820151036115f9578184015161010b61016086015142906119bb565b106115c8576080810151936101a081015160a083015160c0840151858401519160e08601511515936040519963629acbc760e11b8b5260048b015260248a015260448901526064880152608487015260a486015260408560c48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af480156115bd5784958591611579575b5060c083015161019e85840151426119de565b6101a084015160a08601519160405193632762fe1b60e11b8552600485015260248401526044830152606482015260208160848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af480156109b45761154e575b5060808301516101a083015160a08501516101e08501516102208601516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af49081156109b457869161151c575b5060808401516101a084015160a08601516102008601516102408701516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af490811561097a5787916114ea575b50670de0b6b3a76400006103018160808801510460a0880151906119eb565b0492879015610ddd5782891115610d3e57875461037e906020906001600160a01b031661032e868d6119de565b8951838b015160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529283919082908d90829060a4820190565b03925af1908115610a05578991610d0c575b5061039c81948b6119de565b03610d04575b15610ac357506103c1906103bb836101e08601516119eb565b906119bb565b9580871115610a2857855484516001600160a01b03908116929116906103e790896119de565b91813b15610a24576040516310f29c1d60e11b81526001600160a01b03919091166004820152602481019290925286908290604490829084905af180156109b457908691610a10575b50505b60018060a01b03855416610452610240840151610200850151906119bb565b610220840151604051631f8366b360e11b8152602081600481875afa908115610a055789916109d3575b50670de0b6b3a7640000818103116109bf5788996103bb866104be602096670de0b6b3a76400006104b76104f39a986104c3988303906119eb565b04906119bb565b6119eb565b8683015160405163e95e380f60e01b81529485939284928c92849290916001600160a01b031690600484016119fe565b03925af180156109b457610985575b5061051c60018060a01b03865416916102208401516119eb565b604051631f8366b360e11b815290602082600481865afa91821561097a57879261093d575b509061054c916119eb565b813b156109115785916024839260405194859384926357b00f1d60e01b845260048401525af1908115610906578591610929575b505081516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845460208401519082169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610906578591610915575b5050835482516001600160a01b039182169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af19081156109065785916108ed575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a15b83546001600160a01b0316803b156108e9576103609385610564926101a0829660405198899788966391cd1cbf60e01b8852815160048901526020820151602489015260018060a01b036040830151166044890152606082015160648901526080820151608489015260a082015160a489015260c082015160c489015260018060a01b0360e08301511660e489015261010082015161010489015261012082015161012489015260ff61014083015116610144890152610160820151610164890152610180820151610184890152848201516101a48901528101516101c48801526101e08101516101e48801526102008101516102048801526102208101516102248801526102408101516102448801526102608101516102648801526102808101516102848801526102a08101516102a48801526102c08101516102c48801526102e08101516102e488015260018060a01b03610300820151166103048801526103208101511515610324880152610340810151610344880152015161036486015260018060a01b0381511661038486015260018060a01b036020820151166103a486015260408101516103c486015260018060a01b036060820151166103e4860152608081015161040486015260a081015161042486015260c081015161044486015260e081015115156104648601526101008101516104848601526101208101516104a486015260018060a01b03610140820151166104c486015260018060a01b03610160820151166104e486015260018060a01b036101808201511661050486015201516105248401526004356105448401525af180156108de576108cb5750f35b6108d49061194e565b6108db5780f35b80fd5b6040513d84823e3d90fd5b8480fd5b6108f69061194e565b610901578338610636565b505050fd5b6040513d87823e3d90fd5b8580fd5b61091e9061194e565b6109015783386105ef565b6109329061194e565b610901578338610580565b915095506020813d602011610972575b8161095a60209383611978565b8101031261096d5751869561054c610541565b600080fd5b3d915061094d565b6040513d89823e3d90fd5b6020809296503d83116109ad575b61099d8183611978565b8101031261096d57849338610502565b503d610993565b6040513d88823e3d90fd5b634e487b7160e01b89526011600452602489fd5b90506020813d6020116109fd575b816109ee60209383611978565b8101031261096d57513861047c565b3d91506109e1565b6040513d8b823e3d90fd5b610a199061194e565b6108e9578438610430565b8780fd5b85546001600160a01b031690610a3f9088906119de565b845160208601516001600160a01b039081169392911690823b15610abf5760405163387743f760e21b815260048101919091526001600160a01b0391821660248201529216604483015286908290606490829084905af180156109b457908691610aab575b5050610433565b610ab49061194e565b6108e9578438610aa4565b8880fd5b9050859691610ae160018060a01b03885416916102208601516119eb565b604051631f8366b360e11b815290602082600481865afa918215610a05578992610ccc575b5090610b11916119eb565b813b15610a245787916024839260405194859384926357b00f1d60e01b845260048401525af190811561097a578791610cb8575b5050610b9191610b6160209260018060a01b03895416926119bb565b8583015160405163e95e380f60e01b81529485939284928b92849290916001600160a01b031690600484016119fe565b03925af1801561090657610c89575b508354825160808401516101a08401516101e0850151936001600160a01b03938416939192911690813b15610abf5760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c481015b03925af1908115610906578591610c75575b50506101a08101516080830152828101516101008301527f9b57fb9f981408812d891144415d662cd21510220f5b721f8f6c06f61b93774960206040516004358152a1610665565b610c7e9061194e565b610901578338610c2d565b6020809295503d8311610cb1575b610ca18183611978565b8101031261096d57839238610ba0565b503d610c97565b610cc19061194e565b610911578538610b45565b915097506020813d602011610cfc575b81610ce960209383611978565b8101031261096d57518897610b11610b06565b3d9150610cdc565b5060016103a2565b90506020813d602011610d36575b81610d2760209383611978565b8101031261096d575138610390565b3d9150610d1a565b916020610d8791610d598b60018060a01b038c5416926119de565b885160405163e95e380f60e01b81529485939284928e92849290916001600160a01b031690600484016119fe565b03925af1908115610dd2578891610da0575b50916103a2565b90506020813d602011610dca575b81610dbb60209383611978565b8101031261096d575138610d99565b3d9150610dae565b6040513d8a823e3d90fd5b5086549091610e4c916020906001600160a01b0316610dfc858c6119bb565b88830151895160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529384919082908c90829060a4820190565b03925af1918215610dd25788926114b6575b50610e6a82938a6119bb565b82146112da5750878111156112c05750806103bb88610e9a610e9f94610e95876102008a01516119eb565b6119bb565b6119de565b955b8087111561122957855460208501516001600160a01b0390811692911690610ec990896119de565b91813b15610a24576040516310f29c1d60e11b81526001600160a01b03919091166004820152602481019290925286908290604490829084905af180156109b457908691611215575b50505b60018060a01b03855416610f346102208401516101e0850151906119bb565b610240840151604051631f8366b360e11b8152602081600481875afa908115610a055789916111e3575b50670de0b6b3a7640000818103116109bf5788996103bb866104be602096670de0b6b3a76400006104b7610fc79a98610f99988303906119eb565b865160405163e95e380f60e01b81529485939284928c92849290916001600160a01b031690600484016119fe565b03925af180156109b4576111b4575b50610ff060018060a01b03865416916102208401516119eb565b604051631f8366b360e11b815290602082600481865afa91821561097a57879261117c575b5090611020916119eb565b813b156109115785916024839260405194859384926357b00f1d60e01b845260048401525af1908115610906578591611168575b505060208201516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845483519082169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610906578591611154575b5050835460208301516001600160a01b039182169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610906578591611140575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a1610665565b6111499061194e565b61090157833861110d565b61115d9061194e565b6109015783386110c3565b6111719061194e565b610901578338611054565b915095506020813d6020116111ac575b8161119960209383611978565b8101031261096d57518695611020611015565b3d915061118c565b6020809296503d83116111dc575b6111cc8183611978565b8101031261096d57849338610fd6565b503d6111c2565b90506020813d60201161120d575b816111fe60209383611978565b8101031261096d575138610f5e565b3d91506111f1565b61121e9061194e565b6108e9578438610f12565b85546001600160a01b0316906112409088906119de565b602085015185516001600160a01b039081169392911690823b15610abf5760405163387743f760e21b815260048101919091526001600160a01b0391821660248201529216604483015286908290606490829084905af180156109b4579086916112ac575b5050610f15565b6112b59061194e565b6108e95784386112a5565b6112d491506103bb836102008601516119eb565b95610ea1565b929150506112f760018060a01b03875416916102208501516119eb565b604051631f8366b360e11b8152602081600481865afa908115610dd2578891611482575b50611325916119eb565b813b1561147e5786916024839260405194859384926357b00f1d60e01b845260048401525af180156109b457611460575b50602085966113726113a09360018060a01b03895416926119de565b855160405163e95e380f60e01b81529485939284928b92849290916001600160a01b031690600484016119fe565b03925af1801561090657611431575b508354602083015160808401516101a0840151610200850151936001600160a01b03938416939192911690813b15610abf5760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c48101610c1b565b6020809295503d8311611459575b6114498183611978565b8101031261096d578392386113af565b503d61143f565b611372966113a0929661147460209361194e565b9692509650611356565b8680fd5b90506020813d6020116114ae575b8161149d60209383611978565b81010312610a24575161132561131b565b3d9150611490565b9091506020813d6020116114e2575b816114d260209383611978565b81010312610a2457519038610e5e565b3d91506114c5565b90506020813d602011611514575b8161150560209383611978565b8101031261147e5751386102e2565b3d91506114f8565b90506020813d602011611546575b8161153760209383611978565b8101031261091157513861026b565b3d915061152a565b602090813d8311611572575b6115648183611978565b810103126108e957386101f4565b503d61155a565b9550506040853d6040116115b5575b8161159560409383611978565b810103126115b1576115ab6020865196016119ae565b3861018b565b8380fd5b3d9150611588565b6040513d86823e3d90fd5b60405162461bcd60e51b81526020600482015260096024820152682232b330bab63a191960b91b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a6024820152692232b330bab63a1918b160b11b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a60248201526944656661756c7432316160b01b6044820152606490fd5b506020813d602011611688575b8161167760209383611978565b810103126115b157600690516100e1565b3d915061166a565b908092955081813d8311611832575b6116a98183611978565b810103126115b15760405191820182811067ffffffffffffffff82111761181e5760405280518252602081015160208301526116e76040820161199a565b6040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015261172060e0820161199a565b60e083015261010080820151908301526101208082015190830152610140808201519060ff8216820361091157830152610160808201519083015261018080820151908301526101a0808201519083015282810151838301526101e08082015190830152610200808201519083015261022080820151908301526102408082015190830152610260808201519083015261028080820151908301526102a080820151908301526102c080820151908301526102e080820151908301526103006117ea81830161199a565b908301526103206117fc8183016119ae565b90830152610340808201519083015261036080910151908201529238806100a6565b634e487b7160e01b85526041600452602485fd5b503d61169f565b90508181813d831161193c575b6118508183611978565b81010312611938576040519082820182811067ffffffffffffffff82111761181e5760405261187e8161199a565b825261188c6020820161199a565b6020830152604081015160408301526118a76060820161199a565b60608301526080810151608083015260a081015160a083015260c081015160c08301526118d660e082016119ae565b60e0830152610100808201519083015261012080820151908301526101406118ff81830161199a565b9083015261016061191181830161199a565b9083015261018061192381830161199a565b908301526101a0809101519082015238610072565b8280fd5b503d611846565b6040513d85823e3d90fd5b67ffffffffffffffff811161196257604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761196257604052565b51906001600160a01b038216820361096d57565b5190811515820361096d57565b919082018092116119c857565b634e487b7160e01b600052601160045260246000fd5b919082039182116119c857565b818102929181159184041417156119c857565b9081526001600160a01b03909116602082015260006040820181905260016060830152608082015260a0019056fea2646970667358221220a7e7c01e6d4c08ce6c4649197fa012837e0edd2c842a5905301fa9b935caff7164736f6c63430008140033',
  deployedBytecode:
    '0x608080604052600436101561001357600080fd5b6000803560e01c635a03f9ca1461002957600080fd5b346108db5760203660031901126108db57805463a1595d4560e01b835260048035908401526001600160a01b0316916101c0908181602481875afa908115611943578391611839575b5060408101516040519485916301d3e56960e61b835260048301528160246103809384935afa9485156115bd578495611690575b505060015460405163a840d60b60e01b815233600482015290602090829060249082906001600160a01b03165afa80156115bd57849061165d575b600691501461162b576002610120820151036115f9578184015161010b61016086015142906119bb565b106115c8576080810151936101a081015160a083015160c0840151858401519160e08601511515936040519963629acbc760e11b8b5260048b015260248a015260448901526064880152608487015260a486015260408560c48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af480156115bd5784958591611579575b5060c083015161019e85840151426119de565b6101a084015160a08601519160405193632762fe1b60e11b8552600485015260248401526044830152606482015260208160848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af480156109b45761154e575b5060808301516101a083015160a08501516101e08501516102208601516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af49081156109b457869161151c575b5060808401516101a084015160a08601516102008601516102408701516040516371947b5560e01b81526004810195909552602485019390935260448401919091526064830152608482015260208160a48173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af490811561097a5787916114ea575b50670de0b6b3a76400006103018160808801510460a0880151906119eb565b0492879015610ddd5782891115610d3e57875461037e906020906001600160a01b031661032e868d6119de565b8951838b015160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529283919082908d90829060a4820190565b03925af1908115610a05578991610d0c575b5061039c81948b6119de565b03610d04575b15610ac357506103c1906103bb836101e08601516119eb565b906119bb565b9580871115610a2857855484516001600160a01b03908116929116906103e790896119de565b91813b15610a24576040516310f29c1d60e11b81526001600160a01b03919091166004820152602481019290925286908290604490829084905af180156109b457908691610a10575b50505b60018060a01b03855416610452610240840151610200850151906119bb565b610220840151604051631f8366b360e11b8152602081600481875afa908115610a055789916109d3575b50670de0b6b3a7640000818103116109bf5788996103bb866104be602096670de0b6b3a76400006104b76104f39a986104c3988303906119eb565b04906119bb565b6119eb565b8683015160405163e95e380f60e01b81529485939284928c92849290916001600160a01b031690600484016119fe565b03925af180156109b457610985575b5061051c60018060a01b03865416916102208401516119eb565b604051631f8366b360e11b815290602082600481865afa91821561097a57879261093d575b509061054c916119eb565b813b156109115785916024839260405194859384926357b00f1d60e01b845260048401525af1908115610906578591610929575b505081516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845460208401519082169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610906578591610915575b5050835482516001600160a01b039182169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af19081156109065785916108ed575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a15b83546001600160a01b0316803b156108e9576103609385610564926101a0829660405198899788966391cd1cbf60e01b8852815160048901526020820151602489015260018060a01b036040830151166044890152606082015160648901526080820151608489015260a082015160a489015260c082015160c489015260018060a01b0360e08301511660e489015261010082015161010489015261012082015161012489015260ff61014083015116610144890152610160820151610164890152610180820151610184890152848201516101a48901528101516101c48801526101e08101516101e48801526102008101516102048801526102208101516102248801526102408101516102448801526102608101516102648801526102808101516102848801526102a08101516102a48801526102c08101516102c48801526102e08101516102e488015260018060a01b03610300820151166103048801526103208101511515610324880152610340810151610344880152015161036486015260018060a01b0381511661038486015260018060a01b036020820151166103a486015260408101516103c486015260018060a01b036060820151166103e4860152608081015161040486015260a081015161042486015260c081015161044486015260e081015115156104648601526101008101516104848601526101208101516104a486015260018060a01b03610140820151166104c486015260018060a01b03610160820151166104e486015260018060a01b036101808201511661050486015201516105248401526004356105448401525af180156108de576108cb5750f35b6108d49061194e565b6108db5780f35b80fd5b6040513d84823e3d90fd5b8480fd5b6108f69061194e565b610901578338610636565b505050fd5b6040513d87823e3d90fd5b8580fd5b61091e9061194e565b6109015783386105ef565b6109329061194e565b610901578338610580565b915095506020813d602011610972575b8161095a60209383611978565b8101031261096d5751869561054c610541565b600080fd5b3d915061094d565b6040513d89823e3d90fd5b6020809296503d83116109ad575b61099d8183611978565b8101031261096d57849338610502565b503d610993565b6040513d88823e3d90fd5b634e487b7160e01b89526011600452602489fd5b90506020813d6020116109fd575b816109ee60209383611978565b8101031261096d57513861047c565b3d91506109e1565b6040513d8b823e3d90fd5b610a199061194e565b6108e9578438610430565b8780fd5b85546001600160a01b031690610a3f9088906119de565b845160208601516001600160a01b039081169392911690823b15610abf5760405163387743f760e21b815260048101919091526001600160a01b0391821660248201529216604483015286908290606490829084905af180156109b457908691610aab575b5050610433565b610ab49061194e565b6108e9578438610aa4565b8880fd5b9050859691610ae160018060a01b03885416916102208601516119eb565b604051631f8366b360e11b815290602082600481865afa918215610a05578992610ccc575b5090610b11916119eb565b813b15610a245787916024839260405194859384926357b00f1d60e01b845260048401525af190811561097a578791610cb8575b5050610b9191610b6160209260018060a01b03895416926119bb565b8583015160405163e95e380f60e01b81529485939284928b92849290916001600160a01b031690600484016119fe565b03925af1801561090657610c89575b508354825160808401516101a08401516101e0850151936001600160a01b03938416939192911690813b15610abf5760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c481015b03925af1908115610906578591610c75575b50506101a08101516080830152828101516101008301527f9b57fb9f981408812d891144415d662cd21510220f5b721f8f6c06f61b93774960206040516004358152a1610665565b610c7e9061194e565b610901578338610c2d565b6020809295503d8311610cb1575b610ca18183611978565b8101031261096d57839238610ba0565b503d610c97565b610cc19061194e565b610911578538610b45565b915097506020813d602011610cfc575b81610ce960209383611978565b8101031261096d57518897610b11610b06565b3d9150610cdc565b5060016103a2565b90506020813d602011610d36575b81610d2760209383611978565b8101031261096d575138610390565b3d9150610d1a565b916020610d8791610d598b60018060a01b038c5416926119de565b885160405163e95e380f60e01b81529485939284928e92849290916001600160a01b031690600484016119fe565b03925af1908115610dd2578891610da0575b50916103a2565b90506020813d602011610dca575b81610dbb60209383611978565b8101031261096d575138610d99565b3d9150610dae565b6040513d8a823e3d90fd5b5086549091610e4c916020906001600160a01b0316610dfc858c6119bb565b88830151895160405163e95e380f60e01b815260048101939093526001600160a01b03918216602484015216604482015260006064820181905260848201529384919082908c90829060a4820190565b03925af1918215610dd25788926114b6575b50610e6a82938a6119bb565b82146112da5750878111156112c05750806103bb88610e9a610e9f94610e95876102008a01516119eb565b6119bb565b6119de565b955b8087111561122957855460208501516001600160a01b0390811692911690610ec990896119de565b91813b15610a24576040516310f29c1d60e11b81526001600160a01b03919091166004820152602481019290925286908290604490829084905af180156109b457908691611215575b50505b60018060a01b03855416610f346102208401516101e0850151906119bb565b610240840151604051631f8366b360e11b8152602081600481875afa908115610a055789916111e3575b50670de0b6b3a7640000818103116109bf5788996103bb866104be602096670de0b6b3a76400006104b7610fc79a98610f99988303906119eb565b865160405163e95e380f60e01b81529485939284928c92849290916001600160a01b031690600484016119fe565b03925af180156109b4576111b4575b50610ff060018060a01b03865416916102208401516119eb565b604051631f8366b360e11b815290602082600481865afa91821561097a57879261117c575b5090611020916119eb565b813b156109115785916024839260405194859384926357b00f1d60e01b845260048401525af1908115610906578591611168575b505060208201516001600160a01b0390811660608401526004610120840152426101a0808501919091528201516080840152845483519082169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610906578591611154575b5050835460208301516001600160a01b039182169116813b156109115785916024839260405194859384926372bbb27b60e11b845260048401525af1908115610906578591611140575b50507fd683579525e3897d8fd11cfe09054b56d5d5bf8a541df6dab2f55800b04ddd2460206040516004358152a1610665565b6111499061194e565b61090157833861110d565b61115d9061194e565b6109015783386110c3565b6111719061194e565b610901578338611054565b915095506020813d6020116111ac575b8161119960209383611978565b8101031261096d57518695611020611015565b3d915061118c565b6020809296503d83116111dc575b6111cc8183611978565b8101031261096d57849338610fd6565b503d6111c2565b90506020813d60201161120d575b816111fe60209383611978565b8101031261096d575138610f5e565b3d91506111f1565b61121e9061194e565b6108e9578438610f12565b85546001600160a01b0316906112409088906119de565b602085015185516001600160a01b039081169392911690823b15610abf5760405163387743f760e21b815260048101919091526001600160a01b0391821660248201529216604483015286908290606490829084905af180156109b4579086916112ac575b5050610f15565b6112b59061194e565b6108e95784386112a5565b6112d491506103bb836102008601516119eb565b95610ea1565b929150506112f760018060a01b03875416916102208501516119eb565b604051631f8366b360e11b8152602081600481865afa908115610dd2578891611482575b50611325916119eb565b813b1561147e5786916024839260405194859384926357b00f1d60e01b845260048401525af180156109b457611460575b50602085966113726113a09360018060a01b03895416926119de565b855160405163e95e380f60e01b81529485939284928b92849290916001600160a01b031690600484016119fe565b03925af1801561090657611431575b508354602083015160808401516101a0840151610200850151936001600160a01b03938416939192911690813b15610abf5760405163d74e595960e01b81523360048201526001600160a01b039094166024850152604484015260648301919091526084820192909252600060a4820152908590829081838160c48101610c1b565b6020809295503d8311611459575b6114498183611978565b8101031261096d578392386113af565b503d61143f565b611372966113a0929661147460209361194e565b9692509650611356565b8680fd5b90506020813d6020116114ae575b8161149d60209383611978565b81010312610a24575161132561131b565b3d9150611490565b9091506020813d6020116114e2575b816114d260209383611978565b81010312610a2457519038610e5e565b3d91506114c5565b90506020813d602011611514575b8161150560209383611978565b8101031261147e5751386102e2565b3d91506114f8565b90506020813d602011611546575b8161153760209383611978565b8101031261091157513861026b565b3d915061152a565b602090813d8311611572575b6115648183611978565b810103126108e957386101f4565b503d61155a565b9550506040853d6040116115b5575b8161159560409383611978565b810103126115b1576115ab6020865196016119ae565b3861018b565b8380fd5b3d9150611588565b6040513d86823e3d90fd5b60405162461bcd60e51b81526020600482015260096024820152682232b330bab63a191960b91b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a6024820152692232b330bab63a1918b160b11b6044820152606490fd5b60405162461bcd60e51b815260206004820152600a60248201526944656661756c7432316160b01b6044820152606490fd5b506020813d602011611688575b8161167760209383611978565b810103126115b157600690516100e1565b3d915061166a565b908092955081813d8311611832575b6116a98183611978565b810103126115b15760405191820182811067ffffffffffffffff82111761181e5760405280518252602081015160208301526116e76040820161199a565b6040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015261172060e0820161199a565b60e083015261010080820151908301526101208082015190830152610140808201519060ff8216820361091157830152610160808201519083015261018080820151908301526101a0808201519083015282810151838301526101e08082015190830152610200808201519083015261022080820151908301526102408082015190830152610260808201519083015261028080820151908301526102a080820151908301526102c080820151908301526102e080820151908301526103006117ea81830161199a565b908301526103206117fc8183016119ae565b90830152610340808201519083015261036080910151908201529238806100a6565b634e487b7160e01b85526041600452602485fd5b503d61169f565b90508181813d831161193c575b6118508183611978565b81010312611938576040519082820182811067ffffffffffffffff82111761181e5760405261187e8161199a565b825261188c6020820161199a565b6020830152604081015160408301526118a76060820161199a565b60608301526080810151608083015260a081015160a083015260c081015160c08301526118d660e082016119ae565b60e0830152610100808201519083015261012080820151908301526101406118ff81830161199a565b9083015261016061191181830161199a565b9083015261018061192381830161199a565b908301526101a0809101519082015238610072565b8280fd5b503d611846565b6040513d85823e3d90fd5b67ffffffffffffffff811161196257604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761196257604052565b51906001600160a01b038216820361096d57565b5190811515820361096d57565b919082018092116119c857565b634e487b7160e01b600052601160045260246000fd5b919082039182116119c857565b818102929181159184041417156119c857565b9081526001600160a01b03909116602082015260006040820181905260016060830152608082015260a0019056fea2646970667358221220a7e7c01e6d4c08ce6c4649197fa012837e0edd2c842a5905301fa9b935caff7164736f6c63430008140033',
  linkReferences: {
    'contracts/Libs/PionerV1Utils.sol': {
      PionerV1Utils: [
        {
          length: 20,
          start: 550,
        },
        {
          length: 20,
          start: 659,
        },
        {
          length: 20,
          start: 775,
        },
        {
          length: 20,
          start: 894,
        },
      ],
    },
  },
  deployedLinkReferences: {
    'contracts/Libs/PionerV1Utils.sol': {
      PionerV1Utils: [
        {
          length: 20,
          start: 359,
        },
        {
          length: 20,
          start: 468,
        },
        {
          length: 20,
          start: 584,
        },
        {
          length: 20,
          start: 703,
        },
      ],
    },
  },
};
