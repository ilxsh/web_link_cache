(function () {
    $(document).ready(function () {
        var pTemplate = '<div id="qrcode-mask-popup"  style="position: fixed;top: 0;right: 0;bottom: 0;left: 0;z-index: 10000;background: rgba(0, 0, 0, .6);display: none;"><div id="qrcode-popup-iframeBox" style="display:none;width: 506px;height: 512px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index:10000;border-radius: 8px;"><div id="close-iframe-Btn" style="width: 505px;height: 46px;z-index: 10001;position:absolute;bottom: 0;"></div></div></div>';
        $(document.body).append(pTemplate);
        var myDivPop = $('#qrcode-popup-iframeBox');
        $('.qrcode_show').on('click', function (e) {
            e.stopPropagation();
            setTimeout(function () {
                $('#qrcode-mask-popup').show();
                myDivPop.stop().fadeToggle();
                var iStr = '<iframe id="popup-iframe" src="https://ssp.njxzwh.com/wp/3" style="overflow-x:auto; overflow-y:hidden;width:100%;height:100%;border:0 none;position:absolute;top: 50%;left:50%;transform: translate(-50%, -50%);z-index:10000;"></iframe>';
                myDivPop.prepend(iStr);
                myDivPop.addClass("qrcode-i-load");
            }, 800);

            $(document).one("click", function () {
                myDivPop.stop().hide();
                $("#qrcode-mask-popup").hide();
            });

            // $.ajax({
            //     type: "GET",
            //     url: "http://tongji.downza.cn/qrcode",
            //     data: {
            //         "channel" : 3
            //     },
            //     dataType: "json",
            //     success: function (data) {
            //     }
            // });
        });
        myDivPop.on("click", function (e) {
            e.stopPropagation();
        });
        $('#close-iframe-Btn').on("click", function () {
            myDivPop.hide();
            $('#qrcode-mask-popup').hide();
        })
    });
})();

