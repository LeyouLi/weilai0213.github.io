var list = document.querySelector(".current_level > ul > li");
//获取关闭按钮
var close = document.getElementById("close");
//点击图片弹出遮罩层
list.onclick = function () {
   mask.style.display = "block";
}