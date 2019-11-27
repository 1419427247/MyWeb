
var background = new IPicture(0, 0, 100, 50, "背景");

var body = new IComponent(15, 40, 70, 100);

var nav = new IComponent(0, 0, 100, 5);

var link1 = new ILink(10, 0, 12, 100, "首页", 25, "./index.html");
var link2 = new ILink(22, 0, 12, 100, "新闻", 25);
var link3 = new ILink(34, 0, 12, 100, "不忘初心", 25);
var link4 = new ILink(46, 0, 12, 100, "牢记使命", 25);
var link5 = new ILink(85, 0, 15, 100, "关于我的网页", 25, "./aboutme.html");

nav.add(link1);
nav.add(link2);
nav.add(link3);
nav.add(link4);
nav.add(link5);

var main = new IComponent(0, 5, 100, 120);
main.borad = new IBorad(1, 0, 0, 1);
main.borad.top_color = new IColor(255,128,128,1);

var ILable1 = new ILable(0, 10, 100, 5, "被发现啦╰(￣ω￣ｏ)，还有这个网页bug太多了（；´д｀）ゞ，点我看被废弃的网页", 0);
ILable1.color = new IColor(255, 255, 255, 1);

var ILable2 = new ILable(0, 30, 100, 5, "太难了（＞人＜；）", 0);


main.add(ILable2);
main.add(ILable1);


var foot = new ILable(50, 125, 100, 10, "不忘初心，牢记使命 © 2019 ipad水晶，版权所有", 0, undefined, undefined, "center");


body.add(nav);
body.add(main);
body.add(foot);

background.add(body);

IFrame.add(background);



window.onload = function () {
    IFrame.show();
}


IFrame.getComponentByTag("ILink").onmouseover((_component) => {
    _component.borad = new IBorad(0, 2, 0, 0);
    _component.borad.left_color = new IColor(198, 0, 0, 1);
    _component.repaint();
});

// IFrame.getComponentByTag("ILink").onmouseout((_component) => {
//     console.log(_component);

//     _component.animation = new IAnimation(_component,()=>{
//         _component.backgroundcolor = new IColor(22,122,255,1);
//     });
// });

IFrame.getComponentByTag("ILink").onmouseout((_component) => {
    _component.borad = new IBorad(0, 0, 0, 0);
    _component.repaint();
});
//IFrame.repaint(IFrame);


ILable2.addEventListener(ILable2.onmouseover, (_component) => {
    _component.backgroundcolor = new IColor(222, 222, 222, 1);
    _component.repaint();
});

ILable2.addEventListener(ILable2.onmouseout, (_component) => {
    _component.backgroundcolor = new IColor(255, 255, 255, 1);
    _component.repaint();
});

ILable2.addEventListener(ILable2.onclick, (_component) => {
    ILable1.color = new IColor(0, 0, 0, 1);
    _component.repaint();
});


ILable1.addEventListener(ILable1.onclick, (_component) => {
    window.location.href = "./old/bad_index.html";
});