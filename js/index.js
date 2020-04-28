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


/* 顶部固定功能 */
let searchTop = $('.search').offset().top;
$(window).on('scroll', function() {
    if ($(this).scrollTop() >= searchTop) {
        $('.search').css({
            'position': 'fixed',
            'top': 0,
            'width': '100%',
            'zIndex': 166
        })
        

    } else {
        $('.search').css({
            'position': 'relative',
            'top': 0,
            'zIndex': 166
        })
    }
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


// 自定义视频

// 所有获取元素的操作都在这里写
var playBtn = document.querySelector(".play-btn");
var video = document.querySelector("video");
var total = document.querySelector(".total");
var current = document.querySelector(".current");
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var fullscreen = document.querySelector(".fullscreen");

window.onload = function() {
    // 功能:
    // 1.控制视频的播放与暂停 在播放的时候显示暂停按钮 在暂停的时候显示播放按钮
    // 2.总时间的显示
    // 3.当前时间的显示
    // 4.进度条的显示
    // 5.跳跃播放
    // 6.全屏播放

    // 1.控制视频的播放与暂停 在播放的时候显示暂停按钮 在暂停的时候显示播放按钮
    // 步骤:
    // 1.获取元素
    // 2.绑定事件
    playBtn.onclick = function() {
            // 3.判断视频是否在暂停状态--获取视频的在暂停状态 paused属性
            // console.log(video.paused); true代表暂停状态 false代表播放状态
            if (video.paused) {
                // 4.调用暂停或播放方法控制视频
                // 5.控制按钮的样式
                video.play();
                //  以上是播放状态 播放状态显示暂停按钮
                this.classList.toggle("fa-pause-circle");
            } else {
                video.pause();
                //  以上是暂停状态 播放状态播放暂停按钮
                this.classList.toggle("fa-pause-circle");
            }

        }
        // 2.总时间的显示
        // 步骤
        // 1.判断视频是否可以播放的事件
    video.oncanplay = function() {
            // 2.获取总时间 使用视频的属性duration //1570.32 => 00:26:10
            // 3.把总时间分成小时 分钟 秒
            var h = Math.floor(video.duration / 3600);
            // console.log(h);  
            // 总的秒数/60=多少分钟(video.duration/60)-把小时换算的分钟减去(h*60)
            var min = Math.floor((video.duration / 60) - (h * 60)); //26
            //  console.log(min);
            // 3601s 
            var s = Math.floor(video.duration % 60);
            // 4.判断时间是否小于10 显示的是0+自己 否则就是自己

            h = h < 10 ? "0" + h : h;
            min = min < 10 ? "0" + min : min;
            s = s < 10 ? "0" + s : s;
            // 5.把结果写入html
            total.innerHTML = h + ':' + min + ":" + s;
        }
        // 3.当前时间的显示
        // 步骤
        // 1.获取元素
        // 2.在视频播放的过程中 不断更新当前时间 用的是一个事件--ontimeupdate 当视频进度改变的时候的事件不断触发
    video.ontimeupdate = function() {
            // console.log(1);
            // 3.获取当前时间 video.currentTime
            // console.log(video.currentTime);
            // 4.把当前时间分成小时 分钟 秒
            var h = Math.floor(video.currentTime / 3600);
            var min = Math.floor((video.currentTime / 60) - (h * 60)); //26
            var s = Math.floor(video.currentTime % 60);
            // 5.判断时间是否小于10 显示的是0+自己 否则就是自己
            h = h < 10 ? "0" + h : h;
            min = min < 10 ? "0" + min : min;
            s = s < 10 ? "0" + s : s;
            // 6.把结果写入html
            current.innerHTML = h + ':' + min + ":" + s;


            // 4.进度条的显示
            // 步骤:
            // 1.获取progress-bar
            // 当前时间走了总时间的1/2 
            // 进度条应该走progress的一半 和progress的宽度没有关系 因为当时给progress-bar的宽度时0%
            // 0.5*100 = 50+'%'
            // 2.设置progress-bar的宽度= 当前时间/总时间*100+'%';
            progressBar.style.width = video.currentTime / video.duration * 100 + "%";

        }
        // 5.跳跃播放--真实的是在设置当前时间而已
        // 步骤:
        // 1.获取元素
        // 2.添加点击事件
    progress.onclick = function(event) {
            // 3.获取点击的X轴的坐标
            var mouseX = event.offsetX;
            // console.log(mouseX);
            // 4.获取progress的宽度
            var progressWidth = progress.offsetWidth;
            // 5.计算: 视频的当前时间 = 点击的X轴的坐标 / progress的宽度 * 视频的总时间
            video.currentTime = mouseX / progressWidth * video.duration;
        }
        // 6.全屏播放
        // 全屏播放是HTML5的新的API 但是因为视频有这样的需求 我就直接用了
        // 步骤:
        // 1.获取元素
        // 2.给元素添加点击事件
    fullscreen.onclick = function() {
        // 3.调用全屏方法让视频全屏 requestFullScreen();
        video.webkitRequestFullScreen();
        // 4.调用退出全屏方法 退出全屏
        video.webkitExitFullScreen();

        this.classList.toggle("fa-compress");

    }
}