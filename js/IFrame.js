var IEvent = {};


IEvent.onClick = function (event) {
    var mpos = IEvent.getMousePos(event);
    var dg = function (component) {
        if (!component.enabled)
            return false;
        for (let index = 0; index < component.children.length; index++) {
            if (dg(component.children[index]))
                return true;
        }
        if (mpos[0] > component.x && mpos[0] < component.x + component.width && mpos[1] > component.y && mpos[1] < component.y + component.height) {
            if (component.onclick != null)
                component.onclick();
            return true;
        }
        return false
    };
    for (let index = 0; index < IFrame.components.length; index++) {
        if (dg(IFrame.components[index]))
            return;
    }
}
IEvent.mouseComponent = null;
IEvent.onMouseMove = function () {
    var mpos = IEvent.getMousePos(event);
    var dg = function (component) {
        if (!component.enabled)
            return false;
        for (let index = 0; index < component.children.length; index++) {
            if (dg(component.children[index]))
                return true;
        }
        if (mpos[0] > component.x && mpos[0] < component.x + component.width && mpos[1] > component.y && mpos[1] < component.y + component.height) {
            if (component != IEvent.mouseComponent) {
                if (IEvent.mouseComponent != null)
                    if (IEvent.mouseComponent.onmouseout != null)
                        IEvent.mouseComponent.onmouseout();
                if (component.onmouseover != null)
                    component.onmouseover();
            }
            if (component.onmousemove != null)
                component.onmousemove();
            IEvent.mouseComponent = component;
            return true;
        }
        return false
    };
    var flat = false;
    for (let index = 0; index < IFrame.components.length; index++) {
        flat = flat || dg(IFrame.components[index]);
        if (flat)
            return;
    }

    if (!flat) {
        if (IEvent.mouseComponent != null)
            if (IEvent.mouseComponent.onmouseout != null)
                IEvent.mouseComponent.onmouseout();
        IEvent.mouseComponent = null;
    }

};


IEvent.getMousePos = function () {
    var e = window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return [x, y];
}

class IColor {
    constructor(_red, _green, _blue, _alpha) {
        this.red = _red;
        this.green = _green;
        this.blue = _blue;
        this.alpha = _alpha;
    }
    setColor(_red, _green, _blue, _alpha) {
        this.red = _red || this.red;
        this.green = _green || this.green;
        this.blue = _blue || this.blue;
        this.alpha = _alpha || this.alpha;
    }
    getColor() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
    }
}

class IShadow {
    constructor(_color, _offx, _offy, _blue) {
        this.color = _color.getColor();
        this.offsetx = _oofx;
        this.offsety = _oofy;
        this.blur = _blue;
    }
}

class IBorad {
    constructor(_top,_left,_right,_bottom) {
        this.top = _top || 0;
        this.top_color = new IColor(0,0,0,1);
        this.left = _left || 0;
        this.left_color = new IColor(0,0,0,1);
        this.right = _right || 0;
        this.right_color = new IColor(0,0,0,1);
        this.bottom = _bottom || 0;
        this.bottom_color = new IColor(0,0,0,1);
    }
}

class IFont {
    constructor(_style, _size, _name) {
        this.name = _name;
        this.size = _size;
        this.style = _style;
    }
    getFont() {
        return this.style + " " + this.size + " " + this.name;
    }
}


var IFrame = {
    x: 0,
    y: 0,
    components: [],
    width: window.screen.width,
    height: window.screen.width,
    canvas: document.getElementById('ICanvas'),
    graphics: null,
};
IFrame.canvas.width = IFrame.width;
IFrame.canvas.height = IFrame.height;
IFrame.graphics = IFrame.canvas.getContext('2d');

document.body.onclick = IEvent.onClick;
document.body.onmousemove = IEvent.onMouseMove;


IFrame.add = function (_component) {
    _component.parent = this;
    this.components.push(_component);
};

IFrame.getComponentById = function(_id) {
    var dg = function (_component) {
        if(_component.id = _id)
            return _component;
        for (let _index = 0; _index < _component.children.length; _index++) {
            dg(_component.children[_index]);
        }
    };
    for (let _index = 0; _index < this.components.length; _index++) {
        dg(this.components[_index]);
    }
}

IFrame.getComponentByTag = function(_tag) {
    var box = new IComponentBox();
    var dg = function (_component) {
        if(_component.tag = _tag)
            box.array.push(_component);
        for (let _index = 0; _index < _component.children.length; _index++) {
            dg(_component.children[_index]);
        }
    };
    for (let _index = 0; _index < this.components.length; _index++) {
        dg(this.components[_index]);
    }
    return box;
}

