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

//下拉菜单效果
function SelectPullDown(box){
    this.selectBox = document.getElementById(box);
    this.selectIpt = document.getElementById(box).getElementsByTagName("input")[0];//传值表单
    this.selectDivBtn = document.getElementById(box).getElementsByTagName("div")[0];//选中显示框
    this.selectDivList = document.getElementById(box).getElementsByTagName("div")[1];////下拉框
    this.selectSpan = document.getElementById(box).getElementsByTagName("span");//选项
}
SelectPullDown.prototype ={
    selectBox : '',
    selectIpt : '',
    selectDivBtn : '',
    selectDivList : '',
    selectSpan : '',
    iptEven : function(){
        var self = this;
        var flag = false;
        this.selectBox.onclick = function(){
            flag=!flag;
            if(flag){
                self.selectListShow();
            }else {
                self.selectListHide();
            }
        }
        return this;
    },
    selectListShow: function(){
        this.selectDivList.style.display = "block";
    },
    selectListHide: function(){
        this.selectDivList.style.display = "none";
    },
    selectPick : function() {
        var span = this.selectSpan,
            self = this;
        function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
        for(var i=0;i<span.length;i++){
            span[i].onclick = function(){
                self.selectDivBtn.innerHTML = trimStr(this.innerHTML);
                self.selectIpt.value= trimStr(this.id);
                self.selectListHide();
                //chang事件触发
                if (self.selectIpt.fireEvent) self.selectIpt.fireEvent('onchange');
                else{
                    var evt;
                    evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", true, true);
                    self.selectIpt.dispatchEvent(evt);
                };
            }
        }
        return this;
    },
    init : function(){
        this.iptEven().selectPick();
    }
};
//调用方法
var year = new SelectPullDown('selectYear');
year.init();
var erweima = document.querySelector(".jf-account-list1>p:nth-child(3)>img");
var erweimaImg = document.querySelector(".jf-account-erweima");
var maskBox = document.querySelector(".jf-mask");
erweima.onclick = function () {
    erweimaImg.style.display = "block";
    maskBox.style.display = "block";
    body.style.overflow = "hidden";
};
maskBox.onclick = function () {
    erweimaImg.style.display = "none";
    maskBox.style.display = "none";
    body.style.overflow = "";
};

//密码显示隐藏
var showBtn = document.querySelector(".jf-account-list4>p:nth-child(3)>img");
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















