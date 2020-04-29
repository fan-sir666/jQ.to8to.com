/* header 下登录区域 左边的定位显示 */
$('.register-location > a').on('mouseenter', function() {
    $('.register-location').addClass('active');
    $('.register-area').show();
})
$('.register-left').on('mouseleave', function() {
    $('.register-location').removeClass('active');
    $('.register-area').hide();
})

/* header 下登录区域 右侧的下拉显示 */
$('.register-item').on('mouseenter', function() {
    $(this).addClass('active');
    $(this).children('ul').show();
})
$('.register-item').on('mouseleave', function() {
    $(this).removeClass('active');
    $(this).children('ul').hide();
})

/* header 下登录区域 右侧的联系管家表单显示 */
$('.register-four').on('mouseenter', function() {
    $(this).children('.register-four-hide').show();
})
$('.register-four').on('mouseleave', function() {
    $(this).children('.register-four-hide').hide();
})

/* 显示 */
$('.search-item').on('mouseenter', function() {
    $(this).children('.search-cont').show();
    $(this).find('.search-item-xz').addClass('sjz');
})
$('.search-item').on('mouseleave', function() {
    $(this).children('.search-cont').hide();
    $(this).find('.search-item-xz').removeClass('sjz');
})

/* 左侧选项区 点击更多按钮 盒子的隐藏显示*/

$('.company-t > a').on('click', function() {
    $(this).prev().toggleClass('active');
    $(this).children('i').toggleClass('active');
})