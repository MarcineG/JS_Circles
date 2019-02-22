let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');


let radius=40,
    maxRadius = 40,
    dy=(Math.random() - 0.5) * 10,
    dx=(Math.random() - 0.5) * 10,
    dr=0,
    x = Math.random() * innerWidth,
    y = Math.random() * innerHeight;





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
        if(this.x + this.radius > innerWidth || this.x <= 0) {this.dx = -this.dx;}
        if(this.y + this.radius > innerHeight || this.y <= 0) {this.dy = -this.dy;}
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}


let first = new Circle(200,200,4,4,40);

requestAnimationFrame(animate);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    first.update();

}