'use strict';

const getleaguelist = require("./getdata/getLeaguelData");
const getteams = require("./getdata/getTeamsData");
const getschedule = require("./getdata/getSchedule");
const getindexpoint = require('./factroy/getIndexPoint');
const config = require('../config');
console.log(config.RemoteAPIS.getschedulebydate.uri);
let express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    bodyparser = require('body-parser'),
    cookieParser = require('cookie-parser');

global._default = {
    _basedir_: __dirname,
    _SEVER_PORT_: 18208,
    _R_D_: 'https://waka.aibooking.org',
    _L_D_: 'http://localhost'
};

app.use(bodyparser.json({ limit: '200mb' }));
app.use(bodyparser.urlencoded({ limit: '200mb', extended: true }));
app.use(cookieParser());

server.listen(process.env.PORT || global._default._SEVER_PORT_, function () {
    console.time('Services Get Leagues start use:');
    console.info(`Server is online. Port:[${server.address().port}]`);
    console.timeEnd('Services Get Leagues start use:');
})

app.use('/api/getleagues', async (req, res, next) => {
    const _data = getleaguelist.GetLeaguel();
    res.header("Access-Control-Allow-Origin","*");
    res.status(200).json(_data);
})

app.use('/api/getteams', async (req, res, next) => {
    const _data = getteams.getTeams();
    res.header("Access-Control-Allow-Origin","*");
    res.status(200).json(_data);
})

app.use('/api/getschedule', async (req, res, next) => {
    const _data = getschedule.GetSchedule();
    res.header("Access-Control-Allow-Origin","*");
    res.status(200).json(_data);
})

app.use('/api/getindexpoint',async (req,res,next)=>{
    const _data = await getindexpoint.fetchAll();
    res.header("Access-Control-Allow-Origin","*");
    res.status(200).json(_data);
})