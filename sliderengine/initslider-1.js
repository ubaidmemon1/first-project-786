jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingslider-1").amazingslider({
        sliderid:1,
        jsfolder:jsFolder,
        width:900,
        height:360,
        skinsfoldername:"",
        loadimageondemand:false,
        videohidecontrols:false,
        playmutedandinlinewhenautoplay:false,
        donotresize:false,
        enabletouchswipe:true,
        fullscreen:false,
        autoplayvideo:false,
        addmargin:true,
        transitiononfirstslide:false,
        forceflash:false,
        isresponsive:true,
        forceflashonie11:true,
        forceflashonie10:true,
        pauseonmouseover:false,
        playvideoonclickthumb:true,
        slideinterval:300,
        fullwidth:false,
        randomplay:false,
        scalemode:"fill",
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
        descriptioncssresponsive:"font-size:12px;",
        shownumbering:false,
        navthumbresponsivemode:"samesize",
        skin:"Elegant",
        textautohide:true,
        lightboxshowtwitter:true,
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navshowplaypausestandalonemarginx:8,
        navshowplaypausestandalonemarginy:8,
        navbuttonradius:0,
        navthumbcolumn:5,
        navthumbnavigationarrowimageheight:32,
        navradius:0,
        navbuttonhighlightcolor:"",
        navthumbsmallcolumn:3,
        lightboxshownavigation:false,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        lightboxshowsocial:false,
        navpreviewwidth:120,
        googlefonts:"Inder",
        navborderhighlightcolor:"",
        bordercolor:"#ffffff",
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        lightboxthumbwidth:80,
        navthumbnavigationarrowimagewidth:32,
        navthumbtitlehovercss:"text-decoration:underline;",
        navthumbmediumheight:64,
        texteffectresponsivesize:600,
        arrowwidth:32,
        texteffecteasing:"easeOutCubic",
        texteffect:"slide",
        lightboxthumbheight:60,
        navspacing:4,
        navarrowimage:"navarrows-28-28-0.png",
        ribbonimage:"ribbon_topleft-0.png",
        navwidth:28,
        navheight:28,
        arrowimage:"arrows-32-32-0.png",
        timeropacity:0.6,
        titlecssresponsive:"font-size:12px;",
        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",
        navshowplaypausestandalone:false,
        texteffect1:"slide",
        navpreviewbordercolor:"#ffffff",
        texteffect2:"slide",
        customcss:"",
        ribbonposition:"topleft",
        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        arrowstyle:"none",
        navthumbmediumsize:800,
        navthumbtitleheight:20,
        textpositionmargintop:24,
        navshowbuttons:true,
        buttoncssresponsive:"",
        texteffectdelay:800,
        navswitchonmouseover:false,
        playvideoimage:"playvideo-64-64-0.png",
        arrowtop:50,
        textstyle:"dynamic",
        playvideoimageheight:64,
        navfonthighlightcolor:"#666666",
        showbackgroundimage:false,
        showpinterest:true,
        navpreviewborder:4,
        navmarginy:16,
        navshowplaypausestandaloneheight:28,
        navdirection:"horizontal",
        navbuttonshowbgimage:true,
        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",
        textbgcss:"display:none;",
        playvideoimagewidth:64,
        buttoncss:"display:block; position:relative; margin-top:10px;",
        navborder:4,
        navshowpreviewontouch:false,
        bottomshadowimagewidth:110,
        showtimer:true,
        navmultirows:false,
        navshowpreview:true,
        navpreviewarrowheight:8,
        navmarginx:16,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        texteffectslidedirection1:"bottom",
        showribbon:false,
        navstyle:"numbering",
        textpositionmarginleft:24,
        descriptioncss:"display:block; position:relative; font:14px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#00ccff;  background-color:#fff; margin-top:10px; padding:10px; ",
        navplaypauseimage:"navplaypause-28-28-0.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        numberingformat:"%NUM/%TOTAL ",
        navthumbmediumwidth:64,
        navfontsize:12,
        navhighlightcolor:"",
        texteffectdelay1:1000,
        navimage:"bullet-24-24-0.png",
        texteffectdelay2:1500,
        texteffectduration1:800,
        navshowplaypausestandaloneautohide:false,
        texteffectduration2:800,
        navbuttoncolor:"",
        navshowarrow:true,
        texteffectslidedirection:"bottom",
        navshowfeaturedarrow:false,
        lightboxbarheight:64,
        showfacebook:true,
        titlecss:"display:table; position:relative; font:16px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff; white-space:nowrap; background-color:#00ccff; padding:10px;",
        ribbonimagey:0,
        ribbonimagex:0,
        texteffectresponsive:true,
        navthumbsmallheight:48,
        texteffectslidedistance1:10,
        texteffectslidedistance2:10,
        navrowspacing:8,
        navshowplaypausestandaloneposition:"bottomright",
        lightboxshowpinterest:true,
        lightboxthumbtopmargin:12,
        arrowhideonmouseleave:1000,
        navshowplaypausestandalonewidth:28,
        showsocial:false,
        navthumbresponsive:false,
        navfeaturedarrowimageheight:8,
        navopacity:0.8,
        textpositionmarginright:24,
        backgroundimagewidth:120,
        navcolor:"",
        navthumbtitlewidth:120,
        navpreviewposition:"bottom",
        texteffectseparate:true,
        arrowheight:32,
        arrowmargin:8,
        texteffectduration:600,
        bottomshadowimage:"bottomshadow-110-95-3.png",
        lightboxshowfacebook:true,
        lightboxshowdescription:false,
        timerposition:"bottom",
        navfontcolor:"#333333",
        navthumbnavigationstyle:"arrow",
        borderradius:0,
        border:0,
        textpositionstatic:"bottom",
        texteffecteasing2:"easeOutCubic",
        navthumbstyle:"imageonly",
        texteffecteasing1:"easeOutCubic",
        textcss:"display:block; padding:8px 16px; text-align:left;",
        navthumbsmallwidth:48,
        navbordercolor:"#ffffff",
        navthumbmediumcolumn:4,
        navpreviewarrowimage:"previewarrow-16-8-1.png",
        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
        showbottomshadow:true,
        texteffectslidedistance:10,
        shadowcolor:"#aaaaaa",
        lightboxshowtitle:true,
        showtwitter:true,
        textpositionmarginstatic:0,
        backgroundimage:"",
        navposition:"topright",
        navthumbsmallsize:480,
        navpreviewarrowwidth:16,
        textformat:"Blue box",
        texteffectslidedirection2:"bottom",
        bottomshadowimagetop:95,
        textpositiondynamic:"bottomleft",
        shadowsize:5,
        lightboxthumbbottommargin:8,
        textpositionmarginbottom:24,
        initsocial:false,
        socialmode:"mouseover",
        blocks: {
            columncount:5,
            checked:true,
            rowcount:5,
            effects:"topleft,bottomright,top,bottom,random",
            duration:1500,
            easing:"easeOutCubic"
        },
        threedflipwithzoom: {
            duration:2000,
            fallback:"flipwithzoom",
            checked:true
        },
        threedwithzoom: {
            duration:2500,
            fallback:"flip",
            checked:true
        },
        threedflip: {
            duration:1500,
            fallback:"flip",
            checked:true
        },
        cssslide: {
            duration:1000,
            easing:"ease",
            checked:true,
            effectdirection:0
        },
        threedtiles: {
            duration:2000,
            fallback:"tiles",
            checked:true
        },
        threedhorizontalwithzoom: {
            duration:2200,
            fallback:"flipwithzoom",
            checked:true
        },
        shuffle: {
            duration:1500,
            easing:"easeOutCubic",
            columncount:5,
            checked:true,
            rowcount:5
        },
        threedhorizontal: {
            checked:true,
            effectdirection:0,
            bgcolor:"#222222",
            perspective:1000,
            slicecount:1,
            duration:1500,
            easing:"easeOutCubic",
            fallback:"slice",
            scatter:5,
            perspectiveorigin:"bottom"
        },
        threed: {
            checked:true,
            effectdirection:0,
            bgcolor:"#222222",
            perspective:1000,
            slicecount:5,
            duration:1500,
            easing:"easeOutCubic",
            fallback:"slice",
            scatter:5,
            perspectiveorigin:"right"
        },
        transition:"blocks,threedflipwithzoom,threedwithzoom,threedflip,cssslide,threedtiles,threedhorizontalwithzoom,shuffle,threedhorizontal,threed",
        scalemode:"fill",
        isfullscreen:false,
        textformat: {

        }
    });
});