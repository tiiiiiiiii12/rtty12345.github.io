﻿<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta http-equiv="Cache-Control" content="max-age=3600">
<meta name="keywords" content="lonelystar,星空之旅,植物大战僵尸,植物大战僵尸下载,植物大战僵尸游戏下载,植物大战僵尸游戏攻略,植物大战僵尸网页版,JS植物大战僵尸,植物僵尸,植物大战,僵尸大战,PVZ植物大战僵尸,新版植物大战僵尸,JSPVZ,JS版植物大战僵尸,植物大战僵尸javascript,植物大战僵尸小游戏,植物人大战僵尸,d2forum,D2,辣妈僵尸,网页游戏,植物大站僵尸源代码,囧丫乙,在线植物大战僵尸,大波僵尸,僵尸大战植物,online web game,web game,webgame,youxi,xiaoyouxi">
<meta name="description" content="在线js植物大战僵尸网页版是LonelyStar个人制作的纯JavaScript植物大战僵尸小游戏，欢迎收藏JavaScript植物大战僵尸小游戏，分享js植物大战僵尸小游戏的快乐。">
<base id="baseURL"></base>
<link rel="shortcut icon" href="favicon.ico">
<link type=text/css rel=stylesheet href="g.css">

<script src="js/Cfunction.js"></script>
<script src="js/CPlants.js"></script>
<script src="js/CZombie.js"></script>
<script src="js/md5.js"></script>
<script id="JSProcess"></script>
<body id="dBody" topmargin="0" leftmargin="0" oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
<script>
//每关小链接
google_ad_client = "ca-pub-0191257348916303";
google_ad_slot = "2263586206";
google_ad_width = 468;
google_ad_height = 15;
</script>
<!--相关链接-->
<div id="dLvlLink">
	<span>Game 相关的链接</span>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="http://www.baidu.com/s?wd=%D6%B2%CE%EF%B4%F3%D5%BD%BD%A9%CA%AC%CD%F8%D2%B3%B0%E6" target="_blank">搜索游戏内容</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="javascript:;" target="_blank" id="aLvlLink">本关攻略</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="http://www.lonelystar.org/html/1-1.htm" target="_blank">壁纸和音乐</a>&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="http://blog.lonelystar.org" target="_blank">作者博客</a>
</div>
<div id="dAD2"><script src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script></div>
<div id="dAdFlash">
	<iframe name="fGGAdsense" marginwidth="1" marginheight="1" height="280" width="336" scrolling="no" border="0" frameborder="0" src="js/ggadsense.htm"></iframe>
	<div>Google提供的广告</div>
</div>
<!--进度条-->
<div id="dFlagMeter">
	<div id="dFlagMeterTitle"><div id="dFlagMeterTitleB"></div><div id="sFlagMeterTitleF"></div></div>
	<div id="dFlagMeterContent">
		<img id="imgFlagMeterEmpty" src="images/interface/FlagMeterEmpty.png">
		<img id="imgFlagMeterFull" src="images/interface/FlagMeterFull.png">
		<img class="flag" id="imgFlag1" src="images/interface/FlagMeterParts2.png">
		<img class="flag" id="imgFlag2" src="images/interface/FlagMeterParts2.png">
		<img class="flag" id="imgFlag3" src="images/interface/FlagMeterParts2.png">
		<img class="flag" id="imgFlag4" src="images/interface/FlagMeterParts2.png">
		<img id="imgGQJC" src="images/interface/FlagMeterLevelProgress.png">
		<img id="imgFlagHead" src="images/interface/FlagMeterParts1.png">
	</div>
</div>

