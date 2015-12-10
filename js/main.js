$(function(){


	$(".sect1").on('mouseover', function(){
		$(".table1").css({top:30, left: 208, position: 'absolute'});
		$(".table1").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})

	$(".sect1").on('mouseout', function(){
		$(".table1").css({top:48, left: 208, position: 'absolute'});
		$(".table1").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})

	

	$(".sect2").on('mouseover', function(){
		$(".table2").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
		$(".table2").css({top:147, left: 208, position:'absolute'})
	});
	$(".sect2").on('mouseout', function(){
		$(".table2").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
		$(".table2").css({top:165, left: 208, position:'absolute'});
	})



	$(".sect3").on('mouseover', function(){
		$(".table3").css({top:267, left: 208, position:'absolute'});
		$(".table3").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})

	$(".sect3").on('mouseout', function(){
		$(".table3").css({top:285, left: 208, position:'absolute'});
		$(".table3").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})




	$(".sect4").on('mouseover', function(){
		$(".table4").css({top:387, left: 208, position:'absolute'});
		$(".table4").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})

	$(".sect4").on('mouseout', function(){
		$(".table4").css({top:405, left: 208, position:'absolute'});
		$(".table4").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})



	$(".sect5").on('mouseover', function(){
		$(".table5").css({top:507, left: 208, position:'absolute'});
		$(".table5").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})

	$(".sect5").on('mouseout', function(){
		$(".table5").css({top:525, left: 208, position:'absolute'});
		$(".table5").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})







	$(".sect6").on('mouseover', function(){
		$(".table6").css({top:627, left: 208, position:'absolute'});
		$(".table6").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})

	$(".sect6").on('mouseout', function(){
		$(".table6").css({top:645, left: 208, position:'absolute'});
		$(".table6").toggleClass('opaque');
		$(this).children('div').children('.type').toggleClass('opaque');
		$(this).children('div').children('.year').toggleClass('opaque');
		$(this).children('div').children('.team').toggleClass('opaque');
		$(this).children('div').children('.longline').toggleClass('opaque');
	})


});