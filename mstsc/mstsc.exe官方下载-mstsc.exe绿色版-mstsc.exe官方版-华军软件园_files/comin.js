$(function() {
    function tool() {};
    //首页
    tool.prototype.indexs = {
        ivtab: function() {
            $('.ivtab dd').each(function() {
                $(this).find('p').eq(5).addClass('ge');
            });
            $(".ivtab dt span,.ivtab dt a").each(function(index) {
                $(this).mouseover(function() {
                    var liNode = $(this);
                    timoutid = setTimeout(function() {
                        $(".ivtab dd.on").removeClass("on");
                        $(".ivtab dt .cur").removeClass("cur");
                        $(".ivtab dd:eq(" + index + ")").addClass("on");
                        liNode.addClass("cur");
                    }, 100);
                }).mouseout(function() {
                    clearTimeout(timoutid);
                });
            });
        },
        softsortCt: function() {
            $('.softsortCt .headnav span').on('click', function() {
                $('.softsortCt .headnav span.cur').removeClass('cur');
                $('.softsortCt .tb.cur').removeClass('cur');
                $(this).addClass('cur');
                $('.softsortCt .tb').eq($(this).index()).addClass('cur');
            })
        },
        recsoftCt: function() {
            $('.recsoftCt dl').each(function(index) {
                $(this).mouseover(function() {
                    $('.recsoftCt dl.on').removeClass('on');
                    $(this).addClass('on')
                });
            })
        },
        sidebar: function() {
            $('.sidebar .tabTitle li').on('mouseover', function() {
                $('.sidebar .tabTitle li').removeClass('on')
                $('.sidebar .tabItem.on').removeClass('on')
                $('.sidebar .tabTitle li').eq($(this).index()).addClass('on');
                $('.sidebar .tabItem').eq($(this).index()).addClass('on');
            })
        },
        recbox: function(obj) {
            $(obj).find('.title i').each(function(index) {
                    $(this).on('mouseover', function() {
                        $(obj).find('.title i.cur').removeClass('cur');
                        $(obj).find('.content.on').removeClass('on');
                        $(obj).find('.content').eq(index).addClass('on');
                        $(this).addClass('cur')
                    })
                })
                // $(obj).find('title i').on('mouseover',function(){
                //     $(obj).find('title i').remove
                // })
        },
        recbox2: function(obj) {
            $(obj).find('.title i').each(function(index) {
                $(this).on('mouseover', function() {
                    $(obj).find('.title i.cur').removeClass('cur');
                    $(obj).find('.title a.more.cur').removeClass('cur');
                    $(obj).find('.title a.more').eq(index).addClass('cur');
                    $(obj).find('.content.on').find('.left').removeClass('cur');
                    $(obj).find('.content.on').find('.left').eq(index).addClass('cur');
                    $(this).addClass('cur')
                })
            })
        },
        left_page: function(obj) {
            var num = 0;
            $(obj).each(function() {
                var _this = this;
                $(this).find('.next').on('click', function() {
                    num++;
                    if(num > 4) {
                        num = 0;
                    };
                    $(_this).find('div.leftcont.cur').removeClass('cur');
                    $(_this).find('div.leftcont').eq(num).addClass('cur');
                    $(_this).find('.left_page .location').html(num + 1 + '/5');
                })
            });
            $(obj).each(function() {
                var _this = this;
                $(this).find('.prev').on('click', function() {
                    num--;
                    if(num < 0) {
                        num = 4;
                    };
                    $(_this).find('div.leftcont.cur').removeClass('cur');
                    $(_this).find('div.leftcont').eq(num).addClass('cur');
                    $(_this).find('.left_page .location').html(num + 1 + '/5');
                })
            });
        },
        fsilder: function() {
            function autoImg() {
                var iLength = $('.img>li').length;
                var num = 0;
                var imgWidth = 350;
                var oTimer = null;
                for(var i=0,str="";i<iLength;i++){
                    str+="<span></span>";
                }
                $(".imgnav").html("").append(str);
                $('.imgnav span').eq(0).addClass('cur');
                function autoplay() {
                    oTimer = setInterval(function() {
                        if(num >= iLength - 1) {
                            num = 0;
                        } else {
                            num++;
                        }
                        $('.img>li').eq(num).fadeIn(1000).siblings().fadeOut(500);
                        $('.imgnav span').removeClass('cur');
                        $('.imgnav span').eq(num).addClass('cur');
                    }, 4000)
                }
                $('.fsilder .btnnext').click(function() {
                    if(num <= 0) {
                        num = iLength - 1;
                    } else {
                        num--;
                    }
                    $('.img>li').eq(num).fadeIn(1000).siblings().fadeOut(500)
                    $('.imgnav span').removeClass('cur');
                    $('.imgnav span').eq(num).addClass('cur');
                })
                $('.fsilder .btnprev').click(function() {
                    if(num >= iLength - 1) {
                        num = 0;
                    } else {
                        num++;
                    }
                    $('.img>li').eq(num).fadeIn(1000).siblings().fadeOut(500);
                    $('.imgnav span').removeClass('cur');
                    $('.imgnav span').eq(num).addClass('cur');
                })
                $('.imgnav span').on('mouseover', function() {
                    num = $(this).index();
                    $('.img>li').eq(num).fadeIn(1000).siblings().fadeOut(500);
                    $('.imgnav span').removeClass('cur');
                    $(this).addClass('cur');
                })
                $('.fsilder').on('mouseover', function() {
                    clearInterval(oTimer);
                })
                $('.fsilder').on('mouseout', function() {
                    autoplay();
                })
                autoplay();
            };
            autoImg();
        },
        intrTab: function() {
            $('.intrTabUl').each(function() {
                // $(this).find('li').eq(5).addClass('intrLibod');
            });
            $(".intrTabBtn a").each(function(index) {
                $(this).mouseover(function() {
                    var liNode = $(this);
                    timoutid = setTimeout(function() {
                        $(".intrTab .intrTabUl.cur").removeClass("cur");
                        $(".intrTabBtn a.cur").removeClass("cur");
                        $(".intrTab .intrTabUl:eq(" + index + ")").addClass("cur");
                        liNode.addClass("cur");
                    }, 100);
                }).mouseout(function() {
                    clearTimeout(timoutid);
                });
            });
        },
        Friendlink: function(obj) {
            $('.modTab li').eq(0).addClass('cur');
            $('.botBox .xtaberItem').eq(0).addClass('cur');
            $('.modTab li').on('mouseover', function() {
                $('.modTab li.cur').removeClass('cur');
                $(this).addClass('cur');
                $('.botBox .xtaberItem.cur').removeClass('cur');
                $('.botBox .xtaberItem').eq($(this).index()).addClass('cur');
            })
        },
        hotclo:function(){
            $('.inRec p span.hotclo').append($('.inRec p span.hotclo em').eq(0).clone(true));
            var i=0;
            var elen=$('.inRec p span.hotclo em').length;
            if(elen>1){
                setInterval(function(){
                    i++;
                    if(i>=elen){
                        i=0;
                        $('.inRec p span.hotclo em').eq(0).append('')
                        $('.inRec p span.hotclo').css('top',0);
                    }
                    $('.inRec p span.hotclo').animate({
                        top: -38*i},
                        function() {

                    });
                },3000);
            }
        },
        accordRank: function (obj, ev) {
            $(obj).eq(0).addClass('cur');
            $(obj).on(ev, function () {
                $(obj + '.cur').removeClass('cur');
                $(this).addClass('cur');
            })
        },
        init: function() {
            this.ivtab();
            this.recsoftCt();
            this.sidebar();
            this.softsortCt();
            this.fsilder();
            this.intrTab();
            this.recbox('.recboxAn');
            this.recbox('.recboxGame');
            this.recbox2('.recboxNews');
            this.left_page('.recboxNews .left');
            this.Friendlink();
            this.hotclo();
            this.accordRank('.projectbox dl', 'mouseover');
            this.accordRank('.tabTitleRankios dl', 'mouseover');
            this.accordRank('.tabTitleRankaz dl', 'mouseover');
            this.accordRank('.tabTitleRankpc dl', 'mouseover');
            this.accordRank('.tabTitleRankdnb dl', 'mouseover');
        }
    };
    // 软件列表
    tool.prototype.sortlist = {
        scoll: function(obj) {
            var iscoll = 0;
            var iwHeight = $(window).height();
            var ihHeight = $(document).height();
            var ifHeight = $('.footer')[0]?$('.footer').offset().top:3000;
            $(window).on('scroll', function() {
                iscoll = $(window).scrollTop();
                if(iscoll > 500 && iscoll <= ifHeight - iwHeight) {
                    $(obj).addClass('show');
                } else {
                    $(obj).removeClass('show');
                }
            })
            $(obj).on('click', function() {
                $(window).scrollTop(0);
                $(obj).removeClass('show');
            })
        },
        sidebarTab: function(obj) {
            $(obj).find('.head li').on('mouseover', function() {
                $(this).parents(obj).find('.head li.cur').removeClass('cur');
                $(this).addClass('cur');
                $(this).parents(obj).find('.tabItem.on').removeClass('on');
                $(this).parents(obj).find('.tabItem').eq($(this).index()).addClass('on');
            })
        },
        init: function() {
            this.sidebarTab('.chartsSoft');
            this.sidebarTab('.hotSoftTag');
            this.sidebarTab('.hotNewTag');
            this.sidebarTab('.hotZtTag');
            this.scoll('.srolltool')
        }
    };
    //下载排行
    tool.prototype.downrank = {
        hotZt: function() {
            var nub = 0;
            $('.hotZt .rightBtn').on('click', function() {
                nub++;
                if(nub > 1) {
                    nub = 0;
                }
                $('.hotZt ul').animate({
                        left: -930 * nub
                    },
                    1000);
            })
        },
        init: function() {
            this.hotZt();
        }
    };
    // 装机必备
    tool.prototype.Installed = {
        neceZt: function() {
            var ilen = $('.neceZt ul li').length;
            var nub = 0;
            var iwidth = 242;
            var iminlen = ilen - 4;
            var onetime = 500;
            $('.neceZt ul').css('width', ilen * iwidth)
            $('.neceZt .rightBtn').on('click', function() {
                nub++;
                if(nub > iminlen) {
                    nub = 0;
                }
                $('.neceZt ul').animate({
                        left: -iwidth * nub
                    },
                    onetime);
            });
            $('.neceZt .leftBtn').on('click', function() {
                nub--;
                if(nub < 0) {
                    nub = ilen - 4;
                }
                $('.neceZt ul').animate({
                        left: -iwidth * nub
                    },
                    onetime);
            })
        },
        init: function() {
            this.neceZt()
        }
    };
    // 专题详情
    tool.prototype.special = {
        softLinRec: function() {
            $('.softLinRec .title span').on('mouseover', function() {
                $('.softLinRec .title span.cur').removeClass('cur')
                $('.softLinRec .item.cur').removeClass('cur')
                $(this).addClass('cur');
                $('.softLinRec .item').eq($(this).index()).addClass('cur');
            })
        },
        init: function() {
            this.softLinRec()
        }
    };
    // 下载详情
    var ItemSSZTtop;
    var ItemXGXZtop;
    var ItemWYPLtop;
    tool.prototype.downdecail = {
        downdecailHeads: function() {
            //下载地址
            // $('#seeJt').on('click', function(event) {
            //     $(window).scrollTop($('#down').offset().top-50);
            //     event.preventDefault();
            // });
            //左侧图标
            var godownTop=$(window).height()-80;
            $('#godown').css("top",godownTop);
            $('#godown').on('click', function(event) {
                $(window).scrollTop($('#down').offset().top-50);
                event.preventDefault();
            });
            $(".bdgodown").on('click', function(event) {
                $(window).scrollTop($('#down').offset().top-50);
                event.preventDefault();
            });
            $(window).on('scroll', function() {
                var itop = $(window).scrollTop();
                var istop = $('#down').offset().top-$(window).height()+100;
                if(itop >= istop ){
                    $('#godown').css({
                        "position":"absolute",
                        "top":istop+godownTop-20
                    })
                } else {
                    $('#godown').css({
                        "position":"fixed",
                        "top":godownTop
                    })
                    $('#godown').show();
                };
            });
            // 固定导航栏锚点
            // var clickCount = 0;
            // $('.downdecailHeads div').on('click', function (){
            //     $('.downdecailHeads').addClass('fixed')
            //     $('#ItemRJJS').show();
            //     $('#ItemXGJC').show();
            //     $('#ItemMax').show();
            //     $('#otherVersion').show();
            //     $('#ItemRJJT').show();
            //     $('#down').show();
            //     $('#ItemWYPL').show();
            //     $('#ItemCNXH').show();
            //     $('#comment-wrap').show();
            //     if($(this).attr('dataName')) {
            //         $(window).scrollTop($('#' + $(this).attr('dataName')).offset().top - 50);
            //     }
            //     if($(this).attr('dataName') == 'down'){
            //         clickCount ++;
            //         // 获取视口的高度
            //         var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            //         if(clickCount >= 2){
            //             console.log($('#' + $(this).attr('dataName')).offset().top - h + 210)
            //             $(window).scrollTop($('#' + $(this).attr('dataName')).offset().top - h + 210);
            //             $('.downdecailHeads div.cur').removeClass('cur');
            //             $('#' + $(this).attr('datasName')).addClass('cur');
            //         }
            //     }
            //     $('.downdecailHeads div.cur').removeClass('cur');
            //     $('#autotab div.cur').removeClass('cur');
            //     $('#' + $(this).attr('datasName')).addClass('cur');
            //     $(this).addClass('cur').siblings().removeClass('cur');

            // })
            // $('.downdecailHeads div').on('click', function(){
            //     console.log(111)
            //     console.log($(this).attr("dataName"))
            // }),

            // $('.downdecailHeads div').on('click', function() {
            //     clickCount ++;
            //     $('.downdecailHeads div.cur').removeClass('cur');
            //     // $('.softLinRec .item.cur').removeClass('cur');
            //     $('#autotab div.cur').removeClass('cur');
            //     $('#' + $(this).attr('datasName')).addClass('cur');
            //     $(this).addClass('cur').siblings().removeClass('cur');

            //     if($('.downdecailHeads').hasClass('fixed')) {
            //          $(window).scrollTop($('#' + $(this).attr('dataName')).offset().top-55);
            //     } else {
            //         if($(this).text() == '软件介绍') {
            //             $('#ItemRJJS').show();
            //             $('#ItemXGJC').show();
            //             $('#ItemSSZT').show();
            //             $('#ItemMax').show();
            //             $('#otherVersion').show();
            //             $('#ItemRJJT').show();
            //             $('#down').show();
            //             $('#ItemWYPL').show();
            //             $('#ItemCNXH').show();
            //             $('#comment-wrap').show();
            //         } else if($(this).text() == '相关文章') {
            //             $('#ItemRJJS').hide();
            //             $('#ItemXGJC').show();
            //             // $('#ItemSSZT').show();
            //             $('#ItemMax').show();
            //             $('#otherVersion').show();
            //             $('#ItemRJJT').show();
            //             $('#down').hide();
            //             $('#ItemWYPL').show();
            //             $('#ItemCNXH').show();
            //             $('#comment-wrap').show();
            //         } else if($(this).text() == '所属专题') {
            //             console.log($(this).text())
            //             $('#ItemRJJS').hide();
            //             $('#ItemXGJC').hide();
            //             $('#ItemMax').show();
            //             // $('#ItemSSZT').show();
            //             $('#otherVersion').show();
            //             $('#ItemRJJT').show();
            //             $('#down').hide();
            //             $('#ItemWYPL').show();
            //             $('#ItemCNXH').show();
            //             $('#comment-wrap').show();
            //         } else if($(this).text() == '软件截图') {
            //             $('#ItemRJJS').hide();
            //             $('#ItemXGJC').hide();
            //             // $('#ItemSSZT').hide();
            //             $('#ItemMax').hide();
            //             $('#ItemMax').hide();
            //             $('#ItemRJJT').show();
            //             $('#otherVersion').show();
            //             $('#down').hide();
            //             $('#ItemWYPL').show();
            //             $('#ItemCNXH').show();
            //             $('#comment-wrap').show();
            //         } else if($(this).text() == '其他版本') {
            //             $('#ItemRJJS').hide();
            //             $('#ItemXGJC').hide();
            //             // $('#ItemSSZT').hide();
            //             $('#ItemMax').hide();
            //             $('#ItemRJJT').hide();
            //             $('#otherVersion').show();
            //             $('#down').hide();
            //             $('#ItemWYPL').show();
            //             $('#ItemCNXH').show();
            //             $('#comment-wrap').show();
            //         } else if($(this).text() == '下载地址') {
            //             console.log(clickCount);
            //             if(clickCount >= 2){
            //                 $('#ItemRJJS').show();
            //                 $(window).scrollTop($('#down').offset().top-790);
            //                 $('#ItemXGJC').show();
            //                 // $('#ItemSSZT').show();
            //                 $('#ItemMax').show();
            //                 $('#otherVersion').show();
            //                 $('#ItemRJJT').show();
            //                 $('#down').show();
            //                 $('#ItemWYPL').show();
            //                 $('#ItemCNXH').show();
            //                 $('#comment-wrap').show();
            //             }else{
            //                 $('#ItemRJJS').hide();
            //                 $('#ItemXGJC').show();
            //                 // $('#ItemSSZT').show();
            //                 $('#ItemMax').show();
            //                 $('#otherVersion').show();
            //                 $('#ItemRJJT').show();
            //                 $('#down').show();
            //                 $('#ItemWYPL').show();
            //                 $('#ItemCNXH').show();
            //                 $('#comment-wrap').show();
            //             }
            //         } else if($(this).text() == '网友点评') {
            //             $('#ItemRJJS').hide();
            //             $('#ItemXGJC').hide();
            //             // $('#ItemSSZT').hide();
            //             $('#ItemMax').hide();
            //             $('#otherVersion').hide();
            //             $('#ItemRJJT').hide();
            //             $('#down').hide();
            //             $('#ItemWYPL').show();
            //             $('#ItemCNXH').show();
            //             $('#comment-wrap').show();
            //         }
            //     }

            // })
        // }
        },
        favorite: function(obj) {
            $(obj).on('click', function() {
                var siteUrl = window.location;
                var siteName = document.title;
                //判断浏览器是否支持document.all
                if(document.all) {
                    //如果支持则用external方式加入收藏夹
                    window.external.addFavorite(siteUrl, siteName);
                } else if(window.sidebar) {
                    // console.log(2)
                        //如果支持window.sidebar，则用下列方式加入收藏夹
                    window.sidebar.addPanel(siteName, siteUrl, '');
                } else {
                    alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
                }
            })
        },
        scroll: function() {
            var items = [];
            // items.push($('#ItemRJJS'));
            // if($('#ItemXGJC')[0]){
            //     items.push($('#ItemXGJC'));
            // }
            // items.push($('#ItemSSZT'),$('#otherVersion'));
            // if($('#ItemRJJT')[0]){
            //     items.push($('#ItemRJJT'));
            // }
            // items.push($('#down'), $('#ItemWYPL'));
            // var tnum = items.length;
            // var iheadTop = $('.downdecailHeads').offset().top;
            // var ItemRJJStop = $('#ItemRJJS').offset().top - 57;
            // console.log(ItemRJJStop)
            // var ItemXZDZtop = $('#down')[0] ? $('#down').offset().top -110 : ItemRJJStop;
            // console.log('下载地址'+ItemXZDZtop)
            // var ItemXGJCtop = $('#ItemXGJC')[0] ? $('#ItemXGJC').offset().top -110: ItemXZDZtop;
            // console.log($('#ItemXGJC')[0])
            // console.log('教程'+ItemXGJCtop)
            // ItemSSZTtop = $('#ItemMax')[0] ? $('#ItemMax').offset().top -110 : ItemXGJCtop;
            // console.log('所属专题'+ItemSSZTtop)
            // ItemRJJTtop = $('#ItemRJJT')[0] ? $('#ItemRJJT').offset().top -110: ItemSSZTtop;
            // // console.log(ItemRJJTtop)
            // ItemXGXZtop = $('#otherVersion')[0] ? $('#otherVersion').offset().top -110 : ItemRJJTtop;
            // // console.log(ItemXGXZtop)
            // ItemWYPLtop = $('#ItemWYPL').offset().top -110;
            // // console.log(ItemWYPLtop)
            // console.log('截图'+ItemRJJTtop)
            // console.log('版本'+ItemXGXZtop)
            // console.log('品论'+ItemWYPLtop)


            var autotabTop =  $('#ItemWYPL').offset().top+400;
            // console.log(autotabTop)
            // $('#autotab div').on('click', function() {
            //     if($(this).index == 0) {
            //         $('.downdecailHeads.fixed').removeClass('fixed')
            //     }
            //     $('#ItemRJJS').show();
            //     $('#ItemXGJC').show();
            //     $('#ItemMax').show();
            //     $('#otherVersion').show();
            //     $('#ItemRJJT').show();
            //     $('#down').show();
            //     $('#ItemWYPL').show();
            //     $('#ItemCNXH').show();
            //     $('#comment-wrap').show();
            //     // $('#autotab div.cur').removeClass('cur')
            //     $('.downdecailHeads div.cur').removeClass('cur');
            //     $('#' + $(this).attr('datasName')).addClass('cur');
            //     $(this).addClass('cur').siblings().removeClass('cur');

            //     if($(this).attr('dataName')) {
            //         $(window).scrollTop($('#' + $(this).attr('dataName')).offset().top - 50);
            //     }
            // })
            var iheadTop = $('.downdecailHeads').offset().top;
            $(window).on('scroll', function() {
                var itop = $(this).scrollTop();

                if(itop >= iheadTop) {
                    $('.downdecailHeads').addClass('fixed')
                } else {
                    $('.downdecailHeads.fixed').removeClass('fixed')
                };

                if(itop > $('.qitaRankLast').height() + $('.qitaRankLast').offset().top ) {
                    if(itop > autotabTop) {
                        $('#autotab').removeClass('show');
                        $('.srolltool').removeClass('show');
                    } else {
                        $('#autotab').addClass('show');
                        $('.srolltool').removeClass('show');
                    }
                } else {
                    $('#autotab').removeClass('show');
                }
                // fixedNav(itop);
                // for(var i = 0; i < tnum; i++) {
                //     if(items[i].offset().top <= $(window).scrollTop() + 110) {
                //         var iname=items[i].selector.slice(1);
                //         $('.downdecailHeads div.cur').removeClass('cur');
                //         // $('.downdecailHeads div:eq(' + i + ')').addClass('cur');
                //         $('.downdecailHeads div[dataname="'+iname+'"]').addClass('cur');
                //     }
                // }
                //1.拖动滚轮，对应的楼梯样式进行匹配
                $('.xgItem').each(function(index,ele){
                    var $loutitop= $(this).offset().top + $(this).outerHeight() -50;
                    if( $loutitop > itop){//楼层的top大于滚动条的距离
                        $('#autotab div').removeClass('cur');
                        $('#autotab div.'+$(ele).attr('id')).addClass('cur');
                        $('.downdecailHeads div').removeClass('cur');
                        $('.downdecailHeads div.'+$(ele).attr('id')).addClass('cur');
                        return false;//中断循环
                    }
                });
            });


            $('#sNavTop').on('click', function() {
                $(window).scrollTop(0);
            });

            // function fixedNav(itop) {
            //     // console.log('itop==='+itop);
            //     if((itop >= ItemRJJStop) && (itop < ItemXZDZtop -10)) {
            //         console.log('软件'+9999999999)
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#NavRJJS').addClass('cur');
            //         $('#sNavRJJS').addClass('cur');
            //     } else if((itop >= ItemXGJCtop) && (itop < ItemSSZTtop -10)) {
            //         console.log(11111)
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#NavXGJC').addClass('cur');
            //         $('#sNavXGJC').addClass('cur');
            //     } else if((itop >= ItemSSZTtop) && (itop < ItemRJJTtop -10)) {
            //         console.log('所属'+0000)
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#NavSSZT').addClass('cur');
            //         $('#sNavSSZT').addClass('cur');
            //     } else if((itop >= ItemXGXZtop) && (itop < ItemWYPLtop )) {
            //         console.log('版本')
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#aOtherVersion').addClass('cur');
            //         $('#sOtherVersion').addClass('cur');
            //     } else if((itop >= ItemRJJTtop) && (itop < ItemXGXZtop )) {
            //         console.log('软件'+00000)
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#NavRJJT').addClass('cur');
            //         $('#sNavRJJT').addClass('cur');
            //     } else if((itop >= ItemXZDZtop) && (itop < ItemXGJCtop -10)) {
            //         console.log('xiazai'+00000)
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#NavXZDZ').addClass('cur');
            //         $('#sNavXZDZ').addClass('cur');
            //     } else if((itop >= ItemWYPLtop )) {
            //         console.log('网友'+0000)
            //         $('.downdecailHeads div.cur').removeClass('cur');
            //         $('#autotab div.cur').removeClass('cur');
            //         $('#NavWYPL').addClass('cur');
            //         $('#sNavWYPL').addClass('cur');
            //     }
            // };
        },
        ItemXZDZ: function(obj1, obj2, ev) {
            $(obj1).on(ev, function() {
                $(obj1 + '.cur').removeClass('cur');
                $(this).addClass('cur');
                $(obj2 + '.cur').removeClass('cur');
                $(obj2).eq($(this).index()).addClass('cur');
            })
        },
        accordRank: function(obj, ev) {
            $(obj).eq(0).addClass('cur');
            $(obj).on(ev, function() {
                $(obj + '.cur').removeClass('cur');
                $(this).addClass('cur');
            })
        },
        showLan: function(obj, obj2) {
            $(obj).find('span.more').on('click', function() {
                $(obj).find(obj2).toggleClass('lan');
            })
        },
        qitaRank: function(obj) {
            var num = 0;
            var iLen = $(obj).find('.qitaRankItem').length;
            $(obj).find('.changeBtn').on('click', function() {
                num++;
                if(num >= iLen) {
                    num = 0;
                };
                $(obj).find('.qitaRankItem').removeClass('cur');
                $(obj).find('.qitaRankItem').eq(num).addClass('cur');
            })
        },
        sortPic: function(obj, parobj) {
            var nub = 0;
            var oTimer = null;
            var ilen = $(obj).find('li').length;
            // var iheight=$(obj).find('li').find('img').height()+90;
            // $(obj).css({
            //     height:iheight
            // });
            function autoplay() {
                oTimer = setInterval(function() {
                    if(nub < ilen - 1) {
                        nub++;
                    } else {
                        nub = 0;
                    };
                    $(obj).find('li.cur').removeClass('cur');
                    $(obj).find('li').eq(nub).addClass('cur');
                }, 1500)
            };
            $(obj).find('.next').on('click', function() {
                if(nub < ilen - 1) {
                    nub++;
                } else {
                    nub = 0;
                };
                $(obj).find('li.cur').removeClass('cur');
                $(obj).find('li').eq(nub).addClass('cur');
            })
            $(obj).find('.prev').on('click', function() {
                if(nub <= 0) {
                    nub = ilen - 1;
                } else {
                    nub--;
                };
                $(obj).find('li.cur').removeClass('cur');
                $(obj).find('li').eq(nub).addClass('cur');
            })
            $(parobj).on('mouseover', function() {
                clearInterval(oTimer);
            })
            $(parobj).on('mouseout', function() {
                autoplay();
            })
            autoplay();
        },
        redomStyle:function(obj){
            $(obj).each(function (index, element) {
                //var colorr= '#'+ Math.floor(Math.random()*16777215).toString(16);
                // var fontsi = Math.floor(Math.random()*(20-12)+12)
                var color_arr = ['#30a1f5', '#72e3c8', '#fbc87a'];
                var e= index%3
                switch(e){
                    case 0: colorr = color_arr[0];break;
                    case 1: colorr = color_arr[1];break;
                    case 2: colorr = color_arr[2];break;
                }
                $(this).css({"background":colorr})
            });
        },
        // 反馈
        fankui:function(){
            $(".fkBtn").on("click",function(){
                if($(".fankuiBox").hasClass("show")){
                    $(".fankuiBox").removeClass("show");
                }else{
                    $(".fankuiBox").addClass("show");
                }
            })
        },
        init: function() {
            this.scroll();
            this.downdecailHeads();
            this.ItemXZDZ('.downdecailItemXZDZ .head h2', '.downdecailItemXZDZ .cont .XZDZitem', 'click');
            this.ItemXZDZ('.appXZDZ .headNav span', '.appXZDZ .XZDZitem', 'click');
            this.ItemXZDZ('.detailHotTab .title span', '.detailHotTab .detailHotWp .detailHotItm', 'mouseover');
            this.ItemXZDZ('.index_r_tit_title', '.index_r_lb', 'mouseover');
            this.accordRank('.index_r .index_r_lb dl', 'mouseover');
            this.sortPic('.sortPic', '.sortPic');
            this.showLan('.imginfo', '.imginfoWrap');
            this.showLan('.sortTS');
            this.showLan('.sortZMY');
            this.favorite('#addcollect');
            this.qitaRank('.qitaRankSoft');
            this.qitaRank('.qitaRankMSoft');
            // this.redomStyle('.detailHotItm a');
            // this.fankui();
        }
    };
    // 安卓苹果首页
    tool.prototype.AIindex = {
        accordRank: function(obj, ev) {
            $(obj).eq(0).addClass('cur');
            $(obj).on(ev, function() {
                $(obj + '.cur').removeClass('cur');
                $(this).addClass('cur');
            })
        },
        djsf: function() {
            $('.djsf span').click(function() {
                var str = $('.djsf ul li:lt(6):not(:first)').clone();
                $('.djsf ul li:lt(6):not(:first)').remove();
                $('.djsf ul').append(str);
            });
        },
        rnewlist: function(obj, obj2) {
            $('.rnewlist .rlnav a').on()
            $(obj).on('click', function() {
                $(obj + '.cur').removeClass('cur');
                $(obj2 + '.cur').removeClass('cur');
                $(this).addClass('cur');
                $(obj2).eq($(this).index()).addClass('cur');
            })
        },
        corner:function(obj,ev){
            $(obj + ' .rnav span a').eq(0).addClass('cur');
            $(obj + ' .corner').eq(0).addClass('cur');
            $(obj + ' .rnav span a').on('mouseover',function(){
                $(obj + ' .corner.cur').removeClass('cur');
                $(obj + ' .corner').eq($(this).index()).addClass('cur');
                $(obj + ' .rnav span a.cur').removeClass('cur');
                $(this).addClass('cur');
            })
        },
        init: function() {
            this.accordRank('.AI_is_accordRank .accordRankList li', 'mouseover');
            this.accordRank('.AI_ig_accordRank .accordRankList li', 'mouseover');
            this.accordRank('.AOraccordRank .rnav span')
            this.djsf();
            this.rnewlist('.rnewlist .rlnav span', '.rnewlist .rlitem');
            this.corner('.AIrecboxSoft');
            this.corner('.AIrecboxGame');
        }
    };
    tool.prototype.AIList ={
        AOraccordRank: function(obj, obj2) {
            $(obj).on('mouseover', function() {

                $(obj + '.cur').removeClass('cur');
                $(obj2 + '.cur').removeClass('cur');
                $(this).addClass('cur');
                $(obj2).eq($(this).index()).addClass('cur');
                $(obj2).eq($(this).index()).find('li').removeClass('cur');
                $(obj2).eq($(this).index()).find('li').eq(0).addClass('cur');
            })
        },
        redomStyle:function(obj){
            $(obj).each(function(index) {
                // var colorr= '#'+ Math.floor(Math.random()*16777215).toString(16);
                // var fontsi = Math.floor(Math.random()*(20-12)+12)
                // $(this).css({"color":colorr,"font-size":fontsi})
                var color_arr = ['#30a1f5', '#72e3c8', '#fbc87a'];
                var e = index % 3
                switch (e) {
                    case 0:
                        colorr = color_arr[0];
                        break;
                    case 1:
                        colorr = color_arr[1];
                        break;
                    case 2:
                        colorr = color_arr[2];
                        break;
                }
                $(this).css({
                    "background": colorr
                })
            });
        },
        mlistBltj:function(obj,iw,minlen,ileft) {
                var ilen = $(obj+' .bltjwrap li').length;//obj父
                var nub = 0;
                var iwidth = iw; //每一块的宽包含margin
                var iminlen = ilen - minlen; //minlen是一屏包含几块
                var onetime = 500; //时间
                var ileft=ileft||iwidth;//每次滑多长，
                $(obj+' .bltjwrap ul').css('width', ilen * iwidth)
                $(obj+' .btn.next').on('click', function() {
                    nub++;
                    if (nub > iminlen) {
                        nub = 0;
                    }
                    $(obj+' .bltjwrap ul').stop().animate({
                            left: -ileft * nub
                        },
                        onetime);
                });
                $(obj+' .btn.prev').on('click', function() {
                    nub--;
                    if (nub < 0) {
                        nub = iminlen;
                    }
                    $(obj+' .bltjwrap ul').stop().animate({
                            left: -ileft * nub
                        },
                        onetime);
                })
        },
        init: function() {
            this.AOraccordRank('.AOraccordRank .rnav span','.accordRankList');
            // this.redomStyle('.mlistKeyWord a');
            this.mlistBltj('.mlistBltjWp',100,6,100)
        }
    };
    tool.prototype.Xcx ={
        sortPic: function(obj, parobj) {
            var nub = 0;
            var oTimer = null;
            var ilen = $(obj).find('li').length;
            var iheight=$(obj).find('li').find('img').height()+90;
            $(obj).css({
                height:iheight
            });
            function autoplay() {
                oTimer = setInterval(function() {
                    if(nub < ilen - 1) {
                        nub++;
                    } else {
                        nub = 0;
                    };
                    $(obj).find('li.cur').removeClass('cur');
                    $(obj).find('li').eq(nub).addClass('cur');
                }, 1500)
            };
            $(obj).find('.next').on('click', function() {
                if(nub < ilen - 1) {
                    nub++;
                } else {
                    nub = 0;
                };
                $(obj).find('li.cur').removeClass('cur');
                $(obj).find('li').eq(nub).addClass('cur');
            })
            $(obj).find('.prev').on('click', function() {
                if(nub <= 0) {
                    nub = ilen - 1;
                } else {
                    nub--;
                };
                $(obj).find('li.cur').removeClass('cur');
                $(obj).find('li').eq(nub).addClass('cur');
            })
            $(parobj).on('mouseover', function() {
                clearInterval(oTimer);
            })
            $(parobj).on('mouseout', function() {
                autoplay();
            })
            autoplay();
        },
        qtptQh:function(obj,obj2){
            $(obj).on('mouseover', function() {

                $(obj + '.cur').removeClass('cur');
                $(obj2 + '.cur').removeClass('cur');
                $(this).addClass('cur');
                $(obj2).eq($(this).index()).addClass('cur');
                $(obj2).eq($(this).index()).find('li').removeClass('cur');
                $(obj2).eq($(this).index()).find('li').eq(0).addClass('cur');
            })
        },
        init: function() {
            this.sortPic('.sortPic', '.sortPic');
            this.qtptQh('.introTitRnav span','.qtptQhItem')
        }
    };
    tool.prototype.fenleiPage={
        pageGt50: function(num) {
            var loca=window.location.href;
            var reg = /www.onlinedown.net\/[a-z]+\/\d+\/(\d+){0,1}\//;
            var reg2=/www.onlinedown.net\/[a-z]+\/[a-z]+\/\d+\/(\d+){0,1}\//;
            var arr=loca.match(reg,'$1');
            // var arr2=loca.match(reg2,'$1');
            if($(".page a").length>=10){
                if($(".page span").length==1){
                    $(".page span").html("共50页")
                };
            }
            if(arr[1]>=10){
                for(var i=0;i<$('.page a').length;i++){
                    var nums=parseInt($('.page a')[i].innerHTML)
                    if(nums>50){
                        $('.page a')[i].remove();
                        i--;

                    }
                    if($('.page a')[i].innerHTML=="尾页"){
                        $('.page a')[i].remove();
                        i--;
                    }
                    if(arr[1]>=50){
                        if($('.page a')[i].innerHTML=="下一页"){
                            $('.page a')[i].remove();
                            i--;
                        }
                    }
                };
                for(var i=0;i<$('.page span').length;i++){
                    if($('.page span')[i].innerHTML!="......"){
                        $('.page span')[i].innerHTML="共50页";
                    }
                }
            }else{
                if($(".page span").length>=1){
                    $(".page span").html("共50页")
                };
                for(var i=0;i<$('.page a').length;i++){
                    if($('.page a')[i].innerHTML=="尾页"){
                        $('.page a')[i].remove();
                        i--;
                    }
                }
            };
        },
        init: function(num) {
            this.pageGt50(num);
        }
    };
    tool.prototype.cominFn={
        table:function(){
            var evn= $(".tableWp").attr("tableEvent") || "mouseover";
            $(".tableWp .tableNav").on(evn,function() {
                var t = $(this).attr("data-toggle");
                $(this).parents(".tabs-nav").find(".cur").removeClass("cur");
                $(this).addClass("cur");
                $(this).parents(".tableWp").find(".tabs-contents").find(".tab-content").removeClass("cur");
                $("#item-" + t).addClass("cur");
            })
        },
        redomStyle:function(obj){
            $(obj).each(function(index) {
                // var colorr= '#'+ Math.floor(Math.random()*16777215).toString(16);
                // var fontsi = Math.floor(Math.random()*(20-12)+12)
                // $(this).css({"color":colorr,"font-size":fontsi})
                var color_arr = ['#30a1f5', '#72e3c8', '#fbc87a'];
                var e = index % 3
                switch (e) {
                    case 0:
                        colorr = color_arr[0];
                        break;
                    case 1:
                        colorr = color_arr[1];
                        break;
                    case 2:
                        colorr = color_arr[2];
                        break;
                }
                $(this).css({
                    "background": colorr
                })
            });
        },
        init:function(){
            this.table();
            this.redomStyle(".redomStyle a");
        }
    };
    //划过大图
    function jQueryReady(t) {
        t(function() {
            var i, e = t('<div id="image-preview"></div>').insertAfter("body").hide(),
                s = {},
                o = "",
                n = function(s) {
                    var o = i,
                        n = t(s.elem),
                        a = s.w,
                        r = s.h,
                        d = a / r,
                        l = t(window).width(),
                        h = t(window).height(),
                        c = o.clientX,
                        f = o.clientY,
                        $ = o.pageX,
                        u = o.pageY,
                        v = Math.max(c - 20 - 14, l - c - 20 - 14),
                        m = a,
                        p = r;
                    v = Math.min(v, 600), (a > v || r > h) && (d > v / h ? (m = v, p = m / d) : (p = h, m = p * d)), a > 300 && m < 300 && (m = 300, p = m / d);
                    var C = function() {
                            var t, i = c > l / 2 ? "left" : "right";
                            return t = h - f - 17 > p ? "base" : h >= p ? "bottom" : "top", {
                                x: {
                                    right: $ + 20,
                                    left: $ - 20 - m - 7
                                }[i],
                                y: {
                                    base: u + 17,
                                    top: 0,
                                    bottom: u - f + h - p - 7 - 7
                                }[t],
                                w: m,
                                h: p
                            }
                        }();
                    n.css({
                        width: C.w,
                        height: C.h
                    }), e.css({
                        left: C.x,
                        top: C.y
                    })
                },
                a = function(t) {
                    n(t), e.empty().append(t.elem).show()
                };
            t.fn.bigShow = function(r) {
                r = r || "preview", this.hover(function(e) {
                    // var detailImg=$(this).parents(".text").attr('class')=="text"?true:false;
                    // if(detailImg){
                    //     $("#image-preview").addClass('big');
                    // }else{
                    //     $("#image-preview").removeClass('big');
                    // };
                    var n = t(this),
                        d = n.attr(r),
                        l = s[d];
                    i = e, o = d, l ? a(l) : t("<img>").load(function() {
                        s[d] = {
                            elem: this,
                            w: this.width,
                            h: this.height
                        }, o == d && a(s[d])
                    }).attr("src", d)
                }, function() {
                    o = "", e.hide()
                }).mousemove(function(e) {
                    i = e;
                    var o = t(this),
                        a = o.attr(r),
                        d = s[a];
                    d && n(d)
                })
            }, t("img[preview]").bigShow()
        })
    }
    $(function() {
        // $(".imginfoWrap .text img").each(function(index, val) {
        //      $(this).attr("preview",$(this).attr('src'))
        // });
        jQueryReady($);
    })

    var atool = new tool();
    atool.indexs.init();
    atool.sortlist.init();
    atool.downrank.init();
    atool.Installed.init();
    atool.special.init();
    if($('.downdecail')[0]) {
        atool.downdecail.init();
    };
    atool.AIindex.init();
    atool.AIList.init();
    //atool.fenleiPage.init(50);
    atool.Xcx.init();
    atool.cominFn.init();

// 相关专题、相关下载tab切换
$('.tabList .title').click(function (){
    var data =  $(this).attr("data-titId");
   $(this).find('strong').addClass('s_active').parent().siblings().find('strong').removeClass('s_active');
   $('.content #'+data).addClass('active').siblings().removeClass('active');
   if($(this).text() == "相关专题"){
    // console.log('相关专题')
    ItemRJJTtop = $('#ItemRJJT')[0] ? $('#ItemRJJT').offset().top -50: ItemSSZTtop;
    ItemXGXZtop = $('#otherVersion')[0] ? $('#otherVersion').offset().top -52 : ItemRJJTtop;
    ItemWYPLtop = $('#ItemWYPL').offset().top -52;
   }else if($(this).text() == "相关下载"){
    // console.log('相关下载')
    ItemRJJTtop = $('#ItemRJJT')[0] ? $('#ItemRJJT').offset().top -50: ItemSSZTtop;
    ItemXGXZtop = $('#otherVersion')[0] ? $('#otherVersion').offset().top -52 : ItemRJJTtop;
    ItemWYPLtop = $('#ItemWYPL').offset().top -52;
   }
})
 // 今日更新
 $('.index_r_lb .item').mouseover(function (){
    $(this).addClass('cur');
})
$('.index_r_lb .item').mouseout(function (){
    $(this).removeClass('cur');
})

// 判断是否有所属专题，没有相关下载显示

if($('#Item1SSZT').length > 0){
        $(this).addClass('active');
        $('.titSSZT').addClass('s_active');
        $('#ItemXGXZ').removeClass('active');
        $('#ItemXGZT').removeClass('active');
    }else{
        if($('#ItemXGZT').length > 0){
            $(this).addClass('active');
            $('.titXGZT').addClass('s_active');
        }else{
            $('#ItemXGXZ').addClass('active');
            $('.titXGXZ').addClass('s_active');
        }
    }

// 猜你喜欢
$('.downdecailItemCNXH .title strong').click(function (){
    var data =  $(this).attr("data-titId");
    $(this).addClass('s_active').siblings().removeClass('s_active');
    $('.content #'+data).addClass('active').siblings().removeClass('active');
})


    //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
    var $loutili=$('#autotab div').not('#sNavTop');
    $loutili.on('click',function(){
        $(this).addClass('cur').siblings('div').removeClass('cur');
        $('#'+ $(this).attr('datasName')).addClass('cur').siblings('div').removeClass('cur');
        var $loutitop = $('#'+ $(this).attr('dataName')).offset().top - 50;
        //获取每个楼梯的offsetTop值
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:$loutitop
        },0)
    });
    clickCount = 0;
    $('.downdecailHeads div').on('click',function (){
        $('.downdecailHeads div').removeClass('cur');
        $(this).addClass('cur')
        $('#'+ $(this).attr('datasName')).addClass('cur').siblings('div').removeClass('cur');
        var $tabtop = $('#'+ $(this).attr('dataName')).offset().top - 50;
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:$tabtop
        },0)

        if($(this).text() == '下载地址'){
            clickCount ++;
            if(clickCount == 2){
                $('html,body').animate({//$('html,body')兼容问题body属于chrome
                    scrollTop:$tabtop - $(window).height() + 230
                },0)
            }
        }
    });
})

