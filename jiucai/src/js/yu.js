//投资列表
$(function(){
		$(".ugplz a").click(function(){
	 
		var n = $(".ugplz a").index($(this));
		document.title=n;
		
		$(".ugplz a").removeClass("curvst");
		
		$(this).addClass("curvst");
	})
})
$(function(){
		$(".ugplz1 a").click(function(){
	 
		var n = $(".ugplz1 a").index($(this));
		document.title=n;
		
		$(".ugplz1 a").removeClass("curvst");
		
		$(this).addClass("curvst");
	})
})
$(function(){
		$(".ugplz2 a").click(function(){
	 
		var n = $(".ugplz2 a").index($(this));
		document.title=n;
		
		$(".ugplz2 a").removeClass("curvst");
		
		$(this).addClass("curvst");
	})
})
//已完成项目详情
$(function(){
	
	$(".YU_xxk li").click(function(){
	
		var n = $(".YU_xxk li").index($(this));
		document.title=n;
	
		$(".YU_lol").hide();
		
		$(".YU_lol").eq(n).show();
		
		$(".YU_xxk li").removeClass("curest");
		
		$(this).addClass("curest");
	})
})

//活动中心
$(function(){
	
	$(".Yu_Hdzx a").click(function(){
	
		var n = $(".Yu_Hdzx a").index($(this));
		document.title=n;
	
		$(".Yu_Yinca").hide();
		
		$(".Yu_Yinca").eq(n).show();
		
		$(".Yu_Hdzx a").removeClass("Ddaian");
		
		$(this).addClass("Ddaian");

	})
})
