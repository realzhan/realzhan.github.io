$(document).ready(function(){
	$("#btn0").attr("src","img/smallsircle1clicked.png");
	$("#poem0").css("opacity","1");
	$(".smallcirlce").hover(function(){
		$(this).prev(".line").css("display","inline-block");
	},
	function(){
		$(this).prev(".line").css("display","none");
	})
	$("#yin").hover(function(){
		$("#name").animate({opacity:'1'},"slow");
	},function(){
		$("#name").animate({opacity:'0'},"slow");
	})
	var audio1=$("#audio1");
	var audio2=$("#audio2");
	var audio3=$("#audio3");
	var audio4=$("#audio4");
	var btn0=$("#btn0");
	var btn1=$("#btn1");
	var btn2=$("#btn2");
	var btn3=$("#btn3");
	var btn4=$("#btn4");
	var cbt=$("#cbt");
	var playmode=true;
	var playnum=0;
	//点击切换之后的初始化
	$(".smallcirlce").click(function(){
		$("#poem0").css("opacity","0");
		$("#ropic0").css("opacity","0");
		$("#btn0").attr("src","img/smallsircle1.png");
		$("#btn1").attr("src","img/smallsircleqi.png");
		$("#btn2").attr("src","img/smallsirclecheng.png");
		$("#btn3").attr("src","img/smallsirclezhuan.png");
		$("#btn4").attr("src","img/smallsirclehe.png");
		for(var i=1;i<5;i++)
		{$("#"+"audio"+i).get(0).pause();
		$("#"+"ropic"+i).css({"dispaly":"none","opacity":"0"});
		$("#"+"poem"+i).css("opacity","0");
		}
	})
	$(btn0).click(function(){
		$("#ropic0").animate({opacity:'1'},"slow");
		$(btn0).attr("src","img/smallsircle1clicked.png");
		$("#poem0").animate({opacity:'1'},"slow");
		$(cbt).css("display","none");
		playnum=0;
	})
	$(btn2).click(function(){
		$(cbt).css("display","block");
		$(cbt).attr("src","img/ctpause.png");
		$("#ropic2").css("display","block");
		$("#ropic2").animate({opacity:'1'},"slow");
		$("#poem2").animate({opacity:'1'},"slow");
		$(btn2).attr("src","img/smallsirclechengclicked.png");
		$(audio2).get(0).currentTime=0;
		$(audio2).get(0).play();
		playnum=2;
	})
	$(btn1).click(function(){
		$(cbt).css("display","block");
		$(cbt).attr("src","img/ctpause.png");
		$("#ropic1").css("display","block");
		$("#ropic1").animate({opacity:'1'},"slow");
		$("#poem1").animate({opacity:'1'},"slow");
		$(btn1).attr("src","img/smallsircleqiclicked.png");
		audio1.get(0).currentTime=0;
		audio1.get(0).play();
		playnum=1;
	})
	$(btn3).click(function(){
		$(cbt).css("display","block");
		$(cbt).attr("src","img/ctpause.png");
		$("#ropic3").css("display","block");
		$("#ropic3").animate({opacity:'1'},"slow");
		$("#poem3").animate({opacity:'1'},"slow");
		$(btn3).attr("src","img/smallsirclezhuanclicked.png");
		$(audio3).get(0).currentTime=0;
		$(audio3).get(0).play();
		playnum=3;
	})
	$(btn4).click(function(){
		$(cbt).css("display","block");
		$(cbt).attr("src","img/ctpause.png");
		$("#ropic4").css("display","block");
		$("#ropic4").animate({opacity:'1'},"slow");
		$("#poem4").animate({opacity:'1'},"slow");
		$(btn4).attr("src","img/smallsircleheclicked.png");
		$(audio4).get(0).currentTime=0;
		$(audio4).get(0).play();
		playnum=4;
	})
	//点击事件处理完成
	//播放控制

	$(cbt).click(function(){
			if(playmode)
				{$(this).attr("src","img/ctplay.png");
				playmode=false;}
			else
				{$(this).attr("src","img/ctpause.png");
				playmode=true;}
			if(playnum>0)
				{var juplay=$("#"+"audio"+playnum).get(0).paused;
				 if(!juplay)
				 {
				 	$("#"+"audio"+playnum).get(0).pause();
					$("#"+"ropic"+playnum).css({"animation-play-state":"paused",
						"-moz-animation-play-state":"paused",
						"-webkit-animation-play-state":"paused"});
				 }
				 
				 else 
				 {
				 	$("#"+"audio"+playnum).get(0).play();
					$("#"+"ropic"+playnum).css({"animation-play-state":"running",
						"-moz-animation-play-state":"running",
						"-webkit-animation-play-state":"running"});
				 }				 
				}
				
	})	
	$("#yin").hover(function(){
		$("#yin2").attr("src","img/yin2.png");
	},function(){
		$("#yin2").attr("src","img/yin.png");
	})
})