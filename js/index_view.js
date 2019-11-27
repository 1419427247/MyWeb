
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
main.borad.top_color = new IColor(255,128,128,1);

var box1 = new IComponent(0,1,60,40);

var box1_picture = new IPicture(5,10,90,70, "习近平");
box1_picture.addEventListener(box1_picture.onclick,()=>{
   window.location.href = "./news.html"; 
});


var box1_lable = new ILable(5,85,90,5, "近平在“不忘初心、牢记使命”主题教育工作会议的重要讲话",0);

box1.add(box1_picture);
box1.add(box1_lable);

var box2 = new IComponent(60,1,40,40);

var box2_box = new IComponent(5,10,85,80);
box2_box.borad = new IBorad(0,1,1,0);
var box2_link1 = new ILink(5,10,85,10," 不忘初心、牢记使命 主题教育的18个知识点",0);
var box2_link2 = new ILink(5,20,85,10," 不忘初心、牢记使命 主题教育的19个要点",0);
var box2_link3 = new ILink(5,30,85,10," 不忘初心、牢记使命 主题教育的3个方针",0);
var box2_link4 = new ILink(5,40,85,10," 不忘初心、牢记使命 主题教育的6个要求",0);
var box2_link5 = new ILink(5,50,85,10," 不忘初心、牢记使命 主题教育的12个知识点",0);
var box2_link6 = new ILink(5,60,85,10," 不忘初心、牢记使命 主题教育的8个知识点",0);
var box2_link7 = new ILink(5,70,85,10," 不忘初心、牢记使命 主题教育的5个知识点",0);

links = [box2_link1,box2_link2,box2_link3,box2_link4,box2_link5,box2_link6,box2_link7];

for (let index = 0; index < links.length; index++) {
    links[index].addEventListener(links[index].onmouseover, (_component) => {
        _component.animation.setanimation(links[index], (_component, _animation) => {
            if (_component.backgroundcolor.green > 125) {
                _component.backgroundcolor.green-=25;
                _component.backgroundcolor.blue-=25;
            } else {
                _animation.cancel();
            }
        });
    });
    links[index].addEventListener(links[index].onmouseout, (_component) => {
        _component.animation.setanimation(links[index], (_component, _animation) => {
            if (_component.backgroundcolor.green < 255) {
                _component.backgroundcolor.green += 25;
                _component.backgroundcolor.blue += 25;
            } else {
                _animation.cancel();
            }
        });
    });
    links[index].font = new IFont("bolder", "0.8em", "宋体");
    links[index].color = new IColor(0,0,0,1);

}

box2_box.add(box2_link1);
box2_box.add(box2_link2);
box2_box.add(box2_link3);
box2_box.add(box2_link4);
box2_box.add(box2_link5);
box2_box.add(box2_link6);
box2_box.add(box2_link7);

box2.add(box2_box);

var box3 = new IComponent(0,40,100,40);
box3.borad = new IBorad(2,0,0,0);

var box3_lable1 = new ILable(0,10,100,20,"为什么要不忘初心，牢记使命？",0);
box3_lable1.font  = new IFont("bolder", "3em", "宋体");

var box3_lable2 = new ILable(0,30,100,20,"党的十九大报告主题强调:“不忘初心,牢记使命,高举中国特色社会主义伟大旗帜,决胜全面建成小康社会,夺取新时代中国特色社会主义伟大胜利,为实现中华民族伟大复兴的中国梦不懈奋斗。”“不忘初心,牢记使命”作为十九大主题,放在最前面,可见其分量。“不忘初心,牢记使命”是推动全党更加自觉地为实现新时代党的历史使命不懈奋斗的根本动力。什么是共产党人的初心和使命,怎样理解这个初心和使命?“不忘初心,牢记使命”对我们党有什么意义?今天为什么要强调“不忘初心,牢记使命”?怎样才能够做到“不忘初心,牢记使命”? 一，中国共产党的“初心”和“使命”都一以贯之,没有丝毫偏离,“初心”和“使命”像一条红线,贯穿在我们党的全部理论和实践之中。 二，“初心”和“使命”集中体现了中国共产党人的宗旨,体现了党的先进性。为人民服务,仅仅五个字,伟大深刻又朴素平凡。 三，“初心”和“使命”是激励中国共产党人不断前进的根本动力。为践行初心、完成使命 ,共产党人前赴后继努力奋斗,为中国人民作出了最大的贡献和牺牲。 四，为践行初心、完成使命,中国共产党人进行了艰难的探索,把马克思主义与革命、建设、改革实际结合,创造性地提出了实现初心和使命的道路,提出了为中国人民谋幸福、为中华民族谋复兴的具体道路。 五，伟大的奋斗目标要求共产党人必须“不忘初心,牢记使命”。从最终目标看,中国共产党是担负远大历史任务的使命党,这个党不像西方政党那样轮流执政,而是要长期执政,最终实现共产主义,解放全人类,完成历史使命。 六，现实考验要求共产党人“不忘初心,牢记使命”。党的十九大指出,我们党面临“四大考验”、“四种危险”。只有不忘初心、牢记使命,才能经受考验,加强先进性建设,提高党的领导水平执政水平,提高拒腐防变和抵御风险能力。 “不忘初心、牢记使命“专题教育要结合党史,深入理解党的性质、宗旨、最终目标,将过去、现在和未来联系起来,回顾过去、认清现在,展望未来。明确我们今天要干什么,激发革命精神,创造新的业绩。进一步以党的十九大精神统一思想,为决胜全面建成小康社会再动员、再发力。",30);

box3_lable2.font  = new IFont("bolder", "1.2em", "宋体");

box3.add(box3_lable1);
box3.add(box3_lable2);

main.add(box1);
main.add(box2);
main.add(box3);


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