/*手游电脑版下拉框显示*/
$(".game_nav #fenlei,#game_nav .xiala1").mouseover (function (){
    $("#game_nav .xiala1").show()
});
$(".game_nav #fenlei,#game_nav .xiala1").mouseout (function (){
    $("#game_nav .xiala1").hide()
});
$(".game_nav #fenlei2,#game_nav .xiala2").mouseover (function (){
    $("#game_nav .xiala2").show()
});
$(".game_nav #fenlei2,#game_nav .xiala2").mouseout (function (){
    $("#game_nav .xiala2").hide()
});
/*首页超级简历广告*/
$(".bjtj").children('dd').eq(0).find(".aname").text("稿定设计");
$(".bjtj").children('dd').eq(0).find("em").text("做图做视频神器，海量免费素材");
$(".bjtj").children('dd').eq(0).find("img").attr("data-original","../images/ad/gaoding.jpg");
$(".bjtj").children('dd').eq(0).find("img").attr("src","../images/ad/gaoding.jpg");
$(".bjtj").children('dd').eq(0).find("a").attr("href","https://www.gaoding.com/utms/ebedbc90719b6b9270a540912823f2fa");

$(".projectbox_ad").children('dl').eq(0).children('dt').children('.art').text("做图做视频神器,海量免费素材");
$(".projectbox_ad").children('dl').eq(0).find('.lazy').attr("data-original","../images/ad/gaoding_logo.jpg");
$(".projectbox_ad").children('dl').eq(0).find('.lazy').attr("src","../images/ad/gaoding_logo.jpg");
$(".projectbox_ad").children('dl').eq(0).find('a').attr("href","https://www.onlinedown.net/soft/1229545.htm");
$(".projectbox_ad").children('dl').eq(0).find('.dx').eq(0).html("38.7MB");

