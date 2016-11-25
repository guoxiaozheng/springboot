/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['设置','用户组管理','修改用户组']);
    //接受页面参数
    var oid;
    getData('../accountGroup/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){
        $('#addUser').attr('oid',json.result.oid);
        $('#name').val(json.result.name);
        $('#memo').val(json.result.memo);
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
        $('#roleOids').val(json.result.roleOids);
        $('#accountOids').val(json.result.accountOids);
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
                required:true,
                maxlength:200
            }
        },
        errorPlacement:function(error,element) {
            error.appendTo(element.parent().next());
        },
        debug:true,
        submitHandler:function(){
            var requestData={
                            code:(new Date()).valueOf(),
                            oid:$('#addUser').attr('oid'),
                            name:$('#name').val(),
                            memo:$('#memo').val(),
                            updateUser : information.code ,
                            roleOids:$('#roleOids').val(),
                            accountOids:$('#accountOids').val()
            };
            postData('../accountGroup/edit.do',requestData,function(json){
            	alertMsg(json,"../accountGroup/userGroup.vhtml"); 
            })
        },
    });
    //点击确定提交表单
	$(".pLefts").on('click', function() {
		delay_till_last('myclick', function() {
			$('#addUser').submit();
		}, 300);
	});
    //点击取消回到上一页
    $(".pLefts_1").click(function(){
        window.location="../accountGroup/userGroup.vhtml";
    });

 // 绑定 选择角色按钮
    $("#chooseRoleBtn").click(function(){
    	$("#show_title").text("关联角色");
    	$("#show_title").attr("src","role");
    	$('#chooseAccount').modal('show');
    	initSelectData('role');
    })
    
    // 绑定 选择用户组按钮
	$("#chooseAccountBtn").click(function(){
		$("#show_title").text("关联用户");
    	$("#show_title").attr("src","account");
    	$('#chooseAccount').modal('show');
    	initSelectData('account');
	})
	
	var leftSel = $("#unSelectList"); 
	var rightSel = $("#selectList");
	
	// modal 隐藏时候触发
	$('#chooseAccount').on('hide.bs.modal', function () {
		 onDialogClose();
	})
	
	// 保存 关闭
	$("#saveChooseData").click(function(){
		var selVal = []; 
		var selOid = [];
		   var src = $("#show_title").attr("src");
	    rightSel.find("option").each(function(){ 
	    	 selVal.push(this.text); 
             selOid.push(this.value);
	    }); 
	    selVals = selVal.join("\n");
	    selOids = selOid.join(",");

	    // 如果是取消了所有的选择项，或者是没有选择，传入delete标志，reset关联关系
	    if(null == selOids || "" == selOids){
	    	selOids = 'delete'; 
	    	 selVals = "";
	    }
	    
	    if(src == "account"){
			$("#accounts").val(selVals);
			$("#accountOids").val(selOids);
		}else if(src == "role"){
			$("#roles").val(selVals);
			$("#roleOids").val(selOids);
		}
	    
	    onDialogClose();
	})
	
	// dialog 关闭
	$("#cancelChoose").click(function(){
		 onDialogClose();
	})
	
});



/*1. 点击《选择》按钮  初始化列表*/
function initSelectData(src){
        
		var url = "";
		if(src == "account"){
			url = '../accountGroup/getInitAccounts.json'
		}else if(src == "role"){
			url = '../account/getInitRoles.json'
		}
		postData(url,{},function(json){
		
			var unSelectList = json.result.unSelect;
			var selectList = json.result.select;
			
			if(null != unSelectList){
                $('.loading').remove();
				$.each(unSelectList,function(k,v){
					$("#unSelectList").append('<option value='+v.oid+'>'+v.name+'</option>');
					
				});
			}
			
			if(null != selectList){
				$.each(selectList,function(k,v){
					$("#selectList").append('<option value='+v.oid+'>'+v.name+'</option>');
					
				});
			}
			
		  	var oids = $("#roleOids").val();
			if(src == "role"){
				oids = $("#roleOids").val();
			}else if(src == "account"){
				oids = $("#accountOids").val();
			}
			
            if(null != oids && "" != oids){
                 $("#unSelectList").find("option").each(function(_k,_v){ 
                     var this_option = $(this);
                     var oid = _v.value;
                     $.each(oids.split(","),function(k,v){
                         if(v == oid){
                             this_option.remove().appendTo($("#selectList")); 
                         }
                     })
                  }); 
            }
            
        	var myfilter = new filterlist($("#unSelectList")[0]);
        	$("#inputName").focus(function() {
        	    this.value = ""
        	}).keyup(function() {
        	    myfilter.set(this.value,$("#selectList").find("option"))
        	})
            
            
	});
}

//关闭弹框，清空列表
function onDialogClose(){
    $("#unSelectList").empty(); 
    $("#selectList").empty();
    $("#inputName").val("");
}
