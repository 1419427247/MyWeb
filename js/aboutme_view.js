
    var body = new IPicture(0, 0, 100 , 50, "背景");
    
    var nav = new IComponent(15,40,70,8);
    nav.backgroundcolor = new IColor(255,255,255,1);
    var ILink1 = new ILink(10,0, 10,100,"首页",15,"./index.html");
    var ILink2 = new ILink(20,0, 10,100,"新闻",15);
    var ILink3 = new ILink(30,0, 10,100,"不忘初心",15);
    var ILink4 = new ILink(40,0, 10,100,"牢记使命",15);
    var ILink5 = new ILink(85,0, 15,100,"关于我的网页",15,"./aboutme.html");
    
    

    nav.add(ILink1);
    nav.add(ILink2);
    nav.add(ILink3);
    nav.add(ILink4);
    nav.add(ILink5);
    
    // var main = new IComponent(IFrame.width * 0.1, IFrame.width * 0.3, IFrame.width * 0.8,IFrame.width * 0.5);
    
    // var ILable1 = new ILable(0,main.height * 0.1,main.width,main.height * 0.15,"被发现啦╰(￣ω￣ｏ)，还有这个网页bug太多了（；´д｀）ゞ，点我看被废弃的网页");

    // var ILable2 = new ILable(0,main.height * 0.3,main.width,main.height * 0.1,"它真的太棒啦，可惜时间不够，本来可以更棒的（＞人＜；）");

    // main.add(ILable2);
    // main.add(ILable1);

    // var foot = new IComponent(IFrame.width * 0.1, IFrame.width * 0.8, IFrame.width * 0.8, IFrame.width * 0.05);

    // var foot_ipad = new ILable(0,0,foot.width,foot.height,"不忘初心，牢记使命 © 2019 ipad水晶，版权所有")
    
    // foot.add(foot_ipad);
    
    body.add(nav);
    // body.add(main);
    // body.add(foot);
    
    IFrame.add(body);
    
    window.onload = function () {
        IFrame.show();
    }

    IFrame.getComponentByTag("ILink").backgroundcolor(new IColor(122,22,22,1));
    //IFrame.repaint(IFrame);