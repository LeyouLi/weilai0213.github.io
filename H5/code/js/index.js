$(function(){

	function moveAnimate(){
		$('.music_box').css('margin','0.5rem 0 0.5rem 92%');
		$('.index_bg_box').css('marginLeft','0');
		$('.logo_box').css('marginLeft','3.8rem');
		$('.people_box').css('marginLeft','1.7rem');
		$('.title1_box').css('marginLeft','1.5rem');
		$('.title2_box').css('marginLeft','2.4rem');
		$('.begin_box').css('marginLeft','0rem');
	};
	moveAnimate();
	// 切换规则
    $('.rule_box').on('click',function(){
    	$('#btn_mp3').attr("src","./audio/btn.mp3"); 
    	$('.rule_box').toggleClass('rule_box2');
    	if($(this).hasClass('rule_box2')){
    		$('.index_content_box').css("left","-9.13rem");
    	}else{
    		$('.index_content_box').css("left","0rem");
    	} 
    });

    // 跳转到完善信息页面
 	$('.start_box').on('click',function(){
    	$('#btn_mp3').attr("src","./audio/btn.mp3"); 
    	setTimeout(function(){
    		window.location.href="authentication.html"
    	},500) 
    });
    // 关闭/打开音乐
    $('.music_box').on('click',function(){
    	if(!($(this).hasClass('close_music'))){
    		$('#bg_music').attr("src",""); 
    		$('.music_box').addClass('close_music');
    		$('.music_box').removeClass('music_box');
    	}else{
    		$('#bg_music').attr("src","./audio/bg_music.mp3");
    		$('.close_music').addClass('music_box');
    		$('.close_music').removeClass('close_music');
    	}
    });


       











})