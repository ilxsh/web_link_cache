
;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.table',{
        desc:"插入表格",
        row_up:"上移列",
        row_down:"下移列",
        col_left:"向左移動欄",
        col_right:"向右移動欄"
    });
    tinyMCE.addI18n('zh.common',{
        edit_confirm:"是否要對這個表單使用 WYSIWYG 模式？",
        apply:"套用",
        insert:"插入",
        update:"更新",
        cancel:"取消",
        close:"關閉",
        browse:"瀏覽",
        class_name:"級別",
        not_set:"-- 未設定 --",
        clipboard_msg:"在 Mozilla 與 Firefox 中無法使用複製 / 剪下 / 貼上。\n您想要瞭解有關這問題的詳細資訊嗎？",
        clipboard_no_support:"您的瀏覽器目前不支援，請改用鍵盤快速鍵。",
        popup_blocked:"抱歉，我們注意到您的彈出式攔截器已將提供應用程式功能的視窗停用。您必須停用本站的彈出式攔截工具，才能完整使用此工具。",
        invalid_data:"錯誤: 輸入的值無效，已用紅色標示。",
        more_colors:"更多色彩",
        close_modal:"關閉快顯"
    });
    tinyMCE.addI18n('zh.spellchecker',{
        desc:"切換拼字檢查器",
        menu:"拼字檢查器設定",
        ignore_word:"忽略字詞",
        ignore_words:"全部忽略",
        langs:"語言",
        wait:"請稍候...",
        sug:"建議",
        no_sug:"無建議",
        no_mpell:"找不到拼字錯誤。",
        learn_word:"學習字詞"
    });
    tinyMCE.addI18n('zh.aria', {
        rich_text_area: "RTF 文字區域。"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivelists',{
        list_style : '清單樣式',
        list_style_hdr : '清單樣式：',
        inherit : "繼承",
        none : "無",
        'default' : "預設",
        ur : "Upper Roman",
        lr : "Lower Roman",
        dz : "前置字元為零的小數",
        d  : "小數點",
        ua : "Upper Alpha",
        la : "Lower Alpha",
        lg : "Lower Greek",
        ki : "片假名字符",
        hii: "平假名順序",
        k  : "片假名",
        hi : "Hiragana",
        ci : "Cjk-Ideographic",
        g  : "Georgian",
        a  : "美國",
        he : "希伯來文",
        s  : "正方形",
        c  : "循環",
        di : "磁碟"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivestyle',{
        title : '樣式',
        paragraph : '段落',
        header : '標題'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivemacros',{
        unlink : "解除連結",
        add : '插入',
        remove : '移除',
        unquote : '引文結束',
        properties : '設定',
        title : '設定',
        presets : '預設',
        save: "儲存",
        params : '參數',
        'macro.toc': "目錄",
        'macro.quote': "引述",
        'macro.user': "使用者",
        'macro.youtube': "YouTube",
        'macro.youtube.attr.__default_attr': "URL 或視訊 ID",
        'macro.youtube.attr.width': "寬度",
        'macro.youtube.attr.height': "高度",
        'macro.code': "語法醒目提示",
        'macro.code.presets': "格式",
        'macro.code.attr.__default_attr': "格式",
        'macro.code.preset.plain': "簡單",
        'macro.code.preset.sql': "SQL",
        'macro.code.preset.java': "Java",
        'macro.code.preset.html': "插入原始 HTML",
        'macro.code.preset.xml': "XML",
        'macro.alert': "警示",
        'macro.alert.preset.success': "成功",
        'macro.alert.preset.info': "資訊",
        'macro.alert.preset.warning': "警告",
        'macro.alert.preset.danger': "危險",
        'macro.flag': "旗標",
        'macro.flag.preset.new': "新增",
        'macro.flag.preset.updated': "已更新",
        'macro.emoticon.presets': "表情符號",
        'macro.emoticon.preset.angry': "憤怒",
        'macro.emoticon.preset.blush': "臉紅",
        'macro.emoticon.preset.confused': "困惑的",
        'macro.emoticon.preset.cool': "酷",
        'macro.emoticon.preset.cry': "哭泣",
        'macro.emoticon.preset.devil': "魔鬼",
        'macro.emoticon.preset.grin': "露齒而笑",
        'macro.emoticon.preset.happy': "高興",
        'macro.emoticon.preset.laugh': "笑臉",
        'macro.emoticon.preset.love': "喜愛",
        'macro.emoticon.preset.mischief': "錯誤",
        'macro.emoticon.preset.plain': "簡單",
        'macro.emoticon.preset.sad': "悲傷",
        'macro.emoticon.preset.shocked': "震驚",
        'macro.emoticon.preset.silly': "淘氣",
        'macro.emoticon.preset.wink': "眨眼",
        'macro.emoticon.preset.info': "資訊",
        'macro.emoticon.preset.plus': "附加",
        'macro.emoticon.preset.minus': "減",
        'macro.emoticon.preset.alert': "警示",
        'macro.emoticon.preset.check': "檢查",
        'macro.emoticon.preset.x': "X"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivemacros',{
        add : '插入',
        remove : '移除',
        properties : '設定',
        title : '設定',
        params : '參數',
        presets : '預設',
        save: "儲存"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jiveattachment',{
        button_label : '附加',
        removeAttachmentButton : '移除'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jiveapps',{
        edit_app : '!應用程式'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivemention',{
        mention_button_lbl : '@提及',
        no_notification : '由於他們無法存取此內容，將收不到此提及的通知。',
        secret_group_mention : '為秘密群組。能夠檢視此內容的任何人可以查看秘密群組的名稱。',
        restricted_content_mention : '位於限制於成員的群組內。能夠檢視此內容的任何人可以查看物件的名稱。',
        select_badge : '選擇徽章'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivetable',{
        'transparent': "透明"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivetablecontrols',{
        addRows : '新增 {0} 列 {1}',
        ok : '確定',
        add : '新增',
        rows : '列',
        add_row_before : '新增上方列',
        add_row_after : '新增下方列',
        delete_row : '刪除列',
        duplicate_row : '複製列',
        add_col_before : '新增左側欄',
        add_col_after : '新增右側欄',
        delete_col : '刪除欄',
        duplicate_col : '複製欄'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivetablebutton',{
        'header': "標題"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jiveemoticons',{
        title : '插入表情符號',
        desc : '表情符號'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivelink',{
        link_desc : '插入連結',
        unlink : '解除連結',
        bareUrl : '裸露 URL',
        autoResolve : '自動填入標題',
        menu_hdr : '連結：'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jiveimage',{
        link_desc : '插入影像',
        menu_hdr : '影像:',
        float_right : '向右浮動',
        float_left : '向左浮動',
        inline : '顯示內嵌',
        original_size : '原始大小',
        please_wait : '圖片上傳中請稍候，然後重試。'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivequote',{
        link_desc : '引述之前的訊息'
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivevideo',{
        link_desc : '插入視訊'
    });
});


