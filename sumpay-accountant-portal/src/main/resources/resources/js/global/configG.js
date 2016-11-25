/*定义按键不可连点事件*/
var _timer = {};
function delay_till_last(id, fn, wait) {
    if (_timer[id]) {
        window.clearTimeout(_timer[id]);
        delete _timer[id];
    }

    return _timer[id] = window.setTimeout(function() {
        fn();
        delete _timer[id];
    }, wait);
}
/** 正则表达式获取参数*/
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
} 

/** 个人信息点击 */ 
$("#information").click(function(){ 
	var hUrl = window.location.pathname;
 	var hUrlStr = GetQueryString("hUrl");
 	if(hUrl == "/account/viewImformation.vhtml"){
 		if(hUrlStr==null || hUrlStr == '' || hUrlStr == undefined ){
 		    window.location="../account/viewImformation.vhtml?hUrl="+hUrl;  
 		}else{
 		    window.location="../account/viewImformation.vhtml?hUrl="+hUrlStr;  
 		} 
	}else{
	    window.location="../account/viewImformation.vhtml?hUrl="+hUrl;  
	}
})
/** 密码点击 */ 
$("#updatePass").click(function(){
	var hUrl = window.location.pathname;
 	var hUrlStr = GetQueryString("hUrl");
 	if(hUrl == "/account/updatePassword.vhtml"){
 		if(hUrlStr==null || hUrlStr == '' || hUrlStr == undefined ){
 		    window.location="../account/updatePassword.vhtml?hUrl="+hUrl;  
 		}else{
 		    window.location="../account/updatePassword.vhtml?hUrl="+hUrlStr;  
 		} 
	}else{
	    window.location="../account/updatePassword.vhtml?hUrl="+hUrl;  
	}
})

/*header*/
function drawbreadcrumb(arr){//json为面包屑数组
    $('.breadcrumb').append('<span class="glyphicon glyphicon-home">&nbsp;</span>')
    for(var i=0; i<arr.length;i++){
        $('.breadcrumb').append('<li>'+arr[i]+'</li>')
    }
}

//function drawtitle(){//json为面包屑数组
//    var b = $('#bbar');
//	var second = $(b.find('.bar-sublist li a.active')[0]).parent()[0].textContent;
//    var first = b.find('.bar-sub>a.active span').eq(1)[0].innerText;
//	var arr = [first,second];
//	drawbreadcrumb(arr);
//}
//当前用户信息
    var information;
    $.ajax({
        type:"GET",
        url:'../account/getSession.json',
        dataType:"json",
        contentType:"application/json;charset=UTF-8",
        async:false,
        success:function(json){
            information = json.result;
            if(null != information && "" != information){
                $('#dropdown-toggle i').append(information.name);               
            }
        }
    });
