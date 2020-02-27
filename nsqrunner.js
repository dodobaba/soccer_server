'use strict';

const config = require('./config'),
    // tcblob = require('../lib/lib_TencentCOS'),
    lnsq = require('./lib_Nsq');

// const mongo = require('mongodb');
// const { MongoClient } = mongo;
// const url = require('./lib_mongo').RemoteURL;
// const dbName = 'soccer';
// const client = new MongoClient(url, { useUnifiedTopology: true, poolSize: 500 });
// const db = null;

const readerUser = lnsq.createReader('soccer_data_transfer', 'soccer', config.Nsq.lookupdHTTPAddresses);


[readerUser].forEach(item => {
    item.on("error", err => {
        if (err) console.error(`[${item.topic}] reader error : `, err);
    });
    item.on("nsqd_connected", async (host, port) => {
        console.info(`[${item.topic}] connected : `, host, port);
        // await client.connect();
        // db = client.db(dbName);
    });
    item.on("nsqd_closed", async (host, port) => {
        console.info(`[${item.topic}] closed : `, host, port);
        // await client.close();
    });
    item.connect();
});

readerUser.on('message', async msg => {
    console.time("processe");
    //console.info('soccer_data_transfer', 'success!', msg.json());
    console.timeEnd("processe");
    msg.finish();
});