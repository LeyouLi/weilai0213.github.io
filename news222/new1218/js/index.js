$(function(){
	$(".product_title > div").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".product_cont").hide().eq($(this).index()).show();
	})
})