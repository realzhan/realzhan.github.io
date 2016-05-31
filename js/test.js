var nava;
var naval;
var ttemp;
$(document).ready(function() {
	$(".button").hover(function() {
		naval=$(this);	
		nava=$(this).next();
		ttemp=setTimeout("showslide()",300);
	}, function() {
		nava.removeClass("rotate");
		clearTimeout(ttemp);
		});
	$(".prevpic").click(function(){
         	$("#bgCarousel").carousel('prev');
		});
	$(".nextpic").click(function(){
         	$("#bgCarousel").carousel('next');
		});
	$("#bgCarousel").carousel({
		 interval: 6000
	});
	//调整轮播组的大小
	var carwidth=window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	$(".carousel-inner").width(carwidth);
	//调整窗口高度
	var mainheight=window.innerHeight
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	$(".body").height(mainheight);
});
function showslide(){
	if(naval.is(':hover'))
	nava.addClass("rotate");
}
