!function(t){t.fn.farbtastic=function(a){return t.farbtastic(this,a),this},t.farbtastic=function(a,r){var a=t(a).get(0);return a.farbtastic||(a.farbtastic=new t._farbtastic(a,r))},t._farbtastic=function(a,r){var e=this;t(a).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');var o=t(".farbtastic",a);e.wheel=t(".wheel",a).get(0),e.radius=84,e.square=100,e.width=194,navigator.appVersion.match(/MSIE [0-6]\./)&&t("*",o).each(function(){if("none"!=this.currentStyle.backgroundImage){var a=this.currentStyle.backgroundImage;a=this.currentStyle.backgroundImage.substring(5,a.length-2),t(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+a+"')"})}}),e.linkTo=function(a){return"object"==typeof e.callback&&t(e.callback).unbind("keyup",e.updateValue),e.color=null,"function"==typeof a?e.callback=a:("object"==typeof a||"string"==typeof a)&&(e.callback=t(a),e.callback.bind("keyup",e.updateValue),e.callback.get(0).value&&e.setColor(e.callback.get(0).value)),this},e.updateValue=function(t){this.value&&this.value!=e.color&&e.setColor(this.value)},e.setColor=function(t){var a=e.unpack(t);return e.color!=t&&a&&(e.color=t,e.rgb=a,e.hsl=e.RGBToHSL(e.rgb),e.updateDisplay()),this},e.setHSL=function(t){return e.hsl=t,e.rgb=e.HSLToRGB(t),e.color=e.pack(e.rgb),e.updateDisplay(),this},e.widgetCoords=function(a){var r=t(e.wheel).offset();return{x:a.pageX-r.left-e.width/2,y:a.pageY-r.top-e.width/2}},e.mousedown=function(a){document.dragging||(t(document).bind("mousemove",e.mousemove).bind("mouseup",e.mouseup),document.dragging=!0);var r=e.widgetCoords(a);return e.circleDrag=2*Math.max(Math.abs(r.x),Math.abs(r.y))>e.square,e.mousemove(a),!1},e.mousemove=function(t){var a=e.widgetCoords(t);if(e.circleDrag){var r=Math.atan2(a.x,-a.y)/6.28;0>r&&(r+=1),e.setHSL([r,e.hsl[1],e.hsl[2]])}else{var o=Math.max(0,Math.min(1,-(a.x/e.square)+.5)),n=Math.max(0,Math.min(1,-(a.y/e.square)+.5));e.setHSL([e.hsl[0],o,n])}return!1},e.mouseup=function(){t(document).unbind("mousemove",e.mousemove),t(document).unbind("mouseup",e.mouseup),document.dragging=!1},e.updateDisplay=function(){var a=6.28*e.hsl[0];t(".h-marker",o).css({left:Math.round(Math.sin(a)*e.radius+e.width/2)+"px",top:Math.round(-Math.cos(a)*e.radius+e.width/2)+"px"}),t(".sl-marker",o).css({left:Math.round(e.square*(.5-e.hsl[1])+e.width/2)+"px",top:Math.round(e.square*(.5-e.hsl[2])+e.width/2)+"px"}),t(".color",o).css("backgroundColor",e.pack(e.HSLToRGB([e.hsl[0],1,.5]))),"object"==typeof e.callback?(t(e.callback).css({backgroundColor:e.color,color:e.hsl[2]>.5?"#000":"#fff"}),t(e.callback).each(function(){this.value&&this.value!=e.color&&(this.value=e.color)})):"function"==typeof e.callback&&e.callback.call(e,e.color)},e.pack=function(t){var a=Math.round(255*t[0]),r=Math.round(255*t[1]),e=Math.round(255*t[2]);return"#"+(16>a?"0":"")+a.toString(16)+(16>r?"0":"")+r.toString(16)+(16>e?"0":"")+e.toString(16)},e.unpack=function(t){return 7==t.length?[parseInt("0x"+t.substring(1,3))/255,parseInt("0x"+t.substring(3,5))/255,parseInt("0x"+t.substring(5,7))/255]:4==t.length?[parseInt("0x"+t.substring(1,2))/15,parseInt("0x"+t.substring(2,3))/15,parseInt("0x"+t.substring(3,4))/15]:void 0},e.HSLToRGB=function(t){var a,r,e,o,n,s=t[0],u=t[1],i=t[2];return r=.5>=i?i*(u+1):i+u-i*u,a=2*i-r,[this.hueToRGB(a,r,s+.33333),this.hueToRGB(a,r,s),this.hueToRGB(a,r,s-.33333)]},e.hueToRGB=function(t,a,r){return r=0>r?r+1:r>1?r-1:r,1>6*r?t+(a-t)*r*6:1>2*r?a:2>3*r?t+(a-t)*(.66666-r)*6:t},e.RGBToHSL=function(t){var a,r,e,o,n,s,u=t[0],i=t[1],c=t[2];return a=Math.min(u,Math.min(i,c)),r=Math.max(u,Math.max(i,c)),e=r-a,s=(a+r)/2,n=0,s>0&&1>s&&(n=e/(.5>s?2*s:2-2*s)),o=0,e>0&&(r==u&&r!=i&&(o+=(i-c)/e),r==i&&r!=c&&(o+=2+(c-u)/e),r==c&&r!=u&&(o+=4+(u-i)/e),o/=6),[o,n,s]},t("*",o).mousedown(e.mousedown),e.setColor("#000000"),r&&e.linkTo(r)}}(jQuery);