;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.jivevideo',{
        num1: "1. ",
        num2: "2. ",
        title_new:"插入視訊",
        general_props:"視訊內容",
        site_title:"選取視訊站台",
        embed_title: "輸入視訊資訊",
        embed: "視訊 URL 或內嵌代碼（範例：http://youtube.com/watch?v=videoIdHere）",
        embed_error : "請輸入有效 URL 或內嵌代碼",
        name_youtube: "YouTube",
        name_vimeo: "Vimeo",
        name_veoh: "優酷",
        name_dailymotion: "Dailymotion",
        name_google: "Google",
        name_kaltura: "Kaltura",
        name_brightcove: "Brightcove",
        name_showandshare: "顯示和分享"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.tabletoolbar',{
        title : '插入表格'
    });
});

;

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.table_dlg',{
        title_new:"插入表格",
        title_edit:"修改表",
        merge_cells_description: "選擇右邊的儲存格數字以及您想要合併的目前儲存格下方的數字。如果您不想在指定指示中合併任何儲存格，請選擇「0」。"
    });
});

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.html',{
        desc:"切換 HTML 模式"
    });
});

;

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.advimage_dlg',{
        dialog_title:"插入影像",
        src:"URL",
        align_inline:"標準",
        align_nowrap:"不換行",
        insert_desc : "使用下列表單從網頁插入遠端影像至您的討論區、文件、部落格貼文或是評論。",
        from_the_web: "從 Web",
        example: "範例",
        insert: "插入影像"
    });
});

