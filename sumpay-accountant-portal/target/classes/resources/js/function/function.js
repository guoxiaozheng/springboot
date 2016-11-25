//初始化页面加载数据
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['权限管理 ','功能点']);

    //点击新建功能
    $('#addUserBtn').click(function(){
        window.location.href="addFunction.vhtml";
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
    getData('../function/search.json?start=0&limit=10',{},changeTb);
    var all_url = window.location.href;
    var count=0;
    var s1=[];
    var s2=[];
    var s;
    s1= all_url.split('?');
    if (s1.length > 1){
        s2=s1[1].split('&');
        for(var i=0;i<s2.length;i++){
            if(s2[i]=='style=tree'){
                count++;
          }
        }
    }
    if(count==1){
        $('.changetree').css('left','-100%')
        $('#treeSection').css('left','0%')
        $('#kkpager').css('opacity','0')
        $('.search').css('opacity','0')
    }
    //页面列表,树样式变化
    $('button:contains("树")').click(function(){           
            $('.changetree').animate({
                left:"-100%"
            },1000);
            $('#treeSection').animate({
                left:"0%"
            },1000)
            $('#kkpager').animate({
                opacity:0
            },1000)
            $('.search').animate({
                opacity:0
            },1000)        
    })
    $('button:contains("列表")').click(function(){
        $('.changetree').animate({
            left:"0"
        },1000);
        $('#treeSection').animate({
            left:"100%"
        },1000)
        $('#kkpager').animate({
            opacity:1
        },1000)
        $('.search').animate({
            opacity:1
        },1000)        
    })
});

// 查询列表
function searchData(){
    var input_name = $('#search').val().trim().replace(/#/ig,'').replace(/%/ig,'');
    input_name = input_name.replace(/\'/ig,'\'\'');
    $('.mainTable tbody tr').remove();
    if(null != input_name && "" != input_name ){
    	getData('../function/searchFunctionByName.json?name='+input_name+'&start='+pages+'&limit=10',{},changeTb);
    }else{
    	getData('../function/search.json?start='+pages+'&limit=10',{},changeTb);
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
    				"<td>"+json.result.records[i].parentName+"</td>" + 
    		"<td><ul><li>修改</li><li>删除</li></ul></td></tr>")
    	}
    }
    //给table中所有a绑定点击事件
    $(' table.mainTable tbody td a').click(function(){
        var oid=checkOid1(this);
        window.location.href='queryFunction.vhtml?oid='+json.result.records[oid].oid;
    });
    //加载树结构
    var setting = {
        async:{
            enable:true,
            dataFilter: ajaxDataFilter,
            autoParam:['oid'],
            contentType:"application/json",
            dataType:"json",
            type:"get",
            url:'../function/getFunctionsByParentOid.json'
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
    function ajaxDataFilter(treeId, parentNode, responseData){
        if(responseData){
            responseData=responseData.result
        }
      return responseData;
    }
    zTreeObj = $.fn.zTree.init($("#tree"), setting);
    //给table中所有li绑定点击事件
    $(' table.mainTable tbody ul li').click(function(){
        var oid=checkOid(this);
        if($(this).text()=="修改"){
            window.location.href='revampFunction.vhtml?oid='+json.result.records[oid].oid;
        } else if($(this).text()=="删除"){
        	if(json.result.records[oid].isParent == 'true'){
        		$('#deleteView').find('.modal-body').html("含有子功能点，删除时将同时删除，确定要删除吗？"); 
        	}else{
        		$('#deleteView').find('.modal-body').html("确定要删除吗？");  
        	}
            $('#deleteView').modal('show');
            $('#deleteView button:contains("确定")').unbind('click').click(function(){
                    getData('../function/remove.do?oid='+json.result.records[oid].oid,{},function(json){
                        //判断回传参数执行方法
                        if(json.restCode==200){
                            $('.mainTable tbody tr').remove();
                            getData('../function/search.json',{'oid':1 ,'start':pages,'limit':10},changeTb);
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

