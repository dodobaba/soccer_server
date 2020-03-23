'use strict';
//压盘指数单场


exports.GetAsianIndexPoint = () => {
    return {
        GameId:"1173677",
        AsianIndexPoint: [
            {
                Cid:'3000181',
                Name:'Bet365',
                Logs:[
                    {
                        Data:[2.35,1.575,0.0],//【主赔，客赔，让球】
                        Date:"1417775905000"
                    },
                    {
                        Data:[2.375,1.55,0.0],
                        Date:"1417775738000"
                    },
                    {
                        Data:[2.25,1.625,0.0],
                        Date:"1417775649000"
                    },
                    {
                        Data:[2.3,1.6,0.0],
                        Date:"1417775478000"
                    },
                ]
            }
        ]
    };
}