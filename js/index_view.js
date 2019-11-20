function index_view(){

var frame = new Frame(undefined,window.screen.width * 0.85);


var body = new Picture(0, 0, frame.width, frame.width / 2, "背景");

var nav = new Component(frame.width * 0.1, frame.width * 0.26, frame.width * 0.8, frame.width * 0.04);

var link1 = new Link(nav.width * 0.1,0,nav.width * 0.1,nav.height,"首页","./index.html");
var link2 = new Link(nav.width * 0.2,0,nav.width * 0.1,nav.height,"新闻");
var link3 = new Link(nav.width * 0.3,0,nav.width * 0.1,nav.height,"不忘初心");
var link4 = new Link(nav.width * 0.4,0,nav.width * 0.1,nav.height,"牢记使命");
var link5 = new Link(nav.width * 0.85,0,nav.width * 0.15,nav.height,"关于我的网页","./aboutme.html");


link1.textfont = "bold 1em Arial";
link2.textfont = "bold 1em Arial";
link3.textfont = "bold 1em Arial";
link4.textfont = "bold 1em Arial";
link5.textfont = "bold 1em Arial";

nav.add(link1);
nav.add(link2);
nav.add(link3);
nav.add(link4);
nav.add(link5);

var main = new Component(frame.width * 0.1, frame.width * 0.3, frame.width * 0.8,frame.width * 0.5);
main.backgroundcolor = Color(0,0,0,0);
main.borad = 1;

var box1 = new Component(0,0,main.width * 0.4,main.height * 0.6);
box1.backgroundcolor = Color(255,255,255);

var box1_picture = new Picture(box1.width * 0.05, box1.height * 0.2, box1.width * 0.9, box1.height * 0.6, "习近平");
box1_picture.shadow = { color: Color(0, 0, 0, 1), offsetx: 5, offsety: 5, blur: 5 };
box1_picture.onclick = function() {
    window.location.href = "./news_1.html";
}

var box1_lable = new Lable(box1.width * 0.05, box1.height * 0.85, box1.width * 0.9, box1.height * 0.1, "近平在“不忘初心、牢记使命”主题教育工作会议的重要讲话");

box1.add(box1_picture);
box1.add(box1_lable);

var box2 = new Component(main.width * 0.4,0,main.width * 0.6,main.height * 0.6);
box2.backgroundcolor = Color(255,255,255);

var box2_box = new Component(box2.width * 0.05,box2.height * 0.1,box2.width * 0.85,box2.height * 0.8);
box2_box.borad = 2;
box2_box.shadow = { color: Color(0, 0, 0, 1), offsetx: 5, offsety: 5, blur: 5 };

var box2_link1 = new Link(box2_box.width * 0.1,box2_box.height * 0.2,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的18个知识点！");
var box2_link2 = new Link(box2_box.width * 0.1,box2_box.height * 0.3,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的19个要点！");
var box2_link3 = new Link(box2_box.width * 0.1,box2_box.height * 0.4,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的3个基本方针！");
var box2_link4 = new Link(box2_box.width * 0.1,box2_box.height * 0.5,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的6个要求！");
var box2_link5 = new Link(box2_box.width * 0.1,box2_box.height * 0.6,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的12个知识点！");
var box2_link6 = new Link(box2_box.width * 0.1,box2_box.height * 0.7,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的8个知识点！");
var box2_link7 = new Link(box2_box.width * 0.1,box2_box.height * 0.8,box2_box.width * 0.8,box2_box.height * 0.1,"“不忘初心、牢记使命”主题教育的5个知识点！");

box2_box.add(box2_link1);
box2_box.add(box2_link2);
box2_box.add(box2_link3);
box2_box.add(box2_link4);
box2_box.add(box2_link5);
box2_box.add(box2_link6);
box2_box.add(box2_link7);

box2.add(box2_box);

var box3 = new Component(0,main.height * 0.6,main.width,main.height * 0.4);
box3.backgroundcolor = Color(255,255,255);
box3.borad = 1;

var box3_lable1 = new Lable(0,0,box3.width,box3.height * 0.3,"为什么要不忘初心，牢记使命？");
box3_lable1.textfont = "bold 2em Arial";

var box3_lable2 = new Lable(0,box3.height * 0.3,box3.width,box3.height * 0.2,"事业发展永无止境，共产党人的初心永远不能改变。唯有不忘初心，方可告慰历史、告慰先辈，方可赢得民心、赢得时代，方可善作善成、一往无前。");
box3_lable2.textfont = "bold 1em Arial";

var box3_lable3 = new Lable(0,box3.height * 0.5,box3.width,box3.height * 0.2,"96年来，我们党团结带领人民取得的伟大成就充分说明，不忘初心才能不迷失方向，不忘初心才能找到正确的道路。");
box3_lable3.textfont = "bold 1em Arial";

box3.add(box3_lable1);
box3.add(box3_lable2);
box3.add(box3_lable3);

main.add(box1);
main.add(box2);
main.add(box3);

var foot = new Component(frame.width * 0.1, frame.width * 0.8, frame.width * 0.8, frame.width * 0.05);
foot.backgroundcolor = Color(255,255,255);

var foot_ipad = new Lable(0,0,foot.width,foot.height,"ipad水晶，版权所有")

foot.add(foot_ipad);

body.add(nav);
body.add(main);
body.add(foot);

frame.add(body);

return frame;
}

window.onresize = function() {
    
}


window.onload = function () {
    var frame = this.index_view();
    frame.init();
    setInterval(() => {
        frame.paint();
    }, 20);
}