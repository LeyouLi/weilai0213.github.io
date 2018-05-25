$(document).ready(function(){
	
	$('.show_btn1').on('click',function(){
		$('.show_btn1').toggleClass('pwd_show_btn');
		var demoInput1 = document.getElementById("demo_input1");
		if(demoInput1.type == 'password'){
			demoInput1.type = "text";
		}else{
			demoInput1.type = "password";
		}
	})

	// $('.show_btn2').on('click',function(){
	// 	$('.show_btn2').toggleClass('pwd_show_btn');
	// 	var demoInput2 = document.getElementById("demo_input2");
	// 	if(demoInput2.type == 'password'){
	// 		demoInput2.type = "text";
	// 	}else{
	// 		demoInput2.type = "password";
	// 	}
	// })



	$(".protocol_title img").click(function(){ 
		$('.mask_register_box').hide();
		$('.user_protocol_box').hide();
		$('body').css('overflow','visible');
	}); 
	$("#user_know_box").click(function(){ 
		$('.mask_register_box').show();
		$('.user_protocol_box').show();
		$('body').css('overflow','hidden');
	}); 

	

})