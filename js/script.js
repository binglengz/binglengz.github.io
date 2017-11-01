var oTopAd = document.getElementsByClassName("top-AD")[0];
var oTAButton = document.getElementsByClassName("top-AD-button")[0];
var oTbarLftdiv = document.getElementsByClassName("topbar-left-div1")[0];
var oBbiaoUl = document.getElementsByClassName("dibiao-ul1")[0];
var oBbiaoUl2 = document.getElementsByClassName("dibiao-ul2")[0];
var oTbRli8 = document.getElementsByClassName("topbar-right-li8")[0];
var oRweiMa = document.getElementsByClassName("daerweima")[0];
var aBbiaoDiv = oBbiaoUl2.getElementsByTagName("div");
var aBbiaoLi = oBbiaoUl.getElementsByTagName("li");
var oFsLeftUl = document.getElementsByClassName("fs-left-ul")[0];
var aFsLeftLi = oFsLeftUl.getElementsByTagName("li");
var oFsLeftMenu = document.getElementById("fs-left-menu");
var aFsLeftMenuA = oFsLeftMenu.getElementsByClassName("menu1");
var oFsLeft = document.getElementsByClassName("fs-left")[0];
	oTAButton.onclick = function () {
		oTopAd.style.display = "none";
	}
	for (var i = 0; i< aBbiaoDiv.length; i++) {
		aBbiaoDiv[i].index = i;
		aBbiaoDiv[i].onclick = function () {
			for(var i=0; i<aBbiaoLi.length;i++) {
				aBbiaoLi[i].className = "";
				aBbiaoDiv[i].className = "";
			}
			aBbiaoLi[this.index].className = "dibiao-li1";
			aBbiaoDiv[this.index].className = "dibiao-a";
		}
	}
	oTbRli8.onmouseenter = function () {
		oRweiMa.style.display = "block";
	}
	oTbRli8.onmouseleave = function () {
		oRweiMa.style.display = "none";
	}
	function toggle1(a,b){
		a.style.backgroundColor = "#FFF";
		a.style.borderColor = "#ccc";
		a.style.borderBottomColor = "#fff";	
		b.style.display = "block";
		b.style.backgroundColor = "#FFF";
	}
	function toggle2(a,b){
		a.style.backgroundColor = "#e3e4e5";
		a.style.borderColor = "#e3e4e5";
		a.style.borderBottomColor = "#ccc";
		b.style.display = "none";
	}
	for(var i=0; i<aFsLeftLi.length; i++) {
		aFsLeftLi[i].index = i;
		aFsLeftLi[i].onmouseover = function () {
			oFsLeftMenu.style.display = "block";
			for(var i=0; i<aFsLeftMenuA.length; i++) {
				aFsLeftMenuA[i].style.display = "none";
			}
			aFsLeftMenuA[this.index].style.display = "block";
		}
	}		
	lbta();
	function lbta(){
		var timer = 0;
		var now = 0;
		var timer = null;
		var hasStarted = false; 
		$(".lbtu-right").click(function(){
			now++;
			if(now >= $("#lbtImg li").size()) now = 0;			
			$("#lbtImg li").eq(now).fadeIn(1).siblings().fadeOut();
			$(".lbtu-bottom i").removeClass("lbtu-bottom-i");
			$(".lbtu-bottom i").eq(now).addClass("lbtu-bottom-i");
		});
		$(".lbtu-left").click(function(){
			now--;
			if(now == -1) now = 7;
			$("#lbtImg li").eq(now).fadeIn(1).siblings().fadeOut().addClass("lbtu-bottom-i");
			$(".lbtu-bottom i").removeClass("lbtu-bottom-i");
			$(".lbtu-bottom i").eq(now).addClass("lbtu-bottom-i");
		});
		$(".lbtu-bottom i").click(function (){
			now=$(this).index()
			$(".lbtu-bottom i").removeClass("lbtu-bottom-i");
			$(this).addClass("lbtu-bottom-i");		
			$("#lbtImg li").removeClass("lbtu-top-li");
			$("#lbtImg li").get($(this).index()).className = "lbtu-top-li";
			$("#lbtImg li").eq($(this).index()).fadeIn().siblings().fadeOut();
		});
		timer = setInterval(function(){
			now++;
			if(now >= $("#lbtImg li").size()) now = 0;			
			$("#lbtImg li").eq(now).fadeIn().siblings().fadeOut();
			$(".lbtu-bottom i").removeClass("lbtu-bottom-i");
			$(".lbtu-bottom i").eq(now).addClass("lbtu-bottom-i");
		},1000);		
		$(".fs-content-top").mouseenter(function(){
			clearInterval(timer);
		});
		$(".fs-content-top").mouseleave(function(){
			timer = setInterval(function(){
				now++;
				if(now >= $("#lbtImg li").size()) now = 0;			
				$("#lbtImg li").eq(now).fadeIn().siblings().fadeOut();
				$(".lbtu-bottom i").removeClass("lbtu-bottom-i");
				$(".lbtu-bottom i").eq(now).addClass("lbtu-bottom-i");
			},1000);
		});
	};

	LBTmouseenter(".content2-content-right-div-left",".content2-content-right-div-right",".content2-content-right-div div","content2-content-right",".content2-content-right-div-dian span","content2-content-right-div-dian-1",".content2-content-right",2)	
	LBTmouseenter(".shipins-left",".shipins-right",".shipins-img a","shipins-a",".shipins-ul li","shipins-li1",".shipins-content",4,)
	function LBTmouseenter(left,right,imgFs,img,dianFs,dian,Box,Qty){
		var timer = 0;
		var now = 0;
		var timer = null
		$(right).click(function(){
			now++;
			if(now >= $(imgFs).size()) now = 0;
			$(imgFs).eq(now).fadeIn(1).siblings().fadeOut();
			$(dianFs).removeClass(dian);
			$(dianFs).eq(now).addClass(dian);
		});
		$(left).click(function(){
			now--;
			if(now == -1) now = Qty;
			$(imgFs).eq(now).fadeIn(1).siblings().fadeOut().addClass(dian);
			$(dianFs).removeClass(dian);
			$(dianFs).eq(now).addClass(dian);
		});
		$(dianFs).mouseenter(function (){
			now=$(this).index()
			$(dianFs).removeClass(dian);
			$(this).addClass(dian);		
			$(imgFs).removeClass(img);
			$(imgFs).get($(this).index()).className = img;
			$(imgFs).eq($(this).index()).fadeIn().siblings().fadeOut();
		});
		timer = setInterval(function(){
			now++;
			if(now >= $(imgFs).size()) now = 0;
			$(imgFs).eq(now).fadeIn().siblings().fadeOut();
			$(dianFs).removeClass(dian);
			$(dianFs).eq(now).addClass(dian);
		},2000);
		$(Box).mouseenter(function(){
			clearInterval(timer);
		});
		$(Box).mouseleave(function(){
			timer = setInterval(function(){
				now++;
				if(now >= $(imgFs).size()) now = 0;
				$(imgFs).eq(now).fadeIn(1).siblings().fadeOut();
				$(dianFs).removeClass(dian);
				$(dianFs).eq(now).addClass(dian);
			},2000);
		});
	}	

	oFsLeft.onmouseleave = function () {
		oFsLeftMenu.style.display = "none";
	}

	$("#cux").mouseenter(function(){
		$(".hengxing").css("left","-1px");
		$(".fs-right-li2-gongg2-div").css("top","0px");
	});
	$("#gonggao").mouseenter(function(){
		$(".hengxing").css("left","51px");
		$(".fs-right-li2-gongg2-div").css("top","-120px");
	});
	
	
	tweWM(".entry-erwm",".c2wm");
	tweWM(".entry-erwm2",".c2wm2");
	function tweWM(leading,telamon){
		$(leading).mouseenter(function(){			
			$(telamon).show();
		});
		$(leading).mouseleave(function(){	
			$(telamon).hide();
		});
	}
	shortcut(".topbar-right-li8",".daerweima");		
	shortcut(".topbar-left-div1",".dibiao-ul2",".dibiao-ul1");	
	shortcut(".topbar-right-li4",".topbar-right-li4-yinc","#huiyuan");
	shortcut(".topbar-right-li6",".topbar-right-li6-yinc","#fuw");
	shortcut(".topbar-right-li7",".topbar-right-li7-yinc","#daohang");
	function shortcut(leading,telamon,title){
		$(leading).mouseenter(function(){
			$(title).css("background","#fff").css("border-color","#ccc").css("border-bottom-color","#fff");	
			$(telamon).show();
		});
		$(leading).mouseleave(function(){
			$(title).css("background","#e3e4e5").css("border-color","#e3e4e5").css("border-bottom-color","#ccc");	
			$(telamon).hide();
		});
	}
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop >= 700){
			$(".top").css("top","0px")
		}else{
			$(".top").css("top","-200px")
		}
		if(scrollTop >= 1500){
			$(".l_left").css("top","100px")
		}else{
			$(".l_left").css("top","-550px")
		}	
	})
	paihb(".content2-top3-right-top-div","7px");
	paihb("#shouji","78px");
	paihb("#diannao","149px");
	paihb("#chuf","220px");
	paihb(".content2-top3-right-top-a","290px");
	function paihb(leading,xian){
		$(leading).mouseenter(function(){
			$(".content2-top3-right-top-div3").css("left",xian)
		})
	}
	redrawMo(".fs-right-li3-ul2-div div","fs-right-li3-u2-l1",".fs-right-li3-ul2-div2 div","fs-right-li3-ul2-div2-p");
	redraw(".select option","option1","#ul-priceRecharge li","priceRecharge");
	redrawMo(".content2-top3-right-top a","content2-top3-right-top-div",".content2-top3-right3 div","content2-top3-right3-box");		
	function redraw(ul1,class1,ul2,class2){
		$(ul1).click(function (){
			$(ul1).removeClass(class1);
			$(this).addClass(class1);		
			$(ul2).removeClass(class2);
			$(ul2).get($(this).index()).className = class2;
		});
	}
	function redrawMo(ul1,class1,ul2,class2){
		$(ul1).mouseenter(function (){			
			$(ul1).removeClass(class1);
			$(this).addClass(class1);
			$(ul2).removeClass(class2);
			$(ul2).get($(this).index()).className = class2;				
		});
	}

	redraw1("#fs-right-li3-li1-1","#huaf",".fs-right-li3-ul2",".fs-right-li3-ul2-li1");
	redraw1(".fs-right-li3-li2","#jipiao",".fs-right-li3-ul2",".fs-right-li3-ul2-li2");
	redraw1(".fs-right-li3-li3","#jiudian",".fs-right-li3-ul2",".fs-right-li3-ul2-li3");
	redraw1(".fs-right-li3-li4","#youxi",".fs-right-li3-ul2",".fs-right-li3-ul2-li4");	
	function redraw1(a,b,c,d) {
		$(a).mouseenter(function(){
			$("#huaf").css("top","-38px")
			$("#jipiao").css("top","-38px")
			$("#jiudian").css("top","-38px")
			$("#youxi").css("top","-38px")		
			$(b).css("border-top","1.8px solid #c81623")
			$(c).show()			
			$(d).show()
		})
		$(c).mouseleave(function(){
			$("#huaf").css("top","0px")
			$("#jipiao").css("top","0px")
			$("#jiudian").css("top","0px")
			$("#youxi").css("top","0px")		
			$(b).css("border-top","none")
			$(c).hide();			
			$(d).hide();
		})
		$(b).mouseleave(function(){
			$("#huaf").css("top","0px")
			$("#jipiao").css("top","0px")
			$("#jiudian").css("top","0px")
			$("#youxi").css("top","0px")		
			$(b).css("border-top","none")
			$(c).hide();			
			$(d).hide();
		})
		$(".fs-right-li3-ul2-li1-button").click(function(){
			$("#huaf").css("top","0px")
			$("#jipiao").css("top","0px")
			$("#jiudian").css("top","0px")
			$("#youxi").css("top","0px")		
			$(b).css("border-top","none")
			$(c).hide()			
			$(d).hide();
		})
		
	}
	
	tanchu(".Jtab-ren",".Jtab-ren2",".Jtab-ren11");
	tanchu(".Jtab-gwc",".Jtab-gwc2");
	tanchu(".Jtab-xin",".Jtab-xin2");
	tanchu(".Jtab-sj",".Jtab-sj2");
	tanchu(".Jtab-went",".Jtab-went2");
	tanchu(".Jtab-tou",".Jtab-tou2");
	tanchu(".Ztab-hding",".Ztab-hding2");
	tanchu(".Ztab-fk",".Ztab-fk2");	
	function tanchu(leading,telamon,dian) {
		$(leading).mouseenter(function(){
			$(dian).hide();
					
			$(telamon).css("right","33PX");	
			$(telamon).css("transition","1S");
		})
		$(leading).mouseleave(function(){
			$(telamon).css("right","-63px");
			$(dian).show();						
		})
	}
