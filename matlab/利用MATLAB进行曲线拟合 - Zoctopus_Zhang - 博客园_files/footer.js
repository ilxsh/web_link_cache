// /*<!-- 页脚简介打赏 -->*/
// 在页脚Html代码 引入
// <script type="text/javascript" src="https://blog-static.cnblogs.com/files/ujq3/footer.js" ></script><!-- 页脚简介打赏 -->
function btn_donateClick() {
    var DivPopup = document.getElementById('Div_popup');
    var DivMasklayer = document.getElementById('div_masklayer');
    DivMasklayer.style.display = 'block';
    DivPopup.style.display = 'block';
    var h = Div_popup.clientHeight;
    with (Div_popup.style) {
        marginTop = -h / 2 + 'px';
    }
}

function MasklayerClick() {

    var masklayer = document.getElementById('div_masklayer');
    var divImg = document.getElementById("Div_popup");
    masklayer.style.display = "none";
    divImg.style.display = "none";
}

setTimeout(
    function () {
        document.getElementById('div_masklayer').onclick = MasklayerClick;
        document.getElementById('btn_donate').onclick = btn_donateClick;
        var a_gzw = document.getElementById("guanzhuwo");
        a_gzw.href = "javascript:void(0);";
        $("#guanzhuwo").attr("onclick","follow('33513f9f-ba13-e011-ac81-842b2b196315');");
    }, 900);


