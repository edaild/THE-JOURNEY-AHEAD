jQuery(document).ready(function () {

    $('.navi>li').mouseover(function () {
      $('.submenu').stop().slideDown(500);
      $("#menu_bg").stop().slideDown(500);
    }).mouseout(function () {
      $('.submenu').stop().slideUp(500);
      $("#menu_bg").stop().slideUp(500);
    });
  
    $('.navi2>li').mouseover(function () {
      $('.submenu2').stop().slideDown(500);
    }).mouseout(function () {
      $('.submenu2').stop().slideUp(500);
    });

     $('.navi3>li').mouseover(function () {
      $('.submenu3').stop().slideDown(100);
    }).click(function () {
      $('.submenu3').stop().slideUp(100);
    });
   

    $('.imgslide a:gt(0)').hide();
  setInterval(function(){
	$('.imgslide a:first-child')
	.fadeOut()
	.next('a')
	.fadeIn()
	.end()
	.appendTo('.imgslide');
  },6000);


  });
  