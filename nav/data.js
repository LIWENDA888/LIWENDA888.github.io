// 生成演示数据的辅助函数
const generateSites = (category, count) => {
    return Array.from({ length: count }).map((_, i) => ({
      title: `${category} Site ${i + 1}`,
      description: `这是 ${category} 资源 ${i + 1} 的简介。包含高质量的设计素材和工具链接。`,
      url: '#',
    }));
};
  
const SEARCH_ENGINES = [
    { name: '百度', url: 'https://www.baidu.com/s?wd=', placeholder: '百度一下，你就知道' },
    { name: 'Google', url: 'https://www.google.com/search?q=', placeholder: 'Search Google' },
    { name: 'Bing', url: 'https://www.bing.com/search?q=', placeholder: '微软必应搜索' },
    { name: 'Eagle', url: 'https://eagle.cool/blog/search?q=', placeholder: '搜索设计资源' },
];

const HEADER_LINKS = [
    { title: 'Gmail', url: 'https://mail.google.com' },
    { title: 'iCloud', url: 'https://www.icloud.com' },
    { title: 'Figma', url: 'https://www.figma.com' },
    { title: 'Notion', url: 'https://www.notion.so' },
    { title: 'Bilibili', url: 'https://www.bilibili.com' },
    { title: 'YouTube', url: 'https://www.youtube.com' },
    { title: 'Github', url: 'https://github.com' },
];

const QUICK_LINKS = [
    { title: 'Behance', url: 'https://www.behance.net' },
    { title: 'Dribbble', url: 'https://dribbble.com' },
    { title: 'Pinterest', url: 'https://www.pinterest.com' },
    { title: 'Awwwards', url: 'https://www.awwwards.com' },
    { title: 'ArtStation', url: 'https://www.artstation.com' },
];
  
