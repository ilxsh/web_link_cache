var lz_poll_server = "https://www.quickservers.com/support/";
var lz_poll_url = "https://www.quickservers.com/support/server.php";
var lz_poll_website = "";
var lz_poll_frequency = 30;
var lz_poll_file_chat = "chat.php";
var lz_window_width = "590";
var lz_window_height = "760";

var lz_area_code = "";
var lz_user_name = "";
var lz_user_email = "";
var lz_user_company = "";
var lz_user_question = "";
var lz_user_phone = "";
var lz_user_customs = new Array('','','','','','','','','','');
var lz_user_language = "";
var lz_user_header = "";
var lz_user_website = "";

var lz_getp_track = "ovlc=IzAwODAwMA__&ovloo=MQ__&ovlhm=MQ__&ovlapo=MQ__&eca=MQ__";
var lz_alert_html = 'PGRpdiBpZD0ibHpfY2hhdF9kaWFsb2ciPgogICAgPHRhYmxlIHN0eWxlPSJoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlOyI+CiAgICAgICAgPHRyPgogICAgICAgICAgICA8dGQgc3R5bGU9InRleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ij4KICAgICAgICAgICAgICAgIDxkaXYgaWQ9Imx6X2NoYXRfZGlhbG9nX2JveCI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ibHpfY2hhdF9kaWFsb2dfaGVhZGVyIj4mbmJzcDt3d3cucXVpY2tzZXJ2ZXJzLmNvbTwvZGl2PgoKICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJsel9jaGF0X2RpYWxvZ190ZXh0X2ZyYW1lIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ibHpfY2hhdF9kaWFsb2dfdGV4dCI+PC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9Imx6X2NoYXRfZGlhbG9nX3Jlc291cmNlX2ZyYW1lIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBpZD0ibHpfY2hhdF9kaWFsb2dfcmVzb3VyY2UiIHNyYz0iIj48L2lmcmFtZT4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGlkPSJsel9jaGF0X2ZpbGVfZnJhbWUiIHN0eWxlPSJkaXNwbGF5Om5vbmU7bWFyZ2luOjIwcHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48IS0tbGFuZ19jbGllbnRfc2VuZF9maWxlLS0+Jm5ic3A7PC9sYWJlbD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9sZWdlbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9Imx6X2NoYXRfZmlsZV91cGxvYWRfZnJhbWUiPjwvaWZyYW1lPgogICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+CgogICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9Imx6X2NoYXRfZGlhbG9nX2Zvb3RlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJidXR0b24iIGNsYXNzPSJsel9mb3JtX2J1dHRvbiIgaWQ9Imx6X2NoYXRfZGlhbG9nX3ByaW50IiB2YWx1ZT0iPCEtLWxhbmdfY2xpZW50X3ByaW50LS0+IiBvbmNsaWNrPSJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbHpfY2hhdF9kaWFsb2dfcmVzb3VyY2UnKS5jb250ZW50V2luZG93LnByaW50KCk7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImJ1dHRvbiIgY2xhc3M9Imx6X2Zvcm1fYnV0dG9uIiBpZD0ibHpfY2hhdF9kaWFsb2dfYnV0dG9uIiB2YWx1ZT0iT0siPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgPC90cj4KICAgIDwvdGFibGU+CjwvZGl2Pgo8ZGl2IGlkPSJsel9jaGF0X2RpYWxvZ19iZyI+PC9kaXY+Cg==';
var lz_is_ie = false;

var lz_overlay_chat_available = true;
var lz_overlays_possible = true;
var lz_direct_login = false;
var lz_geo_error_span = 30;
var lz_geo_data_count = 6;
var lz_geo_resolution = null;
var lz_geo_resolution;
var lz_geo_resolution_needed = false;
var lz_user_id = "4da0e03999";
var lz_browser_id = "d1edcdfef3";
var lz_server_id = "25424";
var lz_geo_url = "https://ssl.livezilla.net/geo/resolute/?aid=&sid=NTMxYWZiNDc=&dbp=1";
var lz_mip = "119.28.72.xxx";
var lz_oak = '';
var lz_is_tablet = false;



