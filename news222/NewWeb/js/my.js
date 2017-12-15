/*window.onload = function () {
    //点击复制推广链接
    function textCopy(){
        var ele = document.getElementById("text");
        ele.select();
        document.execCommand("Copy");
        alert("复制成功");
    }
    
}*/

var qrcode = document.getElementById("text");
//获取遮罩层
var mask = document.getElementById("mask");
//获取关闭按钮
var close = document.getElementById("close");
//点击图片弹出遮罩层
qrcode.onclick = function () {
   mask.style.display = "block";
}
//点击按钮关闭遮罩层

close.onclick = function () {
   mask.style.display = "none";
}

