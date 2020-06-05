var anchor = window.top.location.hash;

function showComments(e) {
    var comments = $(e).parents('.comments');
    $(e).parents('small').remove();
    comments.find('.comment.hidden').each(function () {
        $(this).removeClass('hidden').trigger('show');
    });

}

function highliht(obj) {
    var bcolor = obj.css('background-color');
    obj.css({'background-color':'#ffa500'});
    setTimeout(function () {
        obj.css({'background-color':'#ffa500'}).animate({
            backgroundColor: bcolor
        }, 1500, function () {
            obj.removeAttr('style');
        });
    }, 800);
}

$('.comment').on('show', function () {
    highliht($(this));
});

if (anchor && anchor !== '#answers') {
    highliht($(anchor));
}

$('body').on('click', '.share-link', function (e) {
    $('.share-input').remove();
    var input = $('<input type="text" class="share-input form-control input-sm" value="http://askdev.info'+$(this).attr('href')+'">');
    input.insertAfter($(this));
    $('.share-input').focus().select();
    e.stopPropagation();
    return false;
});

$(document).on('click', '[data-role="show-all-commetnts"]', function() {
    showComments(this);
    $(this).addClass('hidden');
    return false;
});
$('body').on('blur', '.share-input', function () {
    $(this).remove();
});

$('body').on('click', 'a', function (e) {
    var href = $(this).attr('href');
    if (href.indexOf('#') === -1 && href.indexOf('ubuntugeeks.com') === -1 && href.indexOf('localhost:8888') === -1 && (href.charAt(0) !== '/' || href.indexOf('//') === 0) && href.indexOf('googleads') === -1 && href.indexOf('doubleclick.net') === -1) {
        e.preventDefault();
        e.stopPropagation();
        var win = window.open(href, '_blank');
        if (win) {
            win.focus();
        }
    }
});

$('body').on('focus', 'div.search input', function () {
    $('div.search').css('width', 400);
});
$('body').on('focusout', 'div.search input', function () {
    $('div.search').css('width', 300);
});

