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

let x=1,y=1;
    requestAnimationFrame(animate);


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    c.beginPath();
    c.arc(400+y,400,1+x,0,Math.PI*2,false);
    c.strokeStyle = "aqua";
    c.stroke();
    if(x > 50) {x=0;}
    else {x+=2;}
    y++;
}