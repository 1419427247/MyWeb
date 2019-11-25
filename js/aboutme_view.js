
    var body = new IPicture(0, 0, 100 , 50, "背景");
    
    var nav = new IComponent(15,40,70,6);
    nav.backgroundcolor = new IColor(255,255,255,0.8);
    var link1 = new ILink(10,0, 10,100,"首页",25,"./index.html");
    var link2 = new ILink(20,0, 10,100,"新闻",25);
    var link3 = new ILink(30,0, 10,100,"不忘初心",25);
    var link4 = new ILink(40,0, 10,100,"牢记使命",25);
    var link5 = new ILink(85,0, 15,100,"关于我的网页",25,"./aboutme.html");

    nav.add(link1);
    nav.add(link2);
    nav.add(link3);
    nav.add(link4);
    nav.add(link5);
    
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

    IFrame.getComponentByTag("ILink").font(new IFont("bold","1.2vw","宋体"));
    IFrame.getComponentByTag("ILink").onclick((_component)=>{
        _component.animation = new IAnimation(_component,()=>{
            _component.backgroundcolor.red--;
        });
    });
    //IFrame.repaint(IFrame);