//点击返回清除本地缓存
$('#callBack').click(function(){
    sessionStorage.removeItem(information.oid);
});
/* bar */
jQuery(function() {
            //请求bar数据
            var ioc = ['../images/bar/dukang.png',
            '../images/bar/luorigong.png',
            '../images/bar/armory.png',
            '../images/bar/alimonitor.png',
            '../images/bar/messia.png',
            '../images/bar/yingyongyunwei.png',
            '../images/bar/wuliziyuan.png',
            '../images/bar/shezhi.png',
            '../images/produce/alimonitor.jpg'];
        if(sessionStorage.getItem(information.oid)){
                json=JSON.parse(sessionStorage.getItem(information.oid));
                drawlistbar(json);

        }else{
            $.ajax({
                type:'POST',
                async: false,
                url:'../account/getFunctionMenu.json',
                data : {
                	oid :information.oid,
                	productName : '系统设置'
                },
                 dataType:"json",
                success:function(json){
                    drawlistbar(json);
                    sessionStorage.setItem(information.oid,JSON.stringify(json));
                }
            });
                
        }

    //绘制左侧列表方法
    function drawlistbar(json){
                if(json.result!=''){
                    $('.bar-logo .bar-ico img').attr({src:ioc[7]});
                    $('.bar-logo .bar-text').text(json.result[0].name);
                    for(var i=0;i<json.result[0].children.length;i++){
                        //判断图标
                        if(json.result[0].children[i].name=='设置'){
                            var ico='glyphicon glyphicon-cog';
                        }else if(json.result[0].children[i].name=='权限管理' ){
                            var ico='glyphicon glyphicon-filter'
                           
                        }else{
                            var ico='glyphicon glyphicon-folder-open'   
                        }

                        $('.bar-list').append('<li class="bar-sub"><a href="javascript:;"><span class="'+ico+'"></span><span >'+'&nbsp;&nbsp;&nbsp;&nbsp;'+json.result[0].children[i].name+'</span><i class=" bar-status glyphicon glyphicon-menu-right"></i></a><ul class="bar-sublist"></ul></li>');
                        for(var j=0;j<json.result[0].children[i].children.length;j++){
                            var url2=json.result[0].children[i].children[j].url;
                            var name=json.result[0].children[i].children[j].name;
                            $($('.bar-sublist')[i]).append('<li><a href=..'+url2+'>'+name+'</a></li>');
                        }
                    }
                }
    }
    var body = $('body');
    var b = $('#bbar');

    var logo = $('.header-logo-link');
    var content = $('#content');

    b.find('.bar-sub>a').on('click', function (e) {
        e.preventDefault();
        if (body.hasClass('minibar')) return;
        var me = $(this);
        var li = me.parent();
        var sub = li.find('.bar-sublist');
        if (me.hasClass('active')) {
            sub.slideUp('fast', function () {
                me.removeClass('active');
                me.find('a.active').removeClass('active');
            });
            me.find('.bar-status').removeClass('active');
        } else {
            b.find('.bar-sub>a.active').trigger('click');//关闭其他
            me.addClass('active');
            if (b.hasClass('no-trans')) sub.show();
            else sub.slideDown('fast');
            me.find('.bar-status').addClass('active');
        }
    });

    $('.bar-sub').on('mouseenter', function () {
        if (!body.hasClass('minibar')) return;
        var me = $(this);
        var sub = me.find('.bar-sublist');
        sub.fadeIn('fast');
        me.children('a').addClass('hover');
    }).on('mouseleave', function () {
        if (!body.hasClass('minibar')) return;
        var me = $(this);
        var sub = me.find('.bar-sublist');
        sub.fadeOut('fast');
        me.children('a').removeClass('hover');
    });

    $('.header-menu-switch').on('click', function (e) {
        e.preventDefault();
        var me = $(this);
        var i = me.find('i');
        if (body.hasClass('minibar')) {
            b.find('.bar-sub>a.active').next().show();
            b.find('.bar-sub>a.active .bar-status').addClass('active');
            body.removeClass('minibar');
            setNavStatus(0);
        } else {
            b.find('.bar-status').removeClass('active');
            b.find('.bar-sublist').hide();
            body.addClass('minibar');
            setNavStatus(1);
        }
    });

    function setNavStatus(v) {//0为默认展开，1为关闭
        v = v || 0;
        var date = new Date();
        date.setTime(+date + 365 * 24 * 3600 * 1000);
        document.cookie = '_nav_status=' + v + '; expires=' + date.toUTCString() + '; path=/';
    }

    //默认选中
    var model = window.location.href.split("\/")[3]
    $.each(b.find('.bar-sub a'),function(k,v){
		var model_this = v.toString().split("\/")[3];
    	if(model == model_this || v == window.location.href ){
	        var selectedA = $(v);
	        var selectedLi = selectedA.parents('.bar-sub');
	        if (selectedLi[0]) {
	            b.addClass('no-trans');
	            selectedLi.children('a').trigger('click').addClass('active');
	            selectedA.addClass('active');
	            setTimeout(function () {
	                b.removeClass('no-trans')
	            }, 0);
	        } else {
	            selectedA.addClass('active');
	        }
	        return false;
    	}
    });
    var barMenu=null;
    $('.bar-menu').click(function () {
        $('#bar-view').fadeToggle("fast", "linear");
        if(barMenu==null){
            $.ajax({
                type:"GET",
                url:'../product/product.pjson',
                dataType:"json",
                async:false,
                success:function(json){
                    if(json){
                        barMenu=json.result;                       
                    }
                }
            })
        }
        drawbar(barMenu);
    })    
    function drawbar(json) {
        $('#bar-table').empty();
        for (var i = json.length/3; i > 0; i--) {
            $('#bar-table').append('<tr></tr>');
            for (var j=0; j<3; j++) {
                $($('#bar-table tr')[json.length/3-i]).append('<td></td>')
            }
        }
        for (var i = 0; i < json.length; i++) {
            $($('#bar-table td')[i]).append('<a href="'+json[i].url+'"><img src='+json[i].imgsrc+'>'+'<p>'+json[i].code+'</p></a>')

        }
        
    }

});


