var headerBtn = document.querySelector("#jf-header-btn");
var headerNone = document.querySelector(".jf-header-hidden");
var headerBox = document.querySelector(".jf-header");
var body = document.querySelector("body");
var flag = false;
headerBtn.onclick=function () {
    flag=!flag;
    if(flag){
        selfNone.style.height = "0rem";
        headerNone.style.height = "20rem";
        headerBox.style.background = "#000";
        body.style.overflow = "hidden";
    }else{
        selfNone.style.height = "0rem";
        headerNone.style.height = "0rem";
        headerBox.style.background = "none";
        body.style.overflow = "auto";
    }
};
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
}



    

