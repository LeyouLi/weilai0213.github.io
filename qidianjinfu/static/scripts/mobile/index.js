var headerBtn = document.querySelector("#jf-header-btn");
var headerNone = document.querySelector(".jf-header-hidden");
var headerBox = document.querySelector(".jf-header");
var body = document.querySelector("body");
var flag = false;
headerBtn.onclick=function () {
    flag=!flag;
    if(flag){
        selfNone.style.height = "0rem";
        selfMeng.style.display = "none";
        headerNone.style.height = "20rem";
        headerBox.style.background = "#000";
        body.style.overflow = "hidden";
    }else{
        selfNone.style.height = "0rem";
        selfMeng.style.display = "none";
        headerNone.style.height = "0rem";
        headerBox.style.background = "none";
        body.style.overflow = "auto";
    }
};
var newsList = document.querySelector(".jf-news-list2>img");
var newsBox = document.querySelector(".jf-news");
newsList.onclick = function () {
    flag=!flag;
    if(flag){
        newsBox.style.height = "auto";
        newsList.style.transform = "rotate(-180deg)"
    }else{
        newsBox.style.height = "19.4rem";
        newsList.style.transform = "rotate(0deg)"
    }
}
var selfBtn = document.querySelector("#jf-self-btn");
var selfNone = document.querySelector(".jf-header-self");
var selfMeng = document.querySelector(".jf-mengban");
selfBtn.onclick=function () {
    flag=!flag;
    if(flag){
        headerNone.style.height = "0rem";
        headerBox.style.background = "none";
        selfNone.style.height = "13.7rem";
        body.style.overflow = "hidden";
        selfMeng.style.display = "block";
    }else{
        headerNone.style.height = "0rem";
        headerBox.style.background = "none";
        selfNone.style.height = "0rem";
        body.style.overflow = "auto";
        selfMeng.style.display = "none";
    }
};
    