//工具方法:发送ajaxPost请求
function getData( url,Obj,fn){
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        contentType:"application/json;charset=UTF-8",
        data:Obj,
        success:function(json){
            fn(json);
        }
    })
}

function postData( url,Obj,fn){
    Obj=JSON.stringify(Obj);
    $.ajax({
        type:"POST",
        url:url,
        dataType:"json",
        contentType:"application/json;charset=UTF-8",
        data:Obj,
        success:function(json){
            fn(json);
        },
        error:function(){
            $.alert("提示信息", "操作失败", function(){}); 
        }
    })
}
//全局返回结果提示框
function alertMsg(json,url){
    if(json.restCode==200){
        $.alert({
            title:'提示信息',
            body:'成功',
            closebtn: false,
            backdrop:'static',
            timeout:2000,
            hidden:function(){
                window.location=url;
            }
        });
    }else{
        $.alert({
            title:'提示信息',
            body:'失败',
            closebtn: false,
            backdrop:'static',
            timeout:2000,
            hidden:function(){
            }
        });
    } 
}
//修改原型方法
 String.prototype.trim=function(){
　　    return this.replace(/(^\s*)|(\s*$)/g, "")
  };
//页面接参方法
    function GetRequest() { 
        var url = location.search; //获取url中"?"符后的字串 
        var theRequest = new Object(); 
        if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
        } 
        } 
        return theRequest; 
    }
