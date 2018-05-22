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

	$('.show_btn2').on('click',function(){
		$('.show_btn2').toggleClass('pwd_show_btn');
		var demoInput2 = document.getElementById("demo_input2");
		if(demoInput2.type == 'password'){
			demoInput2.type = "text";
		}else{
			demoInput2.type = "password";
		}
	})


	var countDown=60;   
    function setTime(val) {   
	    if (countDown == 0) {   
		    val.removeAttribute("disabled");      
		    val.value="获取验证码";   
		    countDown = 60;  
		    return;  
	    } else {   
		    val.setAttribute("disabled", true);   
		    val.value="重新发送(" + countDown + ")";   
		    countDown--;   
	    }   
	    setTimeout(function() {   
	    	setTime(val)   
	    },1000)   
    } ;

})