$(function() {

	$(".list h3").each(function(index, el) {

		$(this).click(function(event) {
			$(this).siblings('ul').slideToggle();
			});
		});
	$('.list h3').on('click',function(){
		$(this).parent().siblings().find('ul').hide();
		$(this).siblings('ul').show();
		$(this).css({'background-color':'#fafafa','color':'#17a2d5'});
		$(this).parent().siblings().find('h3').css({'background-color':'#ffffff','color':'#5e5e5e'})
	});
	function GetQueryString(name)
	{
		 var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		 var r = window.location.search.substr(1).match(reg);
		 if(r!=null)return  unescape(r[2]); return null;
	}
	var myurl=GetQueryString("s");
	if(myurl !=null && myurl.toString().length>1)
	{
		var dd=GetQueryString("s");
		var pp=GetQueryString("p");
		$("#"+dd).removeAttr("style");
		$(".list_nav_label").attr('style','top:'+pp+'px');
	}

	function rolling(one,two,three,four,five){
	var speed=50;
	var dheight=one.innerHeight();
	var oheight=two.innerHeight();
	//alert(dheight);
	if(dheight>oheight){
  		three.innerHTML=four.innerHTML;
  		 function Marquee(){
 			 if(three.offsetHeight-five.scrollTop<=0)
 				 {
  					five.scrollTop-=four.offsetHeight;
  				 }
  			else{
  					 five.scrollTop++;
  				}
  			}
   		var MyMar=setInterval(Marquee,speed);
  		five.onmouseover=function() {clearInterval(MyMar)};
 		five.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
 		}	
 	} 
});
