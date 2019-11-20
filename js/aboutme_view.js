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
    main.borad = 3;
    
    var lable1 = new Lable(0,main.height * 0.1,main.width,main.height * 0.15,"被发现啦╰(￣ω￣ｏ)，还有这个网页bug太多了（；´д｀）ゞ，点我看被废弃的网页");
    lable1.color = Color(0,0,0,0);
    lable1.setOnClickListener(function(){
        window.open("./old/bad_index.html");
    });

    var lable2 = new Lable(0,main.height * 0.3,main.width,main.height * 0.1,"它真的太棒啦，可惜时间不够，本来可以更棒的（＞人＜；）");
    var i = 0;
    lable2.onmousemove = function() {
        lable1.color = Color(0,0,0,i);
        lable2.y+=1;
        i+=0.001;
    }

    main.add(lable2);
    main.add(lable1);

    var foot = new Component(frame.width * 0.1, frame.width * 0.8, frame.width * 0.8, frame.width * 0.05);
    foot.backgroundcolor = Color(255,255,255);
    
    var foot_ipad = new Lable(0,0,foot.width,foot.height,"不忘初心，牢记使命 © 2019 ipad水晶，版权所有")
    
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