<!--选项界面-->
<div id="dSurface" class="WindowFrame">
	<div id="iSurfaceBackground">
		<map name="FPMap0">
			<script>
			(function(){
				var s="",ar=[{c:'641,466,724,527',k:'ShowOptions()'},{c:'718,512,790,558',k:'ShowHelp()'},{c:'800,495,879,548',k:'SetNone($(\'dSurface\'));PlayAudio(\'tap\')'}];
				for(var i=0;i<=2;i++)s+='<area href="javascript:;" shape="rect" coords="'+ar[i].c+'" onclick="'+ar[i].k+'">';document.write(s);
			})()
			</script>
		</map>
		<img src="images/interface/Surface.jpg" usemap="#FPMap0" border="0">
		<div style="position:absolute;width:350px;height:150px;left:468px;top:82px;background:url(images/interface/SelectorScreen_Shadow_Adventure.png)"></div>
		<div class="adventure0" id="dAdventure" onmouseover="this.style.backgroundPosition='bottom';PlayAudio('bleep');" onmouseout="this.style.backgroundPosition='top'" onclick="StartAdventure()"></div>
		<div style="position:absolute;width:318px;height:136px;left:476px;top:208px;background:url(images/interface/SelectorScreen_Shadow_Survival.png)"></div>
		<div class="mini" onmouseover="this.style.backgroundPosition='bottom';PlayAudio('bleep');" onmouseout="this.style.backgroundPosition='top'" onclick="ShowMiniGame()"></div>
		<div style="position:absolute;width:289px;height:127px;left:480px;top:307px;background:url(images/interface/SelectorScreen_Shadow_Challenge.png)"></div>
		<div class="riddle" onmouseover="this.style.backgroundPosition='bottom';PlayAudio('bleep');" onmouseout="this.style.backgroundPosition='top'" onclick="ShowRiddleGame()"></div>
		<div class="Sunflower_trophy"><script>document.write('<img onclick="PlayAudio(\'buttonclick\');alert(\'游戏数据中心即将开放，敬请期待！\')" title="游戏数据中心即将开放！" alt="游戏数据中心即将开放！！" src="images/interface/Sunflower_trophy'+($User.Browser.IE?8:32)+'.png">')</script></div>
		<div class="handbook" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="ViewHandBook()"></div>
		<div id="ZombieHand"></div> <!--僵尸手-->
		<div id="dNameDiv0">
			<div id="dName">&lt;游客&gt;</div>
			<div id="dNameDiv1" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="ShowLoginDiv()"></div>
			<div id="dNameDiv2"></div>
		</div>
	</div>

	<!--暂停界面-->
	<div id="dPause">
		<table border="0" width="434" cellspacing="0" cellpadding="0" height="484">
			<tr>
				<td width="107" height="142" valign="bottom">
				<img border="0" src="images/interface/dialog_topleft.png" width="107" height="97"></td>
				<td style="background: url(images/interface/dialog_topmiddle.png) repeat-x bottom center" height="142" valign="top" align="center">
				<img border="0" src="images/interface/dialog_header.png" width="187" height="64"></td>
				<td width="120" height="142" valign="bottom">
				<img border="0" src="images/interface/dialog_topright.png" width="120" height="97"></td>
			</tr>
			<tr>
				<td width="107" style="background:url(images/interface/dialog_centerleft.png) repeat-y">　</td>
				<td bgcolor="#212431">　</td>
				<td width="120" style="background:url(images/interface/dialog_centerright.png) repeat-y">　</td>
			</tr>
			<tr>
				<td width="107" valign="top" height="114">
				<img border="0" src="images/interface/dialog_bottomleft.png" width="107" height="97"></td>
				<td style="background:url(images/interface/dialog_bottommiddle.png) repeat-x" height="114">	</td>
				<td width="120" valign="top" height="114">
				<img border="0" src="images/interface/dialog_bottomright.png" width="108" height="97"></td>
			</tr>
		</table>
		<div class="list">
			<div class="hidden" onclick="SetNone($('dSurface'),$('dPause'))">点这里隐藏暂停窗口</div>
			<div id="dPauseAD"></div>
			<div class="pause">休息，休息一会儿~</div>
		</div>
		<div class="button" onclick="ResetGame($('dMenu0'))">返回游戏</div>
	</div>
	<div id="dSurfaceBack">
		<div id="dHelp" onclick="HiddenHelp()"></div>
		<div id="dOptionsMenuback">
			<div id="dOptionsMenu">
				<div class="OMd0">
					<div class="OMd1">
						<div><input type="checkbox" id="cAutoSun" value="1" onchange="CheckAutoSun(this)"> <label for="cAutoSun" id="lAutoSun">自动拾取阳光</label></div>
						<div><input type="checkbox" id="cSilence" value="1"> <label for="cSilence" id="lSilence">静&nbsp;&nbsp; &nbsp;&nbsp;音&nbsp;&nbsp;  </label></div>
					</div>
				</div>
				<div class="BigLevel button" onclick="ShowLevel()">游戏选关</div>
				<div class="BigLevel button" onclick="ShowSpeed()">游戏调速</div>
				<div class="BigLevel button" onclick="ViewHandBook()">查看图鉴</div>
				<div class="BigLevel button" onclick="SelectModal(oS.Lvl)">重新开始</div>
				<div class="BigLevel button" onclick="SelectModal(0);HiddenOptions();SetBlock($('dSurface'),$('iSurfaceBackground'));ShowNameDiv();">返回菜单</div>
				<div class="OptionsMenuButton" style="margin-top:20px" onmousedown="OptionsMenuDown(this,$('sOptionsMenu'))" onmouseup="OptionsMenuUP(this,$('sOptionsMenu'));HiddenOptions();CheckAutoSun($('cAutoSun'));CheckSilence($('cSilence'))"><span id="sOptionsMenu" class="OptionsMenuButtonSpan">继续游戏</span></div>
			</div>
