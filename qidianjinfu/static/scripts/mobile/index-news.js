var headerNone = document.querySelector(".jf-header-hidden");
var body = document.querySelector("body");
var flag = false;
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













