$(function(){
	function moveAnimate(){
		$('.music_box').css('right','0.4rem');
		$('.content_user_name_box').css('left','0');
		$('.user_name1_box').css('left','2rem');
		$('.user_img1_box').css('left','2.45rem');
		$('.Comment1_box').css('left','2.8rem');
        $('.Comment2_box').css('left','2.3rem');
        $('.Comment3_box').css('left','2.25rem');
        $('.Comment4_box').css('left','3rem');
        $('.Comment5_box').css('left','2rem');
		$('.Produced_box').css('left','0.85rem');
	};
	moveAnimate();

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

    //关闭分享蒙版
    $('.mask_box').on('click',function(){
        $(this).css("display",'none');
    });
})