$(".corner1").children('li').eq(0).find('img').attr("data-original","../images/ad/gaoding_logo.jpg");
$(".corner1").children('li').eq(0).find('img').attr("src","../images/ad/gaoding_logo.jpg");
$(".corner1").children('li').eq(0).find('a').attr("href","https://www.gaoding.com/utms/ebedbc90719b6b9270a540912823f2fa");
$(".corner1").children('li').eq(0).find('span').text("稿定设计");

$(".tabTitleRankaz").children('dl').eq(0).children('dt').children('.art').text("做图做视频神器,海量免费素材");
$(".tabTitleRankaz").children('dl').eq(0).find('.lazy').attr("data-original","../images/ad/gaoding_logo.jpg");
$(".tabTitleRankaz").children('dl').eq(0).find('.lazy').attr("src","../images/ad/gaoding_logo.jpg");
$(".tabTitleRankaz").children('dl').eq(0).find('a').attr("href","https://www.gaoding.com/utms/ebedbc90719b6b9270a540912823f2fa");
$(".tabTitleRankaz").children('dl').eq(0).find('.dx').eq(0).html("38.7MB");

$(".corner2").children('li').eq(0).find('img').attr("data-original","https://src.onlinedown.net/Public/images/bigsoftimg/iosimg/simg/500000/490429_icon.jpg");
$(".corner2").children('li').eq(0).find('img').attr("src","https://src.onlinedown.net/Public/images/bigsoftimg/iosimg/simg/500000/490429_icon.jpg");
$(".corner2").children('li').eq(0).find('a').attr("href","https://www.onlinedown.net/soft/490429.htm");
$(".corner2").children('li').eq(0).find('span').text("钉钉");

$(".tabTitleRankios").children('dl').eq(0).children('dt').children('.art').text("高效安全企业沟通软件");
$(".tabTitleRankios").children('dl').eq(0).find('.lazy').attr("data-original","https://src.onlinedown.net/Public/images/bigsoftimg/iosimg/simg/500000/490429_icon.jpg");
$(".tabTitleRankios").children('dl').eq(0).find('.lazy').attr("src","https://src.onlinedown.net/Public/images/bigsoftimg/iosimg/simg/500000/490429_icon.jpg");
$(".tabTitleRankios").children('dl').eq(0).find('a').attr("href","https://www.onlinedown.net/soft/490429.htm");
$(".tabTitleRankios").children('dl').eq(0).find('.dx').eq(0).html("103.65MB");
