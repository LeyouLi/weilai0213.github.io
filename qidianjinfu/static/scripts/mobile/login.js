var showBtn = document.querySelector(".jf-input-password>img:nth-child(3)");
var demoInput = document.getElementById("demo_input");
showBtn.onclick=function () {
    if (demoInput.type == "password") {
        demoInput.type = "text";
        showBtn.src = "../../static/images/mobile/home/login-show1.png";
    }else {
        demoInput.type = "password";
        showBtn.src = "../../static/images/mobile/home/login-show2.png";
    }
}

