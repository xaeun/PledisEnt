// script.js

// * 모바일 gnb 열기
$('.allmenu a span').click(function(e){
    e.preventDefault();
    $('.mo_gnb').stop().show();
})

// * 모바일 gnb 닫기
$('.mo_gnb_close').click(function(e){
    e.preventDefault();
    $('.mo_gnb').stop().hide()
});

// * 아티스트 아코디언
$('.mo_gnb .has a').click(function(e){
    e.preventDefault();
    let dis = $(this).siblings('.depth2').css('display');
    if(dis == 'none'){
        $(this).parents('li').addClass('active');
        $(this).siblings('.depth2').stop().slideDown();
    } else{
        $('.mo_gnb .has').removeClass('active');
        $('.mo_gnb .has .depth2').stop().slideUp();
    }
}); 

// * 헤더 - 언어선택
$('.language a').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.mo_language').stop().slideToggle();
});

//  * 메인 슬라이드
$('#mainsilde').slick({
    dots : false,
    arrows : false,
    autoplay : true,
    autoplaySpeed : 3000
});

// * 메인 2 - 뮤직비디오
$('.m2_mv').slick({
    dots : true,
    arrows : false
});

// * 메인 3 - new album relese
$('.m3_bg').slick({
    arrows : false,
    asNavFor : '.m3_newalbum_list'
})

$('.m3_newalbum_list').slick({
    asNavFor : '.m3_bg',
    variableWidth: true
})

//* 메인 5 - youtube
let winW = $(window).width();
if(winW > 767){
    $('.m5_list').slick({
        arrows : false
    });
}
      

// * 푸터 - 패밀리 사이트
$('.site a').click(function(e){
    e.preventDefault();
    $('.site .depth1').stop().slideDown();
})

$(document).click(function(e){
    // target변수에 클릭한 대상을 저장
    var target = $(e.target);
    // target.closest('.h_search').length
    // => 클릭한 대상이 .h_search 내부에 있는 대상이면 true값 저장
    // !를 붙였다는 건 위의 값을 반대로 뒤집는다는 이야기
    if (!target.closest('.site').length) {
        $('.site .depth1').stop().slideUp();
    }
});

$('.site .depth1 .view').click(function(e){
    e.preventDefault();
    $('.site .depth2').stop().slideToggle();
})