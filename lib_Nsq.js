'use strict';

const nsq = require('nsqjs'),
    config = require('./config');


exports.createReader = (topic, channel, lookupdHTTPAddresses) => {
    return new nsq.Reader(topic, channel, {
        lookupdHTTPAddresses: lookupdHTTPAddresses
    });
}

exports.createWriter = (address, port) => {
    return new nsq.Writer(address, port);
};

exports.publishMsq = (topic, channel, msg, w) => {
    w = w || this.createWriter(config.Nsq.NsdAddress, config.Nsq.NsdPort);
    w.connect();
    w.on("ready", () => {
        w.publish(topic, msg, (err) => {
            if (err) { return console.error(err.message) }
            console.log('Message sent successfully')
            w.close()
        })
    });
    w.on("closed", () => {
        console.log('NSQ Writer closed');
    });
}
