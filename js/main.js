$(function(){

$(".sect1").on('mouseover', function(){
	$(".table1").css({top:30, left: 208, position:'absolute'});
	$(".table1").removeClass('opaque');
	$(this).children('div').children('.type').removeClass('opaque');
	$(this).children('div').children('.year').removeClass('opaque');
	$(this).children('div').children('.team').removeClass('opaque');
	$(this).children('div').children('.longline').removeClass('opaque');
	$(".table1").addClass('fade');
	$(this).children('div').children('.type').addClass('fade');
	$(this).children('div').children('.year').addClass('fade');
	$(this).children('div').children('.team').addClass('fade');
	$(this).children('div').children('.longline').addClass('fade');
})
// $(".sect1").on('mouseover', function(){
// 	$(this).closest(".author").css({marginTop:-14.5});
// })
// $(".sect1").on('mouseover', function(){
// 	$(this).closest(".type1").css({marginTop:-24});
// })
// $(".sect1").on('mouseover', function(){
// 	$(this).closest(".year").css({marginTop:-24});
// })
// $(".sect1").on('mouseover', function(){
// 	$(this).closest(".team").css({marginTop:-24});
// })


$(".sect1").on('mouseout', function(){
	$(".table1").css({top:48, left: 208, position:'absolute'});
	$(".table1").removeClass('fade');
	$(this).children('div').children('.type').removeClass('fade');
	$(this).children('div').children('.year').removeClass('fade');
	$(this).children('div').children('.team').removeClass('fade');
	$(this).children('div').children('.longline').removeClass('fade');
	$(".table1").addClass('opaque');
	$(this).children('div').children('.type').addClass('opaque');
	$(this).children('div').children('.year').addClass('opaque');
	$(this).children('div').children('.team').addClass('opaque');
	$(this).children('div').children('.longline').addClass('opaque');
})
// $(".sect1").on('mouseout', function(){
// 	$(this).closest(".author").css({marginTop:-24.5});
// })
// $(".sect1").on('mouseout', function(){
// 	$(this).closest(".type").css({marginTop:-25});
// })
// $(".sect1").on('mouseout', function(){
// 	$(this).closest(".year").css({marginTop:-25});
// })
// $(".sect1").on('mouseout', function(){
// 	$(this).closest(".team").css({marginTop:-25});
// })



$(".sect2").on('mouseover', function(){
	$(".table2").css({top:147, left: 208, position:'absolute'});
	$(".table2").removeClass('opaque');
	$(this).children('div').children('.type').removeClass('opaque');
	$(this).children('div').children('.year').removeClass('opaque');
	$(this).children('div').children('.team').removeClass('opaque');
	$(this).children('div').children('.longline').removeClass('opaque');
	$(".table2").addClass('fade');
	$(this).children('div').children('.type').addClass('fade');
	$(this).children('div').children('.year').addClass('fade');
	$(this).children('div').children('.team').addClass('fade');
	$(this).children('div').children('.longline').addClass('fade');
})
// $(".sect2").on('mouseover', function(){
// 	$(this).closest(".author").css({marginTop:-14.5});
// })
// $(".sect2").on('mouseover', function(){
// 	$(this).closest(".type").css({marginTop:-24});
// })
// $(".sect2").on('mouseover', function(){
// 	$(this).closest(".year").css({marginTop:-24});
// })
// $(".sect2").on('mouseover', function(){
// 	$(this).closest(".team").css({marginTop:-24});
// })


$(".sect2").on('mouseout', function(){
	$(".table2").css({top:165, left: 208, position:'absolute'});
	$(".table2").removeClass('fade');
	$(this).children('div').children('.type').removeClass('fade');
	$(this).children('div').children('.year').removeClass('fade');
	$(this).children('div').children('.team').removeClass('fade');
	$(this).children('div').children('.longline').removeClass('fade');
	$(".table2").addClass('opaque');
	$(this).children('div').children('.type').addClass('opaque');
	$(this).children('div').children('.year').addClass('opaque');
	$(this).children('div').children('.team').addClass('opaque');
	$(this).children('div').children('.longline').addClass('opaque');
})
// $(".sect2").on('mouseout', function(){
// 	$(this).closest(".author").css({marginTop:-24.5});
// })
// $(".sect2").on('mouseout', function(){
// 	$(this).closest(".type").css({marginTop:-25});
// })
// $(".sect2").on('mouseout', function(){
// 	$(this).closest(".year").css({marginTop:-25});
// })
// $(".sect2").on('mouseout', function(){
// 	$(this).closest(".team").css({marginTop:-25});
// })



$(".sect3").on('mouseover', function(){
	$(".table3").css({top:267, left: 208, position:'absolute'});
	$(".table3").removeClass('opaque');
	$(this).children('div').children('.type').removeClass('opaque');
	$(this).children('div').children('.year').removeClass('opaque');
	$(this).children('div').children('.team').removeClass('opaque');
	$(this).children('div').children('.longline').removeClass('opaque');
	$(".table3").addClass('fade');
	$(this).children('div').children('.type').addClass('fade');
	$(this).children('div').children('.year').addClass('fade');
	$(this).children('div').children('.team').addClass('fade');
	$(this).children('div').children('.longline').addClass('fade');
})
// $(".sect3").on('mouseover', function(){
// 	$(this).closest(".author").css({marginTop:-14.5});
// })
// $(".sect3").on('mouseover', function(){
// 	$(this).closest(".type1").css({marginTop:-24});
// })
// $(".sect3").on('mouseover', function(){
// 	$(this).closest(".year").css({marginTop:-24});
// })
// $(".sect3").on('mouseover', function(){
// 	$(this).closest(".team").css({marginTop:-24});
// })


$(".sect3").on('mouseout', function(){
	$(".table3").css({top:285, left: 208, position:'absolute'});
	$(".table3").removeClass('fade');
	$(this).children('div').children('.type').removeClass('fade');
	$(this).children('div').children('.year').removeClass('fade');
	$(this).children('div').children('.team').removeClass('fade');
	$(this).children('div').children('.longline').removeClass('fade');
	$(".table3").addClass('opaque');
	$(this).children('div').children('.type').addClass('opaque');
	$(this).children('div').children('.year').addClass('opaque');
	$(this).children('div').children('.team').addClass('opaque');
	$(this).children('div').children('.longline').addClass('opaque');
})
// $(".sect3").on('mouseout', function(){
// 	$(this).closest(".author").css({marginTop:-24.5});
// })
// $(".sect3").on('mouseout', function(){
// 	$(this).closest(".type").css({marginTop:-25});
// })
// $(".sect3").on('mouseout', function(){
// 	$(this).closest(".year").css({marginTop:-25});
// })
// $(".sect3").on('mouseout', function(){
// 	$(this).closest(".team").css({marginTop:-25});
// })




$(".sect4").on('mouseover', function(){
	$(".table4").css({top:387, left: 208, position:'absolute'});
	$(".table4").removeClass('opaque');
	$(this).children('div').children('.type').removeClass('opaque');
	$(this).children('div').children('.year').removeClass('opaque');
	$(this).children('div').children('.team').removeClass('opaque');
	$(this).children('div').children('.longline').removeClass('opaque');
	$(".table4").addClass('fade');
	$(this).children('div').children('.type').addClass('fade');
	$(this).children('div').children('.year').addClass('fade');
	$(this).children('div').children('.team').addClass('fade');
	$(this).children('div').children('.longline').addClass('fade');
})
// $(".sect4").on('mouseover', function(){
// 	$(this).closest(".author").css({marginTop:-14.5});
// })
// $(".sect4").on('mouseover', function(){
// 	$(this).closest(".type1").css({marginTop:-24});
// })
// $(".sect4").on('mouseover', function(){
// 	$(this).closest(".year").css({marginTop:-24});
// })
// $(".sect4").on('mouseover', function(){
// 	$(this).closest(".team").css({marginTop:-24});
// })


$(".sect4").on('mouseout', function(){
	$(".table4").css({top:405, left: 208, position:'absolute'});
	$(".table4").removeClass('fade');
	$(this).children('div').children('.type').removeClass('fade');
	$(this).children('div').children('.year').removeClass('fade');
	$(this).children('div').children('.team').removeClass('fade');
	$(this).children('div').children('.longline').removeClass('fade');
	$(".table4").addClass('opaque');
	$(this).children('div').children('.type').addClass('opaque');
	$(this).children('div').children('.year').addClass('opaque');
	$(this).children('div').children('.team').addClass('opaque');
	$(this).children('div').children('.longline').addClass('opaque');
})
// $(".sect4").on('mouseout', function(){
// 	$(this).closest(".author").css({marginTop:-24.5});
// })
// $(".sect4").on('mouseout', function(){
// 	$(this).closest(".type").css({marginTop:-25});
// })
// $(".sect4").on('mouseout', function(){
// 	$(this).closest(".year").css({marginTop:-25});
// })
// $(".sect4").on('mouseout', function(){
// 	$(this).closest(".team").css({marginTop:-25});
// })




$(".sect5").on('mouseover', function(){
	$(".table5").css({top:507, left: 208, position:'absolute'});
	$(".table5").removeClass('opaque');
	$(this).children('div').children('.type').removeClass('opaque');
	$(this).children('div').children('.year').removeClass('opaque');
	$(this).children('div').children('.team').removeClass('opaque');
	$(this).children('div').children('.longline').removeClass('opaque');
	$(".table5").addClass('fade');
	$(this).children('div').children('.type').addClass('fade');
	$(this).children('div').children('.year').addClass('fade');
	$(this).children('div').children('.team').addClass('fade');
	$(this).children('div').children('.longline').addClass('fade');
})
// $(".sect5").on('mouseover', function(){
// 	$(this).closest(".author").css({marginTop:-14.5});
// })
// $(".sect5").on('mouseover', function(){
// 	$(this).closest(".type1").css({marginTop:-24});
// })
// $(".sect5").on('mouseover', function(){
// 	$(this).closest(".year").css({marginTop:-24});
// })
// $(".sect5").on('mouseover', function(){
// 	$(this).closest(".team").css({marginTop:-24});
// })


$(".sect5").on('mouseout', function(){
	$(".table5").css({top:525, left: 208, position:'absolute'});
	$(".table5").removeClass('fade');
	$(this).children('div').children('.type').removeClass('fade');
	$(this).children('div').children('.year').removeClass('fade');
	$(this).children('div').children('.team').removeClass('fade');
	$(this).children('div').children('.longline').removeClass('fade');
	$(".table5").addClass('opaque');
	$(this).children('div').children('.type').addClass('opaque');
	$(this).children('div').children('.year').addClass('opaque');
	$(this).children('div').children('.team').addClass('opaque');
	$(this).children('div').children('.longline').addClass('opaque');
})
// $(".sect5").on('mouseout', function(){
// 	$(this).closest(".author").css({marginTop:-24.5});
// })
// $(".sect5").on('mouseout', function(){
// 	$(this).closest(".type").css({marginTop:-25});
// })
// $(".sect5").on('mouseout', function(){
// 	$(this).closest(".year").css({marginTop:-25});
// })
// $(".sect5").on('mouseout', function(){
// 	$(this).closest(".team").css({marginTop:-25});
// })



$(".sect6").on('mouseover', function(){
	$(".table6").css({top:627, left: 208, position:'absolute'});
	$(".table6").removeClass('opaque');
	$(this).children('div').children('.type').removeClass('opaque');
	$(this).children('div').children('.year').removeClass('opaque');
	$(this).children('div').children('.team').removeClass('opaque');
	$(this).children('div').children('.longline').removeClass('opaque');
	$(".table6").addClass('fade');
	$(this).children('div').children('.type').addClass('fade');
	$(this).children('div').children('.year').addClass('fade');
	$(this).children('div').children('.team').addClass('fade');
	$(this).children('div').children('.longline').addClass('fade');
})
// $(".sect6").on('mouseover', function(){
// 	$(this).closest(".author").css({marginTop:-14.5});
// })
// $(".sect6").on('mouseover', function(){
// 	$(this).closest(".type1").css({marginTop:-24});
// })
// $(".sect6").on('mouseover', function(){
// 	$(this).closest(".year").css({marginTop:-24});
// })
// $(".sect6").on('mouseover', function(){
// 	$(this).closest(".team").css({marginTop:-24});
// })


$(".sect6").on('mouseout', function(){
	$(".table6").css({top:645, left: 208, position:'absolute'});
	$(".table6").removeClass('fade');
	$(this).children('div').children('.type').removeClass('fade');
	$(this).children('div').children('.year').removeClass('fade');
	$(this).children('div').children('.team').removeClass('fade');
	$(this).children('div').children('.longline').removeClass('fade');
	$(".table6").addClass('opaque');
	$(this).children('div').children('.type').addClass('opaque');
	$(this).children('div').children('.year').addClass('opaque');
	$(this).children('div').children('.team').addClass('opaque');
	$(this).children('div').children('.longline').addClass('opaque');
})
// $(".sect6").on('mouseout', function(){
// 	$(this).closest(".author").css({marginTop:-24.5});
// })
// $(".sect6").on('mouseout', function(){
// 	$(this).closest(".type").css({marginTop:-25});
// })
// $(".sect6").on('mouseout', function(){
// 	$(this).closest(".year").css({marginTop:-25});
// })
// $(".sect6").on('mouseout', function(){
// 	$(this).closest(".team").css({marginTop:-25});
// })

});