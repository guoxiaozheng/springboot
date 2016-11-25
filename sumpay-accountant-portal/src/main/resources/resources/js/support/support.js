$('.copy-list tr').hover(function(){
$(this).children('td').children('a').children('i').show();
},function(){
	$(this).children('td').children('a').children('i').hide();
});

var as=$('ul.support li');
as.find('a.a1,a.a2,a.a3').click(function() {
      var me = $(this),cls=me.attr("class"); 
    $('#'+cls).trigger('click');
});