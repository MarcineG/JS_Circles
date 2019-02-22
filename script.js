let canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext('2d');

function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x+this.dx,this.y+this.dy,1+this.radius,0,Math.PI*2,false);
        c.strokeStyle = "aqua";
        c.stroke();
    };

    this.update = function() {
        //Bounce of walls
        if(this.x + this.radius > innerWidth || this.x - this.radius <= 0) {this.dx = -this.dx;}
        if(this.y + this.radius > innerHeight || this.y - this.radius <= 0) {this.dy = -this.dy;}
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

let circleArray = [];
let amount = 200;




for(let i=0; i<amount+1; i++) {

    let radius=Math.random()*50+5,
        dy=(Math.random() - 0.5) * 10,
        dx=(Math.random() - 0.5) * 10,
        dr=0,
        x = Math.random() * (innerWidth - radius * 2) + radius,
        y = Math.random() * (innerHeight - radius * 2) + radius;
        circleArray.push(new Circle(x,y,dx,dy,radius));

}


requestAnimationFrame(animate);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(let i=0; i<circleArray.length;i++)
    {
        circleArray[i].update();
    }

}