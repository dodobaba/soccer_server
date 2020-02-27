const Config = {
    user: 'SA',
    password: 'MS#sql@server',
    server: '192.168.1.5',
    database: 'qiutandata_quan',
    options: {
        encrypt: true, //使用windows azure，需要设置次配置。
        enableArithAbort: false
    }
}

module.exports = {
    Config: Config
}