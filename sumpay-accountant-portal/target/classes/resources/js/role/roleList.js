/**
 * Created by 周霄  2015/10/10   角色列表
 */
//初始化页面加载数据
$(document).ready(function(){
    drawbreadcrumb(['设置','角色管理']); //绘制面包屑

    //点击新建用户
    $('#addUserBtn').click(function(){
        window.location.href="../role/addRole.vhtml?opt=add";
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
    
    //按回车搜索事件
    $('#search').keydown(function(e){
            if(e.keyCode==13){
                $("#search").blur();
                searchData();
                return false;               
            }
    })
        
    // 加载页面初始加载列表
    getData('../role/search.json?start=0&limit=10',{},changeTb);
});


/* 1  查询列表*/
function searchData(){
	var input_name = $('#search').val().trim().replace(/#/ig,'').replace(/%/ig,'');
    input_name = input_name.replace(/\'/ig,'\'\'');
    $('.mainTable tbody tr').remove();
    if(null != input_name && "" != input_name ){
        getData('../role/searchByName.json?name='+input_name+'&start='+pages+'&limit=10',{},changeTb);
    }else{
        getData('../role/search.json?start='+pages+'&limit=10',{},changeTb);
    }
}
    
/*2. 初始化列表、重新加载列表 */
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
    	$.each(json.result.records,function(k,v){
    		$('.mainTable tbody').append("<tr><td>" +
    				"<a href='#' onclick=\"readRole(\'"+v.oid+"\')\">"+v.name+"</a></td>" +
    				"<td>"+v.memo+"</td>" +
    				"<td><ul><li onclick=\"updateRole(\'"+v.oid+"\')\" >修改</li>" +
    				"<li onclick=\"removeRole(\'"+v.oid+"\')\">删除</li></ul></td></tr>")
    	});
    }

}

/*3. 查看角色 ， 只读*/
function readRole(roleOid){
	window.location.href='../role/readRole.vhtml?oid='+roleOid+'&opt=read';
}

/*4. 修改角色  */
function updateRole(roleOid){
	window.location.href='../role/editRole.vhtml?oid='+roleOid+'&opt=update';
}

/*5. 删除角色  */
function removeRole(roleOid){

    $('#deleteView').modal('show');
    $('#deleteView button:contains("确定")').unbind('click').click(function(){
            getData('../role/remove.do?roleOid='+roleOid,{},function(json){
                //判断回传参数执行方法
                if(json.restCode==200){
                    $('.mainTable tbody tr').remove();
                    getData('../role/search.json',{'oid':1 ,'start':pages,'limit':10},changeTb);
                }
            })
        }
    )
    
}


