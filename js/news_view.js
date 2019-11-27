
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
main.borad.top_color = new IColor(255, 128, 128, 1);

var title = new ILable(5, 5, 80, 5, "习近平在“不忘初心、牢记使命” 主题教育工作会议上的讲话", 0);
title.font = new IFont("bolder", "2.0vw", "黑体");


// title.addEventListener(title.onmouseover, (_component) => {
//     _component.animation.setanimation(title, (_component, _animation) => {
//         if (_component.backgroundcolor.red > 125) {
//             _component.backgroundcolor.red-=25;
//             _component.backgroundcolor.green-=25;
//             _component.backgroundcolor.blue-=25;
//         } else {
//             _animation.cancel();
//         }
//     });
// })

// title.addEventListener(title.onmouseout, (_component) => {
//     _component.animation.setanimation(title, (_component, _animation) => {
//         if (_component.backgroundcolor.red < 255) {
//             _component.backgroundcolor.red+=25;
//             _component.backgroundcolor.green+=25;
//             _component.backgroundcolor.blue+=25;
//         } else {
//             _animation.cancel();
//         }
//     });
// })



var lable1 = new ILable(5, 10, 90, 60, "2019年5月31日，“不忘初心、牢记使命”主题教育工作会议在北京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。 新华社记者 鞠鹏/摄 党的十九大决定，以县处级以上领导干部为重点，在全党开展“不忘初心、牢记使命”主题教育。今年是中华人民共和国成立70周年，也是我们党在全国执政第70个年头，在这个时刻开展这次主题教育，正当其时。党中央已经印发了关于在全党开展“不忘初心、牢记使命”主题教育的意见。今天会议就是对全党开展这次主题教育进行动员部署。 下面，我讲3个问题。 一、充分认识开展主题教育的重大意义 为中国人民谋幸福，为中华民族谋复兴，是中国共产党人的初心和使命，是激励一代代中国共产党人前赴后继、英勇奋斗的根本动力。开展这次主题教育，是党中央统揽伟大斗争、伟大工程、伟大事业、伟大梦想作出的重大部署，对统筹推进“五位一体”总体布局、协调推进“四个全面”战略布局，决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族伟大复兴的中国梦，具有重大而深远的意义。 第一，开展这次主题教育，是用新时代中国特色社会主义思想武装全党的迫切需要。马克思主义是我们立党立国的根本指导思想。中国共产党从诞生之日起，就把马克思主义鲜明地写在自己的旗帜上。我们党一路走来，无论是处于顺境还是逆境，从未动摇对马克思主义的坚定信仰。改革开放以来，我们党先后开展了整党、“三讲”教育、先进性教育活动、学习实践科学发展观活动、群众路线教育实践活动等，推进“两学一做”学习教育常态化制度化，通过集中性教育和经常性教育相结合，不断强化党的理论学习、教育、武装工作。在新时代，我们党顺应时代发展新要求，创立了新时代中国特色社会主义思想。理论创新每前进一步，理论武装就要跟进一步。 目前，一些党员干部在理论学习上同党中央要求相比还存在不小差距，没有做到往深里走、往心里走、往实里走。开展这次主题教育，就是要坚持思想建党、理论强党，坚持学思用贯通、知信行统一，推动广大党员干部全面系统学、深入思考学、联系实际学，不断增强“四个意识”、坚定“四个自信”、做到“两个维护”，筑牢信仰之基、补足精神之钙、把稳思想之舵。 第二，开展这次主题教育，是推进新时代党的建设的迫切需要。党的十八大以来，我们坚持党要管党、全面从严治党，坚持问题导向，以整治“四风”为突破口，着力解决党内存在的突出问题，以雷霆万钧之力反对腐败，刹住了一些过去被认为不容易刹住的歪风邪气，克服了一些司空见惯的顽瘴痼疾，党风政风明显好转。 全面从严治党永远在路上。我们党面临的“四大考验”是长期的、复杂的，面临的“四种危险”是尖锐的、严峻的，党内存在的思想不纯、政治不纯、组织不纯、作风不纯等突出问题尚未得到根本解决。还要看到，“四风”问题树倒根存，形式主义、官僚主义问题依然突出。开展这次主题教育，就是要认真贯彻新时代党的建设总要求，奔着问题去，以刮骨疗伤的勇气、坚忍不拔的韧劲坚决予以整治，同一切影响党的先进性、弱化党的纯洁性的问题作坚决斗争，努力把我们党建设得更加坚强有力。 第三，开展这次主题教育，是保持党同人民群众血肉联系的迫切需要。人民是我们党执政的最大底气，是我们共和国的坚实根基，是我们强党兴国的根本所在。我们党来自于人民，为人民而生，因人民而兴，必须始终与人民心心相印、与人民同甘共苦、与人民团结奋斗。每个共产党员都要弄明白，党除了人民利益之外没有自己的特殊利益，党的一切工作都是为了实现好、维护好、发展好最广大人民根本利益；人民是历史的创造者、人民是真正的英雄，必须相信人民、依靠人民；我们永远是劳动人民的普通一员，必须保持同人民群众的血肉联系。 目前，一些党员干部为民服务不实在、不上心、不尽力，脱离群众。开展这次主题教育，就是要教育引导广大党员干部发扬革命传统和优良作风，团结带领人民把党的十九大绘就的宏伟蓝图一步一步变为美好现实。 ", 5);

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

// IFrame.getComponentByTag("ILink").onmouseover((_component) => {
//     _component.animation.setanimation(title, (_component, _animation) => {
//         if (_component.backgroundcolor.red < 255) {
//             _component.backgroundcolor.red+=25;
//             _component.backgroundcolor.green+=25;
//             _component.backgroundcolor.blue+=25;
//         } else {
//             _animation.cancel();
//         }
//     });
// })



window.onload = function () {
    IFrame.show();
}