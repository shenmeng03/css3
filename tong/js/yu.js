
//下拉菜单
$(function(){

	$(".nav1 p").click(function(){
		var ul=$(".new");
		if(ul.css("display")=="none"){
			ul.slideDown();
		}else{
			ul.slideUp();
		}
	});
	
	$(".set").click(function(){
		var _name = $(this).attr("name");
		if( $("[name="+_name+"]").length > 1 ){
			$("[name="+_name+"]").removeClass("select");
			$(this).addClass("select");
		} else {
			if( $(this).hasClass("select") ){
				$(this).removeClass("select");
			} else {
				$(this).addClass("select");
			}
		}
	});
	
	$(".nav1 li").click(function(){
		var li=$(this).text();
		$(".nav1 p").html(li);
		$(".new").hide();
		/*$(".set").css({background:'none'});*/
		$(".set").removeClass("select") ;   
	});
})

//选项卡
$(function(){
	
	$(".menuTitle a").click(function(){
		
		var n = $(".menuTitle a").index($(this));
		
		$(".menuContent").hide();
		
		$(".menuContent").eq(n).show();
		
		$(".menuTitle a").removeClass("currentA");
		
		$(this).addClass("currentA");
	})
})
$(function(){
	
	$(".menuTitle1 a").click(function(){
		
		var n = $(".menuTitle1 a").index($(this));
		
		$(".menuContent1").hide();
		
		$(".menuContent1").eq(n).show();
		
		$(".menuTitle1 a").removeClass("currentA1");
		
		$(this).addClass("currentA1");
	})
})

$(function() {
	$(".nav-item").on('touchstart mousedown', function(e) {
		var _this = $(this);
		
		_this.addClass('pb-tab-sel').siblings().removeClass('pb-tab-sel');
		e.preventDefault();
	})
	$(".nav-item").click(function(e) {
		e.preventDefault()
	})
});