<script>
var ArLvl={1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九',10:'十'},
LvlList=function(BLvl,SLvl1,SLvl2){
	var s='',startlvl=BLvl*10;
	do{
		s+='<span class="lvl" onclick="StartAdventure('+(startlvl+SLvl1)+')">第'+ArLvl[SLvl1]+'关</span>';
	}while(SLvl1++<SLvl2)
	document.write(s);
};
</script>
		</div>
		<div id="dAdvSmallContainer" class="TitleSmallContainer Challenge_Background">
			<div id="dAdvSmallTitle">冒险模式</div>
			<div class="list">
				<div class="title">白天草地</div>
				<div class="icon">
					<img class="img1" style="clip:rect(0,61px,auto,0);left:16px" border="0" src="images/interface/Almanac_Ground.jpg" width="366" height="61"></td>
					<img class="img2" border="0" src="images/interface/Almanac_ZombieWindow2.png" width="76" height="76"></p>
				</div>
				<div class="lvl2">
					<script>LvlList(0,1,10)</script>
				</div>
			</div>
			<div class="list">
				<div class="title">夜晚草地</div>
				<div class="icon">
					<img class="img1" style="clip:rect(0,183px,auto,122px);left:-106px" border="0" src="images/interface/Almanac_Ground.jpg" width="366" height="61"></td>
					<img class="img2" border="0" src="images/interface/Almanac_ZombieWindow2.png" width="76" height="76"></p>
				</div>
				<div class="lvl2">
					<script>LvlList(1,1,10)</script>
				</div>
			</div>
			<div class="list">
				<div class="title">白天泳池</div>
				<div class="icon">
					<img class="img1" style="clip:rect(0,305px,auto,244px);left:-228px" border="0" src="images/interface/Almanac_Ground.jpg" width="366" height="61"></td>
					<img class="img2" border="0" src="images/interface/Almanac_ZombieWindow2.png" width="76" height="76"></p>
				</div>
				<div class="lvl2">
					<script>LvlList(2,1,10)</script>
				</div>
			</div>
			<div class="list">
				<div class="title">夜晚泳池</div>
				<div class="icon">
					<img class="img1" style="clip:rect(0,244px,auto,183px);left:-167px" border="0" src="images/interface/Almanac_Ground.jpg" width="366" height="61"></td>
					<img class="img2" border="0" src="images/interface/Almanac_ZombieWindow2.png" width="76" height="76"></p>
				</div>
				<div class="lvl2">
					<script>LvlList(3,1,5)</script>
				</div>
			</div>
			<div class="button" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'"  onclick="HiddenLevel()">关闭</div>
		</div>
		
		<div id="dMiniSmallContainer" class="TitleSmallContainer Challenge_Background">
			<div id="dMiniSmallTitle">迷 你 游 戏</div>
			<div id="dMini0" style="width:885px;height:475px;overflow-y:scroll;">
				<table cellspacing="10" width="100%" style="position:static;">
				<script>
					(function () {
						var ar = [
							'TenFlowers','十朵金花','shiduojinhua.png',
							'HazeYard','阴霾小院','yinmaixiaoyuan.png',
							'NutBowling2','坚果保龄球 2','baolingqiu.png',
							'NutBowling','坚果保龄球','baolingqiu.png',
							'Boom','核爆！','hebao.png',
							'FlightOfFancy','我心飞翔','woxinfeixiang.png',
							'DisposableProducts','一次性消费','yicixingxiaofei.gif',
							'StrongLevel','超乎寻常的压力！','yali.gif',
							'TestUHeart','你的心脏够强劲吗？','xinzang.png',
							'ZombieRun','僵尸快跑！','jiangshikuaipao.png',
							'PovertyOfTheSoil','贫瘠之地','pinjizhidi.png',
							'MassGrave','乱葬岗','luanzanggang.png',
							'DependOnHeavenForFood','靠天吃饭','kaotianchifan.png',
							'CanYouDigIt','攻守兼备','gongshoujianbei.jpg',
							'PovertyOfTheSoil2','贫瘠之地2','PovertyOfTheSoil2.png',
							'CardRain','种子雨','CardRain.png',
							'DailyLevel','【每日关卡】','DailyLevel.png', 
							'LayDown','你敢放下他么','LayDown.png', 
						], v, i = 0, n, l = ar.length, s = "";

						for (n = 0; n < l; n += 3) {
							i % 5 == 0 && (s += '<tr>');
							s += '<td height="139" valign="top" onclick="SelectModal(\''+ar[n]+'\')"><div><img src="images/interface/'+ar[n+2]+'"></div><div class="list">'+ar[n+1]+'</div></td>';
							(i + 1) % 5 == 0 ? (s += '</tr>', i = 0): ++i;
						}

						if (i != 0) {
							l < 5 && i < 5 && (s += "<td></td>");
							s += "</tr>";
						}

						document.write(s);
					})()
				</script>
				</table>
				<div class="button" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'"  onclick="HiddenMiniGame()">关闭</div>
			</div>
		</div>

		<div id="dRiddleSmallContainer" class="TitleSmallContainer Almanac_ZombieBack">
			<div id="dRiddleTitle">益 智 模 式</div>
			<!--单机对战选择界面-->
			<div id="dRiddleInx">
				<div>
					<div class="inx0" title="我玩僵尸，跟电脑的植物方作战" onclick="ShowRiddle0()"></div>
				</div>
				<div style="left:50%">
					<div class="inx1" title="我玩僵尸或者植物，跟玩家的植物或者僵尸作战" onclick="ShowRiddle1()"></div>
				</div>
			</div>
			<!--单机界面-->
			<div id="dRiddle0">
				<div style="width:885px;height:475px;overflow-y:auto;">
					<table cellspacing="10" width="100%" style="position:static;">
						<script>
							(function () {
								var l = 1, i = 0, s = "", LevelList = { // [标题, 图片, 是否新启一行]
									ImZombie1: ["我是僵尸！", "woshijiangshi.png", false], 
									ImZombie2: ["我也是僵尸！", "woshijiangshi.png", false], 
									ImZombie7: ["僵尸摇摆", "woshijiangshi.png", false], 
									ImZombiePool1: ["泳池奇遇", "woshijiangshi.png", false], 
									VaseKiller1: ["花瓶终结者", "VaseKiller.jpg", true], 
									VaseKiller2: ["一路向左", "VaseKiller.jpg", false], 
									VaseKiller3: ["第3个花瓶", "VaseKiller.jpg", false], 
									VaseKiller4: ["连锁反应", "VaseKiller.jpg", false], 
									VaseKiller6: ["胆怯的制陶工", "VaseKiller.jpg", false], 
									VaseKiller7: ["戏法时刻", "VaseKiller.jpg", false], 
									VaseKillerNew1: ["迷雾砸罐", "VaseKiller_WaterNight.png", false], 
									VaseKillerNew2: ["记忆大师", "VaseKiller_WaterNight.png", false], 
									VaseKillerNew3: ["加班日", "VaseKiller_WaterDay.png", false], 
									VaseKillerNew4: ["不可犹豫", "VaseKiller_WaterDay.png", false], 
								};

								for (var Q in LevelList) {
									var Title = LevelList[Q][0], IMG = LevelList[Q][1], NewLine = LevelList[Q][2];

									if (i % 5 == 0) s += "<tr>"; // 如果是一行开始，直接加表头
									else if (NewLine) { // 否则如果是新开一行的配置
										while (i % 5 != 0) s += "<td></td>", ++i;
										s += "</tr><tr>";
									}

									// 加入该入口的 HTMl 元素
									s += '<td height="139" valign="top" onclick="SelectModal(\'' + Q + '\')"><div><img src="images/interface/' + IMG + '"></div><div class="list">' + Title + '</div></td>';
									++i, l = Math.floor(i / 5) + 1, i % 5 == 0 && (++l, s += "</tr>"); // 如果末尾，则换行 
								}
								document.write(s);
							})()
						</script>
					</table>
				</div>
				<div class="button" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'"  onclick="ReturnRiddleInx()">益智模式索引</div>
			</div>
			<!--对战界面-->
			<div id="dRiddle1">
				<div style="position:relative;width:862px;font-size:12px;margin-top:1px;margin-left:auto;margin-right:auto;color:#000">
					<button class="jhp" style="height:23px" onclick="window.frames['fRiddleAlreadyCreateGame'].SearchLvl(0)">所有游戏</button><button class="jhp" style="height:23px" onclick="window.frames['fRiddleAlreadyCreateGame'].SearchLvl(1)">我创建的</button><button class="jhp" style="height:23px" onclick="window.frames['fRiddleAlreadyCreateGame'].SearchLvl(2)">我玩过的</button>
					&nbsp;&nbsp;<input type=text id="tRiddleID" size="15"><button class="jhp" style="height:23px" onclick="window.frames['fRiddleAlreadyCreateGame'].SearchLvl(4,$('tRiddleID').value)">查作者</button><button class="jhp" style="height:23px" onclick="window.frames['fRiddleAlreadyCreateGame'].SearchLvl(5,$('tRiddleID').value)">查标题</button><button class="jhp" style="height:23px" onclick="window.frames['fRiddleAlreadyCreateGame'].SearchLvl(3,$('tRiddleID').value)">查序号</button>
					&nbsp; &nbsp; &nbsp; &nbsp; 列表风格
					<input name="rList" type="radio" value="图形" id="rLPic" onclick="addCookie('JSPVZIZList',0);location.reload();"><label for="rLPic">图形</label>
					<input name="rList" type="radio" value="文字" id="rLText" onclick="addCookie('JSPVZIZList',1);location.reload();"><label for="rLText">文字</label>
					<script>
					getCookie("JSPVZIZList")==1 ? ($('rLText').checked=true) : (
						$('rLPic').checked=true,
						document.write('&nbsp;&nbsp;<select size="1" name="sOrder1" id="sOrder1"><option>标题</option><option>阳光</option><option>作者</option><option selected>日期</option><option>访问</option><option>过关</option><option>好评</option><option>中评</option><option>差评</option></select><select size="1" name="sOrder2" id="sOrder2"><option value="asc">升序</option><option value="desc" selected>降序</option></select><button class="jhp" style="height:23px" onclick="window.frames[\'fRiddleAlreadyCreateGame\'].ChangeOrderAD()">排序</button>')
					);
					</script>
					<div style="border:1px solid #000;height:465px;width:100%">
						<iframe name="fRiddleAlreadyCreateGame" id="fRiddleAlreadyCreateGame" marginwidth="1" marginheight="1" height="460" width="100%" scrolling="no" border="0" frameborder="0" allowtransparency="true" style="background-color:transparent"></iframe>
					</div>
				</div>
				<div class="button" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'"  onclick="ReturnRiddleInx()">益智模式索引</div>
				<div class="button" style="left:204px" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'"  onclick="if($User.Visitor.UserName!='游客'||confirm('游客只能体验创建功能无法存档\n请使用注册用户以保存你的创意！'))SelectModal('ImZombieCreateGame')">创建我是僵尸关卡</div>
			</div>
			<div id="dRiddleClose" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="HiddenRiddleGame()">关 闭&nbsp;</div>
		</div>
	</div>
<div id="dShowMsgLogin" class="dShowMsg" style="display: none; width: 506px; height: 416px; text-shadow: rgb(0, 0, 0) 1px 1px; position: absolute; margin: auto; left: 0px; top: 0px; right: 0px; bottom: 0px;">
<table class="dShowMsgTabBG" width="100%" height="100%" cellspacing="0" cellpadding="0">
	<tbody><tr>
		<td height="141" style="background:url(images/interface/dialog_topleft.png) left bottom no-repeat" width="107">
		　</td>
		<td height="141" style="background:url(images/interface/dialog_topmiddle.png) left bottom repeat-x"></td>
		<td height="141" style="background:url(images/interface/dialog_topright.png) left bottom no-repeat" width="120">
		　</td>
	</tr>
	<tr>
		<td style="background:url(images/interface/dialog_centerleft.png) left bottom repeat-y"></td>
		<td style="background:url(images/interface/dialog_centermiddle.png) left bottom "></td>
		<td style="background:url(images/interface/dialog_centerright.png) left bottom repeat-y"></td>
	</tr>
	<tr class="dShowMsgBGTabTRBottom112" name="dShowMsgBGTabTRBottom112" style="display: none;">
		<td height="112" style="background:url(images/interface/dialog_bottomleft.png) left top no-repeat" width="107">
		　</td>
		<td height="112" style="background:url(images/interface/dialog_bottommiddle.png) left top repeat-x"></td>
		<td height="112" style="background:url(images/interface/dialog_bottomright.png) left top no-repeat" width="120">
		　</td>
	</tr>
	<tr class="dShowMsgBGTabTRBottom150" style="display: table-row;">
		<td height="150" style="background:url(images/interface/dialog_bigbottomleft.png) left top no-repeat" width="107">
		　</td>
		<td height="150" style="background:url(images/interface/dialog_bigbottommiddle.png) left top repeat-x"></td>
		<td height="150" style="background:url(images/interface/dialog_bigbottomright.png) left top no-repeat" width="120">
		　</td>
	</tr>
</tbody></table>
<table class="dShowMsgTab" id="dLoginDataHTML" style="position:absolute;left:0;top:0" width="100%" height="100%" cellspacing="0" cellpadding="0">
	<tbody><tr>
		<td height="80" style="background:url(images/interface/dialog_header.png) 47% top no-repeat" colspan="3"></td>
	</tr>
	<tr>
		<td width="50"></td>
		<td class="dShowMsgTabTR" align="center" valign="top">
		<!--英文fontsize:32px height:52px lineheight:35px-->
		<!--中文fontsize:24px height:39px lineheight:38px-->
		<!--无text只有标题：height:52px line-height:68px fontsize根据中英文来-->
		<div class="dShowMsgTabTitle" style="white-space:normal;font-size:24px;line-height:38px;height:39px;font-family:DwarvenTC,SimSun;text-align:center">你是谁？</div>
		<!--英文fontsize:20px lineheight:24px-->
		<!--中文fontsize:15px lineheight:20px-->
		<div class="dShowMsgTabText" style="white-space:normal;font-size:15px;line-height:20px;width:80%;margin:auto;font-family:DwarvenTC,'Microsoft Yahei';text-align:center;"><div style="position:relative;width:250px"><div>请输入你的用户名(分大小写)：</div><div style="position:relative;width:300px;height:42px"><input placeholder="3-10个字母/数字/下划线" name="txtName" id="txtName" type="text" maxlength="10" value="" style="padding-left:20px;background:url(images/interface/editbox.gif) no-repeat -20px 0/150% 100%;border:0px;height:42px;width:290px;position:absolute;left:0;top:0;color:white;font-size:22px;font-family:DwarvenTC,SimSun"><img src="images/interface/editbox.gif" style="position:absolute;left:0;clip:rect(0,20px,42px,0)"><img src="images/interface/editbox.gif" style="position:absolute;left:210px;clip:rect(0,90px,42px,80px)"></div></div><div style="margin-top:5px;width:250px"><div>请输入你的密码：</div><div style="position:relative;width:300px;height:42px"><input placeholder="注册密码6-20个字母+数字" name="txtPass" id="txtPass" type="password" maxlength="20" value="" style="padding-left:20px;background:url(images/interface/editbox.gif) no-repeat -20px 0/150% 100%;border:0px;height:42px;width:290px;position:absolute;left:0;top:0;color:white;font-size:22px;font-family:DwarvenTC,SimSun"><img src="images/interface/editbox.gif" style="position:absolute;left:0;clip:rect(0,20px,42px,0)"><img src="images/interface/editbox.gif" style="position:absolute;left:210px;clip:rect(0,90px,42px,80px)">
		<div id="dLoadUserName">正在载入用户信息，请稍候!</div>
		</div></div></div>
		</td>
		<td width="60"></td>
	</tr>
	<!---->
	<tr class="dShowMsgTabTR1" style="display:none"><!--table-row-->
		<td height="112" align="center" colspan="3">

		<table width="80%" cellpadding="0" class="ButtonTab">
			<tbody><tr>
				<td class="ShowMsgButtonL"></td>
				<!--英文fontsize:24px-->
				<!--中文fontsize:20px-->
				<td class="ShowMsgButton" valign="top">
				<!--OK-->
				</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		
		</td>
	</tr>
	<tr class="dShowMsgTabTR2" style="display:none">
		<td height="112" align="center" colspan="3">
		<div style="width:49%" align="right">
		<table cellpadding="0" class="ButtonTab ButtonTabL">
			<tbody><tr>
				<td class="ShowMsgButtonL"></td>
				<td class="ShowMsgButton" valign="top">
				<!--OK-->
				</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		</div>
		<div style="width:51%" align="left">
		<table cellpadding="0" class="ButtonTab ButtonTabR">
			<tbody><tr>
				<td class="ShowMsgButtonL"></td>
				<td class="ShowMsgButton" valign="top">
				<!--Cancel-->
				</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		</div>
		</td>
	</tr>
	<tr class="dShowMsgTabTR4" style="display: table-row;">
		<td height="150" align="center" valign="top" colspan="3">
		<div style="width:49%;margin-top:27px" align="right">
		<table cellpadding="0" class="ButtonTab ButtonTabL">
			<tbody><tr onclick="GameLogin();PlayAudio('gravebutton');">
				<td class="ShowMsgButtonL"></td>
				<td class="ShowMsgButton" valign="top" style="font-size:20px">登录</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		</div>
		<div style="width:51%;margin-top:27px;" align="left">
		<table cellpadding="0" class="ButtonTab ButtonTabR">
			<tbody><tr onclick="GameLogout();PlayAudio('gravebutton');">
				<td class="ShowMsgButtonL"></td>
				<td class="ShowMsgButton" valign="top" style="font-size:20px">登出</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		</div>
		<div style="width:49%" align="right">
		<table cellpadding="0" class="ButtonTab ButtonTabL">
			<tbody><tr onclick="GameLogin(1);PlayAudio('gravebutton');">
				<td class="ShowMsgButtonL"></td>
				<td class="ShowMsgButton" valign="top" style="font-size:20px">注册</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		</div>
		<div style="width:51%" align="left">
		<table cellpadding="0" class="ButtonTab ButtonTabR">
			<tbody><tr onclick="SetNone($('dShowMsgLogin'));PlayAudio('gravebutton');">
				<td class="ShowMsgButtonL"></td>
				<td class="ShowMsgButton" valign="top" style="font-size:20px">取消</td>
				<td class="ShowMsgButtonR"></td>
			</tr>
		</tbody></table>
		</div>
		</td>
	</tr>
</tbody></table>
<div id="dMsgFailed" style="display: none; top: 90px;"></div>
</div>
</div>

<!--主界面EDAll-->
<div class="WindowFrame" id="dAll">
	<!--背景图片-->
	<div id="tGround"></div>
	<!--左边卡片列-->
	<div id="dCardList"></div>
	<!--出场僵尸显示-->
	<div id="dZombie"></div>
	<!--右下角的显示图鉴按钮-->
	<div id="bShowHandBook" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="ViewHandBook()">图 鉴&nbsp;</div>
	<!--选择卡片-->
	<div id="dSelectCard">
		<div class="title">选择你的卡片</div>
		<div id="dPCard"></div>
		<div class="bTitle">
			<input class="button" onclick="ResetSelectCard()" type="button" value="重选" name="btnReset" id="btnReset" style="color:#FC6">
			<input class="button" onclick="oS.ScrollBack(LetsGO)" type="button" value="GO!" disabled="disabled" name="btnOK" id="btnOK" style="color:#888">
		</div>
	</div>
	<!--阳光和铲子-->
	<div id="dTop">
		<div id="dSunNum">
			<span id="sSunNum"></span>
		</div>
		<div id="tdShovel">
			<img id="imgShovel" src="images/interface/Shovel.png" onmousedown="ChoseShovel(event)">
		</div>
	</div>
	<div id="dPZ"></div>
</div>


<!--菜单-->
<div id="dMenu">
	<div id="dMenu0" class="Menu" onclick="PauseGame(this)">暂 停</div>
	<div id="dMenu1" class="Menu" onclick="ClickMenu()">菜 单</div>
</div>

<!--图鉴-->
<div id="dHandBook" class="WindowFrame">
	<div class="title">图鉴——索引</div>
	<div class="content">
		<div>
			<img border="0" src="images/Plants/SunFlower/0.gif" width="73" height="74"><br>
			<input class="button" type="button" value="查看植物" name="btnViewPlant" id="btnViewPlant" onclick="InitHandBookPCard()">
		</div>
		<div style="left:50%;padding-top:95px">
			<img border="0" src="images/Zombies/Zombie/0.gif" width="149" height="130"><br>
			<input class="button" type="button" value="查看僵尸" name="btnViewZombie" id="btnViewZombie" onclick="InitHandBookZCard()">
		</div>
	</div>
	<div class="close" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="CloseHandBook()">关 闭&nbsp;</div>
</div>

<div id="dHandBookPZ" class="WindowFrame Almanac_PlantBack">
	<div id="dHandBookP">
		<div class="title">图鉴——植物</div>
		<div id="dHandBookPCard"></div>
		<div id="pPlantBack"></div>
		<div class="list">
			<div id="pHandBookPlant"></div>
			<div id="dHandBookPlantName"></div>
			<div id="dProducePlant"></div>
			<div class="cost_cool">
				<span class="cost">花费:</span><span id="spSunNum"></span><span class="cool">冷却:</span><span id="spCoolTime"></span>
			</div>
		</div>
	</div>
	<div id="dHandBookZ">
		<div class="title">图鉴——僵尸</div>
		<div id="dHandBookZCard"></div>
		<div id="pZombieBack"></div>
		<div class="list">
			<div id="pHandBookZombie"></div>
			<div id="dHandBookZombieName"></div>
			<div id="dProduceZombie"></div>
		</div>
	</div>
	<div class="dButton">
		<div class="button1" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="ReturnHandBookInx()">图鉴索引</div>
		<div class="button2" onmouseover="this.style.backgroundPosition='bottom'" onmouseout="this.style.backgroundPosition='top'" onclick="CloseHandBook()">关 闭&nbsp;</div>
	</div>
</div>

<!--获得新植物-->
<div id="dNewPlant">
	<div id="dNewPlantTitle">你获得了一棵新的植物！</div>
	<div class="card">
		<img id="iNewPlantCard" border="0">
	</div>
	<br>
	<div id="dNewPlantName"></div>
	<br><br><br>
	<div id="dNewPlantTooltip"></div>
	<br><br><br><br><br><br>
	<input type="button" value="下一关！" name="btnNextLevel" id="btnNextLevel">
</div>

<!--开发进度显示-->
<div id="dProcess">
	<div id="dProcess2">
		<span id="sFailed"><br><br>未成功从作者网站上加载到进度文件<br>如果互联网未连接或者作者网站无法成功打开则无法查看最新进度显示！</span>
	</div>
	<br>
	<input class="button" type="button" value="关闭" onclick="SetHidden($('dProcess'))">
	<script>document.write('<a style="margin-left:50px;cursor:pointer;color:#FF0;font-size:15px;text-decoration:none;font-weight:bold" target="_blank" href="http://'+$User.AuthorWebsite+'/process.htm">查看更多开发进度信息 >>></a>');</script>
</div>
<div id="oEmbed"></div>

<!--聊天窗口-->
<div id="dChat">
	<div id="dChatView">
		<div class="bg"></div>
		<div>
			<iframe name="ChatView" id="ChatView" src="asp/ViewChat.asp" allowtransparency="true" frameborder="0" width="842" height="585" scrolling="no"></iframe>
		</div>
		<div class="IF2">
			<iframe id="IF2" name="IF2" style="display:none" allowtransparency="true" src="asp/ChatSend.asp?C=10000" marginwidth="0" marginheight="0" height="35" width="100%" scrolling="no" border="0" frameborder="0"></iframe>
		</div>
	</div>
</div>

<!--公告和分享-->
<div class="Announcement">
	<div class="d1">
		<div class="bshare-custom icon-medium-plus"><a title="分享到" href="http://www.bShare.cn/" id="bshare-shareto" class="bshare-more">分享到</a><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="分享到人人网" class="bshare-renren"></a><a title="分享到腾讯微博" class="bshare-qqmb"></a><a title="分享到网易微博" class="bshare-neteasemb"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a><span class="BSHARE_COUNT bshare-share-count">0</span></div><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=16c48152-78f6-44e2-bbc7-bcaabd464bba&amp;pophcol=2&amp;lang=zh"></script><script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC0.js"></script>
	</div>
	<div class="d1" style="width:270px;line-height:30px">
		<marquee onMouseOver="this.stop()" onMouseOut="this.start()"  scrollamount="2">2023/10/24通知: 无法游玩新关卡请清除浏览器缓存后再次尝试</marquee>
	</div>
	<div class="dLittleChat">
		<input type="button" value="星空之旅" class="game_ipt_01" onclick="window.open('./')">
		<input type="button" value="资源下载" class="game_ipt_01" onclick="window.open('./download.htm')">
		<input id="bViewChat" type="button" value="显示聊天" class="game_ipt_01" onclick="ViewChat(this)">
	</div>
</div>


<!--游戏调速-->
<div id="dSpeedContainer">
	<div class="title">应玩家要求，特推出游戏调速功能</div>
	<div class="dSpeed" title="点击一个速度选择软加速">
		<div class="dS1">在相应的速度上点击</div>
		<div class="dS2"><div onclick="CSpeed(1,20,.5)">1/2<br><br>┕━</div><div onclick="CSpeed(1,10,1)">原速<br><br>━┻━</div><div onclick="CSpeed(2,10,2)">2<br><br>━┻━</div><div onclick="CSpeed(5,10,5)">5<br><br>━┻━</div><div onclick="CSpeed(5,5,10)">10<br><br>━┛</div></div>
	</div>
	<div class="nowspeed">当前的游戏速度:<span id="dDisplaySpeed">1</span> 倍速</div>
	<div class="content"><span>&nbsp;&nbsp;&nbsp; 调速说明</span>：理想状态下，游戏提供的速度调节是<font color="#FFFF00">1/2倍速-10倍速</font>。但是调速效果跟你的浏览器以及电脑有关，比如IE6浏览器在再好的电脑上也别指望能上10倍速。<br>&nbsp;&nbsp;&nbsp; 调速后可能画面视觉会出现偶尔有点一顿一顿的感觉，并且在比较高的速度时某些浏览器可能无法实现加速效果或者只能短时间加速然后速度便慢下来。<br>&nbsp;&nbsp;&nbsp; <span style="color:#FF0"><b>最后强烈推荐使用IE9,Chrome,FireFox,Opera浏览器，能让你用豌豆射手体验到机关枪的感觉！<br>&nbsp;&nbsp;&nbsp; 声明：受浏览器和电脑限制，该调速不保证一定能达到选择速度的效果！</b></span></div>
	<br>
	<div><input type=button value="返回游戏" onclick="HiddenSpeed()">&nbsp;&nbsp; <input type=button value="恢复原速" onclick="CSpeed(1,10,1)"></div>
</div>


<script>


//背景音乐和自动拾取阳光代码
$User.Client.PC&&$User.HTTP?( 
	//电脑且是Http协议访问，则读取缓存
	//缓存是允许自动拾取阳光，则勾选.默认不自动拾取
	(oS.AutoSun=Math.floor(getCookie('JSPVZAutoSun')))&&($('cAutoSun').checked=true),
	//是否，默认不静音
	(oS.Silence=Math.floor(getCookie('JSPVZSilence')))&&($('cSilence').checked=true)
):(
	//非电脑或者非http协议，默认自动拾取阳光
	oS.AutoSun=1,$('cAutoSun').checked=true,
	//默认不静音
	oS.Silence=0,$('cSilence').checked=false
);

//ggadsense
ShowAD();

(function(){
	var Search=location.search,ar,Server=$User.Server,List=Server.List;
	Search?(
		ar=Search.split('?')[1].split('&'),
		$('baseURL').href=Server.SpeedURL=List[Server.SpeedInx=ar[0]][1],
		Server.DataURL=List[Server.DataInx=ar[1]][1],
		document.write('<script src="'+List[Server.DataInx][1]+'asp/GetUser.asp"></scrip'+'t>')
	):document.write('<script src="asp/GetUser.asp"></scrip'+'t>');
	$('fRiddleAlreadyCreateGame').src='asp/GetImZombieCreateGameList222.asp?'+Math.random();
})();

//初始化系统对象
InitGame();
</script>
<script id="JSPVZ"></script>
</body>
</html> 