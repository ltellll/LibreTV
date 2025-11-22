const CUSTOMER_SITES = {
    1080zyku: {
        api: 'https://api.1080zyku.com/inc/api_mac10.php',
        name: 'TV-1080资源',
    }
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: 'TV-电影天堂',
    }
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'TV-如意资源',
    }
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: 'TV-暴风资源',
    }
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: 'TV-无尽资源',
    }
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: 'TV-量子资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
