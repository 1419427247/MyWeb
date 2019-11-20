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

IImage["习近平"]= new Image();
IImage["习近平"].src = "./img/xjp.jpg";


IEvent.getMousePosition = function (event) {
    var x = 0;
    var y = 0;
    var doc = document.documentElement;
    var body = document.body;
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

var IComponent = {};
IComponent.components = [];

class Frame {
    constructor(_width = window.screen.width,_height = window.screen.width) {
        this.components = [];
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
    init(){
        var tfun = function (component) {
            if (component.parent != null) {
                component.x += component.parent.x;
                component.y += component.parent.y;
            }
            for (let index = 0; index < component.children.length; index++) {
                tfun(component.children[index]);
            }
        };

        for (var i of this.components) {
            tfun(i);
        }
    }
}

class Component {
    constructor(_x, _y, _width, _height) {
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;

        this.children = [];
        this.color = Color(0, 0, 0, 1);
        this.backgroundcolor = Color(255, 255, 255, 1);
        this.borad = 0;
        this.boradcolor = Color(0, 0, 0, 1);
        this.shadow = { color: Color(0, 0, 0, 1), offsetx: 0, offsety: 0, blur: 0 };
        this.memory = {};
        this.onclick = null;
        this.onmousemove = null;
        this.onmouseover = null;
        this.onmouseout = null;
        this.parent = null;
    }

    setOnClickListener = function (fun) {
        this.onclick = fun;
        return this;
    }

    add(c) {
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
    constructor(_x, _y, _width, _height, _text ) {
        super(_x, _y, _width, _height);
        this.text = _text;
        this.textfont = "bold 1em Arial"
        this.textalign = "center";
    }
    paint(graphics) {
        super.paint(graphics);
        graphics.textAlign = this.textalign;
        graphics.font = this.textfont;
        graphics.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
    }
};

class Link extends Lable {
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