IFrame.show = function () {
    this.graphics.clearRect(0, 0, this.width, this.height);
    var dg = function (_component, _graphics) {
        _component.x = _component.parent.x + _component.parent.width * _component.x / 100;
        _component.y = _component.parent.y + _component.parent.height * _component.y / 100;
        _component.width = _component.parent.width * _component.width / 100;
        _component.height = _component.parent.height * _component.height / 100;

        if (!_component.enabled)
            return;
        _component.paint(_graphics);
        for (let _index = 0; _index < _component.children.length; _index++) {
            dg(_component.children[_index], _graphics);
        }
    };
    for (let _index = 0; _index < this.components.length; _index++) {
        dg(this.components[_index], this.graphics);
    }
}
IFrame.repaint = function (_component) {
    var dg = function (_component, _graphics) {
        if (!_component.enabled)
            return;
        _component.paint(_graphics);
        for (let _index = 0; _index < _component.children.length; _index++) {
            dg(_component.children[_index], _graphics);
        }
    };

    if (_component == this) {
        this.graphics.clearRect(0, 0, _component.width, _component.height);
        for (let _index = 0; _index < this.components.length; _index++) {
            dg(this.components[_index], this.graphics);

        }
        return;
    }
    this.graphics.clearRect(_component.x, _component.y, _component.width, _component.height);
    dg(_component, this.graphics);
}

class IComponentBox{
    constructor(){
        this.array = [];
    }

    backgroundcolor(_backgroundcolor){
        for (i of this.array) {
            i.backgroundcolor = _backgroundcolor;
        }
    }
    borad (_borad){
        for (i of this.array) {
            i.borad = _borad;
        }
    }
    shadow (_shadow){
        for (i of this.array) {
            i.shadow = _shadow;
        }
    }
    animation (_animation){
        for (i of this.array) {
            i.animation = _animation;
        }
    }
    enabled (_enabled){
        for (i of this.array) {
            i.enabled = _enabled;
        }
    }
    onclick (_onclick){
        for (i of this.array) {
            i.onclick = _onclick;
        }
    }
    onmousemove (_onmousemove){
        for (i of this.array) {
            i.onmousemove = _onmousemove;
        }
    }
    onmouseover (_onmouseover){
        for (i of this.array) {
            i.onmouseover = _onmouseover;
        }
    }
    onmouseout (_onmouseout){
        for (i of this.array) {
            i.onmouseout = _onmouseout;
        }
    }
}


class IComponent {
    constructor(_x, _y, _width, _height) {
        this.id = null;
        this.tag = "IComponent";

        this.x = _x;
        this.y = _y;

        this.width = _width;
        this.height = _height;

        this.backgroundcolor = null;
        this.borad = null;
        this.shadow = null;

        this.animation = null;

        this.enabled = true;

        this.onclick = null;

        this.onmousemove = null;
        this.onmouseover = null;
        this.onmouseout = null;

        this.memory = {};
        this.parent = null;
        this.children = [];

    }

    add(_component) {
        _component.parent = this;
        this.children.push(_component);
    }

    repaint(_component) {
        if (_component == undefined)
            this.parent.repaint(this);
        else {
            this.parent.repaint(_component);
        }
    }

    paint(_graphics) {
        if (this.backgroundcolor != null) {
            _graphics.fillStyle = this.backgroundcolor.getColor();
            _graphics.fillRect(this.x, this.y, this.width, this.height);
        }
        if (this.borad != null) {
            _graphics.lineJoin="round";
            if(this.borad.left > 0){
                _graphics.beginPath();
                _graphics.lineWidth = this.borad.left;
                _graphics.strokeStyle = this.borad.left_color.getColor();

                _graphics.moveTo(this.x + this.borad.left / 2,this.y);
                _graphics.lineTo(this.x + this.borad.left / 2,this.y + this.height);
                _graphics.stroke();

            }
            if(this.borad.right > 0){
                _graphics.beginPath();
                _graphics.lineWidth = this.borad.right;
                _graphics.strokeStyle = this.borad.right_color.getColor();

                _graphics.moveTo(this.x + this.width - this.borad.right/2,this.y);
                _graphics.lineTo(this.x + this.width- this.borad.right/2,this.y + this.height);
                _graphics.stroke();
            }
            if(this.borad.top > 0){
                _graphics.lineWidth = this.borad.top;
                _graphics.strokeStyle = this.borad.top_color.getColor();

                _graphics.beginPath();
                _graphics.moveTo(this.x,this.y + this.borad.top / 2);
                _graphics.lineTo(this.x + this.width,this.y + this.borad.top / 2);
                _graphics.stroke();
            }
            if(this.borad.bottom > 0){
                _graphics.beginPath();
                _graphics.lineWidth = this.borad.bottom;
                _graphics.strokeStyle = this.borad.bottom_color.getColor();

                _graphics.moveTo(this.x,this.y + this.height - this.borad.bottom/2);
                _graphics.lineTo(this.x + this.width,this.y + this.height - this.borad.bottom/2);
                _graphics.stroke();
            }
        }
    }
}

