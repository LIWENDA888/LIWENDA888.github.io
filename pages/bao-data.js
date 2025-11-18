/**
 * data.js
 * 🎯 职责: 集中管理素材库应用中的所有核心数据和配置常量。
 * 维护建议：
 * - 如需添加新的筛选维度（大分类），请更新 SIDEBAR_CONFIG。
 * - 如需修改卡片数据，请更新 FONT_DATA。
 * - 卡片数据中的字段名（例如 'app' 或 'sheji'）必须与 SIDEBAR_CONFIG 中的 'id' 对应。
 */

// --- 1. 数据映射和常量 (统一筛选配置) ---

/**
 * 侧边栏筛选配置：
 * id: 对应 FONT_DATA 中需要筛选的字段名 (例如 'app', 'sheji')。
 * title: 侧边栏显示的大分类标题。
 * options: 该分类下的具体筛选选项。
 * hash: 用于 URL hash 导航和筛选，也对应 FONT_DATA 中字段的值。
 * title: 侧边栏显示的小分类标题。
 */
const SIDEBAR_CONFIG = [
    {
        id: 'app', 
        title: '软件工具', 
        options: [
            { hash: 'adobe', title: 'Adobe全家桶' },
            { hash: 'sheji-app', title: '设计软件' },
            { hash: 'win-app', title: 'windows软件' },
            { hash: 'mac-app', title: 'mac软件' },
        ]
    },
    {
        id: 'sheji', 
        title: '设计资源',
        options: [
            { hash: 'freefonts', title: '免费商用字体' },
            { hash: 'shejibooks', title: '设计书籍' },
            { hash: 'logo', title: 'LOGO样机' },
            { hash: 'vi', title: 'VI样机' },
            { hash: 'more', title: '其他资源' },
        ]
    }
];

/**
 * 每页显示卡片数量。
 */
const CARDS_PER_PAGE = 24; 


// --- 2. 字体数据源 ---

const DEFAULT_COVER = "https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp";

/**
 * 卡片数据列表。
 * 新增 'link' 字段用于卡片跳转。
 */
const FONT_DATA = [
    // 软件工具 -> Adobe全家桶
    { id: 1, name: "Adobe Photoshop 2025", weight: "2025.10", 
      app: "adobe", 
      link: "https://example.com/ps-detail", // 实际跳转链接
      cover: DEFAULT_COVER 
    },
    // 软件工具 -> windows软件
    { id: 2, name: "Windows 效率工具合集", weight: "2024.08", 
      app: "win-app", 
      link: "https://example.com/win-tool-detail",
      cover: DEFAULT_COVER 
    },
    // 设计资源 -> 免费商用字体
    { id: 3, name: "免费商用中文字体包", weight: "150+ 款", 
      sheji: "freefonts", 
      link: "https://example.com/freefonts-detail",
      cover: DEFAULT_COVER 
    },
    // 设计资源 -> 设计书籍
    { id: 4, name: "设计美学经典书籍", weight: "50本PDF", 
      sheji: "shejibooks", 
      link: "https://example.com/books-detail",
      cover: DEFAULT_COVER 
    },
    // 软件工具 -> mac软件
    { id: 5, name: "Mac OS 必备应用", weight: "2025.01", 
      app: "mac-app", 
      link: "https://example.com/mac-app-detail",
      cover: DEFAULT_COVER 
    },
    // 设计资源 -> LOGO样机
    { id: 6, name: "高端 LOGO 样机合集", weight: "PSD文件", 
      sheji: "logo", 
      link: "https://example.com/logo-mockup-detail",
      cover: DEFAULT_COVER 
    }
];