window.wp=window.wp||{},wp.svgPainter=function(n,t,e){"use strict";var a,i,o,r={},s=[];return n(e).ready(function(){e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")&&(n(e.body).removeClass("no-svg").addClass("svg"),wp.svgPainter.init())}),i=function(){function n(){for(;256>u;)i=String.fromCharCode(u),r+=i,c[u]=u,s[u]=o.indexOf(i),++u}function t(n,t,e,a,o,r){var s,c,u=0,f=0,l="",m=0;for(n=String(n),c=n.length;c>f;){for(i=n.charCodeAt(f),i=256>i?e[i]:-1,u=(u<<o)+i,m+=o;m>=r;)m-=r,s=u>>m,l+=a.charAt(s),u^=s<<m;++f}return!t&&m>0&&(l+=a.charAt(u<<r-m)),l}function e(e){return i||n(),e=t(e,!1,c,o,8,6),e+"====".slice(e.length%4||4)}function a(e){var a;i||n(),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,""),e=String(e).split("="),a=e.length;do--a,e[a]=t(e[a],!0,s,r,6,8);while(a>0);return e=e.join("")}var i,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="",s=[256],c=[256],u=0;return{atob:a,btoa:e}}(),{init:function(){o=this,a=n("#adminmenu .wp-menu-image, #wpadminbar .ab-item"),this.setColors(),this.findElements(),this.paint()},setColors:function(n){"undefined"==typeof n&&"undefined"!=typeof t._wpColorScheme&&(n=t._wpColorScheme),n&&n.icons&&n.icons.base&&n.icons.current&&n.icons.focus&&(r=n.icons)},findElements:function(){a.each(function(){var t=n(this),e=t.css("background-image");e&&-1!=e.indexOf("data:image/svg+xml;base64")&&s.push(t)})},paint:function(){n.each(s,function(n,e){var a=e.parent().parent();a.hasClass("current")||a.hasClass("wp-has-current-submenu")?o.paintElement(e,"current"):(o.paintElement(e,"base"),a.hover(function(){o.paintElement(e,"focus")},function(){t.setTimeout(function(){o.paintElement(e,"base")},100)}))})},paintElement:function(n,e){var a,o,s;if(e&&r.hasOwnProperty(e)&&(s=r[e],s.match(/^(#[0-9a-f]{3}|#[0-9a-f]{6})$/i)&&(a=n.data("wp-ui-svg-"+s),"none"!==a))){if(!a){if(o=n.css("background-image").match(/.+data:image\/svg\+xml;base64,([A-Za-z0-9\+\/\=]+)/),!o||!o[1])return void n.data("wp-ui-svg-"+s,"none");try{a="atob"in t?t.atob(o[1]):i.atob(o[1])}catch(c){}if(!a)return void n.data("wp-ui-svg-"+s,"none");a=a.replace(/fill="(.+?)"/g,'fill="'+s+'"'),a=a.replace(/style="(.+?)"/g,'style="fill:'+s+'"'),a=a.replace(/fill:.*?;/g,"fill: "+s+";"),a="btoa"in t?t.btoa(a):i.btoa(a),n.data("wp-ui-svg-"+s,a)}n.attr("style",'background-image: url("data:image/svg+xml;base64,'+a+'") !important;')}}}}(jQuery,window,document);