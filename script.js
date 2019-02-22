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
    this.fillColor = "black";
    this.strokeColor = "black";

    this.draw = function() {
        c.beginPath();
        c.arc(this.x+this.dx,this.y+this.dy,1+this.radius,0,Math.PI*2,false);
        c.strokeStyle = this.strokeColor;
        c.fillStyle = this.fillColor;
        c.stroke();
        c.fill();
    };
    this.switchColors = function() {
        this.fillColor = "#"+((1<<24)*Math.random()|0).toString(16);
        this.strokeColor = "#"+((1<<24)*Math.random()|0).toString(16);
    };
    this.update = function() {
        //Bounce of walls
        if(this.x + this.radius > innerWidth || this.x - this.radius <= 0) {
            this.dx = -this.dx;
            this.switchColors();
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius <= 0) {
            this.dy = -this.dy;
            this.switchColors();
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

let circleArray = [];
let amount = 200;

for(let i=0; i<amount+1; i++) {
    let radius=Math.random()*50+5,
        dy=(Math.random() - 0.5) * 4,
        dx=(Math.random() - 0.5) * 4,
        dr=0,
        x = Math.random() * (innerWidth - radius * 2) + radius,
        y = Math.random() * (innerHeight - radius * 2) + radius,
        fill = "#"+((1<<24)*Math.random()|0).toString(16),
        stroke = "#"+((1<<24)*Math.random()|0).toString(16);

        circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<circleArray.length;i++)
    {
        circleArray[i].update();
    }
}

requestAnimationFrame(animate);