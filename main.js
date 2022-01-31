var mouseEvent = "empty";
var value_X, value_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
line_width = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent = "mouseDown";
color = document.getElementById("color").value;
line_width = document.getElementById("line_width").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent = "mouseUP";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent = "mouseleave";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
cur_X = e.clientX - canvas.offsetLeft;
cur_Y = e.clientY - canvas.offsetTop;
if( mouseEvent == "mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth = line_width;
    console.log("last X and Y value =" );
    console.log("X=" + value_X +"Y=" + value_Y);
    ctx.moveTo(value_X, value_Y);
    console.log("Current X and Y value =" );
    console.log("X=" + cur_X +"Y=" + cur_Y);
    ctx.arc(cur_X, cur_Y, 20, 0, 2*Math.PI);
    ctx.stroke();

}

value_X = cur_X;
value_Y = cur_Y;
}
function clear1() 
{ 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}