var lz_resources = new Array(false,false,false,false,false,false);
LazyLoad=function(x,h){function r(b,a){var c=h.createElement(b),d;for(d in a)a.hasOwnProperty(d)&&c.setAttribute(d,a[d]);return c}function k(b){var a=i[b],c,d;if(a){c=a.callback;d=a.urls;d.shift();l=0;if(!d.length){c&&c.call(a.context,a.obj);i[b]=null;j[b].length&&m(b)}}}function w(){if(!e){var b=navigator.userAgent;e={async:h.createElement("script").async===true};(e.webkit=/AppleWebKit\//.test(b))||(e.ie=/MSIE/.test(b))||(e.opera=/Opera/.test(b))||(e.gecko=/Gecko\//.test(b))||(e.unknown=true)}}function m(b,
a,c,d,s){var n=function(){k(b)},o=b==="css",f,g,p;w();if(a){a=typeof a==="string"?[a]:a.concat();if(o||e.async||e.gecko||e.opera)j[b].push({urls:a,callback:c,obj:d,context:s});else{f=0;for(g=a.length;f<g;++f)j[b].push({urls:[a[f]],callback:f===g-1?c:null,obj:d,context:s})}}if(!(i[b]||!(p=i[b]=j[b].shift()))){q||(q=h.head||h.getElementsByTagName("head")[0]);a=p.urls;f=0;for(g=a.length;f<g;++f){c=a[f];if(o)c=r("link",{charset:"utf-8","class":"lazyload",href:c,rel:"stylesheet",type:"text/css"});else{c=
r("script",{charset:"utf-8","class":"lazyload",src:c});c.async=false}if(e.ie)c.onreadystatechange=function(){var t=this.readyState;if(t==="loaded"||t==="complete"){this.onreadystatechange=null;n()}};else if(o&&(e.gecko||e.webkit))if(e.webkit){p.urls[f]=c.href;u()}else setTimeout(n,50*g);else c.onload=c.onerror=n;q.appendChild(c)}}}function u(){var b=i.css,a;if(b){for(a=v.length;a&&--a;)if(v[a].href===b.urls[0]){k("css");break}l+=1;if(b)l<200?setTimeout(u,50):k("css")}}var e,q,i={},l=0,j={css:[],js:[]},
v=h.styleSheets;return{css:function(b,a,c,d){m("css",b,a,c,d)},js:function(b,a,c,d){m("js",b,a,c,d)}}}(this,this.document);

var getResJS = "?t=js&1=jscript/jsglobal.min.js&2=jscript/jsbox.min.js&3=jscript/jstrack.min.js";
var getResCSS = "?t=css&1=style.min.css";

if(lz_overlay_chat_available)
{
    getResCSS += "&2=overlays/chat/style.min.css";
    getResJS += "&4=overlays/chat/jscript/jsextern.min.js";
}

LazyLoad.js(lz_poll_server + "resource.php" + getResJS, function () {lz_resources[0]=true;lz_resources[1]=true;lz_resources[2]=true;lz_resources[4]=true;});
LazyLoad.css(lz_poll_server + "resource.php" + getResCSS, function (arg) {}, '');

lz_tracking_start_system();
function lz_tracking_start_system()
{
	if(!lz_resources[0] || !lz_resources[1] || !lz_resources[2] || (lz_overlay_chat_available && (!lz_resources[4])))
	{
		setTimeout(lz_tracking_start_system, 50);
		return;
	}

	lz_geo_resolution = new lz_geo_resolver();
	window.onerror=lz_global_handle_exception;
	
	lz_session = new lz_jssess();
	lz_session.Load();


    if(location.search.indexOf("lzcobrowse") != -1)
    {
        lz_session.Save();
        lz_tracking_poll_server();
        return;
    }

	try
	{
		if(window.opener != null && typeof(window.opener.lz_get_session) != 'undefined')
		{
			lz_session.UserId = window.opener.lz_get_session().UserId;
			lz_session.GeoResolved = window.opener.lz_get_session().GeoResolved;
		}
	}
	catch(ex)
	{
		// ACCESS DENIED
	}
	
	lz_session.Save();
	if(!lz_tracking_geo_resolute())
		lz_tracking_poll_server();
}var lz_default_info_text = "Press <em>ENTER</em> to send your message";
var lz_text_connecting_info = "Trying to connect you ...";
var lz_text_save = "Save";
var lz_text_back = "Back";
var lz_text_send_message = "Send Message";
var lz_text_start_chat = "Start Chat";
var lz_text_chat_header = "Start Chat";
var lz_text_ticket_header = "Please leave a message";
var lz_text_please_select = "Please select";
var lz_text_chat_information = "Welcome to our Online Support! To help us serve you better, please provide some information before initiating the chat with a representative.";
var lz_text_ticket_information = "Leave a message and we will come back to you shortly. Please provide as many details as possible along with your contact information.";
var lz_text_leave_message = "Leave Message";
var lz_force_group_select = false;
var lz_hide_group_chat = false;
var lz_hide_group_ticket = false;
var lz_guest_name = "Guest";
var lz_header_online = "V2UgYXJlIG9ubGluZSAtIGNoYXQgd2l0aCB1cw==";
var lz_header_offline = "UGxlYXNlIGxlYXZlIGEgbWVzc2FnZQ==";
var lz_ec_header = "UXVlc3Rpb25zPw__";
var lz_ec_sub_header = "Q2hhdCB3aXRoIHVzIGxpdmU_";
var lz_ec_o_header = "UXVlc3Rpb25zPw__";
var lz_ec_o_sub_header = "UGxlYXNlIGxlYXZlIGEgbWVzc2FnZQ__";
var lz_ec_type = 1;
var lz_ec_image = "<!--ec_image-->";
var lz_ec_o_image = "<!--ec_o_image-->";
var lz_mode_change_details = false;
var lz_mode_create_ticket = false;
var lz_mode_chat_login = false;
var lz_mode_ticket_feedback = false;
var lz_color = "#008000";
var lz_color_darker = "#004e00";
var lz_border_radius = 6;
var lz_tickets_external = false;
var lz_chats_external = false;
var lz_lang_fill_required_fields = "Please fill all required fields.";
var lz_lang_options = "Options";
var lz_post_html = "PFRBQkxFIGNsYXNzPSJsel9vdmVybGF5X2NoYXRfbWVzc2FnZSIgc3R5bGU9IndpZHRoOmF1dG87Ij4KICAgIDxUUj4KICAgICAgICA8dGQgY29sc3Bhbj0iMiI+PGRpdiBjbGFzcz0ibHpfb3ZlcmxheV9jaGF0X21lc3NhZ2VfdGltZSIgc3R5bGU9InRleHQtYWxpZ246bGVmdDsiPjwhLS10aW1lLS0+PC9kaXY+PC90ZD4KICAgIDwvVFI+CiAgICA8VFI+CiAgICAgICAgPFREIHN0eWxlPSJjb2xvcjojNDQ0O2ZvbnQtd2VpZ2h0OmJvbGQ7IiBuYW1lPSJsel9jaGF0X292ZXJsYXlfZXh0ZXJuYWxfbmFtZSIgY2xhc3M9Im9wZXJhdG9yX25hbWUiPjwhLS1uYW1lLS0+PC9URD4KICAgICAgICA8VEQ+PGRpdiBvbkNsaWNrPSJwYXJlbnQubHpfY2hhdF9zd2l0Y2hfZGV0YWlscyhmYWxzZSk7IiBjbGFzcz0ibHpfb3ZlcmxheV9jaGF0X2NoYW5nZSI+Jm5ic3A7RURJVDwvZGl2PjwvVEQ+CiAgICA8L1RSPgo8L1RBQkxFPgoKPFRBQkxFIGNsYXNzPSJsel9vdmVybGF5X2NoYXRfbWVzc2FnZV9hZGQiPgogICAgPFRSPgogICAgICAgIDxURCBjbGFzcz0ibHpfb3ZlcmxheV9jaGF0X21lc3NhZ2VfZXh0ZXJuYWwgbHpfb3ZlcmxheV9jaGF0X21lc3NhZ2VfZmllbGQiPjwhLS1tZXNzYWdlLS0+PC9URD4KICAgIDwvVFI+CjwvVEFCTEU+Cg==";
var lz_add_html = "PFRBQkxFIGNsYXNzPSIgbHpfb3ZlcmxheV9jaGF0X21lc3NhZ2VfYWRkIj4KICAgIDxUUj4KICAgICAgICA8VEQgY2xhc3M9Imx6X292ZXJsYXlfY2hhdF9tZXNzYWdlX2V4dGVybmFsIGx6X292ZXJsYXlfY2hhdF9tZXNzYWdlX2ZpZWxkIj48IS0tbWVzc2FnZS0tPjwvVEQ+CiAgICA8L1RSPgo8L1RBQkxFPg==";
var lz_tr_api_key = "";
var lz_trans_into = "en";
var lz_no_ticket_when_online = false;
var lz_shared_kb_auto_search = true;
var lz_shared_kb_last_search_time = 0;

try
{
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML += '.lz_con_inf {color: #004e00 !important;font-weight:bold;}';
    document.getElementsByTagName('head')[0].appendChild(style);
}
catch(ex)
{

}

function lz_chat_get_parameters(_ws)
{
    return lz_getp_track + ((_ws && lz_poll_website != "") ? "&ws="+lz_poll_website : "");
}

function lz_chat_change_state(_click,_required)
{
	if(!lz_chat_state_expanded && lz_chat_data.CurrentApplication!="chat")
	{
        if(lz_chat_handle_ticket_forward(_click) || lz_chats_external)
            return;
	}
    else if(!lz_chat_state_expanded && lz_chat_data.CurrentApplication=="chat" && lz_chats_external)
    {
        void(window.open(lz_poll_server + 'chat.php?acid=MQ_&' + lz_chat_get_parameters(true),'','width='+lz_window_width+',height='+lz_window_height+',left=100,top=100,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))
        return;
    }
	else if(lz_chat_invite_timer != null)
	{
		clearTimeout(lz_chat_invite_timer);
	}

	if(document.getElementById("lz_chat_invite_id") != null && lz_chat_state_expanded && _click && _required)
		lz_chat_decline_request(document.getElementById("lz_chat_invite_id").value,false,false);
	
	if(!_required && lz_chat_state_expanded)
		return false;

    if(lz_chat_state_expanded)
        document.getElementById('lz_chat_text').blur();

    if(lz_eye_catcher != null && lz_session.ECH != "1" && document.getElementById("lz_overlay_chat") != null)
    {
        document.getElementById("lz_eye_catcher").style.left = document.getElementById("lz_overlay_chat").style.left;
        document.getElementById('lz_overlay_eyecatcher').style.display = (!lz_chat_state_expanded) ? 'none' : '';
    }

	lz_chat_state_expanded = !lz_chat_state_expanded;
	lz_session.OVLCState = lz_chat_state_expanded ? "1" : "0";


    if(lz_chat_state_expanded)
    {
        setTimeout("lz_chat_set_focus();",100);
        lz_chat_set_element_width();
        lz_chat_scoll_down();
    }

	if(_click)
		lz_chat_update_waiting_posts(0);

    if(!lz_is_tablet)
        if(!lz_chat_state_expanded)
        {
            lz_overlay_chat.lz_livebox_div.style.top="";
            lz_overlay_chat.lz_livebox_div.style.bottom= lz_overlay_chat.lzibst_margin[3] + "px";
        }
        else
        {
            lz_overlay_chat.lz_livebox_div.style.top=(lz_global_get_window_height()-lz_overlay_chat_height-lz_overlay_chat.lzibst_margin[3]) + "px";
            lz_overlay_chat.lz_livebox_div.style.bottom= "";
        }

	lz_session.Save();
    lz_chat_update_css();

	document.getElementById("lz_chat_state_change").style.display = (lz_chat_state_expanded) ? "" : "none";
    //document.getElementById("lz_chat_kb_match_info").style.display = "none";
	lz_chat_update_waiting_posts(0,false);
	document.getElementById("lz_chat_waiting_messages").style.display = "none";
}

function lz_chat_change_widget_application(_chat)
{
    if(!_chat && (lz_tickets_external || 1 == 1) && lz_chat_state_expanded)
    {
        lz_chat_change_state(false,true);
    }
    else if(_chat && lz_chats_external && lz_chat_state_expanded)
    {
        lz_chat_change_state(false,true);
    }
}

function lz_chat_handle_ticket_forward(_click)
{
    if(_click && false && 1 == 1)
    {
        void(window.open('https://www.quickservers.com/en/contact.php','','width='+lz_window_width+',height='+lz_window_height+',left=100,top=100,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))
        return true;
    }
    else if(_click && 1 == 1)
    {
        window.location.href = 'https://www.quickservers.com/en/contact.php';
        return true;
    }
    if(_click && lz_tickets_external)
    {
        void(window.open(lz_poll_server + 'chat.php?acid=MQ_&' + lz_chat_get_parameters(true),'','width='+lz_window_width+',height='+lz_window_height+',left=100,top=100,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))
        return true;
    }
    return false;
}

function lz_chat_update_css()
{
    document.getElementById('lz_chat_content').style.display = (!lz_chat_state_expanded) ? 'none' : '';
    document.getElementById('lz_chat_overlay_main').style.borderRadius = (!lz_chat_state_expanded) ? lz_border_radius + 'px '+lz_border_radius+'px 0 0' : lz_border_radius + 'px';
    document.getElementById("lz_chat_overlay_text").style.cursor = (lz_chat_state_expanded) ? "move" : "pointer";
    document.getElementById("lz_chat_overlay_main").style.cursor = (lz_chat_state_expanded) ? "" : "default";
    lz_overlay_chat.lz_livebox_div.style.height = (lz_chat_state_expanded) ? Math.max(lz_overlay_chat_height,lz_overlay_chat_height_extended) + "px" : "31px";
    lz_overlay_chat.lz_livebox_div.style.zIndex = (lz_chat_state_expanded) ? 99999 : 9999;
    lz_overlay_chat.lz_livebox_div.style.borderRadius = lz_border_radius + "px";

    document.getElementById('lz_chat_overlay_options_box').style.width = (lz_overlay_chat_width-45) + "px";
    document.getElementById('lz_chat_overlay_options_box').style.height = (Math.min(lz_overlay_chat_height-200,300)) + "px";

    if(false)
        lz_overlay_chat.lz_livebox_div.style.boxShadow = "0px 0px 0px ";

    if(!lz_chat_state_expanded)
    {
        lz_overlay_chat.lz_livebox_div.style.borderBottomRightRadius = "0px";
        lz_overlay_chat.lz_livebox_div.style.borderBottomLeftRadius = "0px";
    }
}

function lz_chat_set_init()
{
	lz_external.Id = "<!--system_id-->";
	lz_chat_detect_sound();
	document.getElementById('lz_chat_overlay_options_sound').checked = lz_sound_available && lz_session.OVLCSound==1;

    lz_change_name = lz_global_base64_url_decode("");
    lz_change_email = lz_global_base64_url_decode("");

    if(lz_session.TransFrom != "")
        lz_chat_set_translation(null,lz_global_base64_encode(lz_session.TransFrom),null);
}

