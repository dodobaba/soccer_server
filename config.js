exports.config = {
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

exports.APIURL = 'testurl';

exports.RemoteAPIS = {
    getschedulebydate:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getschedulebydate',
        label: '赛程赛果列表',
        requests: ['date'],
        respones: []
    }, //赛程赛果列表
    getlivegame:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getlivegame',
        label: '即时比分列表',
        requests: ['Id', 'Date', 'N', 'Rank', 'Weather'],
        respones: []
    }, //即时比分列表
    getlivedata:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getlivedata',
        label: '实时比分数据信息',
        requests: [],
        respones: []
    }, //实时比分数据信息
    getrevocatorygame:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getrevocatorygame',
        label: '近期取消、延期、腰斩的赛事',
        requests: [],
        respones: []
    }, //近期取消、延期、腰斩的赛事
    getschedule_jc:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getschedule_jc',
        label: '获取竞彩赛程关联比赛',
        requests: ['date'],
        respones: []
    }, //获取竞彩赛程关联比赛
    getschedule_jc_sp:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getschedule_jc_sp',
        label: '获取竞彩赛程关联比赛(带参考值)',
        requests: ['date'],
        respones: []
    }, //获取竞彩赛程关联比赛(带参考值)
    getsphistory_jc:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getsphistory_jc',
        label: '获取竞彩比赛参考值变化',
        requests: ['gameid'],
        respones: []
    }, //获取竞彩比赛参考值变化
    getjclotresult:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getjclotresult',
        label: '获取竞彩彩果',
        requests: ['date'],
        respones: []
    }, //获取竞彩彩果
    getsphistory_dc:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getsphistory_dc',
        label: '获取北京单场赛程关联比赛',
        requests: ['degree'],
        respones: []
    }, //获取北京单场赛程关联比赛
    getsphistory_dc2:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getsphistory_dc',
        label: '获取北京单场比赛参考值变化',
        requests: ['gameid'],
        respones: []
    }, //获取北京单场比赛参考值变化
    getschedule_dc_sp: {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getschedule_dc_sp',
        label: '获取北京单场赛程关联比赛(带参考值)',
        requests: ['degree'],
        respones: []
    },//获取北京单场赛程关联比赛(带参考值)
    getschedule_sfc:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getschedule_sfc',
        label: '获取胜负彩赛程关联比赛',
        requests: ['degree'],
        respones: []
    }, //获取胜负彩赛程关联比赛
    getupdatelog:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getupdatelog',
        label: '获取资料更新',
        requests: ['etype', 'startid'],
        respones: []
    }, //获取资料更新
    getpic:
    {
        uri: 'http://' + this.APIURL + '/soccer/getpic.aspx',
        label: '获取图片接口',
        requests: ['etype', 'id'],
        respones: []
    }, //获取图片接口
    getahoddsinfo:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getahoddsinfo',
        label: '亚盘指数单场',
        requests: ['gameid'],
        respones: []
    },//亚盘指数单场
    getouoddsinfo:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getouoddsinfo',
        label: '大小球指数单场',
        requests: ['gameid'],
        respones: []
    },//大小球指数单场
    gethdaoddsinfo:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=gethdaoddsinfo',
        label: '欧盘指数单场',
        requests: ['gameid'],
        respones: []
    },//欧盘指数单场
    gethdaoddsinfo_live:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=gethdaoddsinfo_live',
        label: '欧盘指数单场(走地指数)',
        requests: ['gameid'],
        respones: []
    },//欧盘指数单场(走地指数)
    gethdaoddslog:
    {
        uri: 'http://' + this.APIURL + '/soccer/?type=gethdaoddslog',
        label: '欧盘指数变化历史',
        requests: ['gameid', 'pid'],
        respones: []
    },//欧盘指数变化历史
    getahoddslist:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getahoddslist',
        label: '亚盘指数列表',
        requests: ['t', 'pid', 'date'],
        respones: []
    },//亚盘指数列表
    getouoddslist:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=getouoddslist',
        label: '大小球指数列表',
        requests: ['t', 'pid', 'date'],
        respones: []
    },//大小球指数列表
    gethdaoddslist:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=gethdaoddslist',
        label: '欧盘指数列表',
        requests: ['t', 'pid', 'date'],
        respones: []
    },//欧盘指数列表
    gethdaoddslist_live:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=gethdaoddslist_live',
        label: '欧盘指数单场(含走地)',
        requests: ['gameid'],
        respones: []
    },//欧盘指数单场(含走地) 
    gethdaoddslist_live2:
    {
        uri: 'http://' + this.APIURL + '/soccer/testing.aspx?type=gethdaoddslist_live',
        label: '欧盘指数列表(含走地)',
        requests: ['t', 'date'],
        respones: []
    },//欧盘指数列表(含走地)
}
