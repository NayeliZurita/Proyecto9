var sketchProc = function(processingInstance){
    with(processingInstance){
    	size(500,500);

    	var xPositions = [];
		var yPositions = [];
		var speed = [];
		var clr = [];

		for(var i=1;i<150;i++)
		{
		    xPositions.push(i*10);
		    yPositions.push(random(1,-300));
		    speed.push(random(3,8));
		    clr.push(random(150,255));
		}
		draw = function() {
		    background(217, 242, 255);
		    noStroke();
		    for (var i = 0; i < xPositions.length; i++) {
		        ellipse(xPositions[i], yPositions[i], 10, 10);
		        yPositions[i] += speed[i];
		        fill(22, 88, 201);
		        if(yPositions[i]>height)
		        {
		           yPositions[i]=random(1,-150); 
		        }
		    }
		    
		};
    }
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);