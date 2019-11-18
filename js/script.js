var width = window.innerWidth;
var height = window.innerHeight;

var canvas = document.getElementById('ICanvas');
canvas.width = width;
canvas.height = height;

var Event = {
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
    this.backgroundcolor = Color(255,14,255,1);

    this.add = function(c){
        c.x = this.x+c.x;
        c.y = this.y+c.y;
        children.push(c);
    }
    
    this.paint = function(ctx) {
        ctx.fillStyle = this.backgroundcolor;
        ctx.fillRect(this.x, this.y, this.width, this.heigth);
    }

    this.ondraw = function (ctx) {
        this.paint(ctx);
        for (i of children) {
            i.ondraw(ctx);
        }
    };
}

function Button(x, y, w, h) {
    var component = new Component(x, y, w, h);
    return component;
}

var frame = new Frame();
var bg = new Component(55, 55, 500, 500)
bg.add(new Button(33, 33, 800, 600));
frame.add(bg);
frame.paint();

// context.fillStyle = "rgba(0, 0, 200, 0.5)";
// context.fillRect (0,0,200,200);