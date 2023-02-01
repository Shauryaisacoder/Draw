canvas=document.getElementById("mycanvas");
var color = "red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = color;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown );
function my_mousedown (e) {
    color=document.getElementById("color").value;
    console.log(color);
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    console.log("X = "+mouseX+"Y = "+mouseY);
    circle(mouseX, mouseY);
}
function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 40, 0 , 2*Math.PI);
    ctx.stroke();
}
function clear_area () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function return2() {
    window.location.replace("opening.html");
}