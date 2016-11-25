/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['个人','修改密码']); 
    $('#addUser').attr('oid',information.oid); 

    //表单验证
    $("#addUser").validate({
    	onkeyup: function(element) { if(element.id=='newpassword'){$(element).valid();}},
        rules:{
        	password:{
                required:true,   
                Repass:true
            }, 
            newpassword:{
            	required:true,
            	passwordw:true
            }, 
            repassword:{
               required:true,
               equalTo:'#newpassword',
               noRepass:true
            }
        },
        errorPlacement:function(error,element) {
            error.appendTo(element.parent().next());
        },
        debug:true,
        submitHandler:function(){
            var requestData={
                    accountOid:information.oid,
                    oldPassword:$('#password').val(),
                    newPassword:$('#repassword').val(),
                    accountCode:information.code,
                    mail:information.mail
            }; 
            $.ajax({
                type:"POST",
                url:"../account/updatePassword.do",
                dataType:"json",
                data:requestData,
                success:function(json){
                	var url ;
    				var hUrlStr = GetQueryString("hUrl");
    				if(hUrlStr==null || hUrlStr == '' || hUrlStr == undefined ){
    					url = "../welcome.vhtml";
    				}else{
    					url = ".."+hUrlStr;
    				}  
                 	alertMsg(json,url);  
                 },
                error:function(){
                   $.alertMsg("操作失败"); 
                }
            }) 
        },
        messages:{
        	newpassword:{
                equalTo:"两次密码不一致"
            },
            repassword:{
                equalTo:"两次密码不一致"
            }
        }
    });
    $('#newpassword').tooltip({ 
        trigger:'focus',
        placement:'right',
        title:'<div style="font-weight:bold;font-size:16px">安全程度</div><div id="progress"class="progress lt"style="width:80%">'+
                '</div><p class="lt" style="margin-left: 20px;font-weight:bold;font-size:15px"></p>'+
                '<table><tr><td zx="n1"style="width:20px;height:20px"></td><td>6到20个字符</td></tr><tr><td zx="n2"></td><td>只能包含字母,数字以及标点符号<br/>(除空格)</td></tr><tr><td zx="n3"></td><td>字母,数字和符号至少包含两种</td></tr></table>'
    });
        jQuery.validator.addMethod("passwordw", function(value, element) {
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
    //点击确定提交表单
    $(".pLefts").on('click', function() {
        delay_till_last('myclick', function() {
            $('#addUser').submit();
        }, 300);
    });
    //点击取消回到上一页
    $(".pLefts_1").click(function(){
    	var hUrlStr = GetQueryString("hUrl")
    	if(hUrlStr==null || hUrlStr == '' || hUrlStr == undefined ){
 	        window.location="../welcome.vhtml"; 
 		}else{
 	        window.location=".."+hUrlStr; 
 		}
    }); 
});
 