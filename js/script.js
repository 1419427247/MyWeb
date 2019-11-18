// var width = window.innerWidth;
// var height = window.innerHeight;

// var canvas = document.getElementById('ICanvas');
// canvas.addEventListener('click',onClick);
// canvas.width = width;
// canvas.height = height;


// IEvent = {
//     click : [],
// }


// function getMousePosition(event) {
//     var x = y = 0,
//         doc = document.documentElement,
//         body = document.body;
//     if(!event) event=window.event;
//     if (window.pageYoffset) {
//         x = window.pageXOffset;
//         y = window.pageYOffset;
//     }else{
//         x = (doc && doc.scrollLeft || body && body.scrollLeft || 0)
//           - (doc && doc.clientLeft || body && body.clientLeft || 0);
//         y = (doc && doc.scrollTop  || body && body.scrollTop  || 0)
//           - (doc && doc.clientTop  || body && body.clientTop  || 0);
//     }
//     x += event.clientX;
//     y += event.clientY;
//     return [x, y];
// }

// function onClick(event) {
//     var mpos = getMousePosition(event);
//     for (const i of IEvent.click) {
//         if (mpos[0] >i[0].x && mpos[0] < i[0].x + i[0].width && mpos[1] >i[0].y && mpos[1] < i[0].y + i[0].heigth) {
//             i[1]();
//         }

//         console.log(i[0].x + "-" + i[0].y);
//     }
//     console.log(getMousePosition(event));

// }

// function Color(r, g, b, a) {
//     return "rgba(" + r + "," + g + "," + b + "," + a + ")";
// }


// function Frame() {
//     var components = [];
//     var context = canvas.getContext('2d');
//     this.add = function (c) {
//         components.push(c);
//     }
//     this.repaint = function () {
//         context.fillStyle = "rgba(255, 255, 255, 1)";
//         context.fillRect(0, 0, width, height);
//     }
//     this.paint = function () {
//         for (const i of components) {
//             i.ondraw(context);
//         }
//     }
//     this.update = function () {

//     }
// }

// function Component(x, y, w, h) {
//     var children = [];
//     this.x = x;
//     this.y = y;
//     this.width = w;
//     this.heigth = h;
//     this.backgroundcolor = Color(255, 14, 255, 0);
//     this.borad = 1;
//     this.boradcolor = Color(0, 0, 0, 1);

//     this.setListener = function(event,fun) {
//         event.push([this,fun]);
//     }

//     this.add = function (c) {
//         c.x = this.x + c.x;
//         c.y = this.y + c.y;
//         children.push(c);
//     }

//     this.paint = function (graphics) {
//         graphics.fillStyle = this.backgroundcolor;
//         graphics.fillRect(this.x, this.y, this.width, this.heigth);

//         if (this.borad > 0) {
//             graphics.beginPath();
//             graphics.strokeStyle = this.boradcolor;
//             graphics.lineWidth = this.borad;
//             graphics.rect(this.x, this.y, this.width, this.heigth)
//             graphics.stroke();
//         }
//     }

//     this.ondraw = function (graphics) {
//         this.paint(graphics);
//         for (i of children) {
//             i.ondraw(graphics);
//         }
//     };
// }

// function Button(x, y, w, h) {
//     var component = new Component(x, y, w, h);
//     return component;
// }

// function Lable(x, y, w, h, t) {
//     var component = new Component(x, y, w, h);
//     component.fontcolor = Color(0, 0, 0, 1);
//     component.paint = function (graphics) {

//         graphics.fillStyle = this.backgroundcolor;
//         graphics.fillRect(this.x, this.y, this.width, this.heigth);
//         graphics.fillStyle = component.fontcolor;
//         graphics.fillText(t, this.x, this.y + this.heigth)

//         if (this.borad > 0) {
//             graphics.beginPath();
//             graphics.strokeStyle = this.boradcolor;
//             graphics.lineWidth = this.borad;
//             graphics.rect(this.x, this.y, this.width, this.heigth)
//             graphics.stroke();
//         }
//     }
//     return component;
// }

