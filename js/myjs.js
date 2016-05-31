var index=2;
    	 var interpic;
    	$(document).ready(function(){
    		$("img").click(function(){
    			changpic();	
    		})
    		$("img").hover(function(){
    			clearInterval(interpic);
    		},function(){
    			interpic=setInterval(changpic,5000);
    		})
    		var interpic=setInterval(changpic,5000);
    	})
    	function changpic()
    	{
    		var thispic=$(".lu").children()[index];
			$(thispic).fadeOut(500);
			index--;
			if(index<0)
				index=2;
			var nextpic=$(".lu").children()[index];
			$(nextpic).fadeIn(500);
			
    	}