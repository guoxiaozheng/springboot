/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['权限管理','权限','查看权限']);
    //接受页面参数
    var oid;
    getData('../system/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){
        $('#addUser').attr('oid',json.result.oid);
        $('#name').val(json.result.name);
        $('#memo').val(json.result.memo);
    }
    
    //选择权限 
    var setting = {
        check:{
            enable: true,
            chkStyle: "checkbox",
            chkboxType:{"Y" : "ps", "N" : "ps"},
            chkDisabledinherit:true
        },
        view: {
            selectedMulti: true,
        },
        data:{
            simpleData:{
                enable:true,
                idKey:'id',
                pIdKey:"parentOid",
                rootPid:0
            }
        },
         callback:{
            beforeAsync:true
         }
    };
    var treeNode={
        nocheck:false
    };
    var s;
    $.ajax({
        type:"GET",
        url:'../function/getQueryFunction.json',
        data:{permissionOid:GetRequest().oid},
        dataType:"json",
        contentType:"application/json;charset=UTF-8",
        async:false,
        success:function(json){
            Data = json.result;
            for(var i=0; i<Data.length;i++){
                Data[i].id=Data[i].oid;
                Data[i].oid=Data[i].oid;
                Data[i].url='../function/queryFunction.vhtml?oid='+Data[i].oid
                Data[i].target='_self'
            }
            zTreeObj = $.fn.zTree.init($("#tree"), setting, Data);
            for(var i=0; i<Data.length;i++){
                if(Data[i].checked=='true'){
                    zTreeObj.checkNode( zTreeObj.getNodeByParam('id',Data[i].id),true,true);
                }
            }
            var nodes = zTreeObj.getNodes();    
            for(var i=0; i<zTreeObj.transformToArray(nodes).length;i++){
            zTreeObj.setChkDisabled(zTreeObj.transformToArray(nodes)[i], true);
            }  
            s=Data;
        }
    })
      
    //点击取消回到上一页
    $("button:contains('返回')").click(function(){
        window.history.go("-1");
    });


});