!function(){function isFunction(e){return"[object Function]"===Object.prototype.toString.call(e)}function define(e,t,o){if(modules[e])throw new Error("Module "+e+" has been defined already.");isFunction(t)&&(o=t),modules[e]={factory:o,inited:!1,exports:null}}function run(e){var t,o,n,i;if(t=modules[e],o={},n={exports:{}},!isFunction(t.factory))throw new Error("Module "+e+" has no factory.");if(i=t.factory.call(void 0,require,o,n),void 0!==i)t.exports=i;else if(n.hasOwnProperty("exports")&&"object"==typeof n.exports&&n.exports instanceof Object==!0){var s,a=!1;for(s in n.exports)n.exports.hasOwnProperty(s)&&(a=!0);a===!1?t.exports=o:t.exports=n.exports}else t.exports=n.exports;t.inited=!0}function require(e){var t;if(t=modules[e],!t)throw new Error("Module "+e+" is not defined.");return t.inited===!1&&run(e),t.exports}var modules={};define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/cmt-header.js",function(e,t,o){window.changyan.api.ready(function(t){var o=t.util.jquery,n=(t.util._,t.util.velocityjs);e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/cmt-header.css");var i=t.getBeConfig();t.event.register("cmt-header","jump-kz"),function(){var s="",a=!0;"true"===i.sso&&i.sso_login_new_logo?s=i.sso_login_new_logo:"true"===i.sso&&i.sso_login_logo&&(s=i.sso_login_logo),"true"===i.sso&&"2"===i.sso_type&&(a=!1);var p={login_external_platform:i.login_external_platform.split(","),ssoImg:s,ssoType:a},r={loginBar:p};"cyqE875ep"===i.extensions_key&&(r.personal_page="false");var c=e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/cmt-header.html.js"),d=n.render(c,r);o("#SOHUCS #SOHU_MAIN").append(d);var l=o.browser.version;if("7.0"===l||"8.0"===l){var u=t.getFeConfig("custom_css_type")||t.getBeConfig("custom_css_type");"21"===u||"22"===u||"23"===u?o("#SOHUCS #SOHU_MAIN").css("backgroundColor","#303030"):o("#SOHUCS #SOHU_MAIN").css("backgroundColor","#FFF"),o('div[node-type="head-img-ie-mask"]').css("display","block"),o('div[node-type="user"]').addClass("user-wrap-w-ie"),o('div[node-type="header-login"]').addClass("header-login-ie")}!function(){var e=t.getAppid(),o=t.getUUID(),n=t.getTopicId(),i=t.getCategoryId(),s=t.getConfig("api")+"stat/uvstat?uuid="+o+"&client_id="+e+"&category_id="+i+"&topic_id="+n+"&t="+ +new Date,a=window.document.createElement("img");a.setAttribute("src",s)}()}(),function(){var e=o('span[node-type="participation-wrapper"]');"false"===t.getBeConfig("show_participation")&&e.hide()}(),function(){var e=o('div[node-type="user"]');e.hover(function(){o(this).addClass("user-wrap-e")},function(){o(this).removeClass("user-wrap-e")})}(),function(){var e=o('div[node-type="login-select"]');e.delegate("div.login-wrap-w","click",function(){t.log("cbox-login-click");var e=o(this).attr("label");switch(e){case"":t.login(14);break;case"sohu":t.login(11);break;case"weibo":t.login(2);break;case"qq":t.login(3);break;case"phone":t.login(15);break;default:return}})}(),function(){var e=o('div[node-type="cy-logout-btn"]');e.on("click",function(){t.logout()})}(),function(){var e;o("#SOHUCS").on("click","#jump-to-kz",function(){e&&window.open(e),setTimeout(function(){e=null},1e3)}),t.event.listen("changyan:cmt-header:jump-kz",function(t){e=t,o("#jump-to-kz").trigger("click")})}(),function(){t.event.register("cmt-header","click-avatar"),t.event.register("cmt-header","click-mycyan");var e=o("#SOHUCS #SOHU_MAIN div.module-cmt-header");e.delegate('#SOHUCS #SOHU_MAIN div[node-type="avatar"]',"click",function(e){e.preventDefault();var n="none"!==o('div[node-type="notice-node"]').css("display");n||t.event.trigger("changyan:cmt-header:click-avatar",e),t.getUserInfo(function(e){e&&e.user_id&&t.log("user-avatar-click")})}),e.delegate('#SOHUCS #SOHU_MAIN a[node-type="my-changyan"]',"click",function(e){e.preventDefault(),t.event.trigger("changyan:cmt-header:click-mycyan",e),t.getUserInfo(function(e){e&&e.user_id&&t.log("user-mychangyan-click")})}),e.delegate('div[node-type="header-login"]',"click",function(){t.openLoginDialog()})}(),function(){var e=o('div[node-type="user"]'),n=o('img[node-type="user-head"]'),i=o('span[node-type="user-name"]');t.event.listen("changyan:login",function(){screen.width>=800?t.log("user-login-pc"):t.log("user-login-wap"),t.getUserInfo(function(t){e.show(),o('div[node-type="login-btn"]').hide(),i.text(t.nickname+"："),e.addClass("user-login"),o('div[node-type="block-head-w" ]').addClass("block-head-login"),n.attr("src",t.img_url);var s=parseInt(e.outerWidth(),10),a=parseInt(o('div[node-type="post-wrap-border-t-l"]').outerWidth(),10);o('div[node-type="post-wrap-border-t-r"]').css("marginLeft",a+s+"px")})});var s=function(){var i=o('div[node-type="login-btn"]');t.event.listen("changyan:logout",function(){e.hide(),e.removeClass("user-login"),o('div[node-type="block-head-w" ]').removeClass("block-head-login"),n.attr("src",t.getConfig("protocol")+"assets.changyan.sohu.com/upload/asset/scs/images/pic/pic42_null.gif"),i.show();var s=(parseInt(e.outerWidth(),10),parseInt(o('div[node-type="post-wrap-border-t-l"]').outerWidth(),10));o('div[node-type="post-wrap-border-t-r"]').css("marginLeft",s+"px")})};try{s()}catch(a){}t.getUserInfo(function(t){t&&t.user_id&&(e.show(),o('div[node-type="login-btn"]').hide(),i.text(t.nickname+"："),e.addClass("user-login"),o('div[node-type="block-head-w" ]').addClass("block-head-login"),n.attr("src",t.img_url))})}(),function(){var n=o('div[node-type="user"]'),i=function(){t.getUserInfo(function(n){var i=e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/change-password.js");n&&15===n.platform_id&&o.ajax({type:"GET",url:t.getConfig("api")+"api/2/user/get_phone",cache:!1,dataType:"jsonp",success:function(e){0===e.error_code?i.menuItem(e.error_msg):i.menuItem("手机号获取失败")}})})};i(),t.event.listen("changyan:login",function(){i()}),t.event.listen("changyan:logout",function(){n.find('a[node-type="change-password"]').remove()})}(),e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/piece.js"),function(){var e=o(window),n=o("#SOHUCS #SOHU_MAIN"),i=!1,s=t.getBeConfig();e.on("scroll",function(){var o=parseInt(n.offset().top,10)-parseInt(e.height(),10)+80;e.scrollTop()>=o&&(i||e.scrollTop()>=o&&(t.log("cy-real-view"),s.pc_skin&&window.screen.width>600&&t.log("cy-skin-real-pv-pc"),i=!0))}),e.trigger("scroll")}(),function(){var e=t.getBeConfig();"true"==e.pc_collection_open&&o('div[node-type="cy-collection-btn"]').css("display","block"),o.ajax({url:"https://changyan.sohu.com/api/3/user/collection",dataType:"jsonp",data:{topicId:t.getTopicId(),type:3},success:function(e){if(e.collectioned===!0){var t=o('div[node-type="cy-collection-btn"]');t.addClass("collected"),t.find("span").text("已收藏")}},error:function(){}}),o("#SOHUCS #SOHU_MAIN").on("click",'div[node-type="cy-collection-btn"]',function(){var e=this;t.getUserInfo(function(n){if(n.error_code)t.openLoginDialog();else{if(o(e).hasClass("collected"))return;o.ajax({url:"https://changyan.sohu.com/api/3/user/collection",dataType:"jsonp",data:{topicId:t.getTopicId(),type:1},success:function(n){0===n.error_code&&(t.log("collect-article"),o(e).addClass("collected"),o(e).find("span").text("已收藏"))},error:function(){}})}})})}(),function(){var t=o('div[node-type="block-head-w"]'),n=e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/lib/hot-words.js");n.init(t)}(),function(){var e=t.getBeConfig();if(e.pc_skin&&"0"!==e.pc_skin&&window.screen.width>600){var n=o('img[node-type="header-skin"]');n.attr("src",e.pc_skin),n.css({display:"block"})}}()})}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/cmt-header.css",function(e,t,o){var n=decodeURIComponent("%23SOHUCS%20%23SOHU_MAIN%20.cy-hidden%7Bdisplay%3Anone%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%7Bposition%3Arelative%3Bwidth%3A100%25%3Bheight%3A60px%3Bz-index%3A10%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20div.cy-skin%7Bfloat%3Aright%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%7Bwidth%3A42px%3Bheight%3A42px%3Bposition%3Aabsolute%3Bleft%3A9px%3Btop%3A22px%3Bdisplay%3Anone%3Bz-index%3A11%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%20.cy-logout-btn%7Bwidth%3A42px%3Bheight%3A42px%3Bposition%3Aabsolute%3Btop%3A0%3Bleft%3A0%3Bfont-size%3A14px%3Bcolor%3A%234398ed%3Btext-align%3Acenter%3Bline-height%3A42px%3Bfont-family%3A%22Microsoft%20YaHei%22%3Bdisplay%3Anone%3Bcursor%3Apointer%3Bbackground-image%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F082%2Fimages%2Flogout-mask.png)%3Bbackground-repeat%3Ano-repeat%3Bbackground-position%3Acenter%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%3Ahover%20.cy-logout-btn%7Bdisplay%3Ablock%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-ie-mask%7Bwidth%3A42px%3Bheight%3A46px%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F082%2Fimages%2Fphoto-mask.png)%3Bposition%3Aabsolute%3Bz-index%3A2%3Btop%3A0%3Bleft%3A0%3Bdisplay%3Anone%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-login%20.head-img-w%7Bdisplay%3Ablock%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.head-img-w%20img%7Bborder-radius%3A42px%3Bdisplay%3Ablock%3Bheight%3A42px%3Bwidth%3A42px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.header-login%7Bwidth%3A40px%3Bheight%3A40px%3Bborder-radius%3A42px%3Bborder%3A1px%20solid%20%234398ed%3Bposition%3Aabsolute%3Btop%3A22px%3Bleft%3A9px%3Bfont-size%3A14px%3Bcolor%3A%234398ed%3Btext-align%3Acenter%3Bline-height%3A42px!important%3Bfont-family%3A%22Microsoft%20YaHei%22%3Bcursor%3Apointer%3Bbackground%3A0%200%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.header-login-ie%7Bwidth%3A42px%3Bheight%3A46px%3Bborder%3A0%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F082%2Fimages%2Fphoto-mask.png)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-login%20.header-login%7Bdisplay%3Anone%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.block-head-w%20.header-skin%7Bbottom%3A0%3Bdisplay%3Anone%3Bposition%3Aabsolute%3Bright%3A8px%3Bwidth%3A456px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%20.title-user-w%20.user-wrap-w%7Bposition%3Aabsolute%3Btop%3A52px%3Bleft%3A55px%3Btext-indent%3A11px%3Bz-index%3A10%3Bpadding-right%3A10px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%20.title-user-w%20.user-wrap-w-ie%7Bbackground%3A%23fff%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%20.title-user-w%20.user-wrap-w%20.wrap-name-w%7Bfont-size%3A16px%3Bcolor%3A%234398ed%3Bfont-family%3A%22Microsoft%20YaHei%22%3Bposition%3Arelative%3Bz-index%3A2%3B*text-indent%3A11px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-title-w%7Bposition%3Arelative%3Bz-index%3A12%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-empty-w%20.empty-prompt-w%7Bmargin-top%3A20px%3Bheight%3A30px%3Bbackground%3A%23f0f0f0%3Btext-align%3Acenter%3Bopacity%3A.5%3Bfilter%3Aalpha(opacity%3D50)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-empty-w%20.empty-prompt-w%20.prompt-null-w%7Bline-height%3A30px%3Bfont-size%3A12px%3Bcolor%3A%23999%3Btext-align%3Acenter%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-kuaizhan-w%20.kuaizhan-prompt-w%7Bcursor%3Apointer%3Bdisplay%3Anone%3Bmargin-top%3A20px%3Bheight%3A30px%3Bbackground%3A%23f0f0f0%3Btext-align%3Acenter%3Bopacity%3A.5%3Bfilter%3Aalpha(opacity%3D50)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-comment-kuaizhan-w%20.kuanzhan-prompt-w%20.prompt-text-w%7Bline-height%3A30px%3Bfont-size%3A12px%3Bcolor%3A%23999%3Btext-align%3Acenter%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-close-comment-w%20.close-comment-prompt-w%7Bmargin-top%3A20px%3Bheight%3A30px%3Btext-align%3Acenter%3Bbackground%3A%23fdeced%3Bopacity%3A.5%3Bfilter%3Aalpha(opacity%3D50)%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.section-cbox-w%20.list-close-comment-w%20.close-comment-prompt-w%20.close-comment-prompt%7Bline-height%3A30px%3Btext-align%3Acenter%3Bfont-size%3A12px%3Bcolor%3A%23e74851%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-to-shequ-head%7Bcolor%3A%234398ed%3Bcursor%3Apointer%3Bdisplay%3Anone%3Bfont-size%3A14px%3Bheight%3A36px%3Bline-height%3A36px%3Bmargin%3A24px%2010px%200%2020px%3Bfloat%3Aright%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-avatar-notice-node%7Bbackground%3A%23e74851%3Bborder-radius%3A4px%3Bbox-shadow%3A0%200%203px%203px%20%23fff%3Bcursor%3Apointer%3Bdisplay%3Anone%3Bheight%3A8px%3Bposition%3Aabsolute%3Bright%3A0%3Btop%3A0%3Bwidth%3A8px%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-collection-btn%7Bborder%3A1px%20solid%20%23dfdfdf%3Bborder-radius%3A24px%3Bcolor%3A%23666%3Bcursor%3Apointer%3Bdisplay%3Anone%3Bfont-size%3A16px%3Bheight%3A48px%3Bline-height%3A48px%3Bmargin%3Aauto%3Btext-align%3Acenter%3Bwidth%3A144px%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-collection-btn%20i%7Bdisplay%3Ainline-block%3Bwidth%3A14px%3Bheight%3A14px%3Bmargin-right%3A5px%3Bbackground%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F082%2Fimages%2Fcollect-star.png)%20no-repeat%20center%3Bbackground-size%3A100%25%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-collection-btn.collected%7Bborder%3A1px%20solid%20%234398ed%3Bcolor%3A%234398ed%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-collection-btn.collected%20i%7Bbackground-image%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F082%2Fimages%2Fcollected-star.png)%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-collection-btn%3Ahover%7Bborder%3A1px%20solid%20%234398ed%3Bcolor%3A%234398ed%7D%23SOHUCS%20%23SOHU_MAIN%20.cy-collection-btn%3Ahover%20i%7Bbackground-image%3Aurl(%2F%2Fchangyan.sohu.com%2Fmdevp%2Fextensions%2Fcmt-header%2F082%2Fimages%2Fcollected-star.png)%7D"),i=window.document,s=i.createElement("style");s.id="seaJs-css",s.setAttribute("type","text/css");var a=i.getElementById("seaJs-css");a?(a.textContent+=n,i.all&&(a.styleSheet.cssText+=n)):i.all?(s.styleSheet.cssText=n,i.getElementsByTagName("head").item(0).appendChild(s)):(s.innerHTML=n,i.getElementsByTagName("head").item(0).appendChild(s))}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/cmt-header.html.js",function(e,t,o){"use strict";var n;return n=[],n.push('<div node-type="cy-collection-btn" class="cy-collection-btn"><i></i><span>收藏文章</span></div>'),n.push("<!-- 秒针广告 -->"),n.push('<div id="MZADX_222872"></div>'),n.push('<div class="module-cmt-header">'),n.push('    <div class="cy-hidden">'),n.push('        <button id="jump-to-kz"></button>'),n.push("    </div>"),n.push('    <div class="clear-g section-title-w">'),n.push('        <div class="title-user-w">'),n.push('            <div node-type="user" class="clear-g user-wrap-w">'),n.push('                <span node-type="user-name" class="wrap-name-w"></span>'),n.push("            </div>"),n.push("        </div>"),n.push("    </div>"),n.push('    <div class="section-cbox-w">'),n.push('        <div class="cbox-block-w clear-g">'),n.push('            <div node-type="block-head-w" class="block-head-w">'),n.push('                <div node-type="avatar" class="head-img-w">'),n.push('                    <a href="javascript:void(0);">'),n.push('                        <img node-type="user-head" src="https://changyan.sohu.com/upload/asset/scs/images/pic/pic42_null.gif" width="42" height="42" alt=""/>'),n.push('                        <div node-type="head-img-ie-mask" class="head-img-ie-mask"></div>'),n.push("                    </a>"),n.push('                    <div node-type="notice-node" style="display: none" class="cy-avatar-notice-node"></div>'),n.push("                    #if ($personal_page == 'false')"),n.push('                    <div node-type="cy-logout-btn" class="cy-logout-btn">退出</div>'),n.push("                    #end"),n.push("                </div>"),n.push('                <div node-type="header-login" class="header-login">登录</div>'),n.push('                <!-- <div class="cy-to-shequ-head">'),n.push("                   -     <span>我的社区</span>"),n.push("                   - </div> -->"),n.push('                <img node-type="header-skin" class="header-skin" />'),n.push('                <div node-type="cy-hot-words" class="cy-hot-words"></div>'),n.push("            </div>"),n.push('            <div node-type="login-select" class="block-post-w">'),n.push("                <!-- 放置cbox初始状态 -->"),n.push('                <div node-type="post-default" class="post-default-w">'),n.push('                    <!-- <div class="clear-g default-wrap-w">'),n.push('                        <span node-type="comment-notice" class="wrap-text-f" style="cursor:text">有事没事说两句...</span>'),n.push('                        <button id="testD" class="btn-fw btn-bf ">发布</button>'),n.push("                    </div> -->"),n.push("                </div>"),n.push("                <!-- 放置cbox发布状态 -->"),n.push("                <!-- 提示条 -->"),n.push("                <!-- 零评论提示条 -->"),n.push('                <div class="list-comment-empty-w">'),n.push('                    <div node-type="empty-prompt" class="empty-prompt-w">'),n.push('                        <span class="prompt-null-w">还没有评论，快来抢沙发吧！</span>'),n.push("                    </div>"),n.push("                </div>"),n.push("                <!-- 提示连接到快站社区 -->"),n.push('                <!-- <div class="list-comment-kuaizhan-w">'),n.push('                    <div node-type="kuaizhan-prompt" class="kuaizhan-prompt-w">'),n.push('                        <span class="prompt-text-w">点击查看更多精彩内容</span>'),n.push("                    </div>"),n.push("                </div> -->"),n.push("                <!--关闭评论-->"),n.push('                <div class="list-close-comment-w">'),n.push('                    <div node-type="close-comment-prompt" class="close-comment-prompt-w">'),n.push('                        <span class="close-comment-prompt">该评论已关闭！</span>'),n.push("                    </div>"),n.push("                </div>"),n.push("            </div>"),n.push("        </div>"),n.push("    </div>"),n.push("</div>"),n.join("\n")}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/change-password.js",function(e,t,o){window.changyan.api.ready(function(t){var n=t.util.jquery,i=(t.util._,t.util.velocityjs),s=t.util.dialog,a=e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/change-password.html.js"),p=e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/json2.js"),r={loadJs:function(e,t){var o=document.getElementsByTagName("head")[0]||document.head||document.documentElement,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("charset","UTF-8"),n.setAttribute("src",e),"function"==typeof t&&(window.attachEvent?n.onreadystatechange=function(){var e=n.readyState;"loaded"!==e&&"complete"!==e||(n.onreadystatechange=null,t())}:n.onload=t),o.appendChild(n)},queryObject:function(e){if("object"==typeof e){var t,o="";for(t in e)o+=""===o?t+"="+window.decodeURIComponent(e[t]):"&"+t+"="+window.decodeURIComponent(e[t]);return o}}},c={menuItem:function(e){var t=this,o=n('div[node-type="user"]'),i='<a href="javascript:void(0);" node-type="change-password"><i class="gap-w">修改密码</i></a>';o.find('a[node-type="my-changyan"]').after(i),o.delegate('a[node-type="change-password"]',"click",function(){t.render(e)})},render:function(e){var t=this,o=i.render(a,{phoneNum:e});s.show(o),n('a[node-type="close-dialog"], button[node-type="cancel"]').click(function(){t.close()}),n('button[node-type="change"]').click(function(){t.checkPassword(function(){t.submit(e)})})},close:function(){s.close()},submit:function(e){function o(){n.ajax({cache:!1,url:d,type:"POST",data:l,xhrFields:{withCredentials:!0},success:function(e){0===e.error_code?(alert("修改成功"),i.close()):n('div[node-type="origin-password-prompt"]').css("visibility","visible")}})}var i=this,s=n.browser.version,e=e,a=n('div[node-type="change-password-wrapper"] input[node-type="origin-password"]').val(),c=n('div[node-type="change-password-wrapper"] input[node-type="password"]').val(),d="https://changyan.sohu.com/api/2/user/modify_passwd",l={mobile:e,old_passwd:a,new_passwd:c};"7.0"===s||"8.0"===s||"9.0"===s?window.iframeCrossDomain?window.iframeCrossDomain.post("https:",d,r.queryObject(l),function(e){var e=p.parse(p.parse(e).xhr.responseText);0===e.error_code?(alert("修改成功"),i.close()):n('div[node-type="origin-password-prompt"]').css("visibility","visible")}):r.loadJs(t.getConfig("base")+"mdevp/extensions/cross-domain/003/cross-domain.js",function(){window.iframeCrossDomain.post("https:",d,r.queryObject(l),function(e){var e=p.parse(p.parse(e).xhr.responseText);0===e.error_code?(alert("修改成功"),i.close()):n('div[node-type="origin-password-prompt"]').css("visibility","visible")})}):o()},checkPassword:function(e){var t=n('div[node-type="change-password-wrapper"] input[node-type="origin-password"]'),o=n('div[node-type="change-password-wrapper"] input[node-type="password"]'),i=n('div[node-type="change-password-wrapper"] input[node-type="password-again"]');if(""===t.val())n('div[node-type="origin-password-prompt"]').css("visibility","visible");else{if(o.val().length<6)return n('div[node-type="origin-password-prompt"]').css("visibility","hidden"),n('div[node-type="password-prompt"]').css("visibility","visible"),!1;if(o.val()!==i.val())return n('div[node-type="origin-password-prompt"]').css("visibility","hidden"),n('div[node-type="password-prompt"]').css("visibility","hidden"),n('div[node-type="password-again-prompt"]').css("visibility","visible"),!1}e()}};o.exports=c})}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/change-password.html.js",function(e,t,o){"use strict";var n;return n=[],n.push('<div node-type="change-password-wrapper" class="change-password-wrapper-dw">'),n.push('    <div class="clear-g changyan-change-password-header">'),n.push('        <span class="changyan-change-password-close">'),n.push('            <a href="javascript:void(0)" node-type="close-dialog" class="changyan-change-password-closeIcon"></a>'),n.push("        </span>"),n.push('        <strong class="changyan-change-password-title">修改密码</strong>'),n.push("    </div>"),n.push('    <div class="clear-g cont-form-dw">'),n.push('        <span class="form-name-dw">手机号</span>'),n.push('        <div class="clear-g form-action-dw">'),n.push('            <input type="text" class="action-text-dfw" disabled="disabled" value="$!{phoneNum}" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div class="cont-prompt-dw"><span class="prompt-word-bd">您输入的手机号不正确</span></div>'),n.push('    <div class="clear-g cont-password-dw">'),n.push('        <span class="password-name-dw">原密码</span>'),n.push('        <div class="clear-g password-action-dw">'),n.push('            <input node-type="origin-password" type="password" class="action-text-dfw" value="" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div node-type="origin-password-prompt" class="cont-prompt-dw"><span class="prompt-word-bd">原密码不正确</span></div>'),n.push('    <div class="clear-g cont-password-dw">'),n.push('        <span class="password-name-dw">新密码</span>'),n.push('        <div class="clear-g password-action-dw">'),n.push('            <input node-type="password" type="password" class="action-text-dfw" value="" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div node-type="password-prompt" class="cont-prompt-dw"><span class="prompt-word-bd">密码不能少于6位</span></div>'),n.push('    <div class="clear-g cont-password-dw">'),n.push('        <span class="password-name-dw">确认密码</span>'),n.push('        <div class="clear-g password-action-dw">'),n.push('            <input node-type="password-again" type="password" class="action-text-dfw" value="" name="">'),n.push("        </div>"),n.push("    </div>"),n.push('    <div node-type="password-again-prompt" class="cont-prompt-dw"><span class="prompt-word-bd">密码前后输入不一致</span></div>'),n.push('    <div class="cont-btn-dw">'),n.push('        <a href="javascript:void(0)"><button node-type="change" class="btn-dfw btn-bdf"></button></a>&nbsp;<a href="javascript:void(0)"><button node-type="cancel" class="btn-dfw btn-cancel"></button></a>'),n.push("    </div>"),n.push("</div>"),n.join("\n")}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/json2.js",function(require,exports,module){var JSON;JSON||(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var o,n,i,s,a,p=gap,r=t[e];switch(r&&"object"==typeof r&&"function"==typeof r.toJSON&&(r=r.toJSON(e)),"function"==typeof rep&&(r=rep.call(t,e,r)),typeof r){case"string":return quote(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(r)){for(s=r.length,o=0;s>o;o+=1)a[o]=str(o,r)||"null";return i=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+p+"]":"["+a.join(",")+"]",gap=p,i}if(rep&&"object"==typeof rep)for(s=rep.length,o=0;s>o;o+=1)"string"==typeof rep[o]&&(n=rep[o],i=str(n,r),i&&a.push(quote(n)+(gap?": ":":")+i));else for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i=str(n,r),i&&a.push(quote(n)+(gap?": ":":")+i));return i=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+p+"}":"{"+a.join(",")+"}",gap=p,i}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,o){var n;if(gap="",indent="","number"==typeof o)for(n=0;o>n;n+=1)indent+=" ";else"string"==typeof o&&(indent=o);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var o,n,i=e[t];if(i&&"object"==typeof i)for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n=walk(i,o),void 0!==n?i[o]=n:delete i[o]);return reviver.call(e,t,i)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),module.exports=JSON}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/piece.js",function(e,t,o){window.changyan.api.ready(function(e){var t=e.util.jquery,o=t("#SOHUCS #SOHU_MAIN div.module-cmt-header");o.find('span[node-type="comment-notice"]').html(e.getBeConfig("comment_notice")),o.find('div[node-type="join-wrap"] .wrap-name-w').html(e.getBeConfig("cyan_title")),e.getCommentNum()||0===e.getIsvAuditMode()?o.find('div[node-type="empty-prompt"]').remove():1!=e.getBeConfig("forum_redirect_open")&&2!=e.getBeConfig("forum_redirect_open")||o.find('div[node-type="empty-prompt"]').remove(),3!==e.getCommentMode()&&0!==e.getIsvAuditMode()&&o.find('div[node-type="close-comment-prompt"]').remove(),o.find('em[node-type="participation-number"]').html(e.getParticipationNum()),o.find('em[node-type="comment-number"]').html(e.getCommentNum()),e.getBeConfig("show_participation")||o.find('em[node-type="participation-number"]').parent().remove();var n=e.event.register("cmt-header","box-click");o.find('span[node-type="comment-notice"]').click(function(t){e.event.trigger(n,t)}),e.event.listen("changyan:submit",function(t){var n=o.find('em[node-type="comment-number"]'),i=o.find('em[node-type="participation-number"]');n.html(e.getCommentNum()),i.html(e.getParticipationNum())}),e.event.listen("changyan:submit",function(e){var t=o.find('div[node-type="empty-prompt"]');t.hide()})})}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/lib/hot-words.js",function(e,t,o){window.changyan.api.ready(function(t){var n=t.util.jquery,i=(t.util._,t.util.velocityjs);e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/lib/hot-words.css");var s={init:function(e){var o=t.getBeConfig(),i=parseInt(o.force_promotion);if(1&i){var s=n("#SOHUCS");if(s.width()<500)return;this.renderHtml(e)}},getData:function(e){n.ajax({cache:!1,dataType:"jsonp",type:"GET",url:t.getConfig("protocol")+"changyan.sohu.com/api/labs/mp/load",data:{client_id:t.getAppid()},success:function(t){t&&t.slideNews&&0!=t.slideNews.length&&e(t.slideNews)}})},renderHtml:function(o){var s=this;s.getData(function(a){var p=e("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/lib/hot-words.html.js"),r=i.render(p,{hotWords:a}),c=n(r);o.find('div[node-type="cy-hot-words"]').append(c),s.wordsScroll(o),c.on("click",'div[node-type="cy-hot-words-body"] span',function(){t.log("redirect_sohu_header_click")}),t.log("redirect_sohu_header_show")})},wordsScroll:function(e){function t(){window.setTimeout(function(){o.animate({top:n+"px"},600,function(){setTimeout(function(){o.css("top","0px"),o.append(o.children().first())},1e3)}),t()},4e3)}var o=e.find('div[node-type="cy-hot-words-body"]'),n=-16;t()}};o.exports=s})}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/lib/hot-words.css",function(e,t,o){var n=decodeURIComponent("%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words%7Bposition%3Aabsolute%3Bright%3A0%3Bbottom%3A5px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words-container%7Boverflow%3Ahidden%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words-container%3Aafter%7Bclear%3Aboth%3Bcontent%3A%22%22%3Bdisplay%3Ablock%3Bheight%3A0%3Bvisibility%3Ahidden%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words-tag%7Bborder%3A1px%20solid%20%23f44%3Bborder-radius%3A2px%3Bbox-sizing%3Aborder-box%3Bcolor%3A%23f44%3Bfloat%3Aleft%3Bfont-size%3A12px%3Bheight%3A16px%3Bline-height%3A14px%3Btext-align%3Acenter%3Bwidth%3A28px%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words-body%7Bfloat%3Aleft%3Bwidth%3A250px%3Bheight%3A16px%3Bmargin-left%3A8px%3Bposition%3Arelative%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words-body%20span%7Bdisplay%3Ablock%3Bline-height%3A16px%3Bheight%3A16px%3Btext-overflow%3Aellipsis%3Bwidth%3A100%25%3Boverflow%3Ahidden%3Bwhite-space%3Anowrap%7D%23SOHUCS%20%23SOHU_MAIN%20.module-cmt-header%20.cy-hot-words-body%20a%7Bcolor%3A%23333%3Bfont-size%3A14px%3Bletter-spacing%3A.5px%3Btext-decoration%3Aunderline%7D"),i=window.document,s=i.createElement("style");s.id="seaJs-css",s.setAttribute("type","text/css");var a=i.getElementById("seaJs-css");a?(a.textContent+=n,i.all&&(a.styleSheet.cssText+=n)):i.all?(s.styleSheet.cssText=n,i.getElementsByTagName("head").item(0).appendChild(s)):(s.innerHTML=n,i.getElementsByTagName("head").item(0).appendChild(s))}),define("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/lib/hot-words.html.js",function(e,t,o){"use strict";var n;return n=[],n.push('<div class="cy-hot-words-container">'),
n.push('  <div class="cy-hot-words-tag">热门</div>'),n.push('  <div node-type="cy-hot-words-body" class="cy-hot-words-body">'),n.push("    #foreach ($item in $hotWords)"),n.push('      <span><a target="_blank" href="$!{item.url}">$!{item.title}</a></span>'),n.push("    #end"),n.push("  </div>"),n.push("</div>"),n.join("\n")}),run("/opt/apps_install/mdevp/mdevp/cache/www/cmt-header/cmt-header.js")}();