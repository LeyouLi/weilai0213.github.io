$(function(){



		$('.answer1_box').on('click',function(){
			$('#error_mp3').attr("src","./audio/error.mp3"); 
			$(this).attr("src","./images/answer11.png")
		});
		$('.answer2_box').on('click',function(){
			$('#true_mp3').attr("src","./audio/true.mp3"); 
			$(this).attr("src","./images/answer12.png")
		});
		$('.answer3_box').on('click',function(){
			$('#error_mp3').attr("src","./audio/error.mp3"); 
			$(this).attr("src","./images/answer13.png")
		});

		$('.bg_down_box').css('right',"0rem");
		$('.bg_up_box1').css('right',"0.36rem");
		$('.bg_up_box2').css('right',"0.8rem");
		
		
})