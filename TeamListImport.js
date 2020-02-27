const data = require('./TeamList.json');
const mongo = require('mongodb');
const { MongoClient } = mongo;
const url = require('./lib_mongo').RemoteURL;
const dbName = 'soccer';
const client = new MongoClient(url, { useUnifiedTopology: false });

(async function () {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        data.teamList.forEach(async (v, idx) => {
            await db.collection('TeamList').insertOne(v);
            console.log(idx);
        });
        client.close();
    } catch (err) {
        console.error(err.stack)
    }
})();