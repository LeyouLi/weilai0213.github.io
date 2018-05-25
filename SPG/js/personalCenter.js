$(document).ready(function(){ 
// eth充值
	$(".eth_into_title img").click(function(){ 
		$('.eth_change_into').hide();
		$('.mask_box').hide();
		$('body').css('overflow','visible');
	}); 
	$(".eth_btn").click(function(){ 
		$('.eth_change_into').show();
		$('.mask_box').show();
		$('body').css('overflow','hidden');
	}); 
	$(".eth_into_btn").click(function(){
		alert('复制成功');
		$('body').css('overflow','visible');
		$('.eth_change_into').hide();
		$('.mask_box').hide();
	});


// bst充值
	$(".bst_into_title img").click(function(){ 
		$('.bst_change_into').hide();
		$('.mask_box').hide();
		$('body').css('overflow','visible');
	}); 
	$(".bst_btn").click(function(){ 
		$('.bst_change_into').show();
		$('.mask_box').show();
		$('body').css('overflow','hidden');
	}); 
	$(".bst_into_btn").click(function(){
		alert('复制成功');
		$('body').css('overflow','visible');
		$('.bst_change_into').hide();
		$('.mask_box').hide();
	});


// 超级黄金转账
	$(".into_title img").click(function(){ 
		$('.spg_change_into').hide();
		$('.mask_box').hide();
		$('body').css('overflow','visible');
	}); 
	$(".spg_btn").click(function(){ 
		$('.spg_change_into').show();
		$('.mask_box').show();
		$('body').css('overflow','hidden');
	}); 

}); 