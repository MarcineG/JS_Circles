let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
/*
c.fillStyle = 'blue';
c.fillRect(100,100,100,100);

//Line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(200,300);
c.strokeStyle = "red";
c.stroke();

//Arcs
for(let i = 0; i<=100 ; i+=10)
{
    c.beginPath();
    c.strokeStyle = "green";
    c.arc(200+i,200+i,30+i,0,Math.PI*2,false);
    c.stroke();
}
for(let i = 0; i<=50 ; i+=1)
{
    c.beginPath();
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    c.strokeStyle = "aqua";
    c.arc(x,y,30+i,0,Math.PI*2,false);
    c.stroke();
}*/

let x=200;
requestAnimationFrame(animate);
function animate() {
    requestAnimationFrame(animate);

    c.beginPath();
    c.arc(x,200,x-150,0,Math.PI*2,false);
    c.strokeStyle = "aqua";
    c.stroke();
    x++;
}