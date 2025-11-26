// --- 搜索引擎配置 ---
const SEARCH_ENGINES = [
    { name: '百度', url: 'https://www.baidu.com/s?wd=', placeholder: '搜索 百度...' },
    { name: '形近字', url: 'https://www.zizao.top/tools/chaoyin/?mode=similar&q=', placeholder: '请输入单字...' },
    { name: '百度AI', url: 'https://chat.baidu.com/search?word=', placeholder: '搜索 百度AI...' },
    { name: '图片', url: 'https://image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word=', placeholder: '搜索百度图片...' },
    { name: '免版权图片', url: 'https://www.logosc.cn/so/?s=', placeholder: '搜索免版权图片' },
    { name: '翻译', url: 'https://fanyi.baidu.com/#/zh/en/', placeholder: '百度翻译...' },
    { name: '花瓣', url: 'https://huaban.com/search?q=', placeholder: '搜索 花瓣图片...' },
    { name: '必应', url: 'https://www.cn.bing.com/search?q=', placeholder: '搜索 Bing...' },
    { name: '谷歌', url: 'https://www.google.com/search?q=', placeholder: '搜索 Google...' },
];

// --- 顶部左侧链接 ---
const HEADER_LINKS = [
    { title: '自在造字首页', url: 'https://www.zizao.top' },
    { title: '字体产品', url: 'https://www.zizao.top/fonts' },
    { title: '设计百宝库', url: 'https://www.zizao.top/bao' },
    { title: '文本编辑器Pro', url: 'https://www.zizao.top/tools/txt' },
];

// --- 搜索框下方快捷链接 ---
const QUICK_LINKS = [
    { title: '视频在线下载', url: 'https://snapany.com/zh' },
    { title: 'Google Ai Studio', url: 'https://aistudio.google.com' },
    { title: 'Google Gemini', url: 'https://gemini.google.com/app' },
    { title: 'Github', url: 'https://github.com' },
];

