/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['个人','个人信息']);
    //接受页面参数 
    var oid;
    getData('../account/get.json?oid='+information.oid,{},addValue);
    function addValue(json){
        $('#addUser').attr('oid',json.result.oid);
        $('#name').val(json.result.name);
        $('#mail').val(json.result.mail);
        $('#mobile').val(json.result.mobile);
        $('#position').val(json.result.position);
        $('#memo').val(json.result.memo);
    } 
  
	 //表单验证
    $("#addUser").validate({
        onfocusout: function(element) { $(element).valid(); },
        rules:{
            name:{
                minlength:2,
                required:true
            },
            mail:{
                required:true,
                myemail:true,
                Repeat:true,
                maxlength:40
            },
            mobile:{
                required:true,
                number:true,
                minlength:11,
                maxlength:11,
                Repeat:true
            },
            memo:{
                maxlength:10000
            }
        },
        errorPlacement:function(error,element) {
            error.appendTo(element.parent().next());
        },
        debug:true,
        submitHandler:function(){
            var requestData={
            		code:information.code,
            		oid:information.oid,
            		name:$('#name').val(),
            		mail:$('#mail').val(),
            		mobile:$('#mobile').val(),
            		position:$('#position').val(),
            		memo:$('#memo').val(),
            		updateUser:information.code,
            		createUser:information.code
            };

            postData('../account/edit.do',requestData,function(json){
				var url ;
				var hUrlStr = GetQueryString("hUrl");
				if(hUrlStr==null || hUrlStr == '' || hUrlStr == undefined ){
					url = "../welcome.vhtml";
				}else{
					url = ".."+hUrlStr;
				}  
             	alertMsg(json,url); 
            })
        }
    });
    //点击确定提交表单
    $(".pLefts").on('click', function() {
        delay_till_last('myclick', function() {
            $('#addUser').submit();
        }, 300);
    });
	//点击取消返回上一页
	$(".pLefts_1").click(function(){ 
		var hUrlStr = GetQueryString("hUrl")
    	if(hUrlStr==null || hUrlStr == '' || hUrlStr == undefined ){
 	        window.location="../welcome.vhtml"; 
 		}else{
 	        window.location=".."+hUrlStr; 
 		}
	});
 
});