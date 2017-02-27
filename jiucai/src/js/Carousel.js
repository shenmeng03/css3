/**
 * Created by hehua on 2016/4/6.
 */
var swiper = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
	loop:true,
	autoplay : 3000,
	speed:300,
	loop : true
});
  
var swiper2 = new Swiper('.swiper-container2', {  
   
    direction: 'vertical',  
    slidesPerView: 1,  
    paginationClickable: true,  
    spaceBetween: 0, 
	autoplay: 2500,
	autoplayDisableOnInteraction: false ,
    loop : true
});  
$(document).ready(function(){
  var time=setInterval(move,2000);
  var con=$('.tab-con1').html();	
  $('.tab-con').append('<div class="tab-last"></div>');
  $('.tab-last').html(con);
  var m=0;
  function move(){ 
	if($('.tab-con1').css('margin-top')=="0px"||$('.tab-con1').css('margin-top')=="-210px"){
		m+=-210;
		$('.tab-con1').stop().animate({marginTop:m});
	} else{
		m=0;
		$('.tab-con1').css('margin-top',0);
	}
  }
  $('.data-ul1').each(function(index, element) {
    $(this).find('li:even').addClass('data-ul-li');
	
 });
 $('.data-ul').each(function(index, element) {
		$(this).find('li a').each(function(index, element) {
			var str=sub_str($(this).text(),15);
			$(this).text(str);			
        });
        
    });
 $('.swiper-container2 .swiper-slide a').each(function(index, element) {
    var str=sub_str($(this).text(),24);
	$(this).text(str);		
});
	$('.header-wb').mouseover(function(){
		EWMshow($(this));
	});
	$('.header-wb').mouseleave(function(){
		EWMhidden($(this));
	});
	$('.header-wx').mouseover(function(){
		EWMshow($(this));
	});
	$('.header-wx').mouseleave(function(){
		EWMhidden($(this));
	});
	
});

function sub_str(text,len){/*首页新闻字数限制*/
	if(text.length>len){
		text=text.substring(0,--len)+'...'
	}
	return text;
}
function EWMshow(obj){
	obj.parent().find('.header-ewm').fadeIn();	
}
function EWMhidden(obj){
	obj.parent().find('.header-ewm').fadeOut();	
}

