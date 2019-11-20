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
    
    var title = new Lable(main.width * 0.02,1,main.width * 0.97,main.height * 0.2,"习近平在“不忘初心、牢记使命” 主题教育工作会议上的讲话");
    title.textfont = "bold 2em Arial"
    title.textalign = "center";

    var lable1 = new Lable(main.width * 0.01,main.height * 0.2,main.width * 0.5,main.height * 0.1,"一、充分认识开展主题教育的重大意义为中国人民谋幸福");
    lable1.textfont = "bold 1.5em Arial"
    var lable2 = new Lable(main.width * 0.01,main.height * 0.3,main.width * 0.98,main.height * 0.05,"为中华民族谋复兴，是中国共产党人的初心和使命，是激励一代代中国共产党人前赴后继、英勇奋斗的根本动力。开展这次主题教育，是党中央统揽伟大斗争、伟大工程、伟大事业");
    var lable3 = new Lable(main.width * 0.01,main.height * 0.35,main.width * 0.98,main.height * 0.05,"、伟大梦想作出的重大部署，对统筹推进“五位一体”总体布局、协调推进“四个全面”战略布局，决胜全面建成小康社会、夺取新时代中国特色社会主义伟大胜利、实现中华民族");
    var lable4 = new Lable(main.width * 0.01,main.height * 0.4,main.width * 0.25 ,main.height * 0.05,"伟大复兴的中国梦，具有重大而深远的意义。");

    var lable5 = new Lable(main.width * 0.01,main.height * 0.5,main.width * 0.3,main.height * 0.1,"二、准确把握主题教育的目标要求");
    lable5.textfont = "bold 1.5em Arial"
    var lable6 = new Lable(main.width * 0.01,main.height * 0.6,main.width * 0.98,main.height * 0.05,"党中央对这次主题教育的总要求、目标任务、方法步骤作出了明确规定，要准确把握党中央精神，结合本地区本部门本单位实际，对准目标，积极推进，确保取得预期效果。");
    
    var lable7 = new Lable(main.width * 0.01,main.height * 0.7,main.width * 0.18,main.height * 0.1,"三，落实重点措施。");
    lable7.textfont = "bold 1.5em Arial"
    var lable8 = new Lable(main.width * 0.01,main.height * 0.8,main.width * 0.98,main.height * 0.05,"这次主题教育不划阶段、不分环节，不是降低标准，而是提出更高要求。各地区各部门各单位要结合实际，创造性开展工作，把学习教育、调查研究、检视问题、整改落实贯");
    var lable9 = new Lable(main.width * 0.01,main.height * 0.85,main.width * 0.25 ,main.height * 0.05,"穿主题教育全过程，努力取得最好成效。");

     
    
    main.add(title);
    main.add(lable1);
    main.add(lable2);
    main.add(lable3);
    main.add(lable4);
    main.add(lable5);
    main.add(lable6);
    main.add(lable7);
    main.add(lable8);
    main.add(lable9);

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