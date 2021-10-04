canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(200, 240, 40, 0, 2*Math.PI);
ctx.stroke();

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(150, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250, 200, 40, 0, 2*Math.PI);
ctx.stroke();

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(300, 240, 40, 0, 2*Math.PI);
ctx.stroke();

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(350, 200, 40, 0, 2*Math.PI);
ctx.stroke();