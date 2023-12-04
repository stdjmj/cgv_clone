var tab = $('.tab_group>.tab li');

tab.on('click', function(){
    var index = $(this).index();
    var content = $('.tab_group .tab_content').eq(index);
    
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    content.addClass('on');
    content.siblings().removeClass('on');
});

