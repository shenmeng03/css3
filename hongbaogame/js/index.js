// JavaScript Document
$(document).ready(function(e) {
   var mySwiper = new Swiper('.swiper-container',{
		  pagination: '.pagination',
		  paginationClickable: true,
		  loop: true,
		  autoplay:5000,
		  autoplayDisableOnInteraction: false,
		  mode: 'horizontal'
		});
   $('.top-a1').click(function(){
		$('.top').fadeOut('slow');
	});
	
});
