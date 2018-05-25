$(document).ready(function(){
	
	$('.show_btn').on('click',function(){
		$('.show_btn').toggleClass('pwd_show_btn');
		var demoInput = document.getElementById("demo_input");
		if(demoInput.type == 'password'){
			demoInput.type = "text";
		}else{
			demoInput.type = "password";
		}
	})


})