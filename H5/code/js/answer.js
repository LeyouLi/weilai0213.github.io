$(function(){
		//判断答题选项
		function answerTrueChange(elem,newsrc){
			$(elem).on('click',function(){
				$('#true_mp3').attr("src","./audio/true.mp3"); 
				$(this).attr("src","./images/"+newsrc);
				setTimeout(function(){
					showBoxOut();
					showBoxIn();
					tableShow();
				},500)
			});

		};
		function answerErrorChange(elem,newsrc){
			$(elem).on('click',function(){
				$('#error_mp3').attr("src","./audio/error.mp3"); 
				$(this).attr("src","./images/"+newsrc);
				setTimeout(function(){
					showBoxOut();
					showBoxIn();
					tableShow();
				},500)
			});
		};

		answerErrorChange('.answer11_box','answer11_1.png');
		answerTrueChange('.answer12_box','answer12_1.png');
		answerErrorChange('.answer13_box','answer13_1.png');

		answerErrorChange('.answer21_box','answer21_2.png');
		answerErrorChange('.answer22_box','answer22_2.png');
		answerTrueChange('.answer23_box','answer23_2.png');
		
		answerTrueChange('.answer31_box','answer31_3.png');
		answerErrorChange('.answer32_box','answer32_3.png');
		answerErrorChange('.answer33_box','answer33_3.png');
		
		answerErrorChange('.answer41_box','answer41_4.png');
		answerErrorChange('.answer42_box','answer42_4.png');
		answerTrueChange('.answer43_box','answer43_4.png');
		
		answerErrorChange('.answer51_box','answer51_5.png');
		answerTrueChange('.answer52_box','answer52_5.png');
		answerErrorChange('.answer53_box','answer53_5.png');
		
		answerTrueChange('.answer61_box','answer61_6.png');
		answerErrorChange('.answer62_box','answer62_6.png');
		answerErrorChange('.answer63_box','answer63_6.png');
		
		answerTrueChange('.answer71_box','answer71_7.png');
		answerErrorChange('.answer72_box','answer72_7.png');
		answerErrorChange('.answer73_box','answer73_7.png');
		
		answerErrorChange('.answer81_box','answer81_8.png');
		answerTrueChange('.answer82_box','answer82_8.png');
        answerErrorChange('.answer83_box','answer83_8.png');
		
		answerTrueChange('.answer91_box','answer91_9.png');
		answerErrorChange('.answer92_box','answer92_9.png');
		answerErrorChange('.answer93_box','answer93_9.png');
		
		answerErrorChange('.answer101_box','answer101_10.png');
		answerErrorChange('.answer102_box','answer102_10.png');
		answerTrueChange('.answer103_box','answer103_10.png');

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
		//过度动画
		function showBoxIn(){
			$('.bg_down_box').css('right',"0rem");
			$('.bg_up_box1').css('right',"0.36rem");
			$('.question_show_box').css('right',"0.8rem");
			setTimeout(function(){
				$('.bookmark_box').css('right',"0.05rem");
				$('.music_box').css('right',"0.4rem");
				$(".title_box").css('top','0rem');
				$(".question1_size").css('right','2.2rem');
				$(".question2_size").css('right','1.2rem');
				$(".question3_size").css('right','1.3rem');
				$(".question4_size").css('right','0.9rem');
				$(".question5_size").css('right','1.2rem');
				$(".question6_size").css('right','1rem');
				$(".question7_size").css('right','1.6rem');
				$(".question8_size").css('right','1.4rem');
				$(".question9_size").css('right','1.6rem');
				$(".question10_size").css('right','0.95rem');
				$(".answer1_box").css('right','1.1rem');
				$(".answer2_box").css('right','1.1rem');
				$(".answer3_box").css('right','1.1rem');
			},1500)
		}
		showBoxIn();

		function showBoxOut(){
				$(".title_box").css('top','-2rem');
				$(".question_box").css('right','10.2rem');
				$(".answer1_box").css('right','10.1rem');
				$(".answer2_box").css('right','10.1rem');
				$(".answer3_box").css('right','10.1rem');
		}
		
		var num = 0;
		function tableShow(){
			num++;
			var h = (num*-13.66) + 'rem';
			if(num < 10){
				$(".question_show_content_box").css("top",h)
			}else{
				return false;
			}	
		}
})