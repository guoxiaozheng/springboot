/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['权限管理','权限','修改权限']);
    //接受页面参数
    var oid;
    getData('../system/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){
        $('#addUser').attr('oid',json.result.oid);
        $('#name').val(json.result.name);
        $('#memo').val(json.result.memo);
    }
    //表单验证
    $("#addUser").validate({
        onfocusout: function(element) { $(element).valid(); },
        rules:{
            name:{
                required: true,
                minlength: 6,
                maxlength: 20,
                Repeat:true,
            },
            memo:{
                required:true
            }　
        },
        errorPlacement:function(error,element) {
            error.appendTo(element.parent().next());
        },
        debug:true,
        submitHandler:function(){
            var requestData={
            				oid:$('#addUser').attr('oid'),
                            code:(new Date()).valueOf(),
                            name:$('#name').val(),
                            memo:$('#memo').val(),
            	            updateUser:information.code, 
            	            functionOids:$('#tree').attr('functionoids')
            };

            postData('../system/edit.do',requestData,function(json){
            	alertMsg(json,"../system/permission.vhtml");
            })
        }
    });
    
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
        url:'../function/getInitFunction.json',
        data:{permissionOid:GetRequest().oid},
        dataType:"json",
        contentType:"application/json;charset=UTF-8",
        async:false,
        success:function(json){
            Data = json.result.records;
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
            s=Data;
        }
    })
     
    //点击确定提交表单
    $(".pLefts").on('click', function() {
        delay_till_last('myclick', function() {
            var TreeObj=$.fn.zTree.getZTreeObj("tree");
            var arrtree ='';
            for(var i=0;i<zTreeObj.getCheckedNodes().length;i++){
                if(zTreeObj.getCheckedNodes()[i].isParent!=true){
                    arrtree+=zTreeObj.getCheckedNodes()[i].oid+",";
                }
            }
            $('#tree').attr('functionoids',arrtree);
            $('#addUser').submit();
        }, 300);
    });
    //点击取消回到上一页
    $(".pLefts_1").click(function(){
        window.location="../system/permission.vhtml";
    });


});