// var frame = new Frame();
// var bg = new Component(0, 0, width, height);
// bg.backgroundcolor = Color(125, 55, 55, 1);
// bg.add(new Button(55, 55, 333, 333));
// bg.add(new Lable(55, 55, 30, 30,"大家好啊"));

// var l = new Lable(86, 85, 30, 30,"主机名")
// l.setListener(IEvent.click,function(){
//     alert("QWQ");
// })
// bg.add(l);


// frame.add(bg);
// frame.paint();


function Color(red, green, blue, alpha) {
    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
};


var IEvent = {
    click : [],
}
IEvent.getMousePosition = function(event) {
    var x = y = 0,
        doc = document.documentElement,
        body = document.body;
    if (!event) event = window.event;
    if (window.pageYoffset) {
        x = window.pageXOffset;
        y = window.pageYOffset;
    } else {
        x = (doc && doc.scrollLeft || body && body.scrollLeft || 0)
            - (doc && doc.clientLeft || body && body.clientLeft || 0);
        y = (doc && doc.scrollTop || body && body.scrollTop || 0)
            - (doc && doc.clientTop || body && body.clientTop || 0);
    }
    x += event.clientX;
    y += event.clientY;
    return [x, y];
}


class Frame {
    width = window.innerWidth;
    height = window.innerHeight;
    components = [];
    graphics = null;

    constructor() {
        var canvas = document.getElementById('ICanvas');
        canvas.width = this.width;
        canvas.height = this.height;
        canvas.onclick = function (event) {
            var mpos = IEvent.getMousePosition(event);
            for (const i of IEvent.click) {
                if (mpos[0] > i[0].x && mpos[0] < i[0].x + i[0].width && mpos[1] > i[0].y && mpos[1] < i[0].y + i[0].height) {
                    i[1]();
                }
            }
        }

        this.graphics = canvas.getContext('2d');
    }
    add(c) {
        this.components.push(c);
    }
    repaint = function () {
        this.graphics.fillStyle = "rgba(255, 255, 255, 1)";
        this.graphics.fillRect(0, 0, this.width, this.height);
    }
    paint = function () {
        for (var i of this.components) {
            (function(component,graphics) {
                component.paint(graphics);
                for (const c of i.children) {
                    arguments.callee(c,graphics);
                }
            })(i,this.graphics);
        }
    }
}

class Component {
    x = 0;
    y = 0;
    width = 0;
    height = 0;

    children = [];

    color = Color(0, 0, 0, 1);

    backgroundcolor = Color(255, 255, 255, 1);

    borad = 0;
    boradcolor = Color(0, 0, 0, 1);

    shadow = {color:Color(0,0,0,1),offsetx : 0,offsety : 0,blur : 0};
    constructor(_x, _y, _width,_height) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
    }

    setListener = function(event,fun) {
        event.push([this,fun]);
        return this;
    }

    add(c){
        children.push(c);
    }

    paint(graphics) {     
        graphics.shadowOffsetX = this.shadow.offsetx;
        graphics.shadowOffsetY = this.shadow.offsety;
        graphics.shadowColor = this.shadow.color;
        graphics.shadowBlur = this.shadow.blur; 

        graphics.fillStyle = this.backgroundcolor;
        graphics.fillRect(this.x, this.y, this.width, this.height);

        if (this.borad > 0) {
            graphics.beginPath();
            graphics.strokeStyle = this.boradcolor;
            graphics.lineWidth = this.borad;
            graphics.rect(this.x, this.y, this.width, this.height);
            graphics.stroke();
        }

        graphics.fillStyle = this.color;
    }
}

class Lable extends Component{
    text = "";
    textfont="bold 25px Arial"
    textalign = "center";

    constructor(_x, _y, _width,_height, _text) {
        super(_x, _y,_width,_height);
        this.text = _text;
    }
    paint(graphics){
        super.paint(graphics);
        graphics.textAlign = this.textalign;
        graphics.font = this.textfont;
        graphics.fillText(this.text,this.x + this.width/2,this.y+this.height/2,this.width);
    }
};


var frame = new Frame();
frame.add(new Lable(50, 50, 300, 100,"你好啊，我的世界"));
frame.paint();

// context.fillStyle = "rgba(0, 0, 200, 0.5)";
// context.fillRect (0,0,200,200);