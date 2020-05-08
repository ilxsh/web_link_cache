function postDigg(typee, id) {
    jQuery.ajax({
        type: "POST",
        url: "/index.php",
        data: {
            type: typee,
            postid: id
        },
        success: function(data) {
            if (data == "请勿非法提交！" || data == "您已经顶过该日志，请不要重复顶日志！") {
                alert(data)
            } else {
                jQuery("#qlwz-digg").html(data)
            }
        },
        error: function() {
            alert("Digg出错")
        }
    })
}