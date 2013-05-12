window.onload = function(){
	var canvas = document.getElementById('canvas');
	var height = canvas.height;
	var width = canvas.width;
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		var images = {};
		var loadup = function(callback){
			
			ctx.fillStyle = "rgb(245,245,245)";
			ctx.fillRect(0,0,width,height);
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.fillRect(80,400,780,20);
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.strokeRect(80,400,780,20);
			
			var sources = {
					joker: "images/joker.jpg",
					two : "http://upload.wikimedia.org/wikipedia/commons/f/f9/Formica_high_res.jpg"
			};
			
			var loadedImages = 0;
			var numImages = 0;
			for (var src in sources){
				numImages++;
			}
			
			ctx.fillStyle = "rgb(60,60,60)";
			for(var src in sources){
				images[src] = new Image();
				images[src].onload = function(){
					if(++loadedImages >= numImages){
						callback();
					} 
					ctx.fillRect(81,401, (780/numImages)*loadedImages-2, 18);
				}
				images[src].src = sources[src];
			}
		}
		var draw_menu = function(){
			console.log(images);
			ctx.drawImage(images.joker,0,0,images.joker.height,images.joker.width);
		}
		loadup(function(){
			draw_menu();
		});
	} else {
		alert('Couldn\'t get canvas context');
	}
}