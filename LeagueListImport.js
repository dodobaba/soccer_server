const data = require('./LeagueList.json');
const mongo = require('mongodb');
const assert = require('assert');
const { MongoClient } = mongo;
const url = require('./lib_mongo').RemoteURL;
const dbName = 'soccer';
const client = new MongoClient(url,{ useUnifiedTopology: false } );

(async function () {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        data.leagueList.forEach(async (v, idx) => {
            await db.collection('LeagueList').insertOne(v);
            console.log(idx);
        });
        await client.close();
    } catch (err) {
        console.error(err.stack)
    }
})();


