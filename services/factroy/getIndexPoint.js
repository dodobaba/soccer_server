'use strict';

const _getAsianCompany = require('../getdata/getAsianCompany'),
    _getAsianIndexList = require('../getdata/getAsianIndexList'),
    _getAsianIndexPoint = require('../getdata/getAsianIndexPoint'),
    _getBigSmallList = require('../getdata/getBigSmallList'),
    _getBigSmallIndexPoint = require('../getdata/getBigSmallIndexPoint'),
    _getEuropeanCompany = require('../getdata/getEuropeanCompany'),
    _getEuropeanIndexHistory = require('../getdata/getEuropeanIndexHistory'),
    _getEuropeanIndecList = require('../getdata/getEuropeanIndexList'),
    _getEuropeanIndexPoint = require('../getdata/getEuropeanIndexPoint'),
    _getEuropeanIndexPointRun = require('../getdata/getEuropeanIndexPointRun'),
    _getEuropeanIndexRunList = require('../getdata/getEuropeanIndexRunList');


exports.fetchAll = async () => {
    return {
        Companys: {
            AsianCompany: _getAsianCompany.GetAsianCompany(),
            EuropeanCompany: _getEuropeanCompany.GetAsianCompany()
        },
        current: {
            Asian: _getAsianIndexPoint.GetAsianIndexPoint(),
            BigSmall: _getBigSmallIndexPoint.GetBigSmallIndexPoint(),
            European: _getEuropeanIndexPoint.GetEuropeanIndexPoint(),
            EuropeanRun: _getEuropeanIndexPointRun.GetEuropeanIndexPointRun()
        },
        history: {
            Asian: _getAsianIndexList.GetAsianIndexList(),
            BigSmall: _getBigSmallList.GetBigSmallList(),
            European: _getEuropeanIndecList.GetEuropeanIndexList(),
            EuropeanRun: _getEuropeanIndexRunList.GetEuropeanIndexRunList(),
            EuropeanHistory: _getEuropeanIndexHistory.GetEuropeanIndexHistory()
        }
    };
};