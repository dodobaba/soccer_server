const mssql = require('mssql');
const mssql_config = require('./lib_mssql').Config;

const mongo = require('mongodb');
const { MongoClient } = mongo;
const url = require('./lib_mongo').RemoteURL;
const dbName = 'soccer';
const client = new MongoClient(url, { useUnifiedTopology: false, poolSize: 500 });

const page = 100;

let db = null;

(async () => {
    await client.connect();
    db = client.db(dbName);
})();


let rows = [];
let count = 0;

// const config = require('./config');
// const nsq = require('./lib_Nsq');

// const nsq = require('nsqjs');
// const nsqW = new nsq.Writer(config.Nsq.NsdAddress, config.Nsq.NsdPort);
// nsqW.connect();

mssql.connect(mssql_config, (err) => {
    const request = new mssql.Request();
    request.stream = true;
    request.query('SELECT * FROM [data]');
    // request.on('recordset', columns => {
    //     //console.log('colume : ', typeof columns, columns);
    //     //每次查询会触发一次 recordset事件，返回结果集
    // });
    request.on('row', async row => {
        rows.push(row);
        if (rows.length >= page) {
            request.pause();
            await proecessRows(request);
        }
        // nsqW.publish('soccer_data_transfer', row, (err) => {
        //     if (err) console.error("msg publish error:",err.message);
        // })
        // nsq.publishMsq('soccer_data_transfer', 'soccer', row);
    })
    request.on('error', err => {
        console.log("request error :", err)
        //监听error事件，可能被触发多次
    })
    request.on('done', async result => {
        await proecessRows(request);
        console.log("done : ", typeof result, result);
        //最后触发
        client.close();
    })
})

mssql.on('error', err => {
    console.log("mssql error :", err);
})

const proecessRows = async (req) => {

    try {
        // await client.connect();
        // const db = client.db(dbName);
        count++;
        console.time('finsish_' + count);
        await db.collection('Data').insertMany(rows);
        console.timeEnd('finsish_' + count);
        // await client.close();
        console.log(" >>>>>>> ", count, " total:", count * page);
        rows = [];
        req.resume();
    } catch (err) {
        console.error(err.stack)
    }


}
