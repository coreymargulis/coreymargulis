window.wp=window.wp||{},function(e,t){t.updates={},t.updates.decrementCount=function(t){var n,a,u;if(u=e("#wp-admin-bar-updates .ab-label"),n=u.text(),n=parseInt(n,10)-1,!(0>n)&&(e("#wp-admin-bar-updates .ab-item").removeAttr("title"),u.text(n),u=e('a[href="update-core.php"] .update-plugins'),u.each(function(e,t){t.className=t.className.replace(/count-\d+/,"count-"+n)}),u.removeAttr("title"),u.find(".update-count").text(n),"plugin"===t)){if(u=e("#menu-plugins"),a=u.find(".plugin-count").eq(0).text(),a=parseInt(a,10)-1,0>n)return;u.find(".plugin-count").text(a),u.find(".update-plugins").each(function(e,t){t.className=t.className.replace(/count-\d+/,"count-"+a)})}},e(window).on("message",function(n){var a=n.originalEvent,u,o=document.location,i=o.protocol+"//"+o.hostname;a.origin===i&&(u=e.parseJSON(a.data),"undefined"!=typeof u.action&&"decrementUpdateCount"===u.action&&t.updates.decrementCount(u.upgradeType))})}(jQuery,window.wp);