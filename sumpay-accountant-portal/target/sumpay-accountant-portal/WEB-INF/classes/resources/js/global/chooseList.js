$(document).ready(function(){
	
	var leftSel = $("#unSelectList"); 
	var rightSel = $("#selectList");

	$("#toright").bind("click",function(){         
	    leftSel.find("option:selected").each(function(){ 
	        $(this).remove().appendTo(rightSel); 
	    }); 
	});
	
	$("#toleft").bind("click",function(){         
	    rightSel.find("option:selected").each(function(){ 
	        $(this).remove().appendTo(leftSel); 
	    }); 
	});
	
	leftSel.dblclick(function(){ 
	    $(this).find("option:selected").each(function(){ 
	        $(this).remove().appendTo(rightSel); 
	    }); 
	}); 
	rightSel.dblclick(function(){ 
	    $(this).find("option:selected").each(function(){ 
	        $(this).remove().appendTo(leftSel); 
	    }); 
	}); 
	
});

