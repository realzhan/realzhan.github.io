$(document).ready(function(){
	$("#poem0").css("opacity","1");
	$(".smallcirlce").hover(function(){
		$(this).prev(".line").css("display","inline-block");
	},
	function(){
		$(this).prev(".line").css("display","none");
	})
	var audio1=$("#audio1");
	var audio2=$("#audio2");
	var audio3=$("#audio3");
	var audio4=$("#audio4");
	$("#btn0").click(function(){
		$("#poem0").css("opacity","0");
		for(var i=1;i<5;i++)
		{$("#"+"audio"+i).get(0).pause();
		$("#"+"ropic"+i).animate({opacity:'0'},"slow");
		$("#"+"poem"+i).css("opacity","0");
		}
		$("#poem0").animate({opacity:'1'},"slow");
	})
	$("#btn2").click(function(){
		$("#poem0").css("opacity","0");
		for(var i=1;i<5;i++)
		{$("#"+"audio"+i).get(0).pause();
		$("#"+"ropic"+i).css({"dispaly":"none","opacity":"0"});
		$("#"+"poem"+i).css("opacity","0");}
		$("#ropic2").css("display","block");
		$("#ropic2").animate({opacity:'1'},"slow");
		$("#poem2").animate({opacity:'1'},"slow");
		$(audio2).get(0).currentTime=0;
		$(audio2).get(0).play();
	})
	$("#btn1").click(function(){
		$("#poem0").css("opacity","0");
		for(var i=1;i<5;i++)
		{$("#"+"audio"+i).get(0).pause();
		$("#"+"ropic"+i).css({"dispaly":"none","opacity":"0"});
		$("#"+"poem"+i).css("opacity","0");}
		$("#ropic1").css("display","block");
		$("#ropic1").animate({opacity:'1'},"slow");
		$("#poem1").animate({opacity:'1'},"slow");
		$(audio1).get(0).currentTime=0;
		$(audio1).get(0).play();
		
	})
	$("#btn3").click(function(){
		$("#poem0").css("opacity","0");
		for(var i=1;i<5;i++)
		{$("#"+"audio"+i).get(0).pause();
		$("#"+"ropic"+i).css({"dispaly":"none","opacity":"0"});
		$("#"+"poem"+i).css("opacity","0");}
		$("#ropic3").css("display","block");
		$("#ropic3").animate({opacity:'1'},"slow");
		$("#poem3").animate({opacity:'1'},"slow");
		$(audio3).get(0).currentTime=0;
		$(audio3).get(0).play();
		
	})
	$("#btn4").click(function(){
		$("#poem0").css("opacity","0");
		for(var i=1;i<5;i++)
		{$("#"+"audio"+i).get(0).pause();
		$("#"+"ropic"+i).css({"dispaly":"none","opacity":"0"});
		$("#"+"poem"+i).css("opacity","0");}
		$("#ropic4").css("display","block");
		$("#ropic4").animate({opacity:'1'},"slow");
		$("#poem4").animate({opacity:'1'},"slow");
		$(audio4).get(0).currentTime=0;
		$(audio4).get(0).play();
	})
	
})