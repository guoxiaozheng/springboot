/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['设置','用户管理','查看用户']);
    //接受页面参数
    getData('../account/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){
        $('#code').val(json.result.code);
        $('#name').val(json.result.name);
        $('#mail').val(json.result.mail);
        $('#mobile').val(json.result.mobile);
        $('#position').val(json.result.position  == null ? "" : json.result.position);
        $('#memo').val(json.result.memo  == null ? "" : json.result.memo);
        var showRole = "";
        if(null != json.result.roles && "" != json.result.roles){
        	 $.each(json.result.roles.split(","),function(k,v){
        		 showRole += v+"\n";
        	 })
        }
        $('#roles').val(showRole);
        var showGroup = "";
        if(null != json.result.accountGroups && "" != json.result.accountGroups){
        	 $.each(json.result.accountGroups.split(","),function(k,v){
        		 showGroup += v+"\n";
        	 })
        }
        $('#accountGroups').val(showGroup);
    }
    //点击确定提交表单
    $(".pLefts").click(function(){
        window.location="../account/userConfig.vhtml";
    });

});