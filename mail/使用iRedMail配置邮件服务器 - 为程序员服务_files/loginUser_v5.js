window.loginUser={id:0,screenName:'访客',isGuest:true,reputation:0,flags:'0'}
$('.userStatus').html('<a class="signin" target="_self" href="http://outofmemory.cn/user/login"><i></i><b>登录</b></a><a class="signup" target="_self" href="http://outofmemory.cn/user/register"><i></i><b>注册</b></a>');
$(function(){
onGetVoteStatus({"type": 0, "success": true});showCommentCaptcha();displayPv(2211);
});