;

;

;
require([
    'tinyMCE'
], function(tinyMCE) {
    tinyMCE.addI18n('zh.advanced',{
        style_select: "樣式",
        font_size: "字型大小",
        fontdefault: "字型系列",
        block: "格式",
        paragraph: "段落",
        div: "Div",
        address: "地址",
        pre: "預先格式化",
        h1: "標題 1",
        h2: "標題 2",
        h3: "標題 3",
        h4: "標題 4",
        h5: "標題 5",
        h6: "標題 6",
        blockquote: "Blockquote",
        code: "程式碼",
        samp: "代碼範例",
        dt: "定義字詞",
        dd: "定義說明",
        bold_desc: "粗體 (Ctrl+B)",
        italic_desc: "斜體 (Ctrl+I)",
        underline_desc: "底線 (Ctrl+U)",
        striketrough_desc: "刪除線",
        justifyleft_desc: "靠左對齊",
        justifycenter_desc: "置中對齊",
        justifyright_desc: "靠右對齊",
        justifyfull_desc: "左右對齊",
        bullist_desc: "無序清單",
        numlist_desc: "重新排序清單",
        outdent_desc: "凸排",
        indent_desc: "縮排",
        undo_desc: "重作(Ctrl+Z)",
        redo_desc: "重做 (Ctrl+Y)",
        link_desc: "插入 / 編輯連結",
        unlink_desc: "解除連結",
        image_desc: "插入/編輯影像",
        cleanup_desc: "清理雜亂代碼",
        code_desc: "編輯 HTML 原始檔",
        sub_desc: "下標",
        sup_desc: "上標",
        hr_desc: "插入水平尺規",
        removeformat_desc: "移除格式",
        custom1_desc: "在此輸入您的自訂描述",
        forecolor_desc: "選擇文字顏色",
        backcolor_desc: "選擇背景顏色",
        charmap_desc: "插入自訂字元",
        visualaid_desc: "切換導線 / 不可見元素",
        anchor_desc: "插入/編輯錨點",
        cut_desc: "剪下",
        copy_desc: "複製",
        paste_desc: "貼上",
        image_props_desc: "影像內容",
        newdocument_desc: "新文件",
        help_desc: "說明",
        blockquote_desc: "Blockquote",
        clipboard_msg: "在 Mozilla 與 Firefox 中無法使用複製 / 剪下 / 貼上。\n您想要瞭解有關這問題的詳細資訊嗎？",
        path: "路徑",
        newdocument: "確定要清除所有內容？",
        toolbar_focus: "跳至工具按鈕 - Alt+Q",
        more_colors: "更多色彩",

        spellchecker_desc: "檢查拼字",
        insert_image_desc: "插入影像",
        edit_image_desc: "編輯影像",

        colorpicker_apply:"套用",
        colorpicker_color:"色彩",
        colorpicker_picker_tab:"選擇器",
        colorpicker_palette_tab:"調色盤",
        colorpicker_named_tab:"已命名",
        colorpicker_name:"名稱",
        colorpicker_picker_title:"色彩選擇器",
        colorpicker_palette_title:"調色盤",
        colorpicker_named_title:"指名的色彩",
        colorpicker_title:"色彩選擇器"
    });
});

;

;
