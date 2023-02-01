var me = "empty";
var lpox, lpoy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color = "black";
wol = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e) {
    color=document.getElementById("color").value;
    wol=document.getElementById("wol").value;
    me = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e) {
    currentpositionofmousex = e.clientX-canvas.offsetLeft;
    currentpositionofmousey = e.clientY-canvas.offsetTop;
    if (me == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = wol;
        console.log("last position of x and y = ");
        console.log("x="+lpox+"y = "+lpoy);
        ctx.moveTo(lpox, lpoy);
        console.log("current position of x and y = ");
        console.log("x="+currentpositionofmousex+"y = "+currentpositionofmousey);
        ctx.lineTo(currentpositionofmousex, currentpositionofmousey);
        ctx.stroke();
    }
    lpox = currentpositionofmousex;
    lpoy = currentpositionofmousey;
   
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    me = "mouseUP";
    
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    me = "mouseleave";
}
function clear_area() {
    ctx.clearRect(0, 0 , ctx.canvas.width,ctx.canvas.height);

}

function return1() {
    window.location.replace("opening.html");
}