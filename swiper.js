window.addEventListener('load', function () {
    // 左右指针
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    // 轮播图容器
    const swiper = document.querySelector('.swiper')
    // 图片列表
    let images = document.querySelector('.swiper-images');
    // 手动选中
    let dots = document.querySelector('.swiper-dots');
    // 容器宽度
    let swiper_width = swiper.offsetWidth;
    // 指向当前索引值
    let currentIndex = 0;

    swiper.onmouseenter = () => {
        this.clearInterval(timer)
    }

    swiper.onmouseleave = () => {
        timer = this.setInterval(() => {
            next.click()
        }, 3000)
    }

    for (let i = 0; i < images.children.length; i++) {
        let li = document.createElement('li');
        //记录当前小圆圈的索引号
        li.setAttribute('index', i);
        dots.appendChild(li);
        //在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            for (let i = 0; i < dots.children.length; i++) {
                dots.children[i].className = '';
            }
            this.className = 'dot-active';
            currentIndex = this.getAttribute('index');
        })
    }
    //第一个li设置类名为 dot-active
    dots.children[0].className = 'dot-active';

    //左侧按钮点击事件
    prev.onclick = () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.children.length - 1;
        }
        offsetWidth = -swiper_width * currentIndex + 'px';
        images.style.left = offsetWidth;
        focusChange('prev');
    }

    next.onclick = () => {
        currentIndex++;
        if (currentIndex == images.children.length) {
            currentIndex = 0;
        }
        offsetWidth = -swiper_width * currentIndex + 'px';
        images.style.left = offsetWidth;
        focusChange('next');
    }

    const focusChange = (type) => {
        const dotsLen = dots.children.length
        let lastIndex = undefined;
        if (type === 'prev') {
            lastIndex = currentIndex === dotsLen - 1 ? 0 : currentIndex + 1;
        }
        else if (type === 'next') {
            lastIndex = currentIndex === 0 ? dotsLen - 1 : currentIndex - 1
        }

        dots.children[lastIndex].className = '';
        dots.children[currentIndex].className = 'dot-active';
    }

    let timer = setInterval(function () {
        //手动调用点击事件
        next.click();
    }, 3000);

})

