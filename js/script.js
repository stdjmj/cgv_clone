
//탭메뉴
var tab = $('.tab_group>.tab li');

tab.on('click', function(){
    var index = $(this).index();
    var content = $('.tab_group .tab_content').eq(index);
    
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    content.addClass('on');
    content.siblings().removeClass('on');
});

//상단 메뉴
var nav_bg = $('nav>.nav_bg');
var li = $('nav .nav>li');
var subs = $('nav .sub');

li.on('mouseover', function(){
    var max_height = 0;

    subs.each(function(){
        var temp = parseInt($(this).outerHeight());
        if(temp > max_height){
            max_height = temp;
        }
    });

    nav_bg.show().css('height', max_height);
    subs.show().css('display', 'block');
    console.log(max_height);
});

li.on('mouseleave', function(){
    nav_bg.hide().removeAttr('style');
    subs.show().css('display', 'none');
});

//영화 예고편 재생
var video = document.querySelector("#movieVideo video");
var videoBtn = document.querySelector("#movieVideo .btn-wrapper .videoBtn");
var soundBtn = document.querySelector("#movieVideo .btn-wrapper .soundBtn");

setTimeout(function () {
    video.play();
}, 2000);

function videoController() {
    if (video.paused) {
        video.play();
        videoBtn.classList.remove('active');
    } else {
        video.pause();
        
        videoBtn.classList.add('active');
    }
}

function soundController() {
    if(video.muted){ //멈춤 
        soundBtn.classList.add('active');
    }else{
        soundBtn.classList.remove('active');
    }

    video.muted = !video.muted;
}
