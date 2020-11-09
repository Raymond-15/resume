// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen tujuan
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html , body').animate({

		scrollTop: elemenTujuan.offset().top - 75
	}, 1000, 'easeInOutQuint')

	e.preventDefault();

});

// parallax
$(window).on('load', function(){
	$('.pTengah').addClass('pMuncul');
	$('.hTengah').addClass('hMuncul');
});

$(window).scroll(function() {

	// Parallax bergerak naik keatas jumbotron
	var wScroll = $(this).scrollTop();

	// $('.jumbotron img').css({
	// 	'transform' : 'translate(0px, '+ wScroll/6 +'%)'

	// });

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'

	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll +'%)'

	});

	if (wScroll > $('.biodata').offset().top - 300 ) {
		$('.biodata .thumbnail').each(function(i){
			setTimeout(function(){
				$('.biodata .thumbnail').eq(i).addClass('muncul');	
			}, 300 * i);
		});

		
	}
});