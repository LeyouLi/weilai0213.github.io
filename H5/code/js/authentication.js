$(function(){
// 动画效果
function moveAnimate(){
	$('.music_box').css('right','0.4rem');
	$('.content_write_box').css('left','0.8rem');
	$('.authentication_box').css('left','2.4rem');
	$('.error_box').css('left','1.8rem');
	$('.name_box').css('left','2.1rem');
	$('.tel_box').css('left','2.1rem');
	$('.cardnum_box').css('left','2.1rem');
	$('.go_answer_btn_box').css('right','0.8rem');
};
moveAnimate();

// 获取验证码
	$("#btn").on('click',function(){
		var countdown=60; 
		var obj = $("#btn");
		settime(obj);
		function settime(obj) { //发送验证码倒计时
			if (countdown == 0) { 
				obj.attr('disabled',false); 
				obj.val("获取验证码");
				countdown = 60; 
				return;
			} else { 
				obj.attr('disabled',true);
				obj.val("重新发送(" + countdown + ")");
				countdown--; 
			} 
			setTimeout(function() { 
				settime(obj) }
				,1000) 
		}
	})

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
// 开始答题按钮
$('.go_answer_btn_box').on('click',function(){
    	$('#btn_mp3').attr("src","./audio/btn.mp3"); 
    	setTimeout(function(){
    		window.location.href="answer.html";
    	},500) 
    });   

})