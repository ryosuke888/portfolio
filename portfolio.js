$(function() {
	$(document).ready( function(){
    // ページ読み込み時に実行したい処理
    $('.firstphase-title').slideDown();
    $('.firstphase').slideUp(5000/*000*/);
    
	});

	 $('a[href^="#about"]').click(function(){
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


  var count = setInterval(changeImg, 2800);//ミリ秒数
    i = 1;
    function changeImg(){
        $("#header").css('background-image','url("image/IMG_' + i + '.jpeg")');
        if(i <= 1){  //4枚の画像を切替
            i++;
        }else{
            i = 1;
        }
    }
    
     
});