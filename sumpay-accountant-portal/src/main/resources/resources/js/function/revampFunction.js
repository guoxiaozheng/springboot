/**
 * Created by wb-zhangxin.q on  
 */
$(document).ready(function(){
    //绘制面包屑 
    drawbreadcrumb(['权限管理','功能点','修改功能']);
    //接受页面参数
    getData('../function/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){
        $('#addUser').attr('oid',json.result.oid);
		$('#name').val(json.result.name == null ? "" : json.result.name); 
//		$('#productName').find("option[value="+json.result.productOid+"]").attr("selected",true);
		$('#url').val(json.result.url == null ? "" : json.result.url);
		$('#memo').val(json.result.memo == null ? "" : json.result.memo);
    }  
    //表单验证
    $("#addUser").validate({
        rules:{
            name:{
                required: true,
                minlength: 1,
                maxlength: 20,
                Repeat:true
            },
            pnam:{
                RePname:true, 
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
                oid:$(addUser).attr('oid'),
                code:(new Date()).valueOf(),
                name:$('#name').val(), 
                url:$('#url').val(),  
                memo:$('#memo').val(), 
                updateUser:information.code   
            };
            var nodes = zTreeObj.getNodes(); 
            for(var i=0; i<zTreeObj.transformToArray(nodes).length;i++){
                if(zTreeObj.transformToArray(nodes)[i].checked==true){
                    requestData.parentOid=zTreeObj.transformToArray(nodes)[i].oid
                }
            } 
            postData('../function/edit.do',requestData,function(json){
                alertMsg(json,"../function/function.vhtml"); 
            })
        }
    });
    function zTreeOnCheck(){
        var nodes = zTreeObj.getNodes();    
        for(var i=0; i<zTreeObj.transformToArray(nodes).length;i++){
        zTreeObj.checkNode(zTreeObj.transformToArray(nodes)[i], false,true);
        }
    }
    //加载树结构
    //选择权限 
    var setting = {
        check:{
            autoCheckTrigger:true,
            enable: true,
            chkStyle: "checkbox",
            chkboxType:{"Y" :"", "N" :""},
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
            beforeAsync:true,
            beforeCheck: zTreeOnCheck
         }
    };
    var treeNode={
        nocheck:false
    };
    var s;
    //请求树的数据
    $.ajax({
        type:"GET",
        url:'../function/getPerUpdateFunction.json',
        data:{functionOid:GetRequest().oid}, 
        dataType:"json",
        contentType:"application/json;charset=UTF-8",
        async:false,
        success:function(json){
            Data = json.result.records;
            for(var i=0; i<Data.length;i++){
                Data[i].id=Data[i].oid;
                Data[i].oid=Data[i].oid;
                Data[i].url='../function/queryFunction.vhtml?oid='+Data[i].oid;
                Data[i].target='_self';
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
    $("button:contains('保存')").on('click', function() {
        delay_till_last('myclick', function() {
            $('#addUser').submit();
        }, 300);
    });
    //点击取消回到上一页
    $("button:contains('取消')").click(function(){
        window.location="../function/function.vhtml";
    });
    
    jQuery.validator.addMethod("RePname", function(value, element) {
        var nodes = zTreeObj.getNodes(); 
        var count=0;
        for(var i=0; i<zTreeObj.transformToArray(nodes).length;i++){
            if(zTreeObj.transformToArray(nodes)[i].checked){
              count++;  
            }
        }
        return count!=0;
    }, "请选择上级功能点");
    jQuery.validator.addMethod("ReProduct", function(value, element) {
        var nodes = zTreeObj.getNodes(); 
        var count=0;
        for(var i=0; i<zTreeObj.transformToArray(nodes).length;i++){
            if(zTreeObj.transformToArray(nodes)[i].checked){
              count++;  
            }
        }
    return count!=0;
    }, "请选择上级功能点");
});