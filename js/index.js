// 轮播图
$(function () {
    var timer = null;
    var count = 0;
    timer = setInterval(autoPlay, 3000)
    // 自动轮播
    function autoPlay() {
        count++;
        if (count > 4) count = 0;
        $('.ggbox .adbtn span').eq(count).addClass('current').siblings('span').removeClass('current');
        $('.abpic').stop().animate({
            left: -604 * count
        })
    }
    $('.ggbox .adbtn span').mouseenter(function () {
        // 鼠标进入底部选项时，停止自动轮播 清除定时器
        clearInterval(timer);
        timer = null;
        // 当前span高亮，删除其它span高亮
        $(this).addClass('current').siblings('span').removeClass('current');
        // 获取当前span索引号
        count = $(this).index();
        // 设置当前span对应索引号的图片显示出来
        $('.abpic').stop().animate({
            left: -604 * count
        })
    })
    // 当鼠标移开轮播图时，开启自动轮播 执行定时器
    $('.ggbox .adbtn span').mouseleave(function () {
        timer = setInterval(autoPlay, 1000);
    })

})

window.addEventListener('load', function () {
    // 轮播图右侧公告
    var new_ul = document.querySelector('.new_ul');
    var new_items = new_ul.querySelectorAll('li');
    var li_item = document.querySelector('.li_item')
    for (let index = 0; index < new_items.length - 1; index++) {
        new_items[index].addEventListener('mouseenter', function () {
            for (let i = 0; i < new_items.length - 1; i++) {
                new_items[i].className = '';
            }
            this.className = 'new_item';
            li_item.style.left = - index * 364 + 'px';
        })
    }

    // 内容中心
    var lis = document.querySelector('.item_li').querySelectorAll('li');
    var nrzx1 = document.querySelector('.nrzx1')
    var nrzx2 = document.querySelector('.nrzx2')
    var nrzx3 = document.querySelector('.nrzx3')
    for (let index = 0; index < lis.length; index++) {
        lis[index].addEventListener('mouseenter', function () {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            if (index == 0) {
                nrzx1.style.display = 'block';
                nrzx2.style.display = 'none';
                nrzx3.style.display = 'none';
            } else if (index == 1) {
                nrzx1.style.display = 'none';
                nrzx2.style.display = 'block';
                nrzx3.style.display = 'none';
            } else {
                nrzx1.style.display = 'none';
                nrzx2.style.display = 'none';
                nrzx3.style.display = 'block';
            }
            this.className = 'xbk';
        })
    }
})