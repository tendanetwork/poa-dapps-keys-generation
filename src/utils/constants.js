let constants = {}

constants.organization = 'tendanetwork'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.baseURL = '/poa-dapps-keys-generation'

constants.NETWORKS = {
  '177': {
    NAME: 'Tenda-dev',
    RPC: 'https://rpc.dev.tenda.network',
    BRANCH: 'tenda--dev',
    TESTNET: true
  }
}

module.exports = {
  constants
}
