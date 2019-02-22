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
    this.originRadius = this.radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x+this.dx,this.y+this.dy,1+this.radius,0,Math.PI*2,false);
        c.strokeStyle = "aqua";
        c.stroke();
        c.fill();
    };

    this.update = function() {
        //Bounce of walls
        if(this.x + this.radius > innerWidth || this.x - this.radius <= 0) {this.dx = -this.dx;}
        if(this.y + this.radius > innerHeight || this.y - this.radius <= 0) {this.dy = -this.dy;}
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();

        //REACT
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50 &&
            this.radius < this.originRadius + 60) {
            this.radius += 4;
        }
        else if(this.radius > this.originRadius) {
            this.radius -= 4;
        }

    }
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<circleArray.length;i++)
    {
        circleArray[i].update();
    }
}


let mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener('mousemove',function(event) {
    console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
});








//MAIN
let circleArray = [];
let amount = 1000;

for(let i=0; i<amount+1; i++) {
    let radius=Math.random()*20+5,
        dy=(Math.random() - 0.5) * 4,
        dx=(Math.random() - 0.5) * 4,
        dr=0,
        x = Math.random() * (innerWidth - radius * 2) + radius,
        y = Math.random() * (innerHeight - radius * 2) + radius;
        circleArray.push(new Circle(x,y,dx,dy,radius));
}

requestAnimationFrame(animate);