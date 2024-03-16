var canvas = document.createElement("canvas"); 
var ctx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 750;
document.body.appendChild(canvas);

var perm = [];
while(perm.length < 255){
	while(perm.includes(val = Math.floor(Math.random() * 255)));
	perm.push(val);
}
var lerp = (a,b,t) => a + (b-a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise = x =>{
	x = x * 0.01 % 255;
	return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

var player = new function(){
	this.x = canvas.width / 2;
	this.y = 0;
	this.rot = 0;

	this.img = new Image();
	this.img.src = "moto.png";
	this.draw = function(){
		ctx.drawImage();
	}
}

var t2 = 0;

function loop(){
	t2 +=1;

	ctx.fillStyle = "#19f";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(0, canvas.height);
	for(i = 0; i < canvas.width; i++){
		ctx.lineTo(i, canvas.height - noise(t2 + i) * 0.25);
	}
	ctx.lineTo(canvas.width, canvas.height);
	ctx.fill();

	requestAnimationFrame(loop);

}

loop();