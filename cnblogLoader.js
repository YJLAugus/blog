console.log("cjunn-v20200809154032");
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(4(){1 M=4(6){b(!6){X.U("W,6[5],6[7]");14}1 n=6.7;1 s=6.5;1 T=6.v;1 r=6.e;1 o=6.g;4 I(a,d){1 2=c.y(\'2\');2.w=\'10/x-D\';2.G=\'12 D\';2.E=a;c.A(\'8\')[0].t(2)};4 p(a,d){1 8=d||c.A(\'8\')[0];1 2=c.y(\'2\');2.w=\'H/7\';2.G=\'13\';2.E=a;8.t(2)};4 l(a,d,j){1 3=c.y("3");3.w="H/Z";b(j){b(3.q){3.F=4(){b(3.q=="Y"||3.q=="1h"){3.F=1i;j()}}}1f{3.1g=4(){j()}}}3.1j=a;1 8=d||c.A(\'8\')[0];8.t(3)};$(4(){1 f=$("<C 1a=f></C>");$("2").17();$("z").7("18","1d");$("#1e").7("1b","1c");$("z").19(f);I(T);L(n.k>0){p(n.i(),\'\')}(4(){b(s.k>0){l(s.i(),\'\',R.K)}})();L(r.k>0){p(r.i(),\'\')}(4(){b(o.k>0){l(o.i(),\'\',R.K)}})()})};1 9=1k.9||{};1 B=9.B||"P://Q.O.J/N/1m/";1 u=9.u||"1l";1 m=9.m||"P://Q.O.J/N/V/z/15.v";1 e=9.e||[];1 g=9.g||[];1 h=B+u+"/";1 S={7:[h+"7/f.7"],5:[h+"5/16.5",h+"5/11.5",h+"5/f.5",],e:e,g:g,v:m,};M(S)})();',62,85,'|var|link|script|function|js|param|css|head|__BLOG_CONFIG__|url|if|document|dom|extCss|app|extJs|staticPath|shift|callback|length|dynamicLoadJs|staticIco|c_css|c_extJs|dynamicLoadCss|readyState|c_extCss|c_js|appendChild|staticVer|ico|type||createElement|body|getElementsByTagName|staticSrc|div|icon|href|onreadystatechange|rel|text|dynamicLoadIco|io|callee|while|cnblogLoader|blog_theme_atum|gitee|https|cjunn|arguments|staticParam|c_ico|log|img|缺少必要参数|console|loaded|javascript|image|vendor|shortcut|stylesheet|return|miao|manifest|remove|overflow|append|id|display|none|hidden|home|else|onload|complete|null|src|window|20200809154032|releases'.split('|'),0,{}))

	
function secondToDate(second) {
     if (!second) {
         return 0;
     }
     var time = new Array(0, 0, 0, 0, 0);
     if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = parseInt(second / 3600);
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = parseInt(second / 60);
        second %= 60;
    }
    if (second > 0) {
        time[4] = second;
    }
    return time;
};
function setTime() {
         // 博客创建时间秒数，时间格式中，月比较特殊，是从0开始的，所以想要显示5月，得写4才行，如下
         var create_time = Math.round(new Date(Date.UTC(2020, 6, 27, 11, 06, 16)).getTime() / 1000);// 当前时间秒数,增加时区的差异
         var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
         currentTime = secondToDate((timestamp - create_time));
         if (currentTime[0]==0){
             currentTimeHtml = currentTime[1] + '天'+ currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] + '秒';
         }else{
             currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天' + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4] + '秒';
         }
         // 兼容pjax，当htmer_time存在时输出，否则清空计时器
         if (document.getElementById("elapseClock")){
             document.getElementById("elapseClock").innerHTML = currentTimeHtml;
         }else{
              clearInterval(timer);
         }
}
var timer = setInterval(setTime, 1000);