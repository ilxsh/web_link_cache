/**
 * xiao yun helps you vision 2
 * author: liuqi.lq@alibaba-inc.com
**/
(function(window){
    window.CHCONFIG = window.CHCONFIG || {};
    window.CHCONFIG.loadOnClick = window.CHCONFIG.loadOnClick || true;
    //是否显示小云按钮
    CHCONFIG.showXiaoYunButton = CHCONFIG.showXiaoYunButton || true;
    CHCONFIG.wrapStyle = CHCONFIG.wrapStyle || {'right':53,'top':99};
    CHCONFIG.buttonSpm = CHCONFIG.buttonSpm || 601;
    CHCONFIG.buttonStyle = CHCONFIG.buttonStyle || {'right':1,'top':394};
    CHCONFIG.defaultButtonName = CHCONFIG.defaultButtonName || "#J_cloudHelper";
    CHCONFIG.defaultButtonWrap = CHCONFIG.defaultButtonWrap || ".float-tool";
    CHCONFIG.defaultButtonHtml = '<div id="J_cloudHelper" data-spm="'+CHCONFIG.buttonSpm+'" class="btn-tool"><a href="javascript:;" data-spm-click="gostr=/aliyun;locaid=d601" title="小云帮助"><span class="icon-help"></span></a></div>';
    CHCONFIG.button_2_html = '<div id="J_cloudHelper" data-spm="'+CHCONFIG.buttonSpm+'" class="cloud-helper-button cloud-helper-showonce" style="position: fixed;_position: absolute;top: '+CHCONFIG.buttonStyle.top+'px;right: '+CHCONFIG.buttonStyle.right+'px;z-index: 10000;width:38px;height:38px;" ><a href="javascript:;" data-spm-click="gostr=/aliyun;locaid=d601" onclick="return false;" title="小云帮助"></a></div>';
    CHCONFIG.suffix = function(){
       var domain = window.location.host;
       if(!domain.match(/^.+\.aliyun\.|^aliyun\./))return '.com';
       var output =  domain.replace(/^.*\.aliyun|^aliyun/i,'');
       if(!output)output = '.com';
       return output;
    }();
    //白名单命中的url
    CHCONFIG.curWhiteList = null;
    CHCONFIG.showXiaoYun = window.CHCONFIG.showXiaoYun || false;
    CHCONFIG.WHITE_LIST = [
    '\^http://www.aliyun' + CHCONFIG.suffix + '\$',
    '\^http://www.aliyun' + CHCONFIG.suffix + '/product',
    '\^http://www.aliyun' + CHCONFIG.suffix + '/act/webbaindex.html\$',
    '\^http://www.aliyun' + CHCONFIG.suffix + '/act/contactservice.html\$',
    // '\^http://market.aliyun' + CHCONFIG.suffix + '',
    '\^http://help.aliyun' + CHCONFIG.suffix + '',
    '\^http://www.aliyun' + CHCONFIG.suffix + '/customer',
    '\^http://www.aliyun' + CHCONFIG.suffix + '/customer/detail',
    '\^http://awdc.aliyun' + CHCONFIG.suffix + '\$',
    '\^http://buy.aliyun' + CHCONFIG.suffix + '\$',
    '\^http://buy.aliyun' + CHCONFIG.suffix + '/postpay_vm\$',
    // '\^http://fuwu.aliyun' + CHCONFIG.suffix + '',
    '\^http://partner.aliyun' + CHCONFIG.suffix + '',
    '\^http://aliyuntest.gein.cn',
    '\^http://batest.gein.cn',
    '\^http://aliyun.gein.cn',
    '\^http://ba.hichina.com',
    '\^http://icptest.gein.cn:8780',
    '\^http://security.aliyun' + CHCONFIG.suffix + '',
    '\^http://try.aliyun' + CHCONFIG.suffix + '',
    '\^http://appcloud.aliyun' + CHCONFIG.suffix + '\$',
    '\^http://game.aliyun' + CHCONFIG.suffix + '\$',
    '\^http://jr.aliyun' + CHCONFIG.suffix + '\$',
    '\^http://promotion.aliyun' + CHCONFIG.suffix + '/act/xszq.html\$',
    '\^http://www.aliyun' + CHCONFIG.suffix + '/act/contactservice.html\$'
    ];

    CHCONFIG.isInWhiteList = function(url){
        var el;
        var re;
        for(var i = 0;i< CHCONFIG.WHITE_LIST.length ;i++){
            el=CHCONFIG.WHITE_LIST[i];
            re=new RegExp(el,['i']);
            if(url.substr(url.length-1) == '/'){
                url = url.substring(0,url.length-1);
            }
            if(url.match(re)){
               CHCONFIG.curWhiteList = el;
               return true; 
            }
            if(CHCONFIG.showXiaoYun){
                CHCONFIG.curWhiteList = el;
                return true;
            }
        }
        return false;
    }

    //电话等默认配置
    //2014.4.24日修改,紧急发布,去掉售前电话,之前为400-600-3456.
    CHCONFIG.presaleserviceTel = CHCONFIG.presaleserviceTel || "";
    CHCONFIG.putonrecordTel = CHCONFIG.putonrecordTel || '4006008500转3';
    CHCONFIG.workOrderTel = CHCONFIG.workOrderTel || '0571-85025885';

    CHCONFIG.configBaseUrl = function(node,curl,purl){
        /**
        2014.4.24日修改,紧急发布,去掉整个售前部分
        2014.6.30修改,去掉备案 在线
        2014.7.30修改,增加论坛 去提问
        */
        (function(){
            var bot_table = node.filter('.cloud-helper-box-bot'),
                bot_tr = bot_table.find('tr'),
                bot_tr_0 = bot_tr.eq(0),
                bot_tr_1 = bot_tr.eq(1);
            bot_table.find('#cloud-helper-putonrecord').remove();
            bot_table.find('.cloud-helper-box-bot-tel').css('margin-left','10px');
            bot_tr_0.find('td').eq(0).remove();
            bot_tr_1.find('td').eq(1).appendTo(bot_tr_0);
            bot_table.append('<tr><td><span class="cloud-helper-box-bot-label">论坛:</span><a class="cloud-helper-box-bot-label4" href="http://bbs.aliyun.com/thread/235.html" target="_blank">去提问</a></td></tr>');
            bot_tr_1.prepend('<td><span class="cloud-helper-box-bot-label">售前:</span><a class="cloud-helper-box-bot-label4" href="http://workorder.aliyun.com/add.htm?productId=1203&commonQuestionId=227" target="_blank">预约服务</a></td>');
            bot_table.css("height",'71px');
        })();
        /* 
         * 备案页面
         * 修改了整个人工客服面板，仅保留备案电话
         */
        if(CHCONFIG.curWhiteList == '\^http://aliyuntest.gein.cn' 
            || CHCONFIG.curWhiteList == '\^http://aliyun.gein.cn'
            || CHCONFIG.curWhiteList == '\^http://ba.hichina.com'
            || CHCONFIG.curWhiteList == '\^http://batest.gein.cn')
        {
            var boxBot = node.filter('.cloud-helper-box-bot');
            boxBot.css({'height':'35px'});
            boxBot.find('table').hide();
            boxBot.append('<p style="margin:10px 0 0 150px;">备案咨询电话：4006008500转3</p>')
        }
        /* 
         * 开发者服务页面
         * 修改了整个人工客服面板，仅保留售前电话
         */
        if(curl.indexOf('http://fuwu.aliyun.com/product/product_list.htm') == 0 && curl.indexOf('productTypeId=13')!="-1" && (curl.indexOf('productCategoryId=57') != -1 
            || curl.indexOf('productCategoryId=58') != -1 || curl.indexOf('productCategoryId=59') != -1 || curl.indexOf('productCategoryId=60') != -1 )
        ){
            var boxBot = node.filter('.cloud-helper-box-bot');
            boxBot.find('table tr').not(':first').hide();
            boxBot.find('table tr:first td').not(':first').hide();
            boxBot.find('table tr:first td:first').css({
                'text-align':'center',
                'font-size':'14px'
            }).find('.cloud-helper-box-bot-label').text('售前联系方式:').css({
                'padding-left':'0px'
            });
        }
           


        return node;
    }
})(window);
