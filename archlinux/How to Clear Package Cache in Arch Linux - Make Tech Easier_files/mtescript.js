function is_valid_email(e){return new RegExp(/^([\w\.\+\-]+)@([\w\-]+)((\.(\w){2,10})+)$/i).test(e)}!function(i){if((i(".noclickthrough").on("click",function(e){e.preventDefault()}),!mte.preview)&&1==Math.floor(10*Math.random()+1)){var r={action:"mte_count_postview",nonce:mte.pv_nonce,post_id:mte.id};i.post(mte.ajaxurl,r,function(e){})}i('[data-toggle="dropdown"]').on("click touchstart",function(e){e.preventDefault();var t=i(this).parent();t.hasClass("open")?(t.removeClass("open"),i(this).attr("aria-expanded","false"),t.trigger("closed_dropdown")):(i(".dropdown.open > a").attr("aria-expanded","false"),i(".dropdown.open").removeClass("open"),t.addClass("open"),i(this).attr("aria-expanded","true"),t.trigger("shown_dropdown"))}),i(document).on("click touchstart",function(e){i(e.target).closest(".dropdown.open").length||(i(".dropdown.open > a").attr("aria-expanded","false"),i(".dropdown.open").removeClass("open"))}),i(window).scroll(function(){var e=i("#backtop");150<i(window).scrollTop()?e.addClass("shown"):e.removeClass("shown")}),i(".backtop").click(function(e){e.preventDefault(),i("body,html").animate({scrollTop:0},800)}),i("#menu-item-dropdown-search").click(function(){i(".search-field").focus()}),i(document).on("click",".postvote",function(){var e=i(this).data("vote"),t=i(".postvote_wrap");t.html('<div class="loading" style="width:100%;"><i class="icon-spinner icon-large"></i></div>'),i.post(mte.ajaxurl,{action:"mte_post_vote",id:mte.id,vote:e},function(e){t.html(e)})}),i(".newsub-form").submit(function(e){e.preventDefault();var t=i(this),a=t.find(".submitbtn");a.html('<i class="icon-spinner"></i>'),a.attr("disabled","disabled");var s=i(this).find(".newsub-status"),n=!0,o=i(this).find(".newsub-email");is_valid_email(o.val())||(n=!1,a.text("Subscribe Now"),a.removeAttr("disabled"),s.text("Please enter a valid email"),o.focus()),n&&(r=i(this).serialize(),i.ajax({dataType:"json",url:mte.ajaxurl,type:"post",data:r,success:function(e){e.error?(a.text("Subscribe"),a.removeAttr("disabled"),s.text(e.error.message)):e.success&&(t.closest(".content").html(e.success.message),e.success.redirect&&(window.location=e.success.redirect))}}))}),i("#updatesub-submit").click(function(e){e.preventDefault(),jQuery(".updatesub-status").html('<i class="icon-spinner"></i> Updating...'),i(this).attr("disabled","disabled"),r=jQuery("#updatesub-form").serialize(),jQuery.ajax({dataType:"json",url:mte.ajaxurl,type:"post",data:r,success:function(e){var t=jQuery(".updatesub-status");i("#updatesub-submit").removeAttr("disabled"),e.error?t.html(e.error.message):e.success&&t.html(e.success.message)}})}),i(document).on("focus","#comment,#author,#email",function(){var e,a,s,t;1!==mte.comment_script_loaded&&(e="https://www.maketecheasier.com/assets/themes/MTE/js/comments.min.js?v=2.1.0",s=document.createElement("script"),t=document.getElementsByTagName("script")[0],s.async=1,s.src=e,t.parentNode.insertBefore(s,t),s.onload=s.onreadystatechange=function(e,t){!t&&s.readyState&&!/loaded|complete/.test(s.readyState)||(s.onload=s.onreadystatechange=null,s=void 0,t||a&&a())},mte.comment_script_loaded=1)})}(jQuery),jQuery(document).ready(function(e){mte.width=e(window).width()}),function(){var e,s,t,a,n,o,i;if(e=document.getElementsByTagName("body")[0],(s=document.getElementById("site-navigation"))&&void 0!==(t=document.getElementById("menu-toggle")))if(void 0!==(a=s.getElementsByTagName("ul")[0])){for(a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),t.onclick=function(){-1!==s.className.indexOf("toggled")?(s.className=s.className.replace(" toggled",""),t.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),e.classList.remove("scroll-locked")):(s.className+=" toggled",e.className+=" scroll-locked",t.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))},o=0,i=(n=a.getElementsByTagName("a")).length;o<i;o++)n[o].addEventListener("focus",r,!0),n[o].addEventListener("blur",r,!0);!function(){var e,t,a=s.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(e=function(e){var t,a=this.parentNode;if(a.classList.contains("focus"))a.classList.remove("focus");else{for(e.preventDefault(),t=0;t<a.parentNode.children.length;++t)a!==a.parentNode.children[t]&&a.parentNode.children[t].classList.remove("focus");a.classList.add("focus")}},t=0;t<a.length;++t)a[t].addEventListener("touchstart",e,!1)}()}else t.style.display="none";function r(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}();