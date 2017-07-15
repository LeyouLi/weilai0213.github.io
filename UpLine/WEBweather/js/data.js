//和风天气的密钥
var options={
	baseUrl:"https://free-api.heweather.com/v5/",//固定网址
	token:'93b5526475bc481880116e5af627a46d',//每个人的密钥
	city:'xian'//城市
}

function getUrl(type='weather'){
	return options.baseUrl +type+"?city="+options.city+'&key='+options.token//将网址密钥连接
}
// console.log(getUrl())
// console.log(getUrl('suggestion'))
// console.log(getUrl('daily_forecast'))
var store = {
	getWeather:function(cb){
		tools.get({
			url:getUrl(),
			success:function(data){
				cb(data);
			}
		})
	},
	getSuggestion:function(cb){
		tools.get({
			url:getUrl('suggestion'),
			success:function(data){
				cb(data);
			}
		})
	},
    getNow:function(cb){
        tools.get({
            url:getUrl('now'),
            success:function(data){
                cb(data);
            }
        })
    }
};


