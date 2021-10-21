require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe story cost soap around imitate prize equal gift'; 
let testAccounts = [
"0x8178fe1cad8cd42fa456ecf762f9438e7da2d0f1fa37e3f8b0ccdfa106e68413",
"0x60104fd08c5c5a9bdea4de83b9a1ed7b36bceda12825c26b6215f9eff6ff9bdd",
"0xe3fdec56ce875b1c944de44d23806931a367f4de634e8359ec9bfd5ca4a11e4c",
"0x0599f6de70fe702cb5577bafe2512a222d4e21165c9afb50a4ab1e59b3163783",
"0x75596e13aa272f3adad732a7ac4ba41d9e75b3ccccbbc8e8657774df60f272b0",
"0x77ca7306b1de9cb4f64e0ad6c141612759cf660cdaa373569333bca16a4b5ad2",
"0xfe90c80bff6fb63df7261bbd407950599c22e2938581c5951f04a1826baf7ff4",
"0x655105cd930b2f14d276d6ae4f460daa6c7d1de1d013394035b2ce0b40a4b92b",
"0x59ebf239e5720253de200c66ab81b98c490e92528cece18f5eaa5cee1ca1364c",
"0x2ed1ba97bf3304347f1ea7a8b07a64ddd46d6c64e21e21876237031e87e830e7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

