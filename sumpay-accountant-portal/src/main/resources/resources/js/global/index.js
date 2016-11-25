$(function(){
	$.ajax({
        type:"GET",
        url:'../product/product.pjson',
        dataType:"json",
        async:false,
        //contentType:"application/json;charset=UTF-8",
        success:function(json){
            if(json){
            	json=json.result 
            	for(var i=0;i<json.length;i++){
                    $('.produceList').append('<li><a href="'+json[i].url+'" target="_blank"><span><img src="'+json[i].imgsrc+'"></span></a><p>'+json[i].code+'</p></li>')
            		if(json[i].url=='#'){
            			$($('.produceList li')[i]).find('p').append('<i>&nbsp(未接入)</i>')
            		}
            	}
            }
        }
    })
})
var body = $('body');
var b = $('#bbar');

var logo = $('.header-logo-link');
var content = $('#content');

b.find('.bar-sub>a').on('click', function (e) {
    e.preventDefault();
    if (body.hasClass('minibar')) return;
    var me = $(this);
    var li = me.parent();
    var sub = li.find('.bar-sublist');
    if (me.hasClass('active')) {
        sub.slideUp('fast', function () {
            me.removeClass('active');
            me.find('a.active').removeClass('active');
        });
        me.find('.bar-status').removeClass('active');
    } else {
        b.find('.bar-sub>a.active').trigger('click');//关闭其他
        me.addClass('active');
        if (b.hasClass('no-trans')) sub.show();
        else sub.slideDown('fast');
        me.find('.bar-status').addClass('active');
    }
});






























