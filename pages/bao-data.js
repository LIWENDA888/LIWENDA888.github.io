/**
 * data.js
 * * 🎯 职责: 集中管理字体库应用中的所有核心数据和配置常量。
 * * 维护建议：
 * - 如需添加新的筛选维度，请更新 SIDEBAR_CONFIG。
 * - 如需修改字体数据，请更新 FONT_DATA。
 * - 如需调整每页卡片数量，请更新 CARDS_PER_PAGE。
 */

// --- 1. 数据映射和常量 (统一筛选配置) ---

/**
 * 侧边栏筛选配置：
 * id: 对应 FONT_DATA 中需要筛选的字段名 (如 category, license, language)。
 * title: 侧边栏显示的大分类标题。
 * options: 该分类下的具体筛选选项。
 * hash: 用于 URL hash 导航和筛选。
 * title: 侧边栏显示的小分类标题。
 */
const SIDEBAR_CONFIG = [
    {
        id: 'category', 
        title: '字体分类', 
        options: [
            { hash: 'sans_serif', title: '黑体 / Sans' },
            { hash: 'serif', title: '宋体 / Serif' },
            { hash: 'display', title: '创意 / Display' },
        ]
    },
    {
        id: 'license', 
        title: '使用许可',
        options: [
            { hash: 'commercial', title: '可商用' },
            { hash: 'personal', title: '仅个人使用' },
            { hash: 'free', title: '免费' },
        ]
    },
    {
        id: 'language', 
        title: '语言',
        options: [
            { hash: 'chinese', title: '中文' },
            { hash: 'english', title: '英文' },
        ]
    }
];

/**
 * 每页显示卡片数量。
 */
const CARDS_PER_PAGE = 12; // 每页显示 12 张卡片


// --- 2. 字体数据源 ---

const DEFAULT_COVER = "https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp";

/**
 * 字体数据列表。
 * 每个对象必须包含 SIDEBAR_CONFIG 中 id 对应的字段名 (category, license, language)。
 */
const FONT_DATA = [
    { id: 1, name: "自在起点黑 VF", author: "FontStudio", category: "sans_serif", license: "commercial", language: "chinese", style: "modern", tags: ["商用", "极简"], weight: "2025年8月7日", cover: DEFAULT_COVER },
    { id: 2, name: "经典宋体 Std", author: "TypeFoundry", category: "serif", license: "commercial", language: "chinese", style: "retro", tags: ["书籍", "正文"], weight: "4 Styles", cover: DEFAULT_COVER },
    { id: 3, name: "流光手写体", author: "HandWriter", category: "display", license: "personal", language: "chinese", style: "retro", tags: ["手写", "艺术"], weight: "1 Style", cover: DEFAULT_COVER },
    { id: 4, name: "赛博朋克 2077", author: "GlitchType", category: "display", license: "commercial", language: "english", style: "tech", tags: ["标题", "科技"], weight: "2 Styles", cover: DEFAULT_COVER },
    { id: 5, name: "柔和黑体 Soft", author: "FontStudio", category: "sans_serif", license: "commercial", language: "chinese", style: "modern", tags: ["UI设计", "圆润"], weight: "8 Styles", cover: DEFAULT_COVER },
    { id: 6, name: "报刊明朝体", author: "NewsType", category: "serif", license: "personal", language: "chinese", style: "modern", tags: ["印刷", "报纸"], weight: "3 Styles", cover: DEFAULT_COVER },
    { id: 7, name: "像素积木", author: "8BitMaster", category: "display", license: "free", language: "english", style: "tech", tags: ["游戏", "复古"], weight: "1 Style", cover: DEFAULT_COVER },
    { id: 8, name: "工业黑体", author: "Mechanic", category: "sans_serif", license: "free", language: "chinese", style: "tech", tags: ["重工", "标题"], weight: "Bold Only", cover: DEFAULT_COVER }
];