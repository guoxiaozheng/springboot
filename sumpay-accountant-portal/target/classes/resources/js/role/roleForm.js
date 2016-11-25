/**
 * Created by 周霄  2015/10/10
 * 角色表单
 */

	


$(document).ready(function(){
	//$(section).append('<option>'+fdsf<>)?s=""&afdsd="0"
	//页数（start）  条数固定变量(limit) 
    

	var oid = GetRequest().oid;
	var opt = GetRequest().opt;
	var use_type = "account";
	var path_ = [];
	$("#save").removeAttr("disabled");//将按钮可用
	if(opt == "read"){
		path_ = ['设置','角色管理','查看角色'];
		getData('../role/get.do?oid='+oid,{},loadData);
		$("input").attr("readonly","readonly"); // 只读
		$("textarea").attr("readonly","readonly"); // 只读
		$(".alignTop").hide(); // 隐藏《选择》关联按钮
		$("#save").css({"display":"none"}); // 隐藏保存按钮
		$("#cancel").css({"display":"none"}); // 隐藏保存按钮
		$("#back").css({"display":"block"}); // 显示返回按钮
		$("label i").remove();
		document.title = "紫霞 - 查看角色";
	}else if(opt == "update"){
		path_ = ['设置','角色管理','修改角色'];
		getData('../role/get.do?oid='+oid,{},loadData);
		document.title = "紫霞 - 修改角色";
	}else if(opt == "add"){
		path_ = ['设置','角色管理','新建角色'];
		document.title = "紫霞 - 新建角色";
	}
   
    drawbreadcrumb(path_); //绘制面包屑
    
    //点击确定提交表单
	$("#save").on('click', function() {
		delay_till_last('myclick', function() {
			onSave();
		}, 300);
	});
    
    //点击取消回到上一页
    $("#cancel").click(function(){
        window.location="../role/roleList.vhtml";
    });
    $("#back").click(function(){
    	window.location="../role/roleList.vhtml";
    });

    if(opt != "read"){
    	//表单验证
    	$("#roleForm").validate({
    		onfocusout: function(element) { $(element).valid(); },
    		rules:{
    			name:{
    				required: true,
    				maxlength: 20,
    				Repeat:true,
    			},
    			memo:{
    				required : true,
    				maxlength:200
    			}
    		},
    		errorPlacement:function(error,element) {
    			error.appendTo(element.parent().next());
    		},
    		debug:true,
    		submitHandler:function(){ 
    			var formData = {
    					oid : $("#oid").val(),
    					code : (new Date()).valueOf(),
    					name : $("#name").val(),
    					memo : $("#memo").val(),
    					accountName : $("#accountOids").val(),
    					accountGroupName : $("#accountGroupOids").val(),
    					permissionName : $("#permissionOids").val(),
    					createUser : information.code , // TODO 用户登录做好之后修改
    					updateUser : information.code
    			}
    			
    			postData('../role/edit.do',formData,function(json){
    				alertMsg(json,"../role/roleList.vhtml"); 
    			});
    		}
    	});
    }
    
    // modal 隐藏时候触发
	$('#chooseRole').on('hide.bs.modal', function () {
		 onDialogClose();
	})
	
    // 绑定 选择用户按钮
	$("#chooseAccountBtn").click(function(){
		$("#show_title").text("关联用户");
    	$("#show_title").attr("src","account");
    	$('#chooseRole').modal('show');
    	initSelectData('account',oid);
    	use_type = "account";
	})
	
	  // 绑定 选择用户组按钮
	$("#chooseAccountGroupBtn").click(function(){
		$("#show_title").text("关联用户组");
    	$("#show_title").attr("src","accountGroup");
    	$('#chooseRole').modal('show');
    	initSelectData('accountGroup',oid);
    	use_type = "accountGroup";
	})
	
	 // 绑定 选择用户组按钮
	$("#choosePermissionBtn").click(function(){
		$("#show_title").text("关联权限");
    	$("#show_title").attr("src","permission");
    	$('#chooseRole').modal('show');
    	initSelectData('permission',oid);
    	use_type = "permission";
	})
	
	
	var leftSel = $("#unSelectList"); 
	var rightSel = $("#selectList");
	
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
 	    if(src == "accountGroup"){
        	$("#accountGroupName").val(selVals);
			$("#accountGroupOids").val(selOids);
		}else if(src == "permission"){
			$("#permissionName").val(selVals);
			$("#permissionOids").val(selOids);
		}else if(src == "account"){
			$("#accountName").val(selVals);
			$("#accountOids").val(selOids);
		}
	    onDialogClose();
	})
	
	// dialog 关闭
	$("#cancelChoose").click(function(){
		 onDialogClose();
	})
	
});


/*1  保存 或者 修改*/
function onSave(){
	 $('#roleForm').submit();
}

/*2. 点击《选择》按钮  初始化列表*/
function initSelectData(src,oid){
		var url = "";
		if(src == "account"){
			url = '../role/getInitAccounts.json'
		}else if(src == "accountGroup"){
			url = '../role/getInitAccountGroups.json'
		}else if(src == "permission"){
			url = '../role/getInitPermission.json'
		}
		$.ajax({
	        type:"POST",
	        url:url,
	        data:{roleOid : oid},
	        success:function(json){
	           initList(src,json)
	        },
	        error:function(){
	        	$.alert("提示信息", "失败", function(){});
	        }
		})
}

function initList(src,json){
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

	var oids = $("#accountOids").val();
	if(src == "account"){
		oids = $("#accountOids").val();
	}else if(src == "accountGroup"){
		oids = $("#accountGroupOids").val();
	}else if(src == "permission"){
		oids = $("#permissionOids").val();
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
}


//关闭弹框，清空列表
function onDialogClose(){
    $("#unSelectList").empty(); 
    $("#selectList").empty();
    $("#inputName").val("");
}

	 



