(function($){
    $.fn.suggest = function(options){
        /*
         * defaults
         */
        var defaults = {
            dataSource: '',
            number: 10
        };
        options = $.extend(defaults, options);
        var obj = $(this);// text input object
        var obj_parent = obj.parent();// obj's parent
        var obj_content = obj.val();// text input's content
        var current_item = null;// current selected suggestion li
        var current_index = 0;// current selected suggestion li'index
        var bisent = false;
        var itime =null;
        /*
         * load css and suggestion list
         */
        obj.attr("autocomplete", "off");
        var css = "<style>"+
        "#suggestionWrap{position:absolute;border:solid 1px #bcccdf;background-color:#fff;box-shadow: -3px 3px 10px rgba(153, 153, 153, 0.349019607843137);padding:10px 0;min-height:100px;z-index:1;}"+
        "#suggestionList{text-align:left;list-style:none;margin:0;padding:0;backgroud-color:#fff;z-index:1;width:195px;border-right:1px solid #ccc;padding:0 5px;}" +
        "#suggestionList li {width:100%;height:24px;text-indent: 10px;line-height:24px;font-size:12px;background:#fff;color:#000;display:block;text-decoration:none;word-wrap:break-word;overflow:hidden;}" +
        "#suggestionList li a {width:100%;height:24px;line-height:24px;font-size:12px;background:#fff;color:#000;display:block;text-decoration:none;word-wrap:break-word;overflow:hidden;}" +
        "#suggestionList li a:hover,#suggestionList .hover a {color:#fff;background-color:#0099FF;}"+
        "#suggestionInfo{position:absolute;width:250px;background-color:#fff;z-index:1;right:0;top:0;padding-top:10px;}"+
        "#suggestionInfo img{width:64px;height:64px;float: left;margin-left:16px;margin-top:10px;border: 1px solid #ccc;border-radius: 10px;overflow: hidden;}"+
        "#suggestionInfo p{margin-left:90px;height:30px;line-height:30px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size:12px;}"+
        "#suggestionInfo .suggesQt{margin-left:90px;height:50px;line-height:50px;font-size:12px;}"+
        "#suggestionInfo .suggesQt a{display: inline-block;width: 66px;height: 24px;line-height: 24px;border: 1px solid #ccc;cursor: pointer;text-align: center;margin-right:5px;border-radius:3px;}"+
        "#suggestionInfo .suggesQt a em{display: inline-block;width: 18px;height: 18px;display: inline-block;vertical-align: text-top;background-repeat: no-repeat;background-position: center;-webkit-background-size: contain;-o-background-size: contain;background-size: contain;}"+
        "#suggestionInfo .suggesQt a.pc em{background-image: url(/Public/css/images/icon/ndetail/pcd1.png);}"+
        "#suggestionInfo .suggesQt a.suggesAn em{background-image: url(/Public/css/images/icon/ndetail/and1.png);}"+
        "#suggestionInfo .suggesQt a.suggesIos em{background-image: url(/Public/css/images/icon/ndetail/iosd1.png);}"+
        "#suggestionInfo .suggesQt a.mac em{background-image: url(/Public/css/images/icon/ndetail/macd1.png);}"+
        "#suggestionInfo .suggesQt a.pc:hover em{background-image: url(/Public/css/images/icon/ndetail/pcd.png);color:#30f;}"+
        "#suggestionInfo .suggesQt a.suggesAn:hover em{background-image: url(/Public/css/images/icon/ndetail/and.png);color:#0c0;}"+
        "#suggestionInfo .suggesQt a.suggesIos:hover em{background-image: url(/Public/css/images/icon/ndetail/iosd.png);color:#000;}"+
        "#suggestionInfo .suggesQt a.mac:hover em{background-image: url(/Public/css/images/icon/ndetail/macd.png);color:#000;}"+
        "#suggestionInfo .suggesQt a.pc:hover {color:#30f;border-color:#30f;}"+
        "#suggestionInfo .suggesQt a.suggesAn:hover {color:#0c0;border-color:#0c0;}"+
        "#suggestionInfo .suggesQt a.suggesIos:hover {color:#000;border-color:#000;}"+
        "#suggestionInfo .suggesQt a.mac:hover {color:#000;border-color:#000;}"+
        "</style>";
        var suggestion_css = $(css);
        $("head").append(suggestion_css);
        var suggestion_wrap = $("<div id='suggestionWrap'></div>");
        var suggestion_list = $("<ul id='suggestionList'></ul>");
        var suggestion_info = $("<div id='suggestionInfo'><a class='suggestionUrl' href=''><img src='' class='suggesimg' /></a><p>平台:<span class='suggesPt'>Windows 10</span></p><p>更新:<span class='suggesSj'>2017-2-31</span></p><p>版本:<span class='suggesBb'>v1.0</span></p><div class='suggesQt'><a href='' class='suggesAn'><em></em>安卓版</a><a href='' class='suggesIos'><em></em>苹果版</a></div>")
        suggestion_wrap.append(suggestion_list);
        suggestion_wrap.append(suggestion_info);
        obj_parent.append(suggestion_wrap);
        // obj_parent.append(suggestion_list);
        // obj_parent.append(suggestion_info);
        function resize(){
            // suggestion_wrap.width(obj.outerWidth(false));
            suggestion_wrap.width(457);
            if (obj_parent.css("position") != "static") {
                suggestion_wrap.css("left", obj.position().left);
                suggestion_wrap.css("top", obj.position().top + obj.outerHeight(false));
            }
            else {
                suggestion_wrap.css("left", obj.offset().left);
                suggestion_wrap.css("top", obj.offset().top + obj.outerHeight(false));
            }
        }
        resize();
        $(window).resize(function(){
            resize();
        });
        suggestion_wrap.hide();

        /*
         * keyup event
         */
        obj.keydown(function(){
            bisent=false;
            clearTimeout(itime)
            itime=null;
        })
        obj.keyup(function(event){

            var obj_content_new = obj.val();// text input's new content
            if (obj_content_new == '') {
                restart();
                return;
            }

            if (obj_content_new != obj_content) {
                
                bisent=false
                clearTimeout(itime)
                bisent=true
                itime = setTimeout(function () { 
                    if(bisent){
                        $.getJSON(defaults.dataSource + "?callback=?", {
                            wd: obj_content_new,
                            num: defaults.number,
                            searchsid: defaults.searchsid
                        }, function(json){
                            setObjContent(json);
                            seeObjOne(suggestion_list.find("li").eq(0));
                            suggestion_list.find("li").on('mouseover', function(event) {
                                event.preventDefault();
                                seeObjOne($(this));
                            });
                            obj_content = obj_content_new;
                        });
                        return;
                    }
                 },1500)
            }

            var key = event.keyCode;

            // Enter key
            if (key == 13) {
                if (current_item) {
                    window.location = current_item.find("a").attr("href");
                }
            }

            // Up key
            if (key == 38) {
                if (current_item == null || current_index == 1) {
                    if (current_item) {
                        current_item.removeClass("hover");
                    }
                    current_item = suggestion_list.find("li").last();
                    current_item.addClass("hover");
                    current_index = defaults.number;
                    return;
                }
                current_item.removeClass("hover");
                current_index--;
                current_item = suggestion_list.find("li").eq(current_index - 1);
                current_item.addClass("hover");
                seeObjOne(current_item);
            }

            // Down key
            if (key == 40) {
                if (current_item == null || current_index == defaults.number) {
                    if (current_item) {
                        current_item.removeClass("hover");
                    }
                    current_item = suggestion_list.find("li").first();
                    current_item.addClass("hover");
                    seeObjOne(current_item);
                    current_index = 1;
                    return;
                }
                current_item.removeClass("hover");
                current_index++;
                current_item = suggestion_list.find("li").eq(current_index - 1);
                current_item.addClass("hover");
                seeObjOne(current_item);
            }

        });

        /*
         * prevent enter key's default action
         */
        var fSubmit = false;
        obj.keydown().focus(function(){ // when obj focus
            fSubmit = false;
        }).blur(function(){
            fSubmit = true; // when obj blur
        });
        obj_parent.submit(function(){
            return fSubmit;
        });

        /*
         * mouse out the suggestion
         */
        $("body").mouseup(function(event){
            var src = event.target;
            if (src.id != "suggestionList" && src.id != obj.attr("id")) {
                restart();
            }
        });

        function seeObjOne(obj){
            var dataLogo=obj.attr('data-logo');
            var dataUrl=obj.attr('data-url');
            var dataSoftfj=obj.attr('data-softfj');
            var dataTime=obj.attr('data-lastdotime');
            var dataVersion=obj.attr('data-version');
            var dataAnurl=obj.attr('data-android_url');
            var dataIosurl=obj.attr('data-ios_url');
            if(dataAnurl!="null"){
                $("#suggestionInfo .suggesAn").show()
            }else{
                $("#suggestionInfo .suggesAn").hide()
            }
            if(dataIosurl!="null"){
                $("#suggestionInfo .suggesIos").show()
            }else{
                $("#suggestionInfo .suggesIos").hide()
            }
            if(dataIosurl!="null"&&dataAnurl!="null"){
                $("#suggestionInfo .suggesQt").show()
            }else{
                $("#suggestionInfo .suggesQt").hide()
            }
            $("#suggestionInfo .suggesimg").attr('src',dataLogo);
            $("#suggestionInfo .suggestionUrl").attr('href',dataUrl);
            $("#suggestionInfo .suggesPt").text(dataSoftfj);
            $("#suggestionInfo .suggesSj").text(dataTime);
            $("#suggestionInfo .suggesBb").text(dataVersion);
            $("#suggestionInfo .suggesAn").attr('href',dataAnurl);
            $("#suggestionInfo .suggesIos").attr('href',dataIosurl);
        }
        /*
         * set obj content
         */
        function setObjContent(json){
            var suggestion_listitem = null;
            suggestion_list.html("");
            $.each(json, function(key, value){
                suggestion_listitem = $("<li data-ios_url='"+value.ios_url+"' data-android_url='"+value.android_url+"' data-url='"+value.u+"' data-softfj='"+value.softfj+"' data-lastdotime='"+value.lastdotime+"' data-version='"+value.version+"' data-logo='"+value.logo+"'><a href='" + value.u + "'>" + value.title + "</a></li>");
                suggestion_list.append(suggestion_listitem);
            });
            suggestion_wrap.show();
            if (suggestion_list.html() == "") {
                suggestion_wrap.hide();
            }
        }

        function restart(){
            obj_content = "";
            suggestion_wrap.hide();
            current_item = null;
            current_index = 0;
        }
    };
})(jQuery);