var intDiff = parseInt(600);
function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;      
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (hour <= 9) hour = '0' + hour; 
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('.hour').html('<s id="h"></s>'+hour);
    $('.minute').html('<s></s>'+minute);
    $('.second').html('<s></s>'+second);
    intDiff--;
    }, 1000);
} 
$(function(){
    timer(intDiff);
}); 
$('#last1').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},10);
	});
	
$(function(){
	var now =0;
	var timer = 0;
	var onoff = true;
	var $prev = $(".con5-bottom-div6-left");
	var $next = $(".con5-bottom-div6-right");
	var $list = $(".entry-con5-bottom-div6-ul");
	var $lis1 = $('.entry-con5-bottom-div6-ul li');
	var mainW = $(".entry-con5-bottom-div6").width();
	$prev.click(function(){
		now--;
		if (now < 0) {
			now = $lis1.size() - 11;
			$list.css("left", -($lis1.size() - 1) * mainW);
		}
		$list.stop().animate({
			left: -mainW * now
		},200);
	});
	$next.click(function(){
		clearTimeout(timer);
		timer = setTimeout (function() {
			onoff = true;
		},500);
		if (!onoff) return;
		onoff = false;
		now++;
		if (now > 1) {
			now = 0;
			$list.css("left",0);
		}
		$list.stop().animate({
			left: -mainW * now
		},200);				
	});
})
$(function(){
	var now =0;
	var timer = 0;
	var onoff = true;
	var $prev = $(".content-right-div-left1");
	var $next = $(".content-right-div-right1");
	var $list = $("#contentMS");
	var $lis1 = $('#contentMS li');
	var mainW = $(".content-right-1").width();
	$prev.click(function(){
		now--;
		if (now < 0) {
			now = $lis1.size() - 14;
			$list.css("left", -($lis1.size() - 1) * mainW);
		}
		$list.stop().animate({
			left: -mainW * now
		},200);
	});
	$next.click(function(){
		clearTimeout(timer);
		timer = setTimeout (function() {
			onoff = true;
		},500);
		if (!onoff) return;
		onoff = false;
		now++;
		if (now > 2) {
			now = 0;
			$list.css("left",0);
		}
		$list.stop().animate({
			left: -mainW * now
		},200);				
	});
})
$(function(){
	
	$('#l_left_ul li').not('#last').hover(function(){
		$(this).addClass('left_top');
	},function () {
		$(this).removeClass('left_top');
	});
	$('#last').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},1000);
	});

	$('#l_left_ul li').not('#last').on('click',function () {
		var index = $(this).index();
		var height = $("#main .stairs").eq(index).offset().top; 
		$("html,body").animate({
			scrollTop:height
		},1000);
	});
	$(window).scroll(function(){
		var t = $(this).scrollTop();
		var headerHeight = $('#main .stairs').first().offset().top;
		if(t > headerHeight-40){
				$('#l_left_ul').fadeIn();
			}else{
				$('#l_left_ul').fadeOut();
			}
		var obj = $('.stairs');
		obj.each(function () {
			var index = $(this).index();
			var height = obj.eq(index).offset().top - $(".stairs").height() /2;
//			alert($(".stairs").height() /2)
			if(t > height){
				$('#l_left_ul li').eq(index).addClass('left_top').siblings().removeClass('left_top');
			}			
		});
	});
});