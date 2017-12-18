//登录注册页-密码的显示隐藏
var showBtn = document.querySelector(".telnum>p>img");
var demoInput = document.getElementById("demo_input");
showBtn.onclick=function () {
    if (demoInput.type == "password") {
        demoInput.type = "text";
        showBtn.src = "./images/login-show2.png";
    }else {
        demoInput.type = "password";
        showBtn.src = "./images/login-show1.png";
    }
}

//注册页-用户协议
var agreeBtn = document.querySelector(".agreeBox");
console.log(agreeBtn);
var flag = true;
agreeBtn.onclick = function () {
    if(flag){
        agreeBtn.classList.add("active");
        return flag = !flag;
    }else{
        agreeBtn.classList.remove("active");
        return flag = !flag;
    }
}