/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['设置','用户管理','新建用户']);
    //表单验证
    $("#addUser").validate({
        onkeyup: function(element) { $(element).valid(); },
        rules:{
            code:{
                required: true,
                stringCheck:true,
                minlength: 6,
                maxlength: 20,
                Repeat:true,
            },
            name:{
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
                Repeat:true
            },
            password:{
            	required:true
                //passwordq:true
            },
            repassword:{
                equalTo:'#password'
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
            var requestData={code:$('#code').val(),
                            name:$('#name').val(),
                            mail:$('#mail').val(),
                            mobile:$('#mobile').val(),
                            password:$('#repassword').val(),
                            position:$('#position').val(),
                            memo:$('#memo').val(),
                            roleOids:$('#roleOids').val(),
                            accountGroupOids:$('#accountGroupOids').val(),
                            createUser : information.code  // 用户登录名
            };
            postData('../account/edit.do',requestData,function(json){
                alertMsg(json,"../account/userConfig.vhtml");
            })
        },
        messages:{
            password:{
                equalTo:"两次密码不一致"
            },
            repassword:{
                equalTo:"两次密码不一致"
            }
        }
    });
    //密码校验
/*    $('#password').tooltip({ 
        trigger:'focus',
        placement:'right',
        title:'<div style="font-weight:bold;font-size:16px">安全程度</div><div id="progress"class="progress lt"style="width:80%">'+
                '</div><p class="lt" style="margin-left: 20px;font-weight:bold;font-size:15px"></p>'+
                '<table><tr><td zx="n1"style="width:20px;height:20px"></td><td>6到20个字符</td></tr><tr><td zx="n2"></td><td>只能包含字母,数字以及标点符号<br/>(除空格)</td></tr><tr><td zx="n3"></td><td>字母,数字和符号至少包含两种</td></tr></table>'
    });*/
    //点击确定提交表单
    $(".pLefts").on('click', function() {
        delay_till_last('myclick', function() {
            $('#addUser').submit();
        }, 300);
    });
    //点击取消回到上一页
    $(".pLefts_1").click(function(){
        window.location="../account/userConfig.vhtml";
    });
    
    // modal 隐藏时候触发
    $('#chooseAccountGroup').on('hide.bs.modal', function () {
         onDialogClose();
    })
    
    
    // 绑定 选择角色按钮
    $("#chooseRoleBtn").click(function(){
    	$("#show_title").text("关联角色");
    	$("#show_title").attr("src","role");
    	$('#chooseAccountGroup').modal('show');
    	initSelectData('role');
    })
    
    
    // 绑定 选择用户组按钮
    $("#chooseAccountGroupBtn").click(function(){
    	$("#show_title").text("关联用户组");
    	$("#show_title").attr("src","accountGroup");
        $('#chooseAccountGroup').modal('show');
        initSelectData('accountGroup');
    })
    
    var leftSel = $("#unSelectList"); 
    var rightSel = $("#selectList");
    
    // 保存 关闭
    $("#saveChooseData").click(function(){
        var selVal = []; 
        var selOid = [];
        var src = $("#show_title").attr("src");
        rightSel.find("option").each(function(k,v){ 
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
        	$("#accountGroups").val(selVals);
			$("#accountGroupOids").val(selOids);
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
		if(src == "accountGroup"){
			url = '../account/getInitAccountGroups.json'
		}else if(src == "role"){
			url = '../account/getInitRoles.json'
		}
	
        postData(url,{},function(json){
        
            var unSelectList = json.result.unSelect;
            var selectList = json.result.select;
            
            if(null != unSelectList){
                $('.loading').remove();
                $.each(unSelectList,function(k,v){
                    $("#unSelectList").append('<option  value='+v.oid+' >'+v.name+'</option>');
                    
                });
            }
            
            if(null != selectList){
                $.each(selectList,function(k,v){
                    $("#selectList").append('<option  value='+v.oid+'>'+v.name+'</option>');
                    
                });
            }
        
        	var oids = $("#roleOids").val();
			if(src == "role"){
				oids = $("#roleOids").val();
			}else if(src == "accountGroup"){
				oids = $("#accountGroupOids").val();
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
