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


var index = 0;
$('.arrow-right').click(function() {
    index++;
    if (index > $('.slider li').length - 1) {
        index = 0;
    }
    // console.log(index);
    $('.slider li').eq(index)
        .fadeIn(80)
        .siblings()
        .fadeOut(80);

    $('.control a').eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

$('.arrow-left').click(function() {
    index--;
    if (index < 0) {
        index = $('.slider li').length - 1;
    }
    $('.slider li').eq(index)
        .fadeIn(80)
        .siblings()
        .fadeOut(80);
    $('.control a').eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});

var num; // 定时器的标识
function autoPlay() {
    num = setInterval(function() {
        $('.arrow-right').click();
    }, 800);
}
autoPlay(); // 启动自动轮播

$('.slider').mouseover(function() {
    clearInterval(num);
});

$('.slider').mouseout(function() {
    autoPlay();
});

$('.control a').click(function() {
    var index = $(this).index();
    $('.slider li').eq(index)
        .fadeIn(80)
        .siblings()
        .fadeOut(80);
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
});


// 装修公司 tab 切换
$('.finish .tab .finish-tab-control li').click(function() {
    // 1.1 获取当前触发的li的索引
    var index = $(this).index();
    console.log(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.finish .tab .finish-tab-content .finish-tab-content-item').eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
});
// 装修日记 tab 切换
$('.diary-y-tab-control li').click(function(e) {
    // 1.1 获取当前触发的li的索引
    var index = $(this).index();
    $('.diary-tab-content .diary-tab-content-item').eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active');
    e.preventDefault();
});

// 装修效果

// 1. 定义一个数组存放一组类名  slide1   slide5
var classes = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
// 2. 找到右侧元素，注册点击事件
$('#arrRight').click(function() {
    // 2.1 把数组中的最后一个值删掉并存放到数组中第一个位置上
    var last = classes.pop();
    classes.unshift(last);
    console.log(classes)
        // 2.2 循环遍历每一个li更改类名 和 数组中的类名对应
    for (var i = 0; i < classes.length; i++) {
        $('#slide li').eq(i).removeClass().addClass(classes[i]);
    }
});


// 3. 找到左侧元素，注册点击事件
$('#arrLeft').click(function() {
    // 3.1 把数组中的第一个值删掉并存放到数组中最后一个位置上
    var first = classes.shift();
    classes.push(first);
    console.log(classes)
        // 3.2 循环遍历每一个li更改类名 和 数组中的类名对应
    for (var i = 0; i < classes.length; i++) {
        $('#slide li').eq(i).removeClass().addClass(classes[i]);
    }
});