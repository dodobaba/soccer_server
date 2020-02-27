const config = {
    Nsq: {
        lookupdHTTPAddresses: [
            "192.168.1.5:4161"
        ],
        nsqdTCPAddresses: [
            "192.168.1.5:4150"
        ],
        NsdAddress: "192.168.1.5",
        NsdPort: 4150
    }
};

module.exports = config;