const CATEGORIES = [
    {
      id: 'A',
      name: '热门推荐',
      icon: 'flame',
      subCategories: [
        { 
          id: 'A1', 
          name: '每日必看', 
          sites: generateSites('Daily', 8),
          iconConfig: { gradient: 'from-orange-500 to-red-500', character: '热' }
        },
        { 
          id: 'A2', 
          name: '最新收录', 
          sites: generateSites('New', 6),
          iconConfig: { gradient: 'from-blue-500 to-indigo-500', character: '新' } 
        },
        { 
          id: 'A3', 
          name: '站长推荐', 
          sites: generateSites('Recommended', 4),
          iconConfig: { gradient: 'from-purple-500 to-pink-500', character: '推' }
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
          name: '中文字体', 
          sites: generateSites('Chinese Fonts', 10),
          iconConfig: { gradient: 'from-red-400 to-orange-400', character: '中' }
        },
        { 
          id: 'B2', 
          name: '英文字体', 
          sites: generateSites('English Fonts', 10),
          iconConfig: { gradient: 'from-sky-400 to-blue-500', character: 'En' }
        },
        { 
          id: 'B3', 
          name: '字体工具', 
          sites: generateSites('Font Tools', 5),
          iconConfig: { gradient: 'from-gray-600 to-gray-800', character: '具' }
        },
      ],
    },
    {
      id: 'C',
      name: '平面视觉',
      icon: 'image',
      subCategories: [
        { 
          id: 'C1', 
          name: '灵感画廊', 
          sites: generateSites('Inspiration', 12),
          iconConfig: { gradient: 'from-pink-400 to-rose-500', character: '灵' }
        },
        { 
          id: 'C2', 
          name: '包装设计', 
          sites: generateSites('Packaging', 8),
          iconConfig: { gradient: 'from-amber-400 to-orange-500', character: '包' }
        },
        { 
          id: 'C3', 
          name: '海报设计', 
          sites: generateSites('Posters', 8),
          iconConfig: { gradient: 'from-teal-400 to-emerald-500', character: '报' }
        },
      ],
    },
    {
      id: 'D',
      name: 'AI工具',
      icon: 'bot',
      subCategories: [
        { 
          id: 'D1', 
          name: 'AI绘画', 
          sites: generateSites('AI Art', 8),
          iconConfig: { gradient: 'from-violet-500 to-fuchsia-500', character: '绘' }
        },
        { 
          id: 'D2', 
          name: 'AI辅助', 
          sites: generateSites('AI Helper', 6),
          iconConfig: { gradient: 'from-cyan-500 to-blue-500', character: '辅' }
        },
        { 
          id: 'D3', 
          name: '模型训练', 
          sites: generateSites('Models', 4),
          iconConfig: { gradient: 'from-indigo-400 to-purple-600', character: '模' }
        },
      ],
    },
    {
      id: 'E',
      name: '免版权',
      icon: 'copyright',
      subCategories: [
        { 
          id: 'E1', 
          name: '高清图库', 
          sites: generateSites('Stock Photos', 15),
          iconConfig: { gradient: 'from-green-400 to-teal-500', character: '图' }
        },
        { 
          id: 'E2', 
          name: '矢量素材', 
          sites: generateSites('Vectors', 10),
          iconConfig: { gradient: 'from-yellow-400 to-amber-500', character: '矢' }
        },
      ],
    },
    {
      id: 'F',
      name: '设计工具',
      icon: 'pen-tool',
      subCategories: [
        { 
          id: 'F1', 
          name: '在线工具', 
          sites: generateSites('Online Tools', 8),
          iconConfig: { gradient: 'from-blue-400 to-blue-600', character: '工' }
        },
        { 
          id: 'F2', 
          name: '格式转换', 
          sites: generateSites('Converters', 6),
          iconConfig: { gradient: 'from-gray-400 to-gray-600', character: '转' }
        },
      ],
    },
    {
      id: 'G',
      name: '设计素材',
      icon: 'layers',
      subCategories: [
        { 
          id: 'G1', 
          name: 'Mockup', 
          sites: generateSites('Mockups', 12),
          iconConfig: { gradient: 'from-purple-400 to-purple-600', character: '样' }
        },
        { 
          id: 'G2', 
          name: '3D模型', 
          sites: generateSites('3D Models', 8),
          iconConfig: { gradient: 'from-orange-400 to-orange-600', character: '3D' }
        },
      ],
    },
    {
      id: 'H',
      name: '配色方案',
      icon: 'palette',
      subCategories: [
        { 
          id: 'H1', 
          name: '配色生成', 
          sites: generateSites('Generators', 6),
          iconConfig: { gradient: 'from-pink-300 to-rose-400', character: '色' }
        },
        { 
          id: 'H2', 
          name: '渐变色', 
          sites: generateSites('Gradients', 6),
          iconConfig: { gradient: 'from-indigo-300 to-purple-400', character: '渐' }
        },
      ],
    },
    {
      id: 'I',
      name: '设计学习',
      icon: 'graduation-cap',
      subCategories: [
        { 
          id: 'I1', 
          name: '教程网', 
          sites: generateSites('Tutorials', 8),
          iconConfig: { gradient: 'from-emerald-400 to-green-600', character: '教' }
        },
        { 
          id: 'I2', 
          name: '设计博客', 
          sites: generateSites('Blogs', 8),
          iconConfig: { gradient: 'from-cyan-400 to-sky-600', character: '文' }
        },
      ],
    },
    {
      id: 'J',
      name: '软件工具',
      icon: 'laptop',
      subCategories: [
        { 
          id: 'J1', 
          name: 'Mac软件', 
          sites: generateSites('Mac Apps', 10),
          iconConfig: { gradient: 'from-gray-200 to-gray-400 text-gray-800', character: '' }
        },
        { 
          id: 'J2', 
          name: 'Win软件', 
          sites: generateSites('Win Apps', 10),
          iconConfig: { gradient: 'from-blue-500 to-blue-700', character: 'W' }
        },
      ],
    },
];

// 将数据暴露给全局，方便main.js调用
window.AppConfig = {
    SEARCH_ENGINES,
    HEADER_LINKS,
    QUICK_LINKS,
    CATEGORIES
};