var headerBtn = document.querySelector("#jf-header-btn");
var headerNone = document.querySelector(".jf-header-hidden");
var body = document.querySelector("body");
var flag = false;
headerBtn.onclick=function () {
    flag=!flag;
    if(flag){
        selfNone.style.height = "0rem";
        selfMeng.style.display = "none";
        headerNone.style.height = "20rem";
        body.style.overflow = "hidden";
    }else{
        selfNone.style.height = "0rem";
        selfMeng.style.display = "none";
        headerNone.style.height = "0rem";
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
        selfNone.style.height = "13.7rem";
        body.style.overflow = "hidden";
        selfMeng.style.display = "block";
    }else{
        headerNone.style.height = "0rem";
        selfNone.style.height = "0rem";
        body.style.overflow = "auto";
        selfMeng.style.display = "none";
    }
}
var accountBtn = document.querySelector(".jf-account-button");
var payBox = document.querySelector(".jf-pay-box");
accountBtn.onclick = function () {
    payBox.style.display = "block";
    body.style.overflow = "hidden";
}
payBox.onclick = function () {
    payBox.style.display = "none";
    body.style.overflow = "";
}

