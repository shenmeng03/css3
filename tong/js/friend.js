$(document).ready(function(e) {
    $('.friend-tab-con').each(function(index, element) {
		if(index==0){
			 $(this).css('display','block');
		}
        else{
			$(this).css('display','none');
		}
	});

});

/*tab切换*/
$('.friend-tab').find('a').each(function(index, element) {
	$(this).click(function(){
		if($(this).attr('class')!='friend-select'){
			tab_con();
			$(this).attr('class','friend-select');
			var select_tab=$(this).find('i').attr('class')+'-con';
			$('#'+select_tab).css('display','block');
		}	
	});
});
function tab_con(){
	$('.friend-tab').find('a').each(function(index, element) {
		if($(this).attr('class')=='friend-select')
		{
			$(this).removeClass('friend-select');
			var select_tab=$(this).find('i').attr('class')+'-con';
			$('#'+select_tab).css('display','none');
		}
	});
}
/*图片轮换*/
var swiper1 = new Swiper('.swiper-container1', {
nextButton: '.swiper-container1 .swiper-button-next',
prevButton: '.swiper-container1 .swiper-button-prev',
slidesPerView: 1,
slidesPerView: 1,
paginationClickable: true,
spaceBetween: 30,		
loop: true
});
var swiper2 = new Swiper('.swiper-container2', {
nextButton: '.swiper-container2 .swiper-button-next',
prevButton: '.swiper-container2 .swiper-button-prev',
slidesPerView: 1,
paginationClickable: true,
spaceBetween: 30,
loop: true
});
var swiper3 = new Swiper('.swiper-container3', {
nextButton: '.swiper-container3 .swiper-button-next',
prevButton: '.swiper-container3 .swiper-button-prev',
slidesPerView: 1,
paginationClickable: true,
spaceBetween: 30,
loop: true
});
var swiper4 = new Swiper('.swiper-container4', {
nextButton: '.swiper-container4 .swiper-button-next',
prevButton: '.swiper-container4 .swiper-button-prev',
slidesPerView: 1,
paginationClickable: true,
spaceBetween: 30,
loop: true
});