// --- 核心分类数据 (请在此处修改或添加卡片) ---
const CATEGORIES = [
    {
      id: 'A',
      name: '热门推荐',
      icon: 'flame', // 图标名来自 Lucide Icons
      subCategories: [
        { 
          id: 'A1', 
          name: '#每日常用', 
          // 图标颜色配置
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '常' },
          sites: [
            {title: "花瓣", description: "收集设计灵感，保存有用的素材", url: "https://hunban.com"},
            {title: "站酷", description: "中国人气设计师互动平台", url: "https://www.zcool.com.cn", },
            {title: "优设", description: "人气设计师交流学习平台", url: "https://www.uisdc.com", },
            {title: "Pinterest", description: "全球最大的创意灵感图片采集站", url: "https://www.pinterest.com"},
            {title: "Dribbble.", description: "面向设计师的社交网络平台", url: "https://dribbble.com/"},
            {title: "Behance", description: "doe旗下的设计师交流平台", url: "https://behance.net/"},
            {title: "Youtube", description: "全球最大的学习分享平台", url: "https://www.youtube.com", },
          ]
        },
        { 
          id: 'A2', 
          name: '#影音视听', 
          iconConfig: { gradient: 'from-blue-500 to-indigo-500', character: '影' },
          sites: [
            { title: '抖音短视频', description: '字节跳动旗下，用短视频记录分享多彩生活', url: 'https://www.douyin.com/'},
            { title: '哔哩哔哩', description: '年轻人潮流文化娱乐社区，有多元视频', url: 'https://www.bilibili.com/'},
            { title: '腾讯视频', description: '腾讯旗下，提供海量影视综，畅享多元视听', url: 'https://v.qq.com/'},
            { title: '优酷', description: '阿里运营，集影视综艺等的综合视频台，为好作品而发力', url: 'https://www.youku.com/'},
            { title: '爱奇艺', description: '提供丰富剧集、综艺等，满足多样观剧欲的视频平台', url: 'https://www.iqiyi.com/'}
          ]
        },
        { 
          id: 'A3', 
          name: '#博客社区', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '社' },
          sites: [
            { title: '小红书', description: '年轻人生活分享平台，涵盖多元生活方式', url: 'https://www.xiaohongshu.com/'},
            { title: '新浪微博', description: '多媒体即时分享，热点与互动传播平台', url: 'https://weibo.com/'},
            { title: '百度贴吧', description: '依兴趣聚合用户，打造庞大中文社区', url: 'https://tieba.baidu.com/'},
            { title: 'QQ空间', description: '集日志、相册、互动于一体的个性空间', url: 'https://qzone.qq.com/'},
            { title: '豆瓣', description: '以书影音为基，延展多元兴趣交流社区', url: 'https://www.douban.com/'},
            { title: '开源中国', description: '聚焦开源技术，开发者交流协作平台', url: 'https://www.oschina.net/'}
          ]
        },
        { 
          id: 'A4', 
          name: '#在线娱乐', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '乐' },
          sites: [
            { title: 'Tetr.io', description: '多人联机俄罗斯方块，吃鸡版本的特趣思', url: 'https://tetr.io'},
            { title: 'Mikutap', description: '一定开声音，然后点击任意键或者屏幕，非常Happy！', url: 'https://aidn.jp/mikutap/'},
            { title: 'ZType', description: '把战机和练习打字完美融合，配上BGM很有感觉', url: 'https://zty.pe'},
            { title: 'BS', description: '在线飙车小游戏，四个方向键控制小车，很有难度', url: 'https://bruno-simon.com'},
            { title: '指尖上 | 全球全景360VR', description: '全球知名旅游景点的VR全景和详细介绍,宅家看世界', url: 'https://www.zhijianshang.com'},
            { title: 'VR看世界', description: '坐在家里就能看到来自全世界的景色', url: 'https://www.airpano.com/'}
          ]
        },
      ],
    },
    {
      id: 'B',
      name: '字体设计',
      icon: 'type',
      subCategories: [
        { 
          id: 'B1', 
          name: '#古风书法', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '书' },
          sites: [
            { title: '以观书法', description: '类别详细风格多，页面UI比较简约，很推荐', url: 'https://web.ygsf.com'},
            { title: '字根书法字典', description: '动画很丝滑，湖南字根研究中心推出的web端书法工具', url: 'https://zgzd.wantuyun.cn/dictionary/search'},
            { title: '集古作书法', description: '不仅有各类书法字，还有字画等，五花八门的都有', url: 'https://www.jiguzuo.com/shufa/'},
            { title: '书法字体', description: '数量多且排列舒适，页面扑面而来的古风', url: 'https://tool.wikichina.com/shufa/index.asp'},
            { title: '书法字典在线查询', description: '页面干净，没有太多广告，比较纯粹的书法展示', url: 'https://www.shufa5.com/'},
            { title: '大图书法字典', description: '大图网旗下的，页面同样是干净几乎无广告', url: 'http://shufa.daquan.la/'},
            { title: '梅花书检', description: '不止支持搜字还支持搜部首查古书风格', url: 'https://www.mhsj.top/'},
            { title: '好查书法', description: '好查网的书法频道，页面干净舒适无广告', url: 'https://shufa.hao86.com/'}
          ]
        },
        { 
          id: 'B2', 
          name: '#字体灵感', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '灵' },
          sites: [
            { title: '站酷-字体', description: '站酷站内的字体设计师会在这里展示最新的设计作品', url: 'https://www.zcool.com.cn/discover?cate=8&subCate=14' },
            { title: '图像处理工具集', description: '书法字典 搜汉字的各种书写风格', url: 'https://www.shufazidian.com/' },
            { title: '书法迷', description: '中国书法字典网收集整理大师毛笔字', url: 'http://www.shufami.com/' },
            { title: '字形演变', description: '可以查看汉字的演变过程', url: 'https://www.fantiz5.com/zixing/' },
            { title: '字体传奇网', description: '分类收录各风格字体作品和素材', url: 'http://www.ziticq.com/Works' },
            { title: '字体江湖', description: '「字体帮」字体设计师刘兵克建立，会有很多字体设计师在此打卡练习', url: 'https://www.zitisheji.com' },
            { title: 'CND设计网-字体灵感', description: 'CND设计网下的字体灵感搜索', url: 'http://ziti.cndesign.com/inspiration.html' }
          ]
        },
        { 
          id: 'B3', 
          name: '#字体厂商', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '品' },
          sites: [
            { title:'方正字库', description:'中国最早的中文字库开发厂商，源于北大“汉字处理系统”',url:'https://www.foundertype.com/ '},
            { title:'汉仪字库', description:'中文字库老牌厂商，出厂超千款字库产品，众多品牌定制字体',url:'https://www.hanyi.com.cn/ '},
            { title:'造字工房', description:'2009年创立，专注中文新字体设计，团队由专业字体设计师组成',url:'https://www.makefont.com/ '},
            { title:'锐字潮牌字库', description:'秉持 “先锋且无畏” 理念，从年轻视角打造个性化汉字设计',url:'http://www.reeji.com/ '},
            { title:'字魂', description:'致力于构建多样化字库资源体系，为不同场景与用户提供丰富字体选择',url:'https://izihun.com/ '},
            { title:'Aa字库', description:'依托平台优势，提供海量丰富字体资源，满足不同的字体使用需求',url:'http://www.zitiguanjia.com/ '},
            { title:'阿里巴巴字库', description:'背靠阿里，聚焦企业字体服务领域，提供专业字体解决方案',url:'https://www.alibabafonts.com/ '},
            { title:'刘兵克字库', description:'精心打造多种风格字库产品，为各类设计项目增添独特文字魅力',url:'https://ziku.zitisheji.com/ '},
            { title:'胡晓波字体', description:'展现别具一格的字体风格，为文字呈现带来新颖视觉体验',url:'http://hxbzt.com/ '},
            { title:'喜鹊造字', description:'字体行业超级出圈的喜鹊招牌体便是出自此',url:'https://xiquezaozi.taobao.com/ '},
            { title:'上首造字', description:'专注字体设计领域，传承文字之美并融入创新设计',url:'https://www.ssfonts.com/ '},
            { title:'仓耳屏显字库', description:'专注研发创新型屏显字体，提供适配屏幕阅读的字体',url:'https://tsanger.cn/ '},
            { title:'叶根友字库', description:'拥有丰富多样的手写体与印刷字体资源满足不同场景',url:'https://www.yegenyou.com/ '},
            { title:'也字工厂', description:'专注个性化字体，设计理念到字体呈现满足用户需求',url:'https://www.yefont.com/ '},
            { title:'山海字库', description:'致力于提供丰富多元字库选择，涵盖多种风格字体',url:'https://shanhaiziku.com/ '},
            { title:'火山字型', description:'打造多样字型产品，满足不同设计需求与创意表达',url:'https://hstype.com/ '}
          ]
        },
        { 
          id: 'B4', 
          name: '#字体工具', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '工' },
          sites: [
            { title:'字体大师', description:'在线写字，生成自己的字库字体',url:'https://v.ziti163.com/Font#/ '},
            { title:'Z2H字帖', description:'自己定制一套适合自己的练字字帖',url:'https://paper.z2h.cn/ '},
            { title:'SYMBL符号大全', description:'包含了几乎所有可复制使用的符号',url:'https://symbl.cc/cn/ '},
            { title:'繁体字转换', description:'简体繁体之间可以互相转换',url:'https://www.aies.cn/ '},
            { title:'Axis-praxis', description:'在线可变字体站，在这里可以体验到智能字体的魅力',url:'https://www.axis-praxis.org/ '},
            { title:'Wakamaifondue', description:' 上传你的本地字体文件，即可查阅各种参数',url:'https://wakamaifondue.com/ '},
            { title:'Dinamo', description:'Dinamo可变字体工作室提供的在线可变字体预览及动画展示等',url:'https://fontgauntlet.com/ '},
            { title:'Font Playground', description:'尽管都是外文的可变字体，但是很有参考意义',url:'https://play.typedetail.com/ '},
            { title:'Variable Fonts', description:'提供非常细致的各类字体字符参数的控制轴',url:'https://v-fonts.com/ '}
          ]
        },
        { 
          id: 'B5', 
          name: '#字体动效', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '动' },
          sites: [
            { title:'Photo Animation', description:'上传图片生成类似PPT转场动画',url:'https://boolpic.fun/animation '},
            { title:'Endless tools', description:'Web端字体视觉效果编辑工具',url:'https://beta.endlesstools.io '},
            { title:'YASAI字体动画', description:'8个在线可编辑的文字效果工具',url:'https://wangyasai.github.io/designtools.html '},
            { title:'SpaceTG英文动画', description:'可以自己编辑生成动画的文字，只支持英文',url:'https://spacetypegenerator.com/ '}
          ]
        }
      ],
    },
    {
      id: 'C',
      name: '平面视觉',
      icon: 'image',
      subCategories: [
        { 
          id: 'C1', 
          name: '#版式设计', 
          iconConfig: { gradient: 'from-pink-400 to-rose-500', character: '版' },
          sites: [
            { title: 'Typeroom', description: '字体排版设计前沿网站', url: 'https://www.typeroom.eu/' },
            { title: 'Typographicposters', description: '专注于文字排版和抽象图形类的海报设计网站', url: 'https://www.typographicposters.com/archive' },
            { title: 'Labor-atories', description: '日本书籍封面设计', url: 'http://labor-atories.com/works/' },
            { title: 'Dieline', description: '全球最受欢迎包装设计博客', url: 'https://thedieline.com/' },
            { title: 'Marble.co', description: '可爱活泼风～平面设计案例', url: 'https://www.marble-co.net/portfolio' },
            { title: 'Niklasalm', description: '最佳网站设计奖项和灵感', url: 'https://www.niklasalm.se' },
            { title: 'Awwwards', description: '优秀的创意合成图片与视频社区', url: 'https://www.awwwards.com/' },
            { title: 'Designspiration', description: '差不多算是美国版花瓣网', url: 'https://www.designspiration.com/' },
            { title: 'Fonts in Use', description: '字体的美与价值～8000条商用实例', url: 'https://fontsinuse.com/' },
            { title: 'Art of Menu', description: '来自各地看不完的优美菜单设计', url: 'https://www.underconsideration.com/artofthemenu/' }
          ]
        },
        { 
          id: 'C2', 
          name: '#品牌VI', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '牌' },
          sites: [
            { title:'Abdudo', description:'每日分享高品质设计创意灵感',url:'https://abduzeedo.com/ '},
            { title:'Trend List', description:'一位大牛眼中的平面设计之美',url:'https://www.trendlist.org/ '},
            { title:'BrandGuidelines', description:'分享来自全球各地的品牌VI案例',url:'https://www.brandguidelines.net/ '},
            { title:'Inspiration Grid', description:'来自全球新奇的品牌创意案例',url:'https://theinspirationgrid.com/ '}
          ]
        },
        { 
          id: 'C3', 
          name: '#LOGO设计', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '标' },
          sites: [
            { title:'Logostock', description:'一个日本logo设计社区',url:'http://logostock.jp '},
            { title:'Worldvectorlogo', description:'免费下载各种品牌logo',url:'https://worldvectorlogo.com '},
            { title:'LogoMoose', description:'一个logo灵感和设计社区',url:'https://www.logomoose.com '},
            { title:'Logopond', description:'国外优秀logo灵感社区',url:'https://logopond.com '}
          ]
        },
        { 
          id: 'C4', 
          name: '#摄影鉴赏', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '影' },
          sites: [
            { title:'CNU', description:'高质量摄影社区',url:'http://www.cnu.cc/ '},
            { title:'色影无忌', description:'中国影像生活门户',url:'https://vision.xitek.com/sight/ '},
            { title:'Designspiration', description:'提供设计灵感、插画摄影、时尚艺术',url:'https://www.designspiration.com/ '},
            { title:'Photock', description:'8000+免版权摄影图片',url:'https://photock.jp '},
            { title:'Foodies Feed', description:'秀色可餐！免费高清食物照片',url:'https://www.foodiesfeed.com/ '}
          ]
        }
      ],
    },
    {
      id: 'D',
      name: 'AI工具',
      icon: 'bot',
      subCategories: [
        { 
          id: 'D1', 
          name: '#AI对话', 
          iconConfig: { gradient: 'from-violet-500 to-fuchsia-500', character: '聊' },
          sites: [
            { title:'Deekseek', description:'全球领先的国产推理性“AI助手”',url:'https://chat.deepseek.com/ '},
            { title:'腾讯元宝', description:'腾讯混元大模型，并有Deekseek R1加持，对微信超强兼容功能强大',url:'https://yuanbao.tencent.com/chat/naQivTmsDa '},
            { title: 'AskManyAI', description: '来自全球的超多AI工具集合站，体验甚至超过原平台', url: 'https://www.dazi.co/' },
            { title: '问小白AI', description: '如果经常受到DeepSeek服务器繁忙，可以试试这个', url: 'https://www.wenxiaobai.com' },
            { title:'ChatGPT', description:'OpenAI的研发的知名AI聊天助手',url:'https://chatgpt.com/ '},
            { title:'Gemini', description:'谷歌研发的人工智能对话模型',url:'https://gemini.google.com/app '},
            { title:'Kimi Chat', description:'智能聊天+超长文本处理',url:'https://kimi.moonshot.cn/ '},
            { title:'NotionAI', description:'国内版ChatGPT智能聊天机器人',url:'http://chatyy.nbmzdl.cn/?hometype=chat '},
            { title:'豆包', description:'字节跳动旗下通用性AI大模型',url:'https://www.doubao.com '},
            { title:'讯飞星火', description:'综合性AI 智能聊天+生图+PPT...',url:'https://xinghuo.xfyun.cn/desk '},
            { title:'通义千问', description:'阿里出品！AI聊天+智能生图+视频摘要',url:'https://tongyi.aliyun.com/qianwen/ '},
            { title:'秘塔AI', description:'AI智能分析文案生成',url:'https://metaso.cn/?s=bdpc '}
          ]
        },
        { 
          id: 'D2', 
          name: '#AI绘画', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '绘' },
          sites: [
            { title:'Stable Diffusion', description:'开源AI图像生成工具”',url:'https://stability.ai/ '},
            { title:'DALL-E', description:'OpenAI的AI图像生成工具',url:'https://www.dall-e.com/ '},
            { title:'即梦AI', description:'图片转视频的智能创作平台',url:'https://jimeng.jianying.com/ '},
            { title:'哩布哩布AI', description:'国产人气AI生图大模型社区',url:'https://www.liblib.art/ '},
            { title:'通义万相', description:'阿里云旗下的智能生图平台',url:'https://tongyi.aliyun.com/wanxiang/ '},
            { title:'佐糖AI', description:'图片修复+在线抠图+背景合成',url:'https://picwish.cn/create '},
            { title:'Gamma', description:'AI制作PPT 一秒生成',url:'https://gamma.app/ '},
            { title:'Vega AI', description:'在线免费AI插画创作平台',url:'https://applet.rightbrainai.cn/ '},
            { title:'神采AI', description:'AIGC艺术生成平台，可以从草图、照片或文本中生成图像、视频和动画等形式',url:'https://www.ishencai.com/ '}
          ]
        },
        { 
          id: 'D3', 
          name: '#AI视频', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '视' },
          sites: [
            { title: '度加', description: 'AI生成视频文案和匹配视频', url: 'https://aigc.baidu.com/home' }
          ]
        },
        { 
          id: 'D4', 
          name: '#AI音频', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '音' },
          sites: [
            { title: '天工AI', description: 'AI智能音乐+AI智能生图', url: 'https://xinghuo.xfyun.cn/desk' }
          ]
        }
      ],
    },
    {
      id: 'E',
      name: '免版权资源',
      icon: 'copyright',
      subCategories: [
        { 
          id: 'E1', 
          name: '#免版权中文字体', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '中' },
          sites: [
            { title:'字体天下', description:'网站汇集超多字体，部分免商可下载',url:'https://www.fonts.net.cn/ '},
            { title:'字体搬运工', description:'整理收集来自全网的免商用字体',url:'https://font.sucai999.com/ '},
            { title:'猫啃网', description:'专注于免商用中文字体下载',url:'https://www.maoken.com/ '},
            { title:'100Font', description:'专门整理收集免商用字体的网站',url:'https://www.100font.com/ '}
          ]
        },
        { 
          id: 'E2', 
          name: '#免版权英文字体', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '英' },
          sites: [
            { title:'Fontspace', description:'好看的英文字体这里都有',url:'https://www.fontspace.com '},
            { title:'Urban Fonts', description:'英文字体资源搜索与下载',url:'https://www.urbanfonts.com '},
            { title:'Fonts2u', description:'字体资源支持搜索与下载',url:'https://zh.fonts2u.com/ '},
            { title:'Fontyukle', description:'世界上最大的自由字体的网站',url:'https://www.fontyukle.net/ '},
            { title:'Losttype', description:'字体非常漂亮展示方式特别',url:'http://www.losttype.com/browse/ '},
            { title:'1001freefonts', description:'超过20万个高质量字体下载',url:'https://www.1001freefonts.com/ '},
            { title:'Dafont', description:'数量巨多的免费英文字体下载',url:'https://www.dafont.com/ '},
            { title:'Fontfabric', description:'提供优秀好用的英文字体下载',url:'http://www.fontfabric.com/ '},
            { title:'Myfonts', description:'上传图片搜索英文字体功能强大',url:'https://www.myfonts.com '},
            { title:'Fontsquirrel', description:'超赞的精心挑选的免费字体下载',url:'https://www.fontsquirrel.com/ '},
            { title:'Use & Modify', description:'奇怪而美丽的英文字体',url:'https://usemodify.com '},
            { title:'VAN fonts', description:'在线生成英文艺术字',url:'https://vaufonts.com/ '}
          ]
        },
        { 
          id: 'E3', 
          name: '#免版权图片', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '图' },
          sites: [
            { title:'搜图神器', description:'多站点免版权图片搜索一键搜索',url:'https://www.logosc.cn/so/ '},
            { title:'Pexels', description:'全球知名图片视频网站 还支持中文',url:'https://www.pexels.com/zh-cn/ '},
            { title:'Pixabay', description:'超过450张高质量免版权图库',url:'https://pixabay.com/ '},
            { title:'Reejpg', description:'共有11.5万张的免费图片库',url:'https://en.freejpg.com.ar/ '},
            { title:'Kaboompics', description:'按具体的属性进行的分类',url:'https://kaboompics.com/ '},
            { title:'Picjumbo', description:'图片质量很高的免费图库',url:'https://picjumbo.com/ '},
            { title:'Fancycrave', description:'分类好的免费图片合集',url:'https://fancycrave.com/stock-photos/free/ '},
            { title:'Freelyphotos', description:'一个业余爱好者运营的站点',url:'https://www.freelyphotos.com/ '},
            { title:'Stockvault', description:'每天都会添加新的照片、纹理和插图！',url:'https://www.stockvault.net/ '},
            { title:'Designerspics', description:'清晰的无版权图片，使用无需署名',url:'http://www.designerspics.com/ '},
            { title:'Photo stockedito', description:'35万的无版权图片储备提供使用',url:'https://photostockeditor.com/ '},
            { title:'Shot stash', description:'为专业人士提供有创意的免费高清图片素材',url:'https://shotstash.com/ '},
            { title:'Pakutaso', description:'日本很知名的图片素材站',url:'https://www.pakutaso.com/ '},
            { title:'Visualhunt', description:'界面比较清爽的图片搜索站点',url:'https://visualhunt.com/ '},
            { title:'Hippopx', description:'分类比较细致的免版权图库',url:'https://www.hippopx.com/ '},
            { title:'Unsplash', description:'分类比较详细，各种类型都有',url:'https://unsplash.com/ '},
            { title:'Everypixel', description:'能智能搜索各大图片网站的图片',url:'https://www.everypixel.com '},
            { title:'Barnimages', description:'提供免费高清晰度图片集合的站点',url:'https://barnimages.com '},
            { title:'Jeshoots', description:'图片质量还不错的无版权图片网站',url:'https://jeshoots.com/ '},
            { title:'Gratisography', description:'精选时尚流行和富有设计感的图片',url:'http://gratisography.com/ '}
          ]
        },
        { 
          id: 'E4', 
          name: '#免版权视频', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '视' },
          sites: [
            { title:'Coverr', description:'使用免费的视频素材无需注明出处',url:'https://coverr.co/stock-video-footage '},
            { title:'Mazwai', description:'专为视频剪辑打造的免版权视频站',url:'https://mazwai.com '},
            { title:'Mixkit', description:'分类比较全，有视频、BGM、音效',url:'https://mixkit.co/ '},
            { title:'Marpi', description:'世界各地拍摄视频直接下载',url:'https://www.marpi.studio/artwork '},
            { title:'Videezy', description:'提供大量免费高画质HD、4K影片素材',url:'https://www.videezy.com/ '},
            { title:'Musicmaker', description:'专为视频剪辑打造的免版权视频站',url:'https://musicmaker.site/ '}
          ]
        },
        { 
          id: 'E5', 
          name: '#免版权音频', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '音' },
          sites: [
            { title:'Dova-s', description:'提供超过上万首免费音乐素材',url:'https://dova-s.jp/ '},
            { title:'Chagasi', description:'原创的自由使用免版权音乐素材',url:'http://amachamusic.chagasi.com/ '},
            { title:'Cchound', description:'拥有海量免版税的公共领域音乐资源',url:'https://cchound.com/ '},
            { title:'Musopen', description:'提供古典各类乐器音乐资源',url:'https://musopen.org/music/ '},
            { title:'Looperman', description:'很实用的无限循环背景音乐',url:'https://www.looperman.com/loops '},
            { title:'Bensound', description:'收集了许多超有感觉的音乐',url:'https://www.bensound.com/ '},
            { title:'Archive', description:'质量不错的免版权音乐收集站',url:'https://freemusicarchive.org/ '}
          ]
        },
        { 
          id: 'E6', 
          name: '#免版权音效', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '效' },
          sites: [
             { title:'Tam-music', description:'免费提供分类详细的音乐音效素材',url:'https://www.tam-music.com/ '}
          ]
        }
      ],
    },
    {
      id: 'F',
      name: '设计工具',
      icon: 'pen-tool',
      subCategories: [
        { 
          id: 'F1', 
          name: '#在线设计平台', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '设' },
          sites: [
            { title:'Figma', description:'在线协作UI设计工具',url:'https://www.figma.com '},
            { title:'Mega Creator', description:'Web端矢量插画设计工具',url:'https://icons8.com/mega-creator/ '},
            { title:'Modyfi', description:'新一代Web端AI图像编辑工具',url:'https://www.modyfi.com/ '},
            { title:'Logoaa', description:'基于事先设计LOGO基础上在线修改',url:'https://www.logoaa.com '}
          ]
        },
        { 
          id: 'F2', 
          name: '#LOGO生成', 
          iconConfig: { gradient: 'from-violet-500 to-fuchsia-500', character: '标' },
          sites: [
            { title:'Logoaa', description:'基于事先设计LOGO基础上在线修改',url:'https://www.logoaa.com '},
            { title:'Designevo', description:'可以调整图标颜色和英文字体选择',url:'https://www.designevo.com/cn/ '},
            { title:'Freelogo', description:'根据设计需求可以添加元素丰富设计',url:'https://www.freelogodesign.org/ '},
            { title:'Logogarden', description:'提供大量LOGO的矢量素材自由选择',url:'https://www.logogarden.com/ '},
            { title:'Logotype', description:'在线换颜色换字体加效果等生成标志',url:'https://logotypemaker.com/ '},
            { title:'Yeelogo', description:'拥有海量模版的免费在线LOGO制作',url:'http://yeelogo.com '}
          ]
        },
        { 
          id: 'F3', 
          name: '#背景生成', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '图' },
          sites: [
            { title:'Getwaves', description:'波浪图形 可调节形态，支持SVG下载',url:'https://getwaves.io/ '},
            { title:'Resonate', description:'炫酷图形 炫酷图形生成，可以改位置形态',url:'https://demo.marpi.pl/resonate/ '},
            { title:'Glitchart', description:'形状渐变背景 可以调整角度颜色形状',url:'https://glitchart.io/ '},
            { title:'WebGL Fluid Simulation', description:'WebGL流体效果 会动的渐变色，还可以自己调节',url:'https://paveldogreat.github.io/WebGL-Fluid-Simulation/ '},
            { title:'剪纸风渐变', description:'剪纸风渐变 右上角控制台可以修改参数',url:'https://codepen.io/pissang/full/geajpX '},
            { title:'流动型渐变', description:'流动型渐变 可以更改色相等参数',url:'https://codepen.io/Yakudoo/full/rJjOJx/ '},
            { title:'Perlin Noise', description:'流线型线条 更改线条密度、颜色',url:'https://wangyasai.github.io/Perlin-Noise/ '},
            { title:'欧普球生成器', description:'欧普球生成器 可以调节线条密度、角度',url:'https://wangyasai.github.io/Play-a-ball/ '},
            { title:'Resonate', description:'渐变流线背景 支持任意方式去修改效果',url:'https://demo.marpi.pl/resonate/ '},
            { title:'PerlinNoisePainter', description:'五角星元素 任意效果展示一个会动的五角星',url:'https://wangyasai.github.io/PerlinNoisePainter/ '},
            { title:'Awesome Mosaic', description:'马赛克背景 可以调节的会动的马赛克背景',url:'https://wangyasai.github.io/Awesome-Mosaic/ '},
            { title:'Cool Backgrounds', description:'波浪图形 可调节形态，支持SVG下载',url:'https://coolbackgrounds.io/ '},
            { title:'炫光背景', description:'随意滑动即可生成，再次点击重置',url:'https://codepen.io/tsuhre/full/BYbjyg '}
          ]
        },
        { 
          id: 'F4', 
          name: '#去除背景', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '抠' },
          sites: [
             { title:'Foco Clipping', description:'一次最多支持30张图片',url:'https://www.fococlipping.com/ '},
            { title:'Idify', description:'界面美观，只有一个上传图片按钮',url:'https://idify.netlify.app/ '},
            { title:'Unscreen', description:'不止免费，还有更为全面的PRO版本',url:'https://www.unscreen.com/upload '}
          ]
        },
        { 
          id: 'F5', 
          name: '#抹除物体', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '除' },
          sites: [
            { title:'Experte Background Remover', description:'无需注册，上传即抠',url:'https://www.experte.com/background-remover '},
            { title:'Bgsub', description:'支持在线抠图并换上自己想要的背景',url:'https://zh.bgsub.com/ '},
            { title:'Autoclipping', description:'只需上传图片即可手动完成抠图',url:'https://autoclipping.com/ '},
            { title:'Photoscissors', description:'最大可支持5M的图片保留',url:'https://online.photoscissors.com/ '},
            { title:'Clippingmagic', description:'在线抠除图像背景，支持中文',url:'https://zh.clippingmagic.com/ '},
            { title:'Remove.bg', description:'仅需五秒钟就可以自动抠图',url:'https://www.remove.bg/ '},
            { title:'Watermarkremover', description:'免费在线水印移除工具',url:'https://www.watermarkremover.io/zh '},
            { title:'Magic Eraser', description:'不需要的人物文本涂抹就删掉',url:'https://magicstudio.com/zh/magiceraser/ '},
            { title:'Haha', description:'不想要图片内容涂抹删除',url:'https://www.hama.app/zh '}
          ]
        },
        { 
          id: 'F6', 
          name: '#画质增强', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '增' },
          sites: [
            { title:'Img.upscaler', description:'免费最高支持至4000px*4000px',url:'https://imgupscaler.com/zh-tw '},
            { title:'Modyfi', description:'老照片修复 支持老照片修复、老照片上色和魔法动态照片',url:'https://www.modyfi.com/ '},
            { title:'Palette', description:'给黑白图片增添颜色，无需登录',url:'https://palette.fm/ '},
            { title:'Bigjpg', description:'AI人工智能图片放大',url:'https://bigjpg.com/ '},
            { title:'清图', description:'国内的AI项目，逻辑更舒适',url:'https://qingtu.cn/ '},
            { title:'Upscayl', description:'得下载才能使用',url:'https://upscayl.org/ '},
            { title:'Upscale', description:'免费仅支持最高1500px*1500px',url:'https://www.upscale.media/zh '},
            { title:'Waifu2x', description:'可以自定义参数再增强画质',url:'https://unlimited.waifu2x.net/ '},
            { title:'Ezgif', description:'支持视频转GIF，编辑GIF',url:'https://ezgif.com/video-to-gif '}
          ]
        },
        { 
          id: 'F7', 
          name: '#图像压缩', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '压' },
          sites: [
            { title:'Compresspng', description:'支持格式-PNG、JPG、PDF、GIF',url:'https://compresspng.com/ '},
            { title:'Imgtool', description:'图片极致压缩 只有一个功能-极致压缩',url:'https://imgtool.v1.mk/ '},
            { title:'Recompressor', description:'图像优化神器，网站还支持中文显示，无需翻译',url:'https://zh.recompressor.com/ '},
            { title:'Squoosh', description:'界面干净清爽，效果也非常好',url:'https://squoosh.app/ '},
            { title:'Tinypng', description:'支持一次压缩20张5M以下的文件',url:'https://tinypng.com/ '},
            { title:'鸭力巨大', description:'一键压缩图片视频，释放存储空间',url:'https://www.yalijuda.com/ '},
            { title:'Picdiet', description:'对压缩对象没有任何限制且完全免费',url:'https://www.picdiet.com/zh-cn '},
            { title:'Jpeg.io', description:'将其转换为高度优化的图片',url:'https://www.jpeg.io/ '}
          ]
        }
      ],
    },
    {
      id: 'G',
      name: '设计素材',
      icon: 'layers',
      subCategories: [
        { 
          id: 'G1', 
          name: '#VI样机', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: 'V' },
          sites: [
            { title:'Mockups-design', description:'一个可免费可商用的样机素材网站',url:'https://mockups-design.com/ '},
            { title:'Unblast', description:'网站搜集了大量的免费样机',url:'https://unblast.com/ '},
            { title:'Graphberry', description:'优质的 PSD样机模型素材站',url:'https://www.graphberry.com '},
            { title:'Is.graphics', description:'一家提供高质量样机模板的网站',url:'https://www.ls.graphics/free-mockups '},
            { title:'西田样机', description:'提供免费高质量样机的中文网站',url:'https://mockup.sitapix.com '},
            { title:'Mockupworld', description:'一个国外免费实体样机素材网站',url:'https://www.mockupworld.co '},
            { title:'TheMockupClub', description:'比较优质的免费的样机下载站',url:'https://themockup.club '},
            { title:'Pixeden', description:'网站里面的Mockups分类非常全',url:'https://www.pixeden.com/ '}
          ]
        },
        { 
          id: 'G2', 
          name: '#PNG素材', 
          iconConfig: { gradient: 'from-violet-500 to-fuchsia-500', character: 'P' },
          sites: [
            { title:'Pngall', description:'类型丰富的免费PNG下载站',url:'http://www.pngall.com/ '},
            { title:'Pngimg', description:'号称全世界最大的PNG透明背景图库',url:'http://pngimg.com/ '},
            { title:'Kisspng', description:'所有图像都无需登录免费无限制下载',url:'https://www.kisspng.com/ '},
            { title:'Pixelsquid', description:'旋转3D素材获得完美的角度下载',url:'https://www.pixelsquid.com/ '},
            { title:'Pngpix', description:'种类多而且质量很高png矢量图片站',url:'http://www.pngpix.com/ '},
            { title:'pngimg', description:'全球知名的PNG优质素材库',url:'https://pngimg.com/ '},
            { title:'Stickpng', description:'提供免扣PNG格式资源免费下载',url:'http://www.stickpng.com/ '}
          ]
        },
        { 
          id: 'G3', 
          name: '#矢量素材', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: 'A' },
          sites: [
            { title:'Undraw', description:'提供完全免费的 SVG/PNG 图片',url:'https://undraw.co/ '},
            { title:'Dealjumbo', description:'网站整体质量较高 下载需要输入邮箱',url:'https://dealjumbo.com/ '},
            { title:'Iconninja', description:'所有的展示素材均提供详细的信',url:'http://www.iconninja.com '},
            { title:'Shareicon', description:'免费提供超过25万矢量图片素材',url:'https://www.shareicon.net '},
            { title:'Flat-icon', description:'日本的免费可商用扁平化矢量网站',url:'http://flat-icon-design.com/ '},
            { title:'Bg-patterns', description:'矢量平铺背景纹理免费生成下载',url:'http://bg-patterns.com/ '},
            { title:'Freepik', description:'收集最多免费矢量图资源的网站之一',url:'https://www.freepik.com/ '},
            { title:'Vectorportal', description:'超过3500万免费矢量素材下载',url:'https://www.vectorportal.com/ '},
            { title:'Vecteezy', description:'一个免费矢量图的网站',url:'https://www.vecteezy.com '}
          ]
        },
        { 
          id: 'G4', 
          name: '#插画素材', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '插' },
          sites: [
            { title:'Handz', description:'网站拥有各种手势人物造型下载',url:'https://www.handz.design '},
            { title:'Superscene', description:'高质量3D插画模型部分提供免费下载',url:'https://superscene.pro '},
            { title:'Iradesign', description:'免版权且提供5种渐变色自定义各部位',url:'https://iradesign.io/ '},
            { title:'Igoutu', description:'分类明细的插画，免费下载PNG格式',url:'https://igoutu.cn/illustrations '},
            { title:'Mixkit', description:'免费高质量艺术类插画下载',url:'https://mixkit.co/free-stock-art/ '},
            { title:'Vertex', description:'比较常见的3D图标，支持旋转角度下载',url:'https://vertex.im/ '},
            { title:'Stubborn', description:'随意搭配身体部位和矢量人物插画',url:'https://stubborn.fun/ '},
            { title:'lukaszadam', description:'各种免版权插画风格图标',url:'https://lukaszadam.com/illustrations '},
            { title:'Stubborn', description:'可选择色彩，并且输入邮箱免费下载',url:'https://stubborn.fun/ '},
            { title:'Humaaans', description:'网站所有内容免费商用但是需要梯子',url:'https://www.humaaans.com/ '},
            { title:'CoCo Material', description:'3000+简约插画免费下载',url:'https://cocomaterial.com/ '}
          ]
        },
        { 
          id: 'G5', 
          name: '#PSD素材', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: 'PS' },
          sites: [
            { title:'Freebiesbug', description:'提供精心挑选的PSD资源',url:'https://freebiesbug.com '},
            { title:'Freepik', description:'收录了很多高质量PSD素材图片',url:'https://www.freepik.com '},
            { title:'1001free', description:'设计师寻找的免费素材网站',url:'https://www.1001freedownloads.com '},
            { title:'Freebiesjedi', description:'免费提供各类素材资源下载',url:'https://freebiesjedi.com '},
            { title:'Fbrushes', description:'提供各类素材资源的站点',url:'https://fbrushes.com/ '},
            { title:'Psdboom', description:'提供免费PSD以及收录各式背景',url:'https://psdboom.com/ '}
          ]
        },
        { 
          id: 'G6', 
          name: '#背景纹理', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '纹' },
          sites: [
            { title:'Patterninja', description:'纹理背景用来做PPT的背景图超赞',url:'https://patterninja.com/ '},
            { title:'Heropatterns', description:'纹理颇有质感特别大气的材质贴图',url:'http://www.heropatterns.com/ '},
            { title:'Texture', description:'数十类精品免费真实纹理背景素材',url:'http://texturer.com/ '},
            { title:'Textureking', description:'多种精品酷炫效果自然纹理',url:'https://www.textureking.com/ '},
            { title:'Patternico', description:'可以上传自己酷炫的作品，互动性较强',url:'http://patternico.com/ '},
            { title:'Patternico', description:'自选图标以生成好看的背景图',url:'https://patternico.com/emoji/ '},
            { title:'Toptal', description:'纹理背景简约，适合古风类型',url:'https://www.toptal.com/designers/subtlepatterns/ '},
            { title:'Transpare', description:'根据色彩选择精美纹理背景',url:'https://www.transparenttextures.com/ '}

          ]
        },
        { 
          id: 'G7', 
          name: '#图标Emoji', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '标' },
          sites: [
            { title:'Iconfont', description:'由阿里巴巴打造的矢量图标交流平台',url:'http://www.iconfont.cn '},
            { title:'Iconsdb', description:'目前拥有4000多个图标的免费图标库',url:'https://www.iconsdb.com/ '},
            { title:'Iconfinder', description:'世界上前几大免费设计图标搜索引擎',url:'https://www.iconfinder.com/ '},
            { title:'Yesicon', description:'免费的图标库，直接就能下载',url:'https://yesicon.app/ '},
            { title:'Iconmonstr', description:'提供大量黑白图标的素材站',url:'https://iconmonstr.com/ '},
            { title:'PLUSPNG', description:'专注于全球图标收集的网站提供下载',url:'https://pluspng.com/ '},
            { title:'Materialui', description:'搜索框快速搜索面性风格和线性风格',url:'https://www.materialui.co/icons '},
            { title:'Webalys', description:'数量十分齐全每个图标都可选择风格',url:'https://www.webalys.com/nova/ '}
          ]
        },
        { 
          id: 'G8', 
          name: '#PPT模板', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: 'P' },
          sites: [
            { title:'Pptstore', description:'国内高质量原创设计模板',url:'https://www.pptstore.net/ '},
            { title:'1ppt', description:'网站颜值不高，但是内容免费下载',url:'http://www.1ppt.com/ '},
            { title:'Slidemodel', description:'每周提供150个ppt模板免费下载',url:'https://slidemodel.com/ '},
            { title:'Graphicriver', description:'全球最高设计水平的PPT模板站',url:'https://graphicriver.net/presentation-templates '},
            { title:'Slidehunter', description:'免费ppt模板网站，还提供3D类型的',url:'https://slidehunter.com/ '},
            { title:'Presentationload', description:'欧洲的收费网站，简约之美+商务之美',url:'https://www.presentationload.com/ '},
            { title:'Magazine', description:'网站模板大部分的模板可以免费使用',url:'https://www.presentationmagazine.com/ '},
            { title:'Justfreeslide', description:'免费资源需要分享获取下载链接',url:'https://justfreeslide.com/ '},
            { title:'Officeplus', description:'微软Office官方在线模板网站',url:'http://www.officeplus.cn/Template/Home.shtml '}
          ]
        },
        { 
          id: 'G9', 
          name: '#PS笔刷', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '刷' },
          sites: [
            { title:'Brushlovers', description:'比较全面的PS资源网站集合',url:'https://www.brushlovers.com/tag/brush '},
            { title:'Brushes', description:'简洁的搜索菜单方便进行过滤',url:'https://myphotoshopbrushes.com/ '},
            { title:'Brushking', description:'根据分类轻松找需要的笔刷',url:'https://www.brushking.eu/ '},
            { title:'Qbrushes', description:'提供分类查找到笔刷类型',url:'https://qbrushes.net/ '},
            { title:'Brusheezy', description:'根据PS版本进行过滤分类笔刷',url:'https://www.brusheezy.com/brushes '},
            { title:'Chezplumeau', description:'发现寻找具有特定主题的笔刷',url:'http://www.chezplumeau.com '},
            { title:'Wowbrushes', description:'网站提供各种高质量的笔刷笔触下载',url:'http://wowbrushes.com/ '},
            { title:'Photoshoproadmap', description:'大量独特的优质Photoshop笔刷集合',url:'https://photoshoproadmap.com/ '}
          ]
        }
      ],
    },
    {
      id: 'H',
      name: '配色方案',
      icon: 'palette',
      subCategories: [
        { 
          id: 'H1', 
          name: '#纯色搭配', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '色' },
          sites: [
            { title:'Colorsafe', description:'选择一个颜色，会给出不一样的方案',url:'http://colorsafe.co/ '},
            { title:'Colllor', description:'一个色系给出50种深浅的选择',url:'http://colllor.com/ '},
            { title:'Materialpalette', description:'非常适合扁平化设计的工具',url:'https://www.materialpalette.com '},
            { title:'Sessions', description:'对比颜色很方便，各种色彩搭配',url:'https://www.sessions.edu '},
            { title:'Coolors', description:'各种色块搭配多种配色模式',url:'http://Coolors.co '},
            { title:'Colorhunt', description:'不同色彩之间进行搭配',url:'https://colorhunt.co/ '},
            { title:'Color.Adobe', description:'提供常用五种色彩模式选择',url:'https://color.adobe.com/ '},
            { title:'Colorhunter', description:'操作方便，特别适合新手使用',url:'http://www.colorhunter.com '},
            { title:'Color.hailpixel', description:'移动鼠标就能得到不一样的颜色',url:'https://color.hailpixel.com/ '},
            { title:'Colrd', description:'推荐这个是把图片所有颜色拆成单个色',url:'http://colrd.com/ '}
          ]
        },
        { 
          id: 'H2', 
          name: '#渐变配色', 
          iconConfig: { gradient: 'from-violet-500 to-fuchsia-500', character: '变' },
          sites: [
            { title:'Uigradients', description:'点击左上角显示全部，右上角旋转角度',url:'https://uigradients.com/#Passion '},
            { title:'Gradient', description:'点击色块上的圆圈可以改变角度',url:'https://gradient.shapefactory.co '},
            { title:'Webgradients', description:'点击即可大图预览和下载',url:'https://webgradients.com '},
            { title:'Grabient', description:'成千上万漂亮的渐变色站点',url:'https://www.grabient.com/ '},
            { title:'Coliss', description:'可以把调好的渐变色生成CSS网页代码',url:'https://coliss.com/articles/web-services/online-cssgradientbutton.html '},
            { title:'Webkul', description:'点击下载图片下方复制颜色代码',url:'https://webkul.github.io/coolhue/ '}
          ]
        }
      ],
    },
    {
      id: 'I',
      name: '设计学习',
      icon: 'graduation-cap',
      subCategories: [
        { 
          id: 'I1', 
          name: '设计书籍', 
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '书' },
          sites: [
             { title: '千本设计书籍', description: '搜集来自全球的知名设计书籍-设计师必备推荐', url: 'https://mp.weixin.qq.com/s/6A9ef-6Ik6Y7OebwuOGFDw' }
          ]
        }
      ],
    },
    {
      id: 'J',
      name: '软件工具',
      icon: 'laptop',
      subCategories: [
        { 
          id: 'J1', 
          name: '#软件下载', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '软' },
          sites: [
            { title: '脚本之家', description: '提供互联网全方位在线工具无套路分享', url: 'https://www.jb51.net/' },
            { title: '免费资源社区', description: '来自湾湾的免费资源分享网站', url: 'https://free.com.tw/'},
            { title: 'Fosshub', description: '来自全球免费好用的软件', url: 'https://www.fosshub.com/' },
            { title: 'LookAE', description: '各类需要的设计资源，这里可能全都有', url: 'https://www.lookae.com' },
            { title: 'Google Fonts', description: '海量免费字体资源', url: 'https://fonts.google.com/' },
            { title: '微当下载', description: '全能的各设备软件分享站', url: 'https://www.weidown.com/' },
            { title: '小众软件', description: '分享有趣的绿色免费软件', url: 'https://www.appinn.com' },
            { title: '行客工作室', description: '各类电脑软件这里都有，下载方便', url: 'https://www.runker.net' }
          ]
        },
        { 
          id: 'J2', 
          name: '#资源搜索', 
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '资' },
          sites: [
            { title: 'SearXNG', description: '全世界最强大的元搜索引擎', url: 'https://searx.org' },
            { title: '虫部落 · 快搜', description: '聚合了全球所有的搜索工具', url: 'https://search.chongbuluo.com/' },
            { title: '网盘超能搜', description: '聚合多个网盘搜索，常用都可搜', url: 'https://www.chaonengsou.com' },
            { title: '网盘搜索', description: '支持常用4大网盘-聚合网盘搜索引擎', url : 'https://search.chongbuluo.com/'}
          ]
        },
        { 
          id: 'J3', 
          name: '#格式转换', 
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: '转' },
          sites: [
            { title: 'Aconvert', description: '【推荐】支持转换各类格式文件，包括PNG转ICO', url: 'https://www.aconvert.com/cn/icon/' },
            { title: 'AC文件转换', description: '【推荐】支持的类型全-使用方便', url: 'https://www.aconvert.com/cn' },
            { title: 'Convertio', description: '在线转换任何格式的视频文件', url: 'https://convertio.co/zh/video-converter' },
            { title: 'Ilovepdf', description: '支持多种格式之间进行互转', url: 'https://www.ilovepdf.com/' },
            { title: 'Alltoall', description: '支持多达200多种格式在线转换', url: 'http://www.alltoall.net' },
            { title: 'Pdfconvertonline', description: '网站支持各类文件之间进行互转', url: 'https://www.pdfconvertonline.com/cn/' },
            { title: '图像处理工具集', description : '在线处理PDF-GIF-抠图-压缩等的图片工具', url : 'https://docsmall.com'}
          ]
        },
        { 
          id: 'J4', 
          name: '#偏门利器', 
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '器' },
          sites: [
            { title: '文本生成二维码', description: '仅支持文本生成二维码', url: 'https://swiftqr.tanpok.com' },
            { title: 'SMS', description: '虚拟国外手机号码短信验证', url: 'https://sms-activate.io/cn?%2Fcn=' },
            { title: '二维码生成', description: '任何内容都可以生成二维码', url: 'https://www.qrcode-monkey.com/' },
            { title: '网址变短', description: '可以让任何网址变短的神器', url: 'https://www.shorturl.at' },
            { title: '卡通头像生成', description: '在线设计卡通头像并下载', url: 'https://personas.draftbit.com' },
            { title: '聊天截图生成', description: '线上生成微信支付宝截图', url: 'http://www.12tool.com/' },
            { title: '文件传输', description: '临时传送助手-端对端无需担心隐私泄露', url: 'https://wormhole.app/'}
          ]
        }
      ],
    },
];

window.AppConfig = {
    SEARCH_ENGINES,
    HEADER_LINKS,
    QUICK_LINKS,
    CATEGORIES
};