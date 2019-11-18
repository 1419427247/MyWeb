var width = window.innerWidth;
var height = window.innerHeight;

var canvas = document.getElementById('ICanvas');
canvas.addEventListener('click',onClick);
canvas.width = width;
canvas.height = height;


function getMousePosition(event) {
    var x = y = 0,
        doc = document.documentElement,
        body = document.body;
    if(!event) event=window.event;
    if (window.pageYoffset) {
        x = window.pageXOffset;
        y = window.pageYOffset;
    }else{
        x = (doc && doc.scrollLeft || body && body.scrollLeft || 0)
          - (doc && doc.clientLeft || body && body.clientLeft || 0);
        y = (doc && doc.scrollTop  || body && body.scrollTop  || 0)
          - (doc && doc.clientTop  || body && body.clientTop  || 0);
    }
    x += event.clientX;
    y += event.clientY;
    return [x, y];
}

function onClick(event) {
    console.log(getMousePosition(event));
}

function Color(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}


function Frame() {
    var components = [];
    var context = canvas.getContext('2d');
    this.add = function (c) {
        components.push(c);
    }
    this.repaint = function () {
        context.fillStyle = "rgba(255, 255, 255, 1)";
        context.fillRect(0, 0, width, height);
    }
    this.paint = function () {
        for (const i of components) {
            i.ondraw(context);
        }
    }
    this.update = function () {

    }
}

function Component(x, y, w, h) {
    var children = [];
    this.x = x;
    this.y = y;
    this.width = w;
    this.heigth = h;
    this.backgroundcolor = Color(255, 14, 255, 0);
    this.borad = 5;
    this.boradcolor = Color(0, 0, 0, 1);

    this.add = function (c) {
        c.x = this.x + c.x;
        c.y = this.y + c.y;
        children.push(c);
    }

    this.paint = function (graphics) {
        graphics.fillStyle = this.backgroundcolor;
        graphics.fillRect(this.x, this.y, this.width, this.heigth);

        if (this.borad > 0) {
            graphics.beginPath();
            graphics.strokeStyle = this.boradcolor;
            graphics.lineWidth = this.borad;
            graphics.rect(this.x, this.y, this.width, this.heigth)
            graphics.stroke();
        }
    }

    this.ondraw = function (graphics) {
        this.paint(graphics);
        for (i of children) {
            i.ondraw(graphics);
        }
    };
}

function Button(x, y, w, h) {
    var component = new Component(x, y, w, h);
    return component;
}

function Lable(x, y, w, h, t) {
    var component = new Component(x, y, w, h);
    component.fontcolor = Color(0, 0, 0, 1);
    component.paint = function (graphics) {
        graphics.fillStyle = this.backgroundcolor;
        graphics.fillRect(this.x, this.y, this.width, this.heigth);
        graphics.fillStyle = component.fontcolor;
        graphics.fillText(t, this.x + this.width, this.y + this.heigth)
    }
    return component;
}

var frame = new Frame();
var bg = new Component(0, 0, width, height);
bg.backgroundcolor = Color(125, 55, 55, 1);
bg.add(new Button(55, 55, 333, 333));
bg.add(new Lable(55, 55, 30, 30,"大家好啊"));
frame.add(bg);
frame.paint();

// context.fillStyle = "rgba(0, 0, 200, 0.5)";
// context.fillRect (0,0,200,200);