;(function($){
	$.dialog=function(opt){
		return new Dialog(opt);
	}
	function Dialog(opt){
		/*var _default={
			title:'标题内容',
			content:"确定删除吗？",
			btn:["确定","取消"],
			callback:null
		},
		settings=$.extend(_default,opt);*/
		var opt=$.extend({
			title:'标题内容',
			content:"确定删除吗？",
			btn:["确定","取消"],
			callback:null
		},opt);
		var html='<div class="mark"></div>'
				+'<div class="dialog">'
					+'<h2>'+opt.content+'</h2>'
					+'<p></p>'
				+'</div>';//只是字符串用时要转换成jq对象
		var node=$(html);
		node.prependTo($('body'));
		$('.mark').css('height',$(document).height()+'px');
		$.each(opt.btn,function(i,val){
			$('<span>'+val+'</span>').appendTo('.dialog p');
		})
		var btns=$('.dialog').find('span');
		btns.eq(1).on('click',close);
		btns.eq(0).on('click',function(){
			opt.callback && opt.callback();
			//此句也可以写成if(opt.callback) opt.callback()
			//如果点击确定不做处理时就无callback所以需判断callback是否存在
			close();
		})



		//取消mark and dialog 
		function close(){
			//移除遮罩和弹框
			$('.mark').remove();
			$('.dialog').remove();
		}
	}
})(jQuery);