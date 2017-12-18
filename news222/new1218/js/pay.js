$(function(){
	$(".pay_type > ul > li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})