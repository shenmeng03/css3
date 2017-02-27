(function (doc, win) {
	 var clientWidth
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            clientWidth= docEl.clientWidth;
            if (!clientWidth) return;	
			drawProcess(clientWidth / 1920);
			drawRang(clientWidth / 1920);
            docEl.style.fontSize =100*(clientWidth / 1920)+ 'px';
        };
    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
	
})(document,window);


function drawProcess(size) {
	var x=parseInt(380*size);
	var y=parseInt(380*size);
	// 选出页面上所有class为process的canvas元素,然后迭代每一个元素画图(这里用Jquery的选择器选的)
	$('canvas.process').each(function() {
			// 第一部先拿到canvas标签中间的文字,就是那个61%(这里的stringTrim方法是我自己的方法,去前后空格的方法很多的,这里就不贴出来了)
		var process =parseInt($(this).parent().find('.index-rang').html());
			// 一个canvas标签
		var canvas = this;
			// 拿到绘图上下文,目前只支持"2d"
		var context = canvas.getContext('2d');
		canvas.width=x;
        canvas.height = y;
		var context_x=parseInt(x/2);
		
		// 将绘图区域清空,如果是第一次在这个画布上画图,画布上没有东西,这步就不需要了
	   context.clearRect(0,0,x,x);  
	   context.lineWidth = 3;
		// ***开始画一个灰色的圆
		context.beginPath();
		  // 坐标移动到圆心
		context.moveTo(context_x,context_x);
			// 画圆,圆心是24,24,半径24,从角度0开始,画到2PI结束,最后一个参数是方向顺时针还是逆时针
		context.arc(context_x,context_x,context_x,0,Math.PI *2,true);
		context.closePath();
			// 填充颜色
		context.fillStyle = '#e5e3e4';
		context.fill();
			// ***灰色的圆画完
		
		// 画进度
		context.beginPath();
			// 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形
		context.moveTo(context_x,context_x);
			// 跟上面的圆唯一的区别在这里,不画满圆,画个扇形
		var end_s=Math.PI * 2*process/100+Math.PI*1.5;
		context.arc(context_x,context_x,context_x,Math.PI*1.5,end_s,false);
		context.closePath();
		
		context.fillStyle = '#1f9dd0';
		context.fill();	
	});
}
//长方形进度条
//function drawRang(size) {
//	var w1=160*size;
//	var w;
//	var handle;
//	var hand;
//	var rang;
//	for(var i=1;i<5;i++)
//	{
//	  handle=$("#handle"+i);
//	  hand=handle.find('span');
//	  rang=$("#rang"+i);
//	  w=hand.html()/100*w1;		
//	  rang.css('width',w+'px');
//	  handle.css('left',w+80+'px');
//	}
//	var big_hand=$('#big-handle').find('span');
//	w=big_hand.html()/100*510*size;
//	$('#big-rang').css('width',w+'px');
//	$('#big-handle').css('left',w+52+'px');
//	
//}




//$(function(){
//	var x=$('#jindu').text();
//
//	var z=x*5;
//	$('#big-rang').width(z);	
//})

function drawRang(size) {
	var x=$('#jindu').text();
	var y=$('#big-progress').width();
	var z=y*x/100;
	$('#big-rang').width(z);	
}