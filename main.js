canvas = document.getElementById("myCanvas");
color = "blue";
width = 2;
ctx = canvas.getContext("2d");
mouse_event = " ";
var lastX,lastY,current_X,current_Y;
canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e){
    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e){
    mouse_event = "mouseLeave";
}

canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e){
    mouse_event = "mouseUp";
}

canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e){
    current_X = e.clientX - canvas.offsetLeft;
    current_Y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        ctx.moveTo(lastX,lastY);

        ctx.lineTo(current_X,current_Y);
    }
    lastX = current_X;
    lastY = current_Y;
}