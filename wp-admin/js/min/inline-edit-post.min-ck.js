var inlineEditPost;!function(t){inlineEditPost={init:function(){var e=this,i=t("#inline-edit"),n=t("#bulk-edit");e.type=t("table.widefat").hasClass("pages")?"page":"post",e.what="#post-",i.keyup(function(t){return 27===t.which?inlineEditPost.revert():void 0}),n.keyup(function(t){return 27===t.which?inlineEditPost.revert():void 0}),t("a.cancel",i).click(function(){return inlineEditPost.revert()}),t("a.save",i).click(function(){return inlineEditPost.save(this)}),t("td",i).keydown(function(t){return 13===t.which?inlineEditPost.save(this):void 0}),t("a.cancel",n).click(function(){return inlineEditPost.revert()}),t('#inline-edit .inline-edit-private input[value="private"]').click(function(){var e=t("input.inline-edit-password-input");t(this).prop("checked")?e.val("").prop("disabled",!0):e.prop("disabled",!1)}),t("#the-list").on("click","a.editinline",function(){return inlineEditPost.edit(this),!1}),t("#bulk-title-div").parents("fieldset").after(t("#inline-edit fieldset.inline-edit-categories").clone()).siblings("fieldset:last").prepend(t("#inline-edit label.inline-edit-tags").clone()),t('select[name="_status"] option[value="future"]',n).remove(),t("#doaction, #doaction2").click(function(i){var n=t(this).attr("id").substr(2);"edit"===t('select[name="'+n+'"]').val()?(i.preventDefault(),e.setBulk()):t("form#posts-filter tr.inline-editor").length>0&&e.revert()})},toggle:function(e){var i=this;"none"===t(i.what+i.getId(e)).css("display")?i.revert():i.edit(e)},setBulk:function(){var e,i="",n=this.type,a=!0;return this.revert(),t("#bulk-edit td").attr("colspan",t(".widefat:first thead th:visible").length),t("table.widefat tbody").prepend(t("#bulk-edit")),t("#bulk-edit").addClass("inline-editor").show(),t('tbody th.check-column input[type="checkbox"]').each(function(){if(t(this).prop("checked")){a=!1;var e,n=t(this).val();e=t("#inline_"+n+" .post_title").html()||inlineEditL10n.notitle,i+='<div id="ttle'+n+'"><a id="_'+n+'" class="ntdelbutton" title="'+inlineEditL10n.ntdeltitle+'">X</a>'+e+"</div>"}}),a?this.revert():(t("#bulk-titles").html(i),t("#bulk-titles a").click(function(){var e=t(this).attr("id").substr(1);t('table.widefat input[value="'+e+'"]').prop("checked",!1),t("#ttle"+e).remove()}),"post"===n&&(e="post_tag",t('tr.inline-editor textarea[name="tax_input['+e+']"]').suggest(ajaxurl+"?action=ajax-tag-search&tax="+e,{delay:500,minchars:2,multiple:!0,multipleSep:inlineEditL10n.comma+" "})),void t("html, body").animate({scrollTop:0},"fast"))},edit:function(e){var i,n,a,s,l,o,r,d,p,c,u=this,h=!0;for(u.revert(),"object"==typeof e&&(e=u.getId(e)),i=["post_title","post_name","post_author","_status","jj","mm","aa","hh","mn","ss","post_password","post_format","menu_order"],"page"===u.type&&i.push("post_parent","page_template"),n=t("#inline-edit").clone(!0),t("td",n).attr("colspan",t(".widefat:first thead th:visible").length),t(u.what+e).hasClass("alternate")&&t(n).addClass("alternate"),t(u.what+e).hide().after(n),a=t("#inline_"+e),t(':input[name="post_author"] option[value="'+t(".post_author",a).text()+'"]',n).val()||t(':input[name="post_author"]',n).prepend('<option value="'+t(".post_author",a).text()+'">'+t("#"+u.type+"-"+e+" .author").text()+"</option>"),1===t(':input[name="post_author"] option',n).length&&t("label.inline-edit-author",n).hide(),p=t(".post_format",a).text(),t("option.unsupported",n).each(function(){var e=t(this);e.val()!==p&&e.remove()}),c=0;c<i.length;c++)t(':input[name="'+i[c]+'"]',n).val(t("."+i[c],a).text());if("open"===t(".comment_status",a).text()&&t('input[name="comment_status"]',n).prop("checked",!0),"open"===t(".ping_status",a).text()&&t('input[name="ping_status"]',n).prop("checked",!0),"sticky"===t(".sticky",a).text()&&t('input[name="sticky"]',n).prop("checked",!0),t(".post_category",a).each(function(){var i,a=t(this).text();a&&(i=t(this).attr("id").replace("_"+e,""),t("ul."+i+"-checklist :checkbox",n).val(a.split(",")))}),t(".tags_input",a).each(function(){var i=t(this).text(),a=t(this).attr("id").replace("_"+e,""),s=t("textarea.tax_input_"+a,n),l=inlineEditL10n.comma;i&&(","!==l&&(i=i.replace(/,/g,l)),s.val(i)),s.suggest(ajaxurl+"?action=ajax-tag-search&tax="+a,{delay:500,minchars:2,multiple:!0,multipleSep:inlineEditL10n.comma+" "})}),s=t("._status",a).text(),"future"!==s&&t('select[name="_status"] option[value="future"]',n).remove(),"private"===s&&(t('input[name="keep_private"]',n).prop("checked",!0),t("input.inline-edit-password-input").val("").prop("disabled",!0)),l=t('select[name="post_parent"] option[value="'+e+'"]',n),l.length>0){for(o=l[0].className.split("-")[1],r=l;h&&(r=r.next("option"),0!==r.length);)d=r[0].className.split("-")[1],o>=d?h=!1:(r.remove(),r=l);l.remove()}return t(n).attr("id","edit-"+e).addClass("inline-editor").show(),t(".ptitle",n).focus(),!1},save:function(e){var i,n,a=t(".post_status_page").val()||"";return"object"==typeof e&&(e=this.getId(e)),t("table.widefat .spinner").show(),i={action:"inline-save",post_type:typenow,post_ID:e,edit_date:"true",post_status:a},n=t("#edit-"+e).find(":input").serialize(),i=n+"&"+t.param(i),t.post(ajaxurl,i,function(i){t("table.widefat .spinner").hide(),i?-1!==i.indexOf("<tr")?(t(inlineEditPost.what+e).remove(),t("#edit-"+e).before(i).remove(),t(inlineEditPost.what+e).hide().fadeIn()):(i=i.replace(/<.[^<>]*?>/g,""),t("#edit-"+e+" .inline-edit-save .error").html(i).show()):t("#edit-"+e+" .inline-edit-save .error").html(inlineEditL10n.error).show(),t("#post-"+e).prev().hasClass("alternate")&&t("#post-"+e).removeClass("alternate")},"html"),!1},revert:function(){var e=t("table.widefat tr.inline-editor").attr("id");return e&&(t("table.widefat .spinner").hide(),"bulk-edit"===e?(t("table.widefat #bulk-edit").removeClass("inline-editor").hide(),t("#bulk-titles").html(""),t("#inlineedit").append(t("#bulk-edit"))):(t("#"+e).remove(),e=e.substr(e.lastIndexOf("-")+1),t(this.what+e).show())),!1},getId:function(e){var i=t(e).closest("tr").attr("id"),n=i.split("-");return n[n.length-1]}},t(document).ready(function(){inlineEditPost.init()}),t(document).on("heartbeat-tick.wp-check-locked-posts",function(e,i){var n=i["wp-check-locked-posts"]||{};t("#the-list tr").each(function(e,i){var a,s,l=i.id,o=t(i);n.hasOwnProperty(l)?o.hasClass("wp-locked")||(a=n[l],o.find(".column-title .locked-text").text(a.text),o.find(".check-column checkbox").prop("checked",!1),a.avatar_src&&(s=t('<img class="avatar avatar-18 photo" width="18" height="18" />').attr("src",a.avatar_src.replace(/&amp;/g,"&")),o.find(".column-title .locked-avatar").empty().append(s)),o.addClass("wp-locked")):o.hasClass("wp-locked")&&o.removeClass("wp-locked").delay(1e3).find(".locked-info span").empty()})}).on("heartbeat-send.wp-check-locked-posts",function(e,i){var n=[];t("#the-list tr").each(function(t,e){e.id&&n.push(e.id)}),n.length&&(i["wp-check-locked-posts"]=n)}).ready(function(){"undefined"!=typeof wp&&wp.heartbeat&&wp.heartbeat.interval(15)})}(jQuery);