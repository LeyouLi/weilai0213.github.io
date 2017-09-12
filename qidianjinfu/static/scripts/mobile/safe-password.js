var showBtn = document.querySelectorAll(".jf-password-list>img");
var demoInput = document.querySelectorAll(".jf-password-list>input");
for (let i=0;i<showBtn.length;i++){
    showBtn[i].onclick=function () {
        if (demoInput[i].type == "password") {
            demoInput[i].type = "text";
            showBtn[i].src = "../../static/images/mobile/home/login-show1.png";
        }else {
            demoInput[i].type = "password";
            showBtn[i].src = "../../static/images/mobile/home/login-show2.png";
        }
    }
}

