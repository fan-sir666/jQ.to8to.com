// 定位地址的显示隐藏
$('.registerL-t > a').on('mouseenter', function() {
    $('.registerL-t').addClass('active');
    $('.registerL-b').show();
})
$('.register-l').on('mouseleave', function() {
    $('.registerL-t').removeClass('active');
    $('.registerL-b').hide();
})

// 显示顶部的下拉菜单
$('.register-item').on('mouseenter', function() {
    $(this).parent().addClass('active');
    $(this).next('.register-cont').show()
})
$('.register-y > div').on('mouseleave', function() {
    $(this).removeClass('active');
    $(this).children('.register-cont').hide()
})