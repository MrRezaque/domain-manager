﻿

//// Хэш сайт -> ключевые слова, через запятую
//var siteKeywords = {
//	'kinoyley.org': 'cмотреть, видео, просмотр, кино, порно, Porno, Василий',
//	'www.flasgames.ru': 'флеш, игры, game, играть, флешь'
//};
//
//// массив сайтов, на которых скрипт не запускается
//var forbiddenPages = [
//	'google.com',
//	'yandex.ru'
//];

var DEBUG_MODE = false;

//поддержка trim для недобраузеров
if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g,'');
	}
}

/*! URI.js v1.15.1 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,n){"object"===typeof exports?module.exports=n():"function"===typeof define&&define.amd?define(n):f.IPv6=n(f)})(this,function(f){var n=f&&f.IPv6;return{best:function(g){g=g.toLowerCase().split(":");var l=g.length,b=8;""===g[0]&&""===g[1]&&""===g[2]?(g.shift(),g.shift()):""===g[0]&&""===g[1]?g.shift():""===g[l-1]&&""===g[l-2]&&g.pop();l=g.length;-1!==g[l-1].indexOf(".")&&(b=7);var k;for(k=0;k<l&&""!==g[k];k++);if(k<b)for(g.splice(k,1,"0000");g.length<b;)g.splice(k,0,"0000");for(k=0;k<b;k++){for(var l=
	g[k].split(""),f=0;3>f;f++)if("0"===l[0]&&1<l.length)l.splice(0,1);else break;g[k]=l.join("")}var l=-1,n=f=0,h=-1,u=!1;for(k=0;k<b;k++)u?"0"===g[k]?n+=1:(u=!1,n>f&&(l=h,f=n)):"0"===g[k]&&(u=!0,h=k,n=1);n>f&&(l=h,f=n);1<f&&g.splice(l,f,"");l=g.length;b="";""===g[0]&&(b=":");for(k=0;k<l;k++){b+=g[k];if(k===l-1)break;b+=":"}""===g[l-1]&&(b+=":");return b},noConflict:function(){f.IPv6===this&&(f.IPv6=n);return this}}});
(function(f){function n(b){throw RangeError(v[b]);}function g(b,e){for(var h=b.length;h--;)b[h]=e(b[h]);return b}function l(b,h){return g(b.split(e),h).join(".")}function b(b){for(var e=[],h=0,g=b.length,a,c;h<g;)a=b.charCodeAt(h++),55296<=a&&56319>=a&&h<g?(c=b.charCodeAt(h++),56320==(c&64512)?e.push(((a&1023)<<10)+(c&1023)+65536):(e.push(a),h--)):e.push(a);return e}function k(b){return g(b,function(b){var e="";65535<b&&(b-=65536,e+=x(b>>>10&1023|55296),b=56320|b&1023);return e+=x(b)}).join("")}function A(b,
																																																																																																																																																																																																																																																															 e){return b+22+75*(26>b)-((0!=e)<<5)}function w(b,e,h){var g=0;b=h?q(b/700):b>>1;for(b+=q(b/e);455<b;g+=36)b=q(b/35);return q(g+36*b/(b+38))}function h(b){var e=[],h=b.length,g,a=0,c=128,d=72,m,z,y,f,l;m=b.lastIndexOf("-");0>m&&(m=0);for(z=0;z<m;++z)128<=b.charCodeAt(z)&&n("not-basic"),e.push(b.charCodeAt(z));for(m=0<m?m+1:0;m<h;){z=a;g=1;for(y=36;;y+=36){m>=h&&n("invalid-input");f=b.charCodeAt(m++);f=10>f-48?f-22:26>f-65?f-65:26>f-97?f-97:36;(36<=f||f>q((2147483647-a)/g))&&n("overflow");a+=f*g;l=
	y<=d?1:y>=d+26?26:y-d;if(f<l)break;f=36-l;g>q(2147483647/f)&&n("overflow");g*=f}g=e.length+1;d=w(a-z,g,0==z);q(a/g)>2147483647-c&&n("overflow");c+=q(a/g);a%=g;e.splice(a++,0,c)}return k(e)}function u(e){var g,h,f,a,c,d,m,z,y,l=[],u,k,p;e=b(e);u=e.length;g=128;h=0;c=72;for(d=0;d<u;++d)y=e[d],128>y&&l.push(x(y));for((f=a=l.length)&&l.push("-");f<u;){m=2147483647;for(d=0;d<u;++d)y=e[d],y>=g&&y<m&&(m=y);k=f+1;m-g>q((2147483647-h)/k)&&n("overflow");h+=(m-g)*k;g=m;for(d=0;d<u;++d)if(y=e[d],y<g&&2147483647<
	++h&&n("overflow"),y==g){z=h;for(m=36;;m+=36){y=m<=c?1:m>=c+26?26:m-c;if(z<y)break;p=z-y;z=36-y;l.push(x(A(y+p%z,0)));z=q(p/z)}l.push(x(A(z,0)));c=w(h,k,f==a);h=0;++f}++h;++g}return l.join("")}var D="object"==typeof exports&&exports,E="object"==typeof module&&module&&module.exports==D&&module,B="object"==typeof global&&global;if(B.global===B||B.window===B)f=B;var t,r=/^xn--/,p=/[^ -~]/,e=/\x2E|\u3002|\uFF0E|\uFF61/g,v={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)",
	"invalid-input":"Invalid input"},q=Math.floor,x=String.fromCharCode,C;t={version:"1.2.3",ucs2:{decode:b,encode:k},decode:h,encode:u,toASCII:function(b){return l(b,function(b){return p.test(b)?"xn--"+u(b):b})},toUnicode:function(b){return l(b,function(b){return r.test(b)?h(b.slice(4).toLowerCase()):b})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return t});else if(D&&!D.nodeType)if(E)E.exports=t;else for(C in t)t.hasOwnProperty(C)&&(D[C]=t[C]);else f.punycode=
	t})(this);
(function(f,n){"object"===typeof exports?module.exports=n():"function"===typeof define&&define.amd?define(n):f.SecondLevelDomains=n(f)})(this,function(f){var n=f&&f.SecondLevelDomains,g={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",
	bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",
	cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",
	et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
	id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
	kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
	mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
	ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
	ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
	tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
	rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
	tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
	us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch "},has:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return!1;
	var k=f.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return!1;var n=g.list[f.slice(b+1)];return n?0<=n.indexOf(" "+f.slice(k+1,b)+" "):!1},is:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1||0<=f.lastIndexOf(".",b-1))return!1;var k=g.list[f.slice(b+1)];return k?0<=k.indexOf(" "+f.slice(0,b)+" "):!1},get:function(f){var b=f.lastIndexOf(".");if(0>=b||b>=f.length-1)return null;var k=f.lastIndexOf(".",b-1);if(0>=k||k>=b-1)return null;var n=g.list[f.slice(b+1)];return!n||0>n.indexOf(" "+f.slice(k+
1,b)+" ")?null:f.slice(k+1)},noConflict:function(){f.SecondLevelDomains===this&&(f.SecondLevelDomains=n);return this}};return g});
(function(f,n){"object"===typeof exports?module.exports=n(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],n):f.URI=n(f.punycode,f.IPv6,f.SecondLevelDomains,f)})(this,function(f,n,g,l){function b(a,c){var d=1<=arguments.length,m=2<=arguments.length;if(!(this instanceof b))return d?m?new b(a,c):new b(a):new b;if(void 0===a){if(d)throw new TypeError("undefined is not a valid argument for URI");
	a="undefined"!==typeof location?location.href+"":""}this.href(a);return void 0!==c?this.absoluteTo(c):this}function k(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function A(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function w(a){return"Array"===A(a)}function h(a,c){var d={},b,e;if("RegExp"===A(c))d=null;else if(w(c))for(b=0,e=c.length;b<e;b++)d[c[b]]=!0;else d[c]=!0;b=0;for(e=a.length;b<e;b++)if(d&&void 0!==d[a[b]]||!d&&c.test(a[b]))a.splice(b,
	1),e--,b--;return a}function u(a,c){var d,b;if(w(c)){d=0;for(b=c.length;d<b;d++)if(!u(a,c[d]))return!1;return!0}var e=A(c);d=0;for(b=a.length;d<b;d++)if("RegExp"===e){if("string"===typeof a[d]&&a[d].match(c))return!0}else if(a[d]===c)return!0;return!1}function D(a,c){if(!w(a)||!w(c)||a.length!==c.length)return!1;a.sort();c.sort();for(var d=0,b=a.length;d<b;d++)if(a[d]!==c[d])return!1;return!0}function E(a){return escape(a)}function B(a){return encodeURIComponent(a).replace(/[!'()*]/g,E).replace(/\*/g,
	"%2A")}function t(a){return function(c,d){if(void 0===c)return this._parts[a]||"";this._parts[a]=c||null;this.build(!d);return this}}function r(a,c){return function(d,b){if(void 0===d)return this._parts[a]||"";null!==d&&(d+="",d.charAt(0)===c&&(d=d.substring(1)));this._parts[a]=d;this.build(!b);return this}}var p=l&&l.URI;b.version="1.15.1";var e=b.prototype,v=Object.prototype.hasOwnProperty;b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,
	query:null,fragment:null,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\.-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/};b.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};b.invalid_hostname_characters=
		/[^a-zA-Z0-9\.-]/;b.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();return"input"===c&&"image"!==a.type?void 0:b.domAttributes[c]}};b.encode=B;b.decode=decodeURIComponent;b.iso8859=function(){b.encode=escape;b.decode=unescape};b.unicode=function(){b.encode=B;b.decode=
		decodeURIComponent};b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",",
		"%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};b.encodeQuery=function(a,c){var d=b.encode(a+"");void 0===c&&(c=b.escapeQuerySpace);return c?d.replace(/%20/g,"+"):d};b.decodeQuery=function(a,c){a+="";void 0===c&&(c=b.escapeQuerySpace);try{return b.decode(c?a.replace(/\+/g,
		"%20"):a)}catch(d){return a}};var q={encode:"encode",decode:"decode"},x,C=function(a,c){return function(d){try{return b[c](d+"").replace(b.characters[a][c].expression,function(d){return b.characters[a][c].map[d]})}catch(m){return d}}};for(x in q)b[x+"PathSegment"]=C("pathname",q[x]),b[x+"UrnPathSegment"]=C("urnpath",q[x]);q=function(a,c,d){return function(m){var e;e=d?function(a){return b[c](b[d](a))}:b[c];m=(m+"").split(a);for(var f=0,h=m.length;f<h;f++)m[f]=e(m[f]);return m.join(a)}};b.decodePath=
		q("/","decodePathSegment");b.decodeUrnPath=q(":","decodeUrnPathSegment");b.recodePath=q("/","encodePathSegment","decode");b.recodeUrnPath=q(":","encodeUrnPathSegment","decode");b.encodeReserved=C("reserved","encode");b.parse=function(a,c){var d;c||(c={});d=a.indexOf("#");-1<d&&(c.fragment=a.substring(d+1)||null,a=a.substring(0,d));d=a.indexOf("?");-1<d&&(c.query=a.substring(d+1)||null,a=a.substring(0,d));"//"===a.substring(0,2)?(c.protocol=null,a=a.substring(2),a=b.parseAuthority(a,c)):(d=a.indexOf(":"),
	-1<d&&(c.protocol=a.substring(0,d)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:"//"===a.substring(d+1,d+3)?(a=a.substring(d+3),a=b.parseAuthority(a,c)):(a=a.substring(d+1),c.urn=!0)));c.path=a;return c};b.parseHost=function(a,c){var d=a.indexOf("/"),b;-1===d&&(d=a.length);if("["===a.charAt(0))b=a.indexOf("]"),c.hostname=a.substring(1,b)||null,c.port=a.substring(b+2,d)||null,"/"===c.port&&(c.port=null);else{var e=a.indexOf(":");b=a.indexOf("/");e=a.indexOf(":",e+1);
		-1!==e&&(-1===b||e<b)?(c.hostname=a.substring(0,d)||null,c.port=null):(b=a.substring(0,d).split(":"),c.hostname=b[0]||null,c.port=b[1]||null)}c.hostname&&"/"!==a.substring(d).charAt(0)&&(d++,a="/"+a);return a.substring(d)||"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};b.parseUserinfo=function(a,c){var d=a.indexOf("/"),m=a.lastIndexOf("@",-1<d?d:a.length-1);-1<m&&(-1===d||m<d)?(d=a.substring(0,m).split(":"),c.username=d[0]?b.decode(d[0]):null,d.shift(),c.password=
		d[0]?b.decode(d.join(":")):null,a=a.substring(m+1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},m=a.split("&"),e=m.length,f,h,g=0;g<e;g++)f=m[g].split("="),h=b.decodeQuery(f.shift(),c),f=f.length?b.decodeQuery(f.join("="),c):null,v.call(d,h)?("string"===typeof d[h]&&(d[h]=[d[h]]),d[h].push(f)):d[h]=f;return d};b.build=function(a){var c="";a.protocol&&(c+=a.protocol+":");a.urn||!c&&
	!a.hostname||(c+="//");c+=b.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(c+="/"),c+=a.path);"string"===typeof a.query&&a.query&&(c+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=function(a){var c="";if(a.hostname)c=b.ip6_expression.test(a.hostname)?c+("["+a.hostname+"]"):c+a.hostname;else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+b.buildHost(a)};
	b.buildUserinfo=function(a){var c="";a.username&&(c+=b.encode(a.username),a.password&&(c+=":"+b.encode(a.password)),c+="@");return c};b.buildQuery=function(a,c,d){var m="",e,f,h,g;for(f in a)if(v.call(a,f)&&f)if(w(a[f]))for(e={},h=0,g=a[f].length;h<g;h++)void 0!==a[f][h]&&void 0===e[a[f][h]+""]&&(m+="&"+b.buildQueryParameter(f,a[f][h],d),!0!==c&&(e[a[f][h]+""]=!0));else void 0!==a[f]&&(m+="&"+b.buildQueryParameter(f,a[f],d));return m.substring(1)};b.buildQueryParameter=function(a,c,d){return b.encodeQuery(a,
			d)+(null!==c?"="+b.encodeQuery(c,d):"")};b.addQuery=function(a,c,d){if("object"===typeof c)for(var m in c)v.call(c,m)&&b.addQuery(a,m,c[m]);else if("string"===typeof c)void 0===a[c]?a[c]=d:("string"===typeof a[c]&&(a[c]=[a[c]]),w(d)||(d=[d]),a[c]=(a[c]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.removeQuery=function(a,c,d){var m;if(w(c))for(d=0,m=c.length;d<m;d++)a[c[d]]=void 0;else if("RegExp"===A(c))for(m in a)c.test(m)&&(a[m]=void 0);
	else if("object"===typeof c)for(m in c)v.call(c,m)&&b.removeQuery(a,m,c[m]);else if("string"===typeof c)void 0!==d?"RegExp"===A(d)?!w(a[c])&&d.test(a[c])?a[c]=void 0:a[c]=h(a[c],d):a[c]===d?a[c]=void 0:w(a[c])&&(a[c]=h(a[c],d)):a[c]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};b.hasQuery=function(a,c,d,m){if("object"===typeof c){for(var e in c)if(v.call(c,e)&&!b.hasQuery(a,e,c[e]))return!1;return!0}if("string"!==typeof c)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
		switch(A(d)){case "Undefined":return c in a;case "Boolean":return a=Boolean(w(a[c])?a[c].length:a[c]),d===a;case "Function":return!!d(a[c],c,a);case "Array":return w(a[c])?(m?u:D)(a[c],d):!1;case "RegExp":return w(a[c])?m?u(a[c],d):!1:Boolean(a[c]&&a[c].match(d));case "Number":d=String(d);case "String":return w(a[c])?m?u(a[c],d):!1:a[c]===d;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.commonPath=function(a,c){var d=
		Math.min(a.length,c.length),b;for(b=0;b<d;b++)if(a.charAt(b)!==c.charAt(b)){b--;break}if(1>b)return a.charAt(0)===c.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(b)||"/"!==c.charAt(b))b=a.substring(0,b).lastIndexOf("/");return a.substring(0,b+1)};b.withinString=function(a,c,d){d||(d={});var m=d.start||b.findUri.start,e=d.end||b.findUri.end,f=d.trim||b.findUri.trim,h=/[a-z0-9-]=["']?$/i;for(m.lastIndex=0;;){var g=m.exec(a);if(!g)break;g=g.index;if(d.ignoreHtml){var u=a.slice(Math.max(g-3,0),
		g);if(u&&h.test(u))continue}var u=g+a.slice(g).search(e),k=a.slice(g,u).replace(f,"");d.ignore&&d.ignore.test(k)||(u=g+k.length,k=c(k,g,u,a),a=a.slice(0,g)+k+a.slice(u),m.lastIndex=g+k.length)}m.lastIndex=0;return a};b.ensureValidHostname=function(a){if(a.match(b.invalid_hostname_characters)){if(!f)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(f.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+
	a+'" contains characters other than [A-Z0-9.-]');}};b.noConflict=function(a){if(a)return a={URI:this.noConflict()},l.URITemplate&&"function"===typeof l.URITemplate.noConflict&&(a.URITemplate=l.URITemplate.noConflict()),l.IPv6&&"function"===typeof l.IPv6.noConflict&&(a.IPv6=l.IPv6.noConflict()),l.SecondLevelDomains&&"function"===typeof l.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=l.SecondLevelDomains.noConflict()),a;l.URI===this&&(l.URI=p);return this};e.build=function(a){if(!0===a)this._deferred_build=
		!0;else if(void 0===a||this._deferred_build)this._string=b.build(this._parts),this._deferred_build=!1;return this};e.clone=function(){return new b(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=t("protocol");e.username=t("username");e.password=t("password");e.hostname=t("hostname");e.port=t("port");e.query=r("query","?");e.fragment=r("fragment","#");e.search=function(a,c){var b=this.query(a,c);return"string"===typeof b&&b.length?"?"+b:b};e.hash=function(a,c){var b=
		this.fragment(a,c);return"string"===typeof b&&b.length?"#"+b:b};e.pathname=function(a,c){if(void 0===a||!0===a){var d=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?b.decodeUrnPath:b.decodePath)(d):d}this._parts.path=this._parts.urn?a?b.recodeUrnPath(a):"":a?b.recodePath(a):"/";this.build(!c);return this};e.path=e.pathname;e.href=function(a,c){var d;if(void 0===a)return this.toString();this._string="";this._parts=b._parts();var e=a instanceof b,f="object"===typeof a&&(a.hostname||
		a.path||a.pathname);a.nodeName&&(f=b.getDomAttribute(a),a=a[f]||"",f=!1);!e&&f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(e||f)for(d in e=e?a._parts:a,e)v.call(this._parts,d)&&(this._parts[d]=e[d]);else throw new TypeError("invalid input");this.build(!c);return this};e.is=function(a){var c=!1,d=!1,e=!1,f=!1,h=!1,u=!1,k=!1,l=!this._parts.urn;this._parts.hostname&&(l=!1,d=b.ip4_expression.test(this._parts.hostname),
		e=b.ip6_expression.test(this._parts.hostname),c=d||e,h=(f=!c)&&g&&g.has(this._parts.hostname),u=f&&b.idn_expression.test(this._parts.hostname),k=f&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return l;case "absolute":return!l;case "domain":case "name":return f;case "sld":return h;case "ip":return c;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;case "idn":return u;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;
		case "punycode":return k}return null};var F=e.protocol,G=e.port,H=e.hostname;e.protocol=function(a,c){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return F.call(this,a,c)};e.scheme=e.protocol;e.port=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+
	a+'" contains characters other than [0-9]');return G.call(this,a,c)};e.hostname=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var d={};b.parseHost(a,d);a=d.hostname}return H.call(this,a,c)};e.host=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?b.buildHost(this._parts):"";b.parseHost(a,this._parts);this.build(!c);return this};e.authority=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?
		b.buildAuthority(this._parts):"";b.parseAuthority(a,this._parts);this.build(!c);return this};e.userinfo=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var d=b.buildUserinfo(this._parts);return d.substring(0,d.length-1)}"@"!==a[a.length-1]&&(a+="@");b.parseUserinfo(a,this._parts);this.build(!c);return this};e.resource=function(a,c){var d;if(void 0===a)return this.path()+this.search()+this.hash();d=b.parse(a);this._parts.path=d.path;this._parts.query=
		d.query;this._parts.fragment=d.fragment;this.build(!c);return this};e.subdomain=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,d)||""}d=this._parts.hostname.length-this.domain().length;d=this._parts.hostname.substring(0,d);d=new RegExp("^"+k(d));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&b.ensureValidHostname(a);this._parts.hostname=
		this._parts.hostname.replace(d,a);this.build(!c);return this};e.domain=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.match(/\./g);if(d&&2>d.length)return this._parts.hostname;d=this._parts.hostname.length-this.tld(c).length-1;d=this._parts.hostname.lastIndexOf(".",d-1)+1;return this._parts.hostname.substring(d)||""}if(!a)throw new TypeError("cannot set domain empty");
		b.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(d=new RegExp(k(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a));this.build(!c);return this};e.tld=function(a,c){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(c=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var b=this._parts.hostname.lastIndexOf("."),b=this._parts.hostname.substring(b+1);return!0!==c&&g&&g.list[b.toLowerCase()]?g.get(this._parts.hostname)||
	b:b}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(g&&g.is(a))b=new RegExp(k(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(b,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");b=new RegExp(k(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(b,a)}else throw new TypeError("cannot set TLD empty");this.build(!c);return this};e.directory=
		function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var d=this._parts.path.length-this.filename().length-1,d=this._parts.path.substring(0,d)||(this._parts.hostname?"/":"");return a?b.decodePath(d):d}d=this._parts.path.length-this.filename().length;d=this._parts.path.substring(0,d);d=new RegExp("^"+k(d));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-
		1)&&(a+="/");a=b.recodePath(a);this._parts.path=this._parts.path.replace(d,a);this.build(!c);return this};e.filename=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this._parts.path.lastIndexOf("/"),d=this._parts.path.substring(d+1);return a?b.decodePathSegment(d):d}d=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(d=!0);var e=new RegExp(k(this.filename())+"$");a=b.recodePath(a);this._parts.path=
		this._parts.path.replace(e,a);d?this.normalizePath(c):this.build(!c);return this};e.suffix=function(a,c){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var d=this.filename(),e=d.lastIndexOf(".");if(-1===e)return"";d=d.substring(e+1);d=/^[a-z0-9%]+$/i.test(d)?d:"";return a?b.decodePathSegment(d):d}"."===a.charAt(0)&&(a=a.substring(1));if(d=this.suffix())e=a?new RegExp(k(d)+"$"):new RegExp(k("."+d)+"$");else{if(!a)return this;
		this._parts.path+="."+b.recodePath(a)}e&&(a=b.recodePath(a),this._parts.path=this._parts.path.replace(e,a));this.build(!c);return this};e.segment=function(a,c,b){var e=this._parts.urn?":":"/",f=this.path(),h="/"===f.substring(0,1),f=f.split(e);void 0!==a&&"number"!==typeof a&&(b=c,c=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');h&&f.shift();0>a&&(a=Math.max(f.length+a,0));if(void 0===c)return void 0===a?f:f[a];if(null===a||void 0===f[a])if(w(c)){f=
		[];a=0;for(var g=c.length;a<g;a++)if(c[a].length||f.length&&f[f.length-1].length)f.length&&!f[f.length-1].length&&f.pop(),f.push(c[a])}else{if(c||"string"===typeof c)""===f[f.length-1]?f[f.length-1]=c:f.push(c)}else c?f[a]=c:f.splice(a,1);h&&f.unshift("");return this.path(f.join(e),b)};e.segmentCoded=function(a,c,d){var e,f;"number"!==typeof a&&(d=c,c=a,a=void 0);if(void 0===c){a=this.segment(a,c,d);if(w(a))for(e=0,f=a.length;e<f;e++)a[e]=b.decode(a[e]);else a=void 0!==a?b.decode(a):void 0;return a}if(w(c))for(e=
																																																																																																																																																																																																																																																																					0,f=c.length;e<f;e++)c[e]=b.decode(c[e]);else c="string"===typeof c||c instanceof String?b.encode(c):c;return this.segment(a,c,d)};var I=e.query;e.query=function(a,c){if(!0===a)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=b.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!c);return this}return void 0!==
	a&&"string"!==typeof a?(this._parts.query=b.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!c),this):I.call(this,a,c)};e.setQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==c?c:null;else if("object"===typeof a)for(var f in a)v.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=
		b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.addQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(e,a,void 0===c?null:c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.removeQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);
		b.removeQuery(e,a,c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(d=c);this.build(!d);return this};e.hasQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(e,a,c,d)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():
		this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&n&&(this._parts.hostname=n.best(this._parts.hostname)),this._parts.hostname=
		this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===b.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var c=this._parts.path;if(!c)return this;if(this._parts.urn)return this._parts.path=b.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var d,e="",f,h;"/"!==c.charAt(0)&&(d=!0,c="/"+c);c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,
		"/").replace(/\/{2,}/g,"/");d&&(e=c.substring(1).match(/^(\.\.\/)+/)||"")&&(e=e[0]);for(;;){f=c.indexOf("/..");if(-1===f)break;else if(0===f){c=c.substring(3);continue}h=c.substring(0,f).lastIndexOf("/");-1===h&&(h=f);c=c.substring(0,h)+c.substring(f+3)}d&&this.is("relative")&&(c=e+c.substring(1));c=b.recodePath(c);this._parts.path=c;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(b.parseQuery(this._parts.query,
		this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;try{this.normalize()}finally{b.encode=a,b.decode=c}return this};e.unicode=function(){var a=b.encode,c=b.decode;b.encode=B;b.decode=unescape;try{this.normalize()}finally{b.encode=
		a,b.decode=c}return this};e.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(c+=f.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(c+="/");c+=a.path(!0);if(a._parts.query){for(var d="",e=0,h=a._parts.query.split("&"),g=h.length;e<g;e++){var u=(h[e]||"").split("="),d=d+("&"+b.decodeQuery(u[0],
			this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==u[1]&&(d+="="+b.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+="?"+d.substring(1)}return c+=b.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var c=this.clone(),d=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof b||(a=new b(a));c._parts.protocol||(c._parts.protocol=a._parts.protocol);if(this._parts.hostname)return c;
		for(e=0;f=d[e];e++)c._parts[f]=a._parts[f];c._parts.path?".."===c._parts.path.substring(-2)&&(c._parts.path+="/"):(c._parts.path=a._parts.path,c._parts.query||(c._parts.query=a._parts.query));"/"!==c.path().charAt(0)&&(d=(d=a.directory())?d:0===a.path().indexOf("/")?"/":"",c._parts.path=(d?d+"/":"")+c._parts.path,c.normalizePath());c.build();return c};e.relativeTo=function(a){var c=this.clone().normalize(),d,e,f,h;if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
		a=(new b(a)).normalize();d=c._parts;e=a._parts;f=c.path();h=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==h.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");d.protocol===e.protocol&&(d.protocol=null);if(d.username===e.username&&d.password===e.password&&null===d.protocol&&null===d.username&&null===d.password&&d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return c.build();if(f===h)return d.path="",c.build();
		a=b.commonPath(c.path(),a.path());if(!a)return c.build();e=e.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(a.length);return c.build()};e.equals=function(a){var c=this.clone();a=new b(a);var d={},e={},f={},h;c.normalize();a.normalize();if(c.toString()===a.toString())return!0;d=c.query();e=a.query();c.query("");a.query("");if(c.toString()!==a.toString()||d.length!==e.length)return!1;d=b.parseQuery(d,this._parts.escapeQuerySpace);e=b.parseQuery(e,this._parts.escapeQuerySpace);
		for(h in d)if(v.call(d,h)){if(!w(d[h])){if(d[h]!==e[h])return!1}else if(!D(d[h],e[h]))return!1;f[h]=!0}for(h in e)if(v.call(e,h)&&!f[h])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});
(function(f,n){"object"===typeof exports?module.exports=n(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],n):f.URITemplate=n(f.URI,f)})(this,function(f,n){function g(b){if(g._cache[b])return g._cache[b];if(!(this instanceof g))return new g(b);this.expression=b;g._cache[b]=this;return this}function l(b){this.data=b;this.cache={}}var b=n&&n.URITemplate,k=Object.prototype.hasOwnProperty,A=g.prototype,w={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},
	"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",
		separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};g._cache={};g.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;g.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;g.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;g.expand=function(b,f){var k=w[b.operator],l=k.named?"Named":"Unnamed",n=b.variables,t=[],r,p,e;for(e=0;p=n[e];e++)r=f.get(p.name),r.val.length?t.push(g["expand"+l](r,k,p.explode,p.explode&&k.separator||",",p.maxlength,p.name)):r.type&&t.push("");return t.length?k.prefix+t.join(k.separator):
	""};g.expandNamed=function(b,g,k,l,n,t){var r="",p=g.encode;g=g.empty_name_separator;var e=!b[p].length,v=2===b.type?"":f[p](t),q,x,w;x=0;for(w=b.val.length;x<w;x++)n?(q=f[p](b.val[x][1].substring(0,n)),2===b.type&&(v=f[p](b.val[x][0].substring(0,n)))):e?(q=f[p](b.val[x][1]),2===b.type?(v=f[p](b.val[x][0]),b[p].push([v,q])):b[p].push([void 0,q])):(q=b[p][x][1],2===b.type&&(v=b[p][x][0])),r&&(r+=l),k?r+=v+(g||q?"=":"")+q:(x||(r+=f[p](t)+(g||q?"=":"")),2===b.type&&(r+=v+","),r+=q);return r};g.expandUnnamed=
	function(b,g,k,l,n){var t="",r=g.encode;g=g.empty_name_separator;var p=!b[r].length,e,v,q,w;q=0;for(w=b.val.length;q<w;q++)n?v=f[r](b.val[q][1].substring(0,n)):p?(v=f[r](b.val[q][1]),b[r].push([2===b.type?f[r](b.val[q][0]):void 0,v])):v=b[r][q][1],t&&(t+=l),2===b.type&&(e=n?f[r](b.val[q][0].substring(0,n)):b[r][q][0],t+=e,t=k?t+(g||v?"=":""):t+","),t+=v;return t};g.noConflict=function(){n.URITemplate===g&&(n.URITemplate=b);return g};A.expand=function(b){var f="";this.parts&&this.parts.length||this.parse();
	b instanceof l||(b=new l(b));for(var k=0,n=this.parts.length;k<n;k++)f+="string"===typeof this.parts[k]?this.parts[k]:g.expand(this.parts[k],b);return f};A.parse=function(){var b=this.expression,f=g.EXPRESSION_PATTERN,k=g.VARIABLE_PATTERN,n=g.VARIABLE_NAME_PATTERN,l=[],t=0,r,p,e;for(f.lastIndex=0;;){p=f.exec(b);if(null===p){l.push(b.substring(t));break}else l.push(b.substring(t,p.index)),t=p.index+p[0].length;if(!w[p[1]])throw Error('Unknown Operator "'+p[1]+'" in "'+p[0]+'"');if(!p[3])throw Error('Unclosed Expression "'+
p[0]+'"');r=p[2].split(",");for(var v=0,q=r.length;v<q;v++){e=r[v].match(k);if(null===e)throw Error('Invalid Variable "'+r[v]+'" in "'+p[0]+'"');if(e[1].match(n))throw Error('Invalid Variable Name "'+e[1]+'" in "'+p[0]+'"');r[v]={name:e[1],explode:!!e[3],maxlength:e[4]&&parseInt(e[4],10)}}if(!r.length)throw Error('Expression Missing Variable(s) "'+p[0]+'"');l.push({expression:p[0],operator:p[1],variables:r})}l.length||l.push(b);this.parts=l;return this};l.prototype.get=function(b){var f=this.data,
	g={type:0,val:[],encode:[],encodeReserved:[]},l;if(void 0!==this.cache[b])return this.cache[b];this.cache[b]=g;f="[object Function]"===String(Object.prototype.toString.call(f))?f(b):"[object Function]"===String(Object.prototype.toString.call(f[b]))?f[b](b):f[b];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){l=0;for(b=f.length;l<b;l++)void 0!==f[l]&&null!==f[l]&&g.val.push([void 0,String(f[l])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(l in f)k.call(f,
	l)&&void 0!==f[l]&&null!==f[l]&&g.val.push([l,String(f[l])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(f)]);return g};f.expand=function(b,k){var l=(new g(b)).expand(k);return new f(l)};return g});



var main_rdr = function() {

	DEBUG_MODE && console.log('start');

	//проверка запрещен ли переход с текущего сайта
	if (isForbiddenSite())  {
		if (DEBUG_MODE) {
			console.log('cайт в списке сайтов, запрещенных для перехода');
		}
		return false;
	}
	else {
		console.log('сайт не в списке запрещенных');
	}

	//обработка хэша сайтов - ключевых слов
	var parsedSiteKeywords = {};
	var keys = Object.keys(siteKeywords);
	//превращаем строку из ключевых слов в массив и убираем пробелы по краям
	for (var index = 0; index < keys.length; index++) {
		var key = keys[index];
		parsedSiteKeywords[key] = siteKeywords[key].split(',');
		for (var iind = 0; iind < parsedSiteKeywords[key].length; iind++ ) {
			parsedSiteKeywords[key][iind] = parsedSiteKeywords[key][iind].trim();
		}
	}

	//проверяем текст в title
	var titleText = getTitleText();
	DEBUG_MODE && console.log("title text:");
	DEBUG_MODE && console.log(titleText);
	for (var index = 0; index < keys.length; index++) {
		var key = keys[index];
		//DEBUG_MODE && console.log(key);
		var keywordsArray = parsedSiteKeywords[key];
		//DEBUG_MODE && console.log(keywordsArray);
		if ( textContains( titleText, keywordsArray ) ) {
			return doRedirect(key);
		}
	}

	//Поиск текста в теле сообщения
	var pageText = getPageText();
	DEBUG_MODE && console.log("page text:");
	DEBUG_MODE && console.log(pageText);
	for (var index = 0; index < keys.length; index++) {
		var key = keys[index];
		var keywordsArray = parsedSiteKeywords[key];
		if ( textContains( pageText, keywordsArray ) ) {
			return doRedirect(key);
		}
	}

	DEBUG_MODE && console.log('Перенаправление не найдено')
}



var isForbiddenSite = function() {

	var currentUri = URI(window.location.href).normalize();
	var currentHost = currentUri.hostname() + currentUri.pathname();
	currentHost = addTrailingSlash(currentHost);

	for (var ind = 0; ind < forbiddenPages.length; ind++) {

		var uri = URI(forbiddenPages[ind]).normalize();
		var host = uri.hostname() + uri.pathname();
		host = addTrailingSlash(host)

		DEBUG_MODE && console.log(currentHost);
		DEBUG_MODE && console.log(host);
		if (host === currentHost) {
			return true;
		}
	}
	return false;
}

var isForbiddenSite = function() {

	var currentUri = URI(window.location.href).normalize();
	var currentHost = currentUri.hostname() + currentUri.pathname();

	currentHost = removeTrailingSlash(currentHost);
	console.log('current host: ' + currentHost);

	for (var ind = 0; ind < forbiddenPages.length; ind++) {
		var hasAsterix = false;
		var uri = URI(forbiddenPages[ind]);
		var host = uri.hostname() + uri.pathname();
		host = host.toLowerCase();
		if ( host.slice(host.length - 1 ) === '*' ) {
			hasAsterix = true;
			//remove trailing asterix
			host = host.substr(0, host.length - 1);
		}
		host = removeTrailingSlash(host);

		DEBUG_MODE && console.log('asterix: ' + hasAsterix);
		DEBUG_MODE && console.log(currentHost);
		DEBUG_MODE && console.log(host);

		if (hasAsterix) {
			regexp = new RegExp('(^'+host+'$)|(^'+host+'\/)');
			console.log('regexp:');
			console.log(regexp);
			if (currentHost.match(regexp) != null) {
				return true;
			}
		} else {
			if (host === currentHost) {
				return true;
			}
		}

	}
	return false;
}

var addTrailingSlash = function(str) {

	if (str.slice(str.length - 1 ) != '/') {
		str += '/';
	}
	return str;
}

var removeTrailingSlash = function(str) {
	if (str.slice(str.length - 1 ) == '/') {
		str = str.substr(0, str.length - 1);
	}
	return str;
}


var getTitleText = function() {
	var title = document.getElementsByTagName("title")[0].innerHTML;
	return title || '';
}

var getPageText = function() {
	return getTextWithSpaces(document.body);
}

function collectTextNodes(element, texts) {
	for (var child= element.firstChild; child!==null; child= child.nextSibling) {
		if (child.nodeType===3)
			texts.push(child);
		else if (child.nodeType===1 && child.nodeName !== "SCRIPT" && child.nodeName !== "STYLE")
			collectTextNodes(child, texts);
	}
}
function getTextWithSpaces(element) {

	console.log('element: ');
	console.log(element);

	var texts= [];
	collectTextNodes(element, texts);
	for (var i= texts.length; i-->0;)
		texts[i]= texts[i].data;
	return texts.join(' ');
}

var doRedirect = function(url) {
	if (DEBUG_MODE) {
		console.log('принято решение совершить переход на url: '+ url);
	}
	else {
		window.open(url, '_self');
	}
}

main_rdr();