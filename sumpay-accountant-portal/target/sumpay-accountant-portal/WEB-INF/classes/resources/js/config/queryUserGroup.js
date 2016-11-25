/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['设置','用户组管理','查看用户组']);
    //接受页面参数
    getData('../accountGroup/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){
    	
        $('#name').val(json.result.name);
        $('#memo').val(json.result.memo == null ? "" : json.result.memo);
        var showRole = "";
        if(null != json.result.roles && "" != json.result.roles){
        	 $.each(json.result.roles.split(","),function(k,v){
        		 showRole += v+"\n";
        	 })
        }
        $('#roles').val(showRole);
        
        var showAccount = "";
        if(null != json.result.accounts && "" != json.result.accounts){
        	 $.each(json.result.accounts.split(","),function(k,v){
        		 showAccount += v+"\n";
        	 })
        }
        $('#accounts').val(showAccount);
    }
    //点击确定提交表单
    $(".pLefts").click(function(){
        window.location="../accountGroup/userGroup.vhtml";
    });

});