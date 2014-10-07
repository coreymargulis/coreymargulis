window.wp=window.wp||{},function(e){var t,i;t=wp.themes=wp.themes||{},t.data=_wpThemeSettings,i=t.data.l10n,t.isInstall=!!t.data.settings.isInstall,_.extend(t,{model:{},view:{},routes:{},router:{},template:wp.template}),t.Model=Backbone.Model.extend({initialize:function(){var e;-1!==_.indexOf(t.data.installedThemes,this.get("slug"))&&this.set({installed:!0}),this.set({id:this.get("slug")||this.get("id")}),this.has("sections")&&(e=this.get("sections").description,this.set({description:e}))}}),t.view.Appearance=wp.Backbone.View.extend({el:"#wpbody-content .wrap .theme-browser",window:e(window),page:0,initialize:function(e){_.bindAll(this,"scroller"),this.SearchView=e.SearchView?e.SearchView:t.view.Search,this.window.bind("scroll",_.throttle(this.scroller,300))},render:function(){this.view=new t.view.Themes({collection:this.collection,parent:this}),this.search(),this.view.render(),this.$el.empty().append(this.view.el).addClass("rendered"),this.$el.append('<br class="clear"/>')},searchContainer:e("#wpbody h2:first"),search:function(){var s,n=this;1!==t.data.themes.length&&(s=new this.SearchView({collection:n.collection,parent:this}),s.render(),this.searchContainer.append(e.parseHTML('<label class="screen-reader-text" for="theme-search-input">'+i.search+"</label>")).append(s.el))},scroller:function(){var e=this,t,i;t=this.window.scrollTop()+e.window.height(),i=e.$el.offset().top+e.$el.outerHeight(!1)-e.window.height(),i=Math.round(.9*i),t>i&&this.trigger("theme:scroll")}}),t.Collection=Backbone.Collection.extend({model:t.Model,terms:"",doSearch:function(e){this.terms!==e&&(this.terms=e,this.terms.length>0&&this.search(this.terms),""===this.terms&&this.reset(t.data.themes),this.trigger("update"))},search:function(e){var i,s,n;this.reset(t.data.themes,{silent:!0}),e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.replace(/ /g,")(?=.*"),i=new RegExp("^(?=.*"+e+").+","i"),s=this.filter(function(t){return n=_.union(t.get("name"),t.get("id"),t.get("description"),t.get("author"),t.get("tags")),i.test(t.get("author"))&&e.length>2&&t.set("displayAuthor",!0),i.test(n)}),this.reset(s)},paginate:function(e){var t=this;return e=e||0,t=_(t.rest(20*e)),t=_(t.first(20))},count:!1,query:function(t){var i=this.queries,s=this,n,r,o;if(this.currentQuery.request=t,n=_.find(i,function(e){return _.isEqual(e.request,t)}),r=_.has(t,"page"),r||(this.currentQuery.page=1),n||r){if(r)return this.apiCall(t,r).done(function(e){s.add(e.themes),s.trigger("query:success"),s.loadingThemes=!1}).fail(function(){s.trigger("query:fail")});0===n.themes.length?s.trigger("query:empty"):e("body").removeClass("no-results"),_.isNumber(n.total)&&(this.count=n.total),this.reset(n.themes),n.total||(this.count=this.length),this.trigger("update"),this.trigger("query:success",this.count)}else n=this.apiCall(t).done(function(e){e.themes&&(s.reset(e.themes),o=e.info.results,i.push({themes:e.themes,request:t,total:o})),s.trigger("update"),s.trigger("query:success",o),e.themes&&0===e.themes.length&&s.trigger("query:empty")}).fail(function(){s.trigger("query:fail")})},queries:[],currentQuery:{page:1,request:{}},apiCall:function(t,i){return wp.ajax.send("query-themes",{data:{request:_.extend({per_page:100,fields:{description:!0,tested:!0,requires:!0,rating:!0,downloaded:!0,downloadLink:!0,last_updated:!0,homepage:!0,num_ratings:!0}},t)},beforeSend:function(){i||e("body").addClass("loading-themes").removeClass("no-results")}})},loadingThemes:!1}),t.view.Theme=wp.Backbone.View.extend({className:"theme",state:"grid",html:t.template("theme"),events:{click:t.isInstall?"preview":"expand","click .preview":"preview",keydown:t.isInstall?"preview":"expand",touchend:t.isInstall?"preview":"expand",keyup:"addFocus",touchmove:"preventExpand"},touchDrag:!1,render:function(){var e=this.model.toJSON();this.$el.html(this.html(e)).attr({tabindex:0,"aria-describedby":e.id+"-action "+e.id+"-name"}),this.activeTheme(),this.model.get("displayAuthor")&&this.$el.addClass("display-author"),this.model.get("installed")&&this.$el.addClass("is-installed")},activeTheme:function(){this.model.get("active")&&this.$el.addClass("active")},addFocus:function(){var t=e(":focus").hasClass("theme")?e(":focus"):e(":focus").parents(".theme");e(".theme.focus").removeClass("focus"),t.addClass("focus")},expand:function(i){var s=this;return i=i||window.event,"keydown"!==i.type||13===i.which||32===i.which?this.touchDrag===!0?this.touchDrag=!1:void(e(i.target).is(".theme-actions a")||(t.focusedTheme=this.$el,this.trigger("theme:expand",s.model.cid))):void 0},preventExpand:function(){this.touchDrag=!0},preview:function(i){var s=this,n,r;return this.touchDrag===!0?this.touchDrag=!1:void(e(i.target).hasClass("button-primary")||("keydown"!==i.type||13===i.which||32===i.which)&&("keydown"===i.type&&13!==i.which&&e(":focus").hasClass("button")||(i.preventDefault(),i=i||window.event,t.focusedTheme=this.$el,r=new t.view.Preview({model:this.model}),r.render(),this.setNavButtonsState(),1===this.model.collection.length?r.$el.addClass("no-navigation"):r.$el.removeClass("no-navigation"),e("div.wrap").append(r.el),this.listenTo(r,"theme:next",function(){return n=s.model,_.isUndefined(s.current)||(n=s.current),s.current=s.model.collection.at(s.model.collection.indexOf(n)+1),_.isUndefined(s.current)?(s.options.parent.parent.trigger("theme:end"),s.current=n):(r=new t.view.Preview({model:s.current}),r.render(),this.setNavButtonsState(),e("div.wrap").append(r.el),void e(".next-theme").focus())}).listenTo(r,"theme:previous",function(){n=s.model,0!==s.model.collection.indexOf(s.current)&&(_.isUndefined(s.current)||(n=s.current),s.current=s.model.collection.at(s.model.collection.indexOf(n)-1),_.isUndefined(s.current)||(r=new t.view.Preview({model:s.current}),r.render(),this.setNavButtonsState(),e("div.wrap").append(r.el),e(".previous-theme").focus()))}),this.listenTo(r,"preview:close",function(){s.current=s.model}))))},setNavButtonsState:function(){var t=e(".theme-install-overlay"),i=_.isUndefined(this.current)?this.model:this.current;0===this.model.collection.indexOf(i)&&t.find(".previous-theme").addClass("disabled"),_.isUndefined(this.model.collection.at(this.model.collection.indexOf(i)+1))&&t.find(".next-theme").addClass("disabled")}}),t.view.Details=wp.Backbone.View.extend({className:"theme-overlay",events:{click:"collapse","click .delete-theme":"deleteTheme","click .left":"previousTheme","click .right":"nextTheme"},html:t.template("theme-single"),render:function(){var e=this.model.toJSON();this.$el.html(this.html(e)),this.activeTheme(),this.navigation(),this.screenshotCheck(this.$el),this.containFocus(this.$el)},activeTheme:function(){this.$el.toggleClass("active",this.model.get("active"))},containFocus:function(t){var i;_.delay(function(){e(".theme-wrap a.button-primary:visible").focus()},500),t.on("keydown.wp-themes",function(s){9===s.which&&(i=e(s.target),i.is("button.left")&&s.shiftKey?(t.find(".theme-actions a:last-child").focus(),s.preventDefault()):i.is(".theme-actions a:last-child")&&(t.find("button.left").focus(),s.preventDefault()))})},collapse:function(i){var s=this,n;i=i||window.event,1!==t.data.themes.length&&(e(i.target).is(".theme-backdrop")||e(i.target).is(".close")||27===i.keyCode)&&(e("body").addClass("closing-overlay"),this.$el.fadeOut(130,function(){e("body").removeClass("closing-overlay"),s.closeOverlay(),n=document.body.scrollTop,t.router.navigate(t.router.baseUrl("")),document.body.scrollTop=n,t.focusedTheme&&t.focusedTheme.focus()}))},navigation:function(){this.model.cid===this.model.collection.at(0).cid&&this.$el.find(".left").addClass("disabled"),this.model.cid===this.model.collection.at(this.model.collection.length-1).cid&&this.$el.find(".right").addClass("disabled")},closeOverlay:function(){e("body").removeClass("theme-overlay-open"),this.remove(),this.unbind(),this.trigger("theme:collapse")},deleteTheme:function(){return confirm(t.data.settings.confirmDelete)},nextTheme:function(){var e=this;return e.trigger("theme:next",e.model.cid),!1},previousTheme:function(){var e=this;return e.trigger("theme:previous",e.model.cid),!1},screenshotCheck:function(e){var t,i;t=e.find(".screenshot img"),i=new Image,i.src=t.attr("src"),i.width&&i.width<=300&&e.addClass("small-screenshot")}}),t.view.Preview=t.view.Details.extend({className:"wp-full-overlay expanded",el:".theme-install-overlay",events:{"click .close-full-overlay":"close","click .collapse-sidebar":"collapse","click .previous-theme":"previousTheme","click .next-theme":"nextTheme",keyup:"keyEvent"},html:t.template("theme-preview"),render:function(){var i=this.model.toJSON();this.$el.html(this.html(i)),t.router.navigate(t.router.baseUrl("?theme="+this.model.get("id")),{replace:!0}),this.$el.fadeIn(200,function(){e("body").addClass("theme-installer-active full-overlay-active"),e(".close-full-overlay").focus()})},close:function(){return this.$el.fadeOut(200,function(){e("body").removeClass("theme-installer-active full-overlay-active"),t.focusedTheme&&t.focusedTheme.focus()}),t.router.navigate(t.router.baseUrl("")),this.trigger("preview:close"),this.unbind(),!1},collapse:function(){return this.$el.toggleClass("collapsed").toggleClass("expanded"),!1},keyEvent:function(e){27===e.keyCode&&(this.undelegateEvents(),this.close()),39===e.keyCode&&_.once(this.nextTheme()),37===e.keyCode&&this.previousTheme()}}),t.view.Themes=wp.Backbone.View.extend({className:"themes",$overlay:e("div.theme-overlay"),index:0,count:e(".theme-count"),initialize:function(t){var i=this;this.parent=t.parent,this.setView("grid"),i.currentTheme(),this.listenTo(i.collection,"update",function(){i.parent.page=0,i.currentTheme(),i.render(this)}),this.listenTo(i.collection,"query:success",function(e){i.count.text(_.isNumber(e)?e:i.collection.length)}),this.listenTo(i.collection,"query:empty",function(){e("body").addClass("no-results")}),this.listenTo(this.parent,"theme:scroll",function(){i.renderThemes(i.parent.page)}),this.listenTo(this.parent,"theme:close",function(){i.overlay&&i.overlay.closeOverlay()}),e("body").on("keyup",function(e){i.overlay&&(39===e.keyCode&&i.overlay.nextTheme(),37===e.keyCode&&i.overlay.previousTheme(),27===e.keyCode&&i.overlay.collapse(e))})},render:function(){this.$el.html(""),1===t.data.themes.length&&(this.singleTheme=new t.view.Details({model:this.collection.models[0]}),this.singleTheme.render(),this.$el.addClass("single-theme"),this.$el.append(this.singleTheme.el)),this.options.collection.size()>0&&this.renderThemes(this.parent.page),this.count.text(this.collection.count?this.collection.count:this.collection.length)},renderThemes:function(s){var n=this;return n.instance=n.collection.paginate(s),0===n.instance.size()?void this.parent.trigger("theme:end"):(s>=1&&e(".add-new-theme").remove(),n.instance.each(function(e){n.theme=new t.view.Theme({model:e,parent:n}),n.theme.render(),n.$el.append(n.theme.el),n.listenTo(n.theme,"theme:expand",n.expand,n)}),t.data.settings.canInstall&&this.$el.append('<div class="theme add-new-theme"><a href="'+t.data.settings.installURI+'"><div class="theme-screenshot"><span></span></div><h3 class="theme-name">'+i.addNew+"</h3></a></div>"),void this.parent.page++)},currentTheme:function(){var e=this,t;t=e.collection.findWhere({active:!0}),t&&(e.collection.remove(t),e.collection.add(t,{at:0}))},setView:function(e){return e},expand:function(i){var s=this;this.model=s.collection.get(i),t.router.navigate(t.router.baseUrl("?theme="+this.model.id)),this.setView("detail"),e("body").addClass("theme-overlay-open"),this.overlay=new t.view.Details({model:s.model}),this.overlay.render(),this.$overlay.html(this.overlay.el),this.listenTo(this.overlay,"theme:next",function(){s.next([s.model.cid])}).listenTo(this.overlay,"theme:previous",function(){s.previous([s.model.cid])})},next:function(e){var t=this,i,s;i=t.collection.get(e[0]),s=t.collection.at(t.collection.indexOf(i)+1),void 0!==s&&(this.overlay.closeOverlay(),t.theme.trigger("theme:expand",s.cid))},previous:function(e){var t=this,i,s;i=t.collection.get(e[0]),s=t.collection.at(t.collection.indexOf(i)-1),void 0!==s&&(this.overlay.closeOverlay(),t.theme.trigger("theme:expand",s.cid))}}),t.view.Search=wp.Backbone.View.extend({tagName:"input",className:"theme-search",id:"theme-search-input",searching:!1,attributes:{placeholder:i.searchPlaceholder,type:"search"},events:{input:"search",keyup:"search",change:"search",search:"search",blur:"pushState"},initialize:function(e){this.parent=e.parent,this.listenTo(this.parent,"theme:close",function(){this.searching=!1})},search:function(e){var i={};"keyup"===e.type&&27===e.which&&(e.target.value=""),13===e.which&&this.$el.trigger("blur"),this.collection.doSearch(e.target.value),this.searching&&13!==e.which?i.replace=!0:this.searching=!0,e.target.value?t.router.navigate(t.router.baseUrl("?search="+e.target.value),i):t.router.navigate(t.router.baseUrl(""))},pushState:function(e){var i=t.router.baseUrl("");e.target.value&&(i=t.router.baseUrl("?search="+e.target.value)),this.searching=!1,t.router.navigate(i)}}),t.Router=Backbone.Router.extend({routes:{"themes.php?theme=:slug":"theme","themes.php?search=:query":"search","themes.php?s=:query":"search","themes.php":"themes","":"themes"},baseUrl:function(e){return"themes.php"+e},search:function(t){e(".theme-search").val(t)},themes:function(){e(".theme-search").val("")},navigate:function(){Backbone.history._hasPushState&&Backbone.Router.prototype.navigate.apply(this,arguments)}}),t.Run={init:function(){this.themes=new t.Collection(t.data.themes),this.view=new t.view.Appearance({collection:this.themes}),this.render()},render:function(){this.view.render(),this.routes(),Backbone.history.start({root:t.data.settings.adminUrl,pushState:!0,hashChange:!1})},routes:function(){var i=this;t.router=new t.Router,t.router.on("route:theme",function(e){i.view.view.expand(e)}),t.router.on("route:themes",function(){i.themes.doSearch(""),i.view.trigger("theme:close")}),t.router.on("route:search",function(){e(".theme-search").trigger("keyup")}),this.extraRoutes()},extraRoutes:function(){return!1}},t.view.InstallerSearch=t.view.Search.extend({events:{keyup:"search"},search:function(e){("keyup"!==e.type||9!==e.which&&16!==e.which)&&(this.collection=this.options.parent.view.collection,"keyup"===e.type&&27===e.which&&(e.target.value=""),_.debounce(_.bind(this.doSearch,this),300)(e.target.value))},doSearch:_.debounce(function(i){var s={};s.search=i,"author:"===i.substring(0,7)&&(s.search="",s.author=i.slice(7)),"tag:"===i.substring(0,4)&&(s.search="",s.tag=[i.slice(4)]),e(".theme-section.current").removeClass("current"),e("body").removeClass("more-filters-opened filters-applied"),this.collection.query(s),t.router.navigate(t.router.baseUrl("?search="+i),{replace:!0})},300)}),t.view.Installer=t.view.Appearance.extend({el:"#wpbody-content .wrap",events:{"click .theme-section":"onSort","click .theme-filter":"onFilter","click .more-filters":"moreFilters","click .apply-filters":"applyFilters",'click [type="checkbox"]':"addFilter","click .clear-filters":"clearFilters","click .feature-name":"filterSection","click .filtering-by a":"backToFilters"},render:function(){var s=this;this.search(),this.uploader(),this.collection=new t.Collection,this.listenTo(this,"theme:end",function(){s.collection.loadingThemes||(s.collection.loadingThemes=!0,s.collection.currentQuery.page++,_.extend(s.collection.currentQuery.request,{page:s.collection.currentQuery.page}),s.collection.query(s.collection.currentQuery.request))}),this.listenTo(this.collection,"query:success",function(){e("body").removeClass("loading-themes"),e(".theme-browser").find("div.error").remove()}),this.listenTo(this.collection,"query:fail",function(){e("body").removeClass("loading-themes"),e(".theme-browser").find("div.error").remove(),e(".theme-browser").find("div.themes").before('<div class="error"><p>'+i.error+"</p></div>")}),this.view&&this.view.remove(),this.view=new t.view.Themes({collection:this.collection,parent:this}),this.page=0,this.$el.find(".themes").remove(),this.view.render(),this.$el.find(".theme-browser").append(this.view.el).addClass("rendered")},browse:function(e){this.collection.query({browse:e})},onSort:function(i){var s=e(i.target),n=s.data("sort");i.preventDefault(),e("body").removeClass("filters-applied more-filters-opened"),s.hasClass(this.activeClass)||(this.sort(n),t.router.navigate(t.router.baseUrl("?browse="+n)))},sort:function(t){this.clearSearch(),e(".theme-section, .theme-filter").removeClass(this.activeClass),e('[data-sort="'+t+'"]').addClass(this.activeClass),this.browse(t)},onFilter:function(t){var i,s=e(t.target),n=s.data("filter");s.hasClass(this.activeClass)||(e(".theme-filter, .theme-section").removeClass(this.activeClass),s.addClass(this.activeClass),n&&(n=_.union(n,this.filtersChecked()),i={tag:[n]},this.collection.query(i)))},addFilter:function(){this.filtersChecked()},applyFilters:function(t){var i,s=this.filtersChecked(),n={tag:s},r=e(".filtering-by .tags");t&&t.preventDefault(),e("body").addClass("filters-applied"),e(".theme-section.current").removeClass("current"),r.empty(),_.each(s,function(t){i=e('label[for="feature-id-'+t+'"]').text(),r.append('<span class="tag">'+i+"</span>")}),this.collection.query(n)},filtersChecked:function(){var t=e(".feature-group").find(":checkbox"),i=[];return _.each(t.filter(":checked"),function(t){i.push(e(t).prop("value"))}),0===i.length?(e(".apply-filters").find("span").text(""),e(".clear-filters").hide(),e("body").removeClass("filters-applied"),!1):(e(".apply-filters").find("span").text(i.length),e(".clear-filters").css("display","inline-block"),i)},activeClass:"current",searchContainer:e(".theme-navigation"),uploader:function(){e("a.upload").on("click",function(i){i.preventDefault(),e("body").addClass("show-upload-theme"),t.router.navigate(t.router.baseUrl("?upload"),{replace:!0})}),e("a.browse-themes").on("click",function(i){i.preventDefault(),e("body").removeClass("show-upload-theme"),t.router.navigate(t.router.baseUrl(""),{replace:!0})})},moreFilters:function(i){return i.preventDefault(),e("body").hasClass("filters-applied")?this.backToFilters():e("body").hasClass("more-filters-opened")&&this.filtersChecked()?this.addFilter():(this.clearSearch(),t.router.navigate(t.router.baseUrl("")),void e("body").toggleClass("more-filters-opened"))},filterSection:function(){e(event.target).parent().toggleClass("open")},clearFilters:function(t){var i=e(".feature-group").find(":checkbox"),s=this;t.preventDefault(),_.each(i.filter(":checked"),function(t){return e(t).prop("checked",!1),s.filtersChecked()})},backToFilters:function(t){t&&t.preventDefault(),e("body").removeClass("filters-applied")},clearSearch:function(){e("#theme-search-input").val("")}}),t.InstallerRouter=Backbone.Router.extend({routes:{"theme-install.php?theme=:slug":"preview","theme-install.php?browse=:sort":"sort","theme-install.php?upload":"upload","theme-install.php?search=:query":"search","theme-install.php":"sort"},baseUrl:function(e){return"theme-install.php"+e},search:function(t){e(".theme-search").val(t)},navigate:function(){Backbone.history._hasPushState&&Backbone.Router.prototype.navigate.apply(this,arguments)}}),t.RunInstaller={init:function(){this.view=new t.view.Installer({section:"featured",SearchView:t.view.InstallerSearch}),this.render()},render:function(){this.view.render(),this.routes(),Backbone.history.start({root:t.data.settings.adminUrl,pushState:!0,hashChange:!1})},routes:function(){var i=this,s={};t.router=new t.InstallerRouter,t.router.on("route:preview",function(e){s.theme=e,i.view.collection.query(s)}),t.router.on("route:sort",function(e){e||(e="featured"),i.view.sort(e),i.view.trigger("theme:close")}),t.router.on("route:upload",function(){e("a.upload").trigger("click")}),t.router.on("route:search",function(){e(".theme-search").focus().trigger("keyup")}),this.extraRoutes()},extraRoutes:function(){return!1}},e(document).ready(function(){t.isInstall?t.RunInstaller.init():t.Run.init()})}(jQuery);var tb_position;jQuery(document).ready(function(e){tb_position=function(){var t=e("#TB_window"),i=e(window).width(),s=e(window).height(),n=i>1040?1040:i,r=0;e("#wpadminbar").length&&(r=parseInt(e("#wpadminbar").css("height"),10)),t.size()&&(t.width(n-50).height(s-45-r),e("#TB_iframeContent").width(n-50).height(s-75-r),t.css({"margin-left":"-"+parseInt((n-50)/2,10)+"px"}),"undefined"!=typeof document.body.style.maxWidth&&t.css({top:20+r+"px","margin-top":"0"}))},e(window).resize(function(){tb_position()})});