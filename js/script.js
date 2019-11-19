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


function Color(red, green, blue, alpha = 1) {
    return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
};


var IEvent = {};
IEvent.mouseCompoent = null;

var IImage = {};

IImage["背景"] = new Image();
IImage["背景"].src = "./img/background.jpg";



IEvent.getMousePosition = function (event) {
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

IComponent = {
    components: [],
}
class Frame {
    width = 0;
    height = 0;
    components = [];
    graphics = null;

    constructor(_width = window.innerWidth,_height = window.innerHeight) {
        IComponent.components = this.components;
        this.width = _width;
        this.height = _height;


        var canvas = document.getElementById('ICanvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.graphics = canvas.getContext('2d');

        canvas.onclick = function (event) {

            var mpos = IEvent.getMousePosition(event);
            var flag = false;
            var dg = function (component) {
                for (let index = 0; index < component.children.length; index++) {
                    dg(component.children[index]);
                }
                if (mpos[0] > component.x && mpos[0] < component.x + component.width && mpos[1] > component.y && mpos[1] < component.y + component.height) {
                    if (!flag) {
                        if (component.onclick != null)
                            component.onclick();
                        flag = !flag;
                    }
                    return;
                }
            };

            for (let index = 0; index < IComponent.components.length; index++) {
                dg(IComponent.components[index]);
            }
        };

        canvas.onmousemove = function (event) {
            var mpos = IEvent.getMousePosition(event);
            var flag = false;
            var dg = function (component) {
                for (let index = 0; index < component.children.length; index++) {
                    dg(component.children[index]);
                }
                if (mpos[0] > component.x && mpos[0] < component.x + component.width && mpos[1] > component.y && mpos[1] < component.y + component.height) {
                    if (!flag) {
                        if (IEvent.mouseCompoent == component) {
                            if (component.onmousemove != null)
                                component.onmousemove();
                        } else {

                            if (component.onmouseover != null)
                                component.onmouseover();
                            if (IEvent.mouseCompoent != null)
                                if (IEvent.mouseCompoent.onmouseout != null)
                                    IEvent.mouseCompoent.onmouseout();
                            IEvent.mouseCompoent = component;
                        }
                        flag = !flag;
                    }else{
                        
                    }
                    return;
                }
            };
            for (let index = 0; index < IComponent.components.length; index++) {
                dg(IComponent.components[index]);
            }
            if (!flag) {
                if (IEvent.mouseCompoent != null) {
                    if (IEvent.mouseCompoent.onmouseout != null)
                        IEvent.mouseCompoent.onmouseout();
                    IEvent.mouseCompoent = null;
                }
            }
        };
    }



    add(c) {
        this.components.push(c);
    }
    paint() {
        this.graphics.clearRect(0, 0, this.width, this.height);
        var dg = function (component, graphics) {
            component.paint(graphics);
            component.update();
            for (let index = 0; index < component.children.length; index++) {
                dg(component.children[index], graphics);
            }
        };

        for (var i of this.components) {
            dg(i, this.graphics);
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
    shadow = { color: Color(0, 0, 0, 1), offsetx: 0, offsety: 0, blur: 0 };

    memory = {};

    onclick = null;
    onmousemove = null;
    onmouseover = null;
    onmouseout = null;

    parent = null;
    constructor(_x, _y, _width, _height) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
    }

    setOnClickListener = function (fun) {
        this.onclick = fun;
        return this;
    }

    add(c) {
        c.x += this.x;
        c.y += this.y;
        c.parent = this;
        this.children.push(c);
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
    update() {

    }
}

class Picture extends Component {
    image = "";
    constructor(_x, _y, _width, _height, _image) {
        super(_x, _y, _width, _height);
        this.image = _image;
    }
    paint(graphics) {
        super.paint(graphics);
        graphics.drawImage(IImage[this.image], this.x, this.y, this.width, this.height);
    }
}

class Lable extends Component {
    text = "";
    textfont = "bold 25px Arial"
    textalign = "center";

    constructor(_x, _y, _width, _height, _text ) {
        super(_x, _y, _width, _height);
        this.text = _text;
    }
    paint(graphics) {
        super.paint(graphics);
        graphics.textAlign = this.textalign;
        graphics.font = this.textfont;
        graphics.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
    }
};

class Link extends Lable {
    src = "";
    constructor(_x, _y, _width, _height, _text,_src = "#") {
        super(_x, _y, _width, _height);
        this.text = _text;
        this.src = _src;
        this.color = Color(0, 0, 225, 1);
        this.setOnClickListener(function () {
            window.location.href = this.src;
        });
    }
}

var frame = new Frame(undefined,1400);


var body = new Picture(0, 0, frame.width, frame.width / 2, "背景");

var nav = new Component(frame.width * 0.1, 350, frame.width * 0.8, 80);
nav.backgroundcolor = Color(255,125,125);

var link1 = new Link(nav.width * 0.1,0,nav.width * 0.1,nav.height,"首页");
var link2 = new Link(nav.width * 0.2,0,nav.width * 0.1,nav.height,"学习要点");
var link3 = new Link(nav.width * 0.3,0,nav.width * 0.1,nav.height,"不忘初心");
var link4 = new Link(nav.width * 0.4,0,nav.width * 0.1,nav.height,"牢记使命");
var link5 = new Link(nav.width * 0.9,0,nav.width * 0.1,nav.height,"关于我的网页");

link1.textfont = "bold 18px Arial";
link2.textfont = "bold 18px Arial";
link3.textfont = "bold 18px Arial";
link4.textfont = "bold 18px Arial";
link5.textfont = "bold 18px Arial";

nav.add(link1);
nav.add(link2);
nav.add(link3);
nav.add(link4);
nav.add(link5);

var main = new Component(frame.width * 0.1, 430, frame.width * 0.8, 870);
main.backgroundcolor = Color(125,255,125);

var box1 = new Component(0,0,main.width * 0.4,main.height * 0.6);
box1.backgroundcolor = Color(222,222,222);

main.add(box1);


var foot = new Component(frame.width * 0.1, 1300, frame.width * 0.8, 100);
foot.backgroundcolor = Color(125,125,255);

body.add(nav);
body.add(main);
body.add(foot);

frame.add(body);


window.onresize = function() {
    
}

window.onload = function () {
    this.setInterval(function () {
        frame.paint();
    }, 20);
}


// window.onreset = function() {
//     frame.paint();
// }
// context.fillStyle = "rgba(0, 0, 200, 0.5)";
// context.fillRect (0,0,200,200);