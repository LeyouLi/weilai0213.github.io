var local=document.querySelector('.top-dizhi');

var zhishu={
	comf:'舒适度指数',
	cw:'洗车指数',
	drsg:'穿衣指数',
	flu:'感冒指数',
	sport:'运动指数',
	trav:'旅游指数',
	uv:'紫外线指数'
}

var html=document.querySelector('html')

var list = document.querySelector('.list')
store.getSuggestion(function(data){
	var s = data['HeWeather5'][0]['suggestion'];
	var str = ""
    local.innerHTML=data['HeWeather5'][0]['basic'].city;
});
var hw=document.querySelector('.header-weather')
var hddl=document.querySelector('.header-xiangxi-du');
var noww=document.querySelector('.header-now-weather');
var nowt=document.querySelector('.header-now-tem');
var nt=document.querySelector('.det-data-c-l')
store.getNow(function(data){
    console.log(data)
    hddl.innerHTML=data['HeWeather5'][0]['now'].tmp+'°';
    noww.innerHTML=data['HeWeather5'][0]['now']['cond'].txt;

    if(noww.innerHTML=='多云'||noww.innerHTML=='晴转多云'){
        hw.innerHTML='&#xe625;';
        nt.innerHTML='&#xe625;';
        html.style.backgroundImage='url("images/blur_bg_fog_day.jpg")'
    }else if(noww.innerHTML=='晴'){
        hw.innerHTML='&#xe6d7;';
        nt.innerHTML='&#xe6d7;';
        html.style.backgroundImage='url("images/bg_sunny_day.jpg")'
    }else if(noww.innerHTML=='阴'){
        hw.innerHTML='&#xe607;';
        nt.innerHTML='&#xe607;';
        html.style.backgroundImage='url("images/blur_bg_fog_day.jpg")'
    }else if(noww.innerHTML=='阵雨'||noww.innerHTML=='小雨'||noww.innerHTML=='中雨'||noww.innerHTML=='大雨'||noww.innerHTML=='阴转小雨'||noww.innerHTML=='毛毛雨/细雨'){
        hw.innerHTML='&#xe6fb;';
        nt.innerHTML='&#xe6fb;';
        html.style.backgroundImage='url("images/blur_bg_sunny_night.jpg")'
    }else if(noww.innerHTML=='雷阵雨'){
        hw.innerHTML='&#xe649;';
        nt.innerHTML='&#xe649;';
        html.style.backgroundImage='url("images/blur_bg_sunny_night.jpg")'

    }
})
var week=['日','一','二','三','四','五','六'];
var hweek=document.querySelector('.section-nr-h-week');
var dht=document.querySelector('.section-nr-tem-c')
store.getWeather(function(data){
    console.log(data)
    nowt.innerHTML=data['HeWeather5'][0]['daily_forecast'][0]['tmp'].min+'°'+'~'+data['HeWeather5'][0]['daily_forecast'][0]['tmp'].max+'°';
    // console.log(data);
    var day=data['HeWeather5'][0]['daily_forecast'][0].date;
    // console.log()
	hweek.innerHTML='周'+week[new Date(day).getDay()]
	var dt=data['HeWeather5'][0]['hourly_forecast']
	var dailyt='';
    var wwi='';
    for(var i=0;i<dt.length;i++){
        console.log(dt[i]['cond'].txt);
        if(dt[i]['cond'].txt=='多云'||dt[i]['cond'].txt=='晴转多云'){
            wwi='&#xe625;'
        }else if(dt[i]['cond'].txt=='晴'){
            wwi='&#xe6d7;'
        }else if(dt[i]['cond'].txt=='阴'){
            wwi='&#xe607;'
        }else if(dt[i]['cond'].txt=='阵雨'||dt[i]['cond'].txt=='中雨'||dt[i]['cond'].txt=='大雨'){
            wwi='&#xe6fb;'
        }else if(dt[i]['cond'].txt=='小雨'||dt[i]['cond'].txt=='阴转小雨'||dt[i]['cond'].txt=='毛毛雨/细雨'){
            wwi='&#xe60c;'
        }else if(dt[i]['cond'].txt=='雷阵雨'){
            wwi='&#xe649;'
        }
        var dtttt=dt[i].date;
		var dttt=dtttt.slice(11,16);
        dailyt+=`<div>
                <div>
                    ${dttt}
                </div>
                <div class="iconfont wwi">
                    ${wwi}
                </div>
                <div>
                    ${dt[i]['tmp']}°
                </div>
            </div>`
    }
    dht.innerHTML=dailyt;

	var rec=document.querySelector('.section-nr-rec')
    var rect=data['HeWeather5'][0]['daily_forecast']
    var rectt='';

    for(var i=0;i<rect.length;i++){
        var weeek=rect[i]['date'];

        var wi='';
        if(rect[i]['cond'].txt_d=='多云'||rect[i]['cond'].txt_d=='晴转多云'){
            wi='&#xe625;'
        }else if(rect[i]['cond'].txt_d=='晴'){
            wi='&#xe6d7;'
        }else if(rect[i]['cond'].txt_d=='阴'){
            wi='&#xe607;'
        }else if(rect[i]['cond'].txt_d=='阵雨'||rect[i]['cond'].txt_d=='小雨'||rect[i]['cond'].txt_d=='中雨'||rect[i]['cond'].txt_d=='大雨'||rect[i]['cond'].txt_d=='阴转小雨'||rect[i]['cond'].txt_d=='毛毛雨/细雨'){
            wi='&#xe6fb;'
        }else if(rect[i]['cond'].txt_d=='雷阵雨'){
            wi='&#xe649;'
        }
        // console.log(wi)
        rectt+=`<div class="section-nr-item">
            <div>
            星期${week[new Date(weeek).getDay()]}
            </div>
            <div class="section-nr-item-tem">
                <div class="section-nr-item-tem-w iconfont">
                   ${wi}
                </div>
                <div class="section-nr-item-tem-t">
                    <div>
                        ${rect[i]['tmp']['min']}°
                    </div>
                    <div>
                        ${rect[i]['tmp']['max']}°
                    </div>
                </div>
            </div>
            <div>
                 ${rect[i]['cond']['txt_d']}
            </div>
        </div>`
    }
    rec.innerHTML=rectt;

    var todayi={
        wea:'今日预报',
        tw:'体感温度',
        wd:'空气湿度',
        wf:'风向风力'
    }
    var todayd=document.querySelector('.future-det-data-c-r')
	var todaydd=data['HeWeather5'][0]['now'];
    var todayddd=`<div>
                今日预报 <span>${todaydd['cond']['txt']}</span>
                </div>
                <div>
                    体感温度 <span>${todaydd['fl']}°</span>
                </div>
                <div>
                    空气湿度 <span>${todaydd['hum']}%</span>
                </div>
                <div>
                    风向风力 <span>${todaydd['wind']['dir']}${todaydd['wind']['sc']}级</span>
                </div>`
    todayd.innerHTML=todayddd;

    var airi=document.querySelector('.airi');
    var airn=document.querySelector('.airn');
    airi.innerHTML=data['HeWeather5'][0]['daily_forecast'][0].hum;
    var ll=data['HeWeather5'][0]['daily_forecast'][0].hum;
    if(0<ll&&ll<50){
        airn.innerHTML='优';
    }else if(50<ll&&ll<100){
        airn.innerHTML='良';
	}else if(100<ll&&ll<150){
        airn.innerHTML='轻度';
    }else if(150<ll&&ll<200){
        airn.innerHTML='中';
    }else if(200<ll&&ll<300){
        airn.innerHTML='重度';
    }else if(300<ll&&ll<500){
        airn.innerHTML='严重';
    }
    var airz=document.querySelector('.zhiliang-zhizhen');
    var airzz=document.querySelector('.zhiliang-sanjiao');
    var yu=ll/500;
    airzz.style.left=yu*airz.offsetWidth+'px';
    
    var airii=document.querySelector('.airzhiliang-k')
    var airiii=data['HeWeather5'][1]['aqi']['city'];
    var airit=`<div>
            <div class="zhiliang-item">
                <div>
                    PM2.5&nbsp;&nbsp;${airiii.pm25}
                </div>
                <div>
                    入肺颗粒物
                </div>
            </div>
            <div class="zhiliang-item">
                <div>
                    PM10&nbsp;&nbsp;${airiii.pm10}
                </div>
                <div>
                    可吸入颗粒
                </div>
            </div>
            <div class="zhiliang-item">
                <div>
                    SO2&nbsp;&nbsp;${airiii.so2}
                </div>
                <div>
                    二氧化硫
                </div>
            </div>
        </div>
        <div>
            <div class="zhiliang-item">
                <div>
                    NO2&nbsp;&nbsp;${airiii.no2}
                </div>
                <div>
                    二氧化氮
                </div>
            </div>
            <div class="zhiliang-item">
                <div>
                    O3&nbsp;&nbsp;${airiii.o3}
                </div>
                <div>
                    臭氧
                </div>
            </div>
            <div class="zhiliang-item">
                <div>
                    CO&nbsp;&nbsp;${airiii['co']}
                </div>
                <div>
                    一氧化碳
                </div>
            </div>
        </div>`
    airii.innerHTML=airit;

    var suggestd=document.querySelector('.zhishu-fenlei')
    var suggestdd=data['HeWeather5'][0]['suggestion'];

    var suggestddd=` <div class="zhishu-fenlei-item">
              <span class="iconfont">
                &#xe66c;
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                            ${suggestdd['drsg']['brf']}
                            <span>[穿衣指数]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['drsg']['txt']}
                        </div>
                    </div>
                </div>
            </div>
<div class="zhishu-fenlei-item">
              <span class="iconfont">
                &#xe620;
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                            ${suggestdd['flu']['brf']}
                              <span>[感冒指数]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['flu']['txt']}
                        </div>
                    </div>
                </div>
            </div>
            <div class="zhishu-fenlei-item">
              <span class="iconfont">
                &#xe610;
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                            ${suggestdd['comf']['brf']}
                              <span>[舒适度]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['comf']['txt']}
                        </div>
                    </div>
                </div>
            </div>
            <div class="zhishu-fenlei-item">
              <span class="iconfont">
                &#xe63a;
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                            ${suggestdd['trav']['brf']}
                              <span>[旅游指数]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['trav']['txt']}
                        </div>
                    </div>
                </div>
            </div>
<div class="zhishu-fenlei-item">
              <span class="iconfont">
               &#xe7cd;
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                            ${suggestdd['uv']['brf']}
                            <span>[紫外线]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['uv']['txt']}
                        </div>
                    </div>
                </div>
            </div>
<div class="zhishu-fenlei-item">
              <span class="iconfont">
                 &#xe602
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                           ${suggestdd['sport']['brf']}
                           <span>[运动指数]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['sport']['txt']}
                        </div>
                    </div>
                </div>
            </div>
<div class="zhishu-fenlei-item">
              <span class="iconfont">
                 &#xe656;
              </span>
                <div class="zhishu-fenlei-item-c">
                    <div class="zhishu-fenlei-s">
                        <div class="today-state">
                           ${suggestdd['cw']['brf']}
                           <span>[洗车指数]</span>
                        </div>
                        <div class="today-suggestion">
                            ${suggestdd['cw']['txt']}
                        </div>
                    </div>
                </div>
            </div>`

    suggestd.innerHTML=suggestddd;

    var time=document.querySelector('.now-time');
    var tt=data['HeWeather5'][0]['basic']['update'].loc;
    time.innerHTML='发布时间:'+tt.slice(11,16)
})



