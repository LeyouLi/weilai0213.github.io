$(function(){
	$(".current_level > ul > li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})