//全局校验添加规则
    jQuery.validator.addMethod("stringCheck", function(value, element) {
        return this.optional(element) ||(/^\w+$/).test(value);
        }, "只能包含数字、字母与下划线");


    jQuery.validator.addMethod("passwordq", function(value, element) {
        var string=value;
        var id=element.id;
        AuthPasswd(string);
        
        function AuthPasswd(string) {
            if(string.length >=6) {
                if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                    noticeAssign(1);
                }else if(/[a-zA-Z]+/.test(string) || /[0-9]+/.test(string) || /\W+\D+/.test(string)) {
                    if(/[a-zA-Z]+/.test(string) && /[0-9]+/.test(string)) {
                        noticeAssign(-1);
                    }else if(/\[a-zA-Z]+/.test(string) && /\W+\D+/.test(string)) {
                        noticeAssign(-1);
                    }else if(/[0-9]+/.test(string) && /\W+\D+/.test(string)) {
                        noticeAssign(-1);
                    }else{
                        noticeAssign(0);
                    }
                }
            }else{
                noticeAssign(null); 
            }
        }
 
        function noticeAssign(num) {
            if(num == 1) {
                $('#progress').empty();
                $('#progress').append('<div class="progress-bar progress-bar-success" style="width: 35%">'+
                        '<span class="sr-only">35% Complete (danger)</span>'+
                    '</div>'+
                    '<div class="progress-bar progress-bar-warning" style="width: 35%">'+
                        '<span class="sr-only">35% Complete (warning)</span>'+
                    '</div>'+
                    '<div class="progress-bar progress-bar-danger" style="width: 30%">'+
                        '<span class="sr-only">30% Complete (success)</span>'+
                    '</div>')
                $('#progress+p').empty();
                $('#progress+p').text('强');
            }else if(num == -1){
                $('#progress').empty();
                $('#progress').append('<div class="progress-bar progress-bar-success" style="width: 35%">'+
                        '<span class="sr-only">35% Complete (danger)</span>'+
                    '</div>'+
                    '<div class="progress-bar progress-bar-warning" style="width: 35%">'+
                        '<span class="sr-only">35% Complete (warning)</span>'+
                    '</div>');
                $('#progress+p').empty();
                $('#progress+p').text('中');
            }else if(num ==0) {
                $('#progress').empty();
                $('#progress').append('<div class="progress-bar progress-bar-success" style="width: 35%">'+
                        '<span class="sr-only">35% Complete (danger)</span>'+
                    '</div>')
                $('#progress+p').empty();
                $('#progress+p').text('弱');
            }else{
                $('#progress').empty();
            }
        }
        function jd(string){
            var j=0;
            if(string.length>=6&&string.length<=20){
                $("td[zx='n1']").empty();
                $("td[zx='n1']").append('<img style="width:20px;height:20px" src="../images/yy.jpg"/>')
            }else{
                $("td[zx='n1']").empty();
                $("td[zx='n1']").append('<img style="width:20px;height:20px" src="../images/ww.jpg"/>')
                j++;
            };
            if(!/[(\s)]/g.test(string)){
                $("td[zx='n2']").empty();
                $("td[zx='n2']").append('<img style="width:20px;height:20px" src="../images/yy.jpg"/>')
            }else{
               $("td[zx='n2']").empty();
                $("td[zx='n2']").append('<img style="width:20px;height:20px" src="../images/ww.jpg"/>')
                j++;
            }
            if(ad(string)){
                $("td[zx='n3']").empty();
                $("td[zx='n3']").append('<img style="width:20px;height:20px" src="../images/yy.jpg"/>')
            }else{
                $("td[zx='n3']").empty();
                $("td[zx='n3']").append('<img style="width:20px;height:20px" src="../images/ww.jpg"/>')
                j++;
            }
            if (j>0) {
                return false;
            }else{
                return true;
            }

        function ad(string){
            var n=0;
            if(/[a-zA-Z]+/.test(string)){
                n++;
            }
            if(/[0-9]+/.test(string)){
                n++;
            }
            if(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)]+/.test(string)){
                n++;
            }
            if(n>=2){
                return  true;
            }else{
                return false;
            }
            }
        }
    return jd(string);
    }, "");

    jQuery.validator.addMethod("myemail", function(value, element) {
    return this.optional(element) ||( /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/).test(value);
    },"请输入正确邮箱");

    jQuery.validator.addMethod("Repeat", function(value, element) {
        var dataValue={}
        dataValue[element.id] = value;
        dataValue.oid=$('#addUser').attr('oid') == null ?$("#oid").val() :$('#addUser').attr('oid')  ;
        dataValue.createUser=information.code;
        var srts = new Array();
        srts = window.location.pathname.split("/");
        var srt=srts[srts.length-2]; 
        var restCode;
        $.ajax({
            type:"POST",
            url:"../"+srt+'/checkProperty.do',
            dataType:"json",
            contentType:"application/json;charset=UTF-8",
            data:JSON.stringify(dataValue),
           async:false,
            success:function(json){
                restCode=json.restCode
            }
        })
        return restCode==200;
    }, "已重复!");

    //重复的密码校验
    jQuery.validator.addMethod("Repass", function(value, element) {
        var dataValue={}
        dataValue[element.id] = value;
        dataValue.oid=$('#addUser').attr('oid');
        var srts = new Array();
        srts = window.location.pathname.split("/");
        var srt=srts[srts.length-2]; 
        var restCode; 
        $.ajax({
            type:"POST",
            url:"../"+srt+'/checkProperty.do',
            dataType:"json",
            contentType:"application/json;charset=UTF-8",
            data:JSON.stringify(dataValue),
           async:false,
            success:function(json){
                restCode=json.restCode
            }
        })
        return restCode==200;
    }, "原密码错误!");

    jQuery.validator.addMethod("noRepass", function(value, element) {
        var dataValue={}
        dataValue.password = value;
        dataValue.oid=$('#addUser').attr('oid');
        var srts = new Array();
        srts = window.location.pathname.split("/");
        var srt=srts[srts.length-2]; 
        var restCode; 
        $.ajax({
            type:"POST",
            url:"../"+srt+'/checkProperty.do',
            dataType:"json",
            contentType:"application/json;charset=UTF-8",
            data:JSON.stringify(dataValue),
           async:false,
            success:function(json){
                restCode=json.restCode
            }
        })
        return restCode!=200;
    }, "新密码与原密码重复");
    jQuery.extend(jQuery.validator.messages,{
        
    });
    // Form 表单数据加载
    function loadData(jsonStr){
        var obj = jsonStr.result;
        var key,value,tagName,type,arr;
        for(x in obj){
            key = x;
            value = obj[x];
            $("[name='"+key+"'],[name='"+key+"[]']").each(function(){
                tagName = $(this)[0].tagName;
                type = $(this).attr('type');
                if(tagName=='INPUT'){
                    if(type=='radio'){
                        $(this).attr('checked',$(this).val()==value);
                    }else if(type=='checkbox'){
                        arr = value.split(',');
                        for(var i =0;i<arr.length;i++){
                            if($(this).val()==arr[i]){
                                $(this).attr('checked',true);
                                break;
                            }
                        }
                    }else{
                        $(this).val(value);
                    }
                }else if(tagName=='SELECT'){
                    $(this).val(value);
                }else if(tagName=='TEXTAREA' ){
                	if( key != "memo"){
                		var showValue = "";
                		if(null != value && "" != value){
                			$.each(value.split(","),function(k,v){
                				showValue += v+"\n";
                			})
                		}
                		$(this).val(showValue);
                	}else{
                		  $(this).val(value);
                	}
                }
                 
            });
        }
    }

