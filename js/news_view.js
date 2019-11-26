
var background = new IPicture(0, 0, 100, 50, "背景");

var body = new IComponent(15, 40, 70, 100);

var nav = new IComponent(0, 0, 100, 5);

var link1 = new ILink(10, 0, 12, 100, "  首页", 25, "./index.html");
var link2 = new ILink(22, 0, 12, 100, "  新闻", 25);
var link3 = new ILink(34, 0, 12, 100, "  不忘初心", 25);
var link4 = new ILink(46, 0, 12, 100, "  牢记使命", 25);
var link5 = new ILink(85, 0, 15, 100, "  关于我的网页", 25, "./aboutme.html");

nav.add(link1);
nav.add(link2);
nav.add(link3);
nav.add(link4);
nav.add(link5);

var main = new IComponent(0, 5, 100, 120);
main.borad = new IBorad(1, 0, 0, 1);


    
var title = new ILable(0,5,80,10,"习近平在“不忘初心、牢记使命” 主题教育工作会议上的讲话",0);

var lable1 = new ILable(20,10,80,60,"一、充分认识开展主题教育的重大意义为中国人民谋幸福",0);

main.add(title);
main.add(lable1);


var foot = new ILable(50, 130, 100, 10, "不忘初心，牢记使命 © 2019 ipad水晶，版权所有", 0, undefined, undefined, "center");


body.add(nav);
body.add(main);
body.add(foot);

background.add(body);

IFrame.add(background);


IFrame.getComponentByTag("ILink").onmouseover((_component) => {
    _component.borad = new IBorad(0, 2, 0, 0);
    _component.borad.left_color = new IColor(198, 0, 0, 1);
    _component.repaint();
});


IFrame.getComponentByTag("ILink").onmouseout((_component) => {
    _component.borad = new IBorad(0, 0, 0, 0);
    _component.repaint();
});

window.onload = function () {
    IFrame.show();
}