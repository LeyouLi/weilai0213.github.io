window.onload = function () {
    //点击复制推广链接
    function textCopy(){
        var ele = document.getElementById("text");
        ele.select();
        document.execCommand("Copy");
        alert("复制成功");
    }
    
}

