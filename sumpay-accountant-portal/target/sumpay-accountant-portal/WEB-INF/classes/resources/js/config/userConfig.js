//初始化页面加载数据
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['设置','用户管理']);

    //点击新建用户
    $('#addUserBtn').click(function(){
        window.location.href="addUser.vhtml";
    });  
    //输入框搜索功能
    $('#inputnameBtn').click(function(){
        searchData();
    });
 
    // 输入框 失去焦点 重置页码
    $("#search").blur(function(){
    	pages=0;
    	pageNo = 1;
    })
    // 加载页面初始加载列表
    getData('../account/search.json?start=0&limit=10',{},changeTb);
});

// 查询列表
function searchData(){
	var input_name = $('#search').val().trim().replace(/#/ig,'').replace(/%/ig,'');
    input_name = input_name.replace(/\'/ig,'\'\'');
    $('.mainTable tbody tr').remove();
    if(null != input_name && "" != input_name ){
    	getData('../account/getAccountByName.json?name='+input_name+'&start='+pages+'&limit=10',{},changeTb);
    }else{
    	getData('../account/search.json?start='+pages+'&limit=10',{},changeTb);
    }
}

//刷新表格方法
var pages=0;
var pageNo = 1;
function changeTb(json){
    var totalRecords = 0 ;
    var totalPage = 1;
    if(null != json.result && "" != json.result){
    	totalRecords = json.result.recordsCount;
    	totalPage = Math.ceil(Number(json.result.recordsCount)/10);
        $('.mainTable tbody p').remove();
    } else{
    	$('.mainTable tbody p').remove();
    	$('.mainTable tbody').append("<p style='font-size:16px;margin:50px 0 0 50px;width:200%'>未查询到满足条件的记录</p>");
    }
    //绘制分页签
    kkpager.generPageHtml({
        pno : pageNo,
        mode : 'click', //设置为click模式
        total : totalPage,//总页码
        totalRecords : totalRecords, //总数据条数
        //点击页码、页码输入框跳转、以及首页、下一页等按钮都会调用click
        click : function(n){
            //处理完后可以手动条用selectPage进行页码选中切换
            pages = (n-1)*10;
            pageNo = n;
            searchData();

        }
    },true);
    
    //绘制表格
    if(null != json.result && "" != json.result){
	    for(var i=0; i<json.result.records.length;i++){
	        var status= opinionStatus(json,i);
	        if(json.result.records[i].status!=1){
	        	if(json.result.records[i].status == 3){
	        		$('.mainTable tbody').append("<tr><td><a href='#'>"+json.result.records[i].code+"</a></td><td>"+json.result.records[i].name+"</td><td>"+opinionStatus(json,i)+"</td><td>"+json.result.records[i].mobile+"</td><td>"+json.result.records[i].position+"</td><td>"+json.result.records[i].mail+"</td><td><ul><li>激活</li></ul></td></tr>")    
	        	}else{
	        		$('.mainTable tbody').append("<tr><td><a href='#'>"+json.result.records[i].code+"</a></td><td>"+json.result.records[i].name+"</td><td>"+opinionStatus(json,i)+"</td><td>"+json.result.records[i].mobile+"</td><td>"+json.result.records[i].position+"</td><td>"+json.result.records[i].mail+"</td><td><ul><li class='onlyread'>修改</li><li class='onlyread'>删除</li><li class='onlyread'>重置密码</li></ul></td></tr>")    
	        	}
	        }else{
	        	if(json.result.records[i].oid == information.oid){
	        		$('.mainTable tbody').append("<tr><td><a href='#'>"+json.result.records[i].code+"</a></td><td>"+json.result.records[i].name+"</td><td>"+opinionStatus(json,i)+"</td><td>"+json.result.records[i].mobile+"</td><td>"+json.result.records[i].position+"</td><td>"+json.result.records[i].mail+"</td><td><ul><li>修改</li><li class='onlyread'>删除</li><li class='onlyread'>重置密码</li></ul></td></tr>")
	        	}else{
	        		$('.mainTable tbody').append("<tr><td><a href='#'>"+json.result.records[i].code+"</a></td><td>"+json.result.records[i].name+"</td><td>"+opinionStatus(json,i)+"</td><td>"+json.result.records[i].mobile+"</td><td>"+json.result.records[i].position+"</td><td>"+json.result.records[i].mail+"</td><td><ul><li>修改</li><li>删除</li><li>重置密码</li></ul></td></tr>")
	        	}
	       }
	    }
    }
    //给table中所有a绑定点击事件
    $(' table.mainTable tbody td a').click(function(){
        var oid=checkOid1(this);
        window.location.href='queryUser.vhtml?oid='+json.result.records[oid].oid;
    });
    
    //给table中所有li绑定点击事件
    $(' table.mainTable tbody ul li').click(function(){
        var oid=checkOid(this);
        if($(this).text()=="修改"&&$(this).attr("class")!='onlyread'){
            window.location.href='revampUser.vhtml?oid='+json.result.records[oid].oid;
        } else if($(this).text()=="删除"&&$(this).attr("class")!='onlyread'){
            $('#deleteView').modal('show');
            $('#deleteView button:contains("确定")').unbind('click').click(function(){
                getData('../account/remove.do?accountOid='+json.result.records[oid].oid+'&operator='+information.code,{},function(json){
                        //判断回传参数执行方法
                        if(json.restCode==200){
                            $('.mainTable tbody tr').remove();
                            searchData();
                            //getData('../account/search.json',{'oid':1 ,'start':pages,'limit':10},changeTb);
                        }
                    })
                }
            )
        } else if($(this).text()=="激活"){
        	$('#activeView').modal('show');
            $('#activeView button:contains("确定")').unbind('click').click(function(){
                getData('../account/active.do?accountOid='+json.result.records[oid].oid+'&operator='+information.code,{},function(json){
                        //判断回传参数执行方法
                        if(json.restCode==200){
                            $('.mainTable tbody tr').remove();
                            searchData();
                            //getData('../account/search.json',{'oid':1 ,'start':pages,'limit':10},changeTb);
                        }
                    })
                }
            )
        } else if($(this).text()=="重置密码" &&$(this).attr("class")!='onlyread'){
        	$('#resetPaswordView').modal('show');
            $('#resetPaswordView button:contains("确定")').unbind('click').click(function(){
                getData('../account/resetPassword.do?accountCode='+json.result.records[oid].code,{},function(json){
                	$('#resetPaswordSuccessViewSuccess').modal('show');
                    })
                }
            )
        }
    });
}
//按回车搜索事件
$('#search').keydown(function(e){
    
        if(e.keyCode==13){
        	$("#search").blur();
            searchData();
            return false;               
        }
    })
//工具类检查当前点击在第几个
function checkOid1(thi){
    return $(thi).parent().parent().index();
}
//工具类检查当前点击在第几个
function checkOid(thi){
    return $(thi).parent().parent().parent().index();
}

//判断状态
function opinionStatus(json,i){
    if(i!=undefined){
        if(json.result.records[i].status==1){
            return '正常';
        }else if(json.result.records[i].status==2){
            return "锁定";
        }else{
            return '删除';
        }
    }else{
        if(!isNaN(json)) {
            if (json == 1) {
                return '正常';
            } else if (json == 2) {
                return "锁定";
            } else {
                return '删除';
            }

        }else{
            if(json=='正常'){
                return 1;
            }else if(json=='锁定'){
                return 2;
            }else{
                return 3;
            }
        }
    }
}