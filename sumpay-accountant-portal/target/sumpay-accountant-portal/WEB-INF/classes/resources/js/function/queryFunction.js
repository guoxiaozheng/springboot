/**
 * Created by wb-zhangxin.q on 2015/9/23.
 */
$(document).ready(function(){
    //绘制面包屑
    drawbreadcrumb(['权限管理','功能点','查看功能点']);
    //接受页面参数
    getData('../function/get.json?oid='+GetRequest().oid,{},addValue);
    function addValue(json){ 
        $('#name').val(json.result.name == null ? "" : json.result.name);
        $('#pname').val(json.result.parentName == null ? "" : json.result.parentName);
        $('#url').val(json.result.url == null ? "" : json.result.url);
        $('#memo').val(json.result.memo == null ? "" : json.result.memo); 
    }
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
            url='../function/function.vhtml?style=tree'  
        }else{          
            url='../function/function.vhtml'
        }
    
     //点击取消 返回列表界面
    $('button:contains("返回")').click(function(){ 
        window.location=url;
    });

});