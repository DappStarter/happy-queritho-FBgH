require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike rival noise essay inner drop slot giant'; 
let testAccounts = [
"0xf2b4807241ac9377aef5410e472577b8ed909b0ee8e52ee3da5c527623199b57",
"0x1a9a8ce01fa468b814ac36fb403d4338f14ef4d637c70fb94910a2e8f91f64d6",
"0xa3b2f8d5b639c0e7aec70419ded4f6dc8675fcc2c29b4091a35fc67d6835bcac",
"0x250a82e3d713ed87ea4ba7ab7098712ef9b92c9afcc5d770c1839227df71d4a8",
"0x9951f7eb40424f1b51e73a041900f528ccdb51eae4ca48324c7ece52eb5f9e29",
"0x7d8615150d4782b12751157c10e6bcd8e20bb373e5206e4ee9bce72a041a7f2d",
"0xf3e7ff7f9caa9c27eb66bf1972639c6f1828e01fb05855f7a7210377e0f8d179",
"0x5c6dca36674f2b158cb6e3945fd47840603f980f1ec94e458443e39b0140b0f9",
"0x8258de47df4f3f804eb1cb3625b11c7497b2822ef6cdfebc062020ba7284bf68",
"0x55e250c10a522730385a2bf25ad64eb645433a5080659eb41517fb6dd6960a29"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


