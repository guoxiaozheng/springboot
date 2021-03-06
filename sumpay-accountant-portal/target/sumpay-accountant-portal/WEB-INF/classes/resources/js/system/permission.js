//初始化页面加载数据
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['权限管理','权限']);

    //点击新建用户
    $('#addUserBtn').click(function(){
        window.location.href="addPermission.vhtml";
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
    /*虚拟用户信息  var admin={  'oid':1  };*/

    // 加载页面初始加载列表
    getData('../system/search.json?start=0&limit=10',{},changeTb);
});

// 查询列表
function searchData(){
	 var input_name = $('#search').val();
     input_name = input_name.trim().replace(/\'/ig,'\'\'').replace(/#/ig,'').replace(/%/ig,'');
    $('.mainTable tbody tr').remove();
    if(null != input_name && "" != input_name ){
    	getData('../system/searchByName.json?name='+input_name+'&start='+pages+'&limit=10',{},changeTb);
    }else{
    	getData('../system/search.json?start='+pages+'&limit=10',{},changeTb);
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
    	$('.mainTable tbody').append("<p style='font-size:16;margin:50px 0 0 50px;width:100%'>未查询到满足条件的记录</p>");
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
    		$('.mainTable tbody').append("<tr>" +
    				"<td><a href='#'>"+json.result.records[i].name+"</a></td>" +
    				"<td>"+json.result.records[i].memo+"</td>" +
    				"<td><ul><li>修改</li><li>删除</li></ul></td>" +
    		"</tr>")
    	}
    }

    //给table中所有a绑定点击事件
    $(' table.mainTable tbody td a').click(function(){
        var oid=checkOid1(this);
        window.location.href='queryPermission.vhtml?oid='+json.result.records[oid].oid;
    });
    
    //给table中所有li绑定点击事件
    $(' table.mainTable tbody ul li').click(function(){
        var oid=checkOid(this);
        console.log(oid);
        console.log($(this).children().attr("href"));
        if($(this).text()=="修改"){
            window.location.href='revampPermission.vhtml?oid='+json.result.records[oid].oid;
        } else if($(this).text()=="删除"){
            $('#deleteView').modal('show');
            $('#deleteView button:contains("确定")').unbind('click').click(function(){
                    getData('../system/remove.do?oid='+json.result.records[oid].oid,{},function(json){
                        //判断回传参数执行方法
                        if(json.restCode==200){
                            $('.mainTable tbody tr').remove();
                            getData('../system/search.json',{'oid':1 ,'start':pages,'limit':10},changeTb);
                        }
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
 