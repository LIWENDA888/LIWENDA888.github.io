const categories = [
  { "id": "rec", "name": "推荐" },
  { "id": "vf", "name": "可变" },
  { "id": "sans", "name": "黑体" },
  { "id": "round", "name": "圆体" },
  { "id": "title", "name": "标题" },
  { "id": "serif", "name": "宋体" },
  { "id": "brush", "name": "书法" },
  { "id": "hand", "name": "手写" },
  { "id": "comic", "name": "卡通" },
  { "id": "en", "name": "英文" },
  { "id": "fanti", "name": "繁体" },
  { "id": "misc", "name": "其他" }
];

const fontDatabase = [
  { "id": "siyuansans", "name": "思源黑体", "badge": "最多人用", "categoryIds": ["rec","sans","vf"], "imageUrl": "/data/img-index/7.png", "downloads": [{"name":"百度网盘","url":"https://pan.baidu.com/s/1ACugIdXyUtUidFYSpSPnQw?pwd=bm7q","pwd":"推荐"},{"name":"夸克网盘","url":"https://pan.quark.cn/s/a57863aaaf6c"},{"name":"蓝奏云","url":"https://zizao.lanzoul.com/iQNup3sz0jcd"}] },
  { "id": "siyuanserif", "name": "思源宋体", "categoryIds": ["rec","serif","vf"], "imageUrl": "/data/img-index/8.png", "downloads": [{"name":"百度网盘","url":"https://pan.baidu.com/s/1dAdxZ4HQhj2KGLLsUORfHA?pwd=5gu7","pwd":"推荐"},{"name":"夸克网盘","url":"https://pan.quark.cn/s/fc3bb5b97046"},{"name":"蓝奏云","url":"https://zizao.lanzoul.com/i0oUA3sz0lxg"}] },
  { "id": "misans", "name": "MiSans", "categoryIds": ["rec","sans","vf"], "imageUrl": "/data/img-index/2.png", "downloads": [{"name":"官网下载","url":"https://hyperos.mi.com/font/zh/download"}] },
  { "id": "alibabapuhuiti", "name": "阿里巴巴普惠体", "categoryIds": ["rec","sans"], "imageUrl": "/data/img-index/3.png", "downloads": [{"name":"官网下载","url":"https://www.alibabafonts.com/#/font"}] },
  { "id": "opposans", "name": "OPPO Sans", "categoryIds": ["rec","sans","vf"], "imageUrl": "/data/img-index/1.png", "downloads": [{"name":"官网下载","url":"https://www.coloros.com/article/A00000074/"}] },
  { "id": "vivosans", "name": "vivo Sans", "categoryIds": ["rec","sans","vf"], "imageUrl": "/data/img-index/4.png", "downloads": [{"name":"官网下载","url":"https://developers.vivo.com/doc/d/314fa33cbaec4a93be351cd44757d9d9"}] },
  { "id": "harmonyossans", "name": "HarmonyOS Sans", "categoryIds": ["sans"], "imageUrl": "/data/img-index/6.png", "downloads": [{"name":"官网下载","url":"https://developer.huawei.com/consumer/cn/doc/design-guides-V1/font-0000001157868583-V1"}] },
  { "id": "honorsans", "name": "HONOR Sans", "categoryIds": ["sans"], "imageUrl": "/data/img-index/5.png", "downloads": [{"name":"官网下载","url":"https://developer.honor.com/cn/doc/guides/100681"}] },
];
