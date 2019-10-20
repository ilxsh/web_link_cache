        function set_cookie(val){
            if(typeof(val.id) == 'string' && val.id != ''){
                var id =  val.id;
                var info = val.info || null;
                var time = val.time || null;
                var path = val.path || null;
            }else{
                console.log('Cookie ID 错误！');
                return false;
            }
            if(time != null){
                var now_t = new Date();
                now_t.setTime(now_t.getTime() + (time * 1000));
                time = now_t.toUTCString();
            }
            document.cookie = id + '=' + escape(info) + ';expires=' + time + ';Path=' + path;
        }
        function get_cookie(id){
            if(typeof(id) == 'string' && id != ''){
                var return_cookie;
                var reg = new RegExp('(^| )' + id + '=([^;]*)(;|$)');
                if(return_cookie = document.cookie.match(reg)){
                    return unescape(return_cookie[2]);
                }else{
                    console.log('提示：没有发现此 Cookie："' + id + '"！');
                    return false;
                }
            }else{
                console.log('Cookie 参数错误！');
                return false;
            }
        }
        
        window.addEventListener('load',function(){
            
            var Mydav = document.querySelector('.Mydav');
            var Mydav_close = document.querySelector('.Mydav_close');
            
            var Dav = get_cookie('Dav');
            if(Dav == 'Dav_close'){
                Mydav.style.bottom = '-100%';
            }else{
                Mydav_close.onclick = function(){
                    Mydav.style.bottom = '-100%';
                    set_cookie({
                        id: 'Dav',
                        info: 'Dav_close',
                        time: 0,
                        path: '/'
                    });
                }
            }
            
        });