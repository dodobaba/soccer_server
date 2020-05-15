'use strict';

const config = require('../../config');
const mongo = require('mongodb');
const { MongoClient } = mongo;
const url = require('../../lib_mongo').RemoteURL;
const dbName = 'soccer';
const client = new MongoClient(url, { useUnifiedTopology: false, poolSize: 500 });


exports.FetchAll = () => {


}