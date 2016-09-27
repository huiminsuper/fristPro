$(function(){
	var arr=Array();
	var datacolor1=$('.datacolor1').offset().top;	
	//alert(datacolor1)	
	$('.date').each(function(i){
		var stop=$(this).offset().top-datacolor1;
		arr.push(stop);console.log(arr);
	}) 
	$('#content').scroll(function(){
		var scrolltop=$(this).scrollTop();//console.log(scrolltop);
		document.title=scrolltop;
		$.each(arr,function(i){
			//$('.zhan').css('display','block')
			if(scrolltop>arr[i]&&scrolltop<arr[i+1]){
				$('.date').eq(i).addClass('fixed');
			}else{
				$('.date').eq(i).removeClass('fixed');
			}
		})
		if(scrolltop>arr[arr.length-1]){
			$('.date').eq(arr.length-1).addClass('fixed');
		}else{
			$('.date').eq(arr.length-1).removeClass('fixed');
		}
	})
})