// class IPanel extends IComponent {
//     constructor(_x, _y, _width, _height) {
//         super(_x, _y, _width, _height);
//         this.canvas = document.createElement('canvas');
//         this.canvas.style.position = "absolute";
//         this.canvas.width = 0;
//         this.canvas.height = 0;
//         this.graphics = this.canvas.getContext('2d');

//         document.body.appendChild(this.canvas);
//     }  

//     repaint(_component) {
//         var dg = function (_component, _graphics) {
//             if (!_component.enabled)
//                 return;
//             _component.paint(_graphics);
//             for (let _index = 0; _index < _component.children.length; _index++) {
//                 dg(_component.children[_index], _graphics);
//             }
//         };
    
//         if (_component == this) {
//             this.graphics.clearRect(0, 0, _component.width, _component.height);
//             for (let _index = 0; _index < this.components.length; _index++) {
//                 dg(this.components[_index], this.graphics);
    
//             }
//             return;
//         }
//         this.graphics.clearRect(_component.x, _component.y, _component.width, _component.height);
//         dg(_component, this.graphics);
//     }

//     paint() {
//         console.log(this.canvas);
//         if (this.canvas.width == 0) {
//             this.canvas.style.left = "" + this.x + "px";
//             this.canvas.style.top = "" + this.y + "px";
//             this.canvas.width = this.width;
//             this.canvas.height = this.height;
//         }
//         if (this.backgroundcolor != null) {
//             this.graphics.fillStyle = this.backgroundcolor.getColor();
//             this.graphics.fillRect(0, 0, this.width, this.height);
//             console.log("QAQ");
//         }
//     }
// }


class ILable extends IComponent {
    constructor(_x, _y, _width, _height, _text, _lineheight, _font = new IFont("bold", "1.2em", "宋体"), _color = new IColor(0, 0, 0, 1)) {
        super(_x, _y, _width, _height);
        this.tag = "ILable";
        this.text = _text;
        this.font = _font;
        this.color = _color;
        this.lineheight = _lineheight;
    }


    paint(graphics) {
        super.paint(graphics);
        graphics.fillStyle = this.color.getColor();
        graphics.font = this.font.getFont();
        graphics.textBaseline = "bottom";
        //graphics.fillText(this.text, this.x, this.y, this.width);

        var temp = "";
        var line = [];
        for (var index = 0; index < this.text.length; index++) {
            temp += this.text[index];
            if (graphics.measureText(temp).width >= this.width) {
                line.push(temp);
                temp = "";
            }
        }
        line.push(temp);

        for (var index = 0; index < line.length; index++) {
            graphics.fillText(line[index], this.x, this.y + (index + 1) * this.lineheight * this.height / 100, this.width);
        }
    }
}

class IPicture extends IComponent {
    constructor(_x, _y, _width, _height, _name) {
        super(_x, _y, _width, _height);
        this.tag = "IPicture";
        this.image = IPicture.get(_name);
    }

    paint(graphics) {
        super.paint(graphics);
        graphics.drawImage(this.image, this.x, this.y, this.width, this.width);
    }
}

IPicture.images = [];

IPicture.set = function (_name, _src) {
    this.images[_name] = new Image();
    this.images[_name].src = _src;
}

IPicture.get = function (_name) {
    return this.images[_name];
}

class ILink extends ILable {
    constructor(_x, _y, _width, _height, _text, _lineheight,_src = "#") {
        super(_x, _y, _width, _height, _text, _lineheight);
        this.tag = "ILink";
        this.src = _src;
        this.color = new IColor(225, 0, 0, 1);
        this.onclick = ()=> {
            window.location.href = this.src;
        };
    }
}



IPicture.set("背景", "./img/background.jpg")


window.onload = () => {
    var c1 = new ILink(5, 5, 50, 15, "       背景啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", 20,"http://baidu.com");
    c1.backgroundcolor = new IColor(255, 123, 123, 0.5);
    c1.borad = new IBorad(1,5,5,5);
    c1.borad.right_color = new IColor(255,123,2,1);

    IFrame.add(c1);
    IFrame.add(new ILink(25,25,12,12,"QWQ",5,"QWQ"));

    IFrame.show();


    console.log(IFrame.getComponentByTag("ILink"));
}






// class Lable extends Component {
//     constructor(_x, _y, _width, _height, _text ) {
//         super(_x, _y, _width, _height);
//         this.text = _text;
//         this.textfont = "bold 1em Arial"
//         this.textalign = "center";
//     }
//     paint(graphics) {
//         super.paint(graphics);
//         graphics.textAlign = this.textalign;
//         graphics.font = this.textfont;
//         graphics.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
//     }
// };
