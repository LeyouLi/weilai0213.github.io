var flag= false;
var sureBtn = document.querySelector(".jf-login-forget>img:nth-child(1)");
console.log(sureBtn)
sureBtn.onclick=function() {
    flag=!flag;
    if (flag){
        sureBtn.src = "../../static/images/mobile/home/sign-sure1.png";
    }else{
        sureBtn.src = "../../static/images/mobile/home/sign-sure2.png";
    }
}