// 平滑滚动
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // 移除所有active类
        document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
        // 添加当前active类
        this.classList.add('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // 移动端点击后自动关闭菜单
            if (window.innerWidth <= 992) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        }
    });
});

// 点击主内容区关闭移动端菜单
document.querySelector('.main').addEventListener('click', () => {
    if (window.innerWidth <= 992) {
        document.querySelector('.sidebar').classList.remove('open');
    }
});

