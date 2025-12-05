window.APP_DATA = {
    // Banner Configuration
    BANNER_CONFIG: {
        'recommend': {
            title: '做您的设计百宝库',
            englishTitle: 'DESIGN TREASURE',
            subtitle: '精选全网最实用的神兵利器，让设计事半功倍。',
            bgImage: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/6tnU/4000X400/1-01.png/webp'
        },
        'ai-prompts': {
            title: '探索无限灵感',
            englishTitle: 'INSPIRATION GALLERY',
            subtitle: '每日更新的高质量 AI 提示词库，激发你的创作潜能。',
            bgImage: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/Fqnl/4000X230/1-02.png/webp'
        },
        'fonts': {
            title: '发现完美字型',
            englishTitle: 'TYPOGRAPHY COLLECTION',
            subtitle: '精选全球设计师的优质字体，为你的设计注入灵魂。',
            bgImage: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/crF7/4000X230/1-03.png/webp'
        },
        'design-assets': {
            title: '优质设计素材',
            englishTitle: 'PREMIUM ASSETS',
            subtitle: '精选高品质样机与素材，为你的作品画龙点睛。',
            bgImage: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/ZH1r/4000X230/1-04.png/webp'
        },
        'software': {
            title: '提升工作效率',
            englishTitle: 'PRODUCTIVITY TOOLS',
            subtitle: '工欲善其事，必先利其器。设计师必备工具集合。',
            bgImage: 'https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/iENc/4000X230/1-05.png/webp'
        }
    },

    // Categories
    CATEGORIES: {
        'recommend': [
            { id: 'ai-tools', label: 'AI工具' },
            { id: 'image', label: '图像处理' },
            { id: 'color', label: '配色灵感' },
            { id: 'resource', label: '资源库' }
        ],
        'ai-prompts': [
            { id: 'realistic', label: '写实' },
            { id: 'anime', label: '二次元' },
            { id: '3d', label: '3D艺术' },
        ],
        'fonts': [
            { id: 'vf', label: '可变' },
            { id: 'sans', label: '黑体' },
            { id: 'roundhand', label: '圆体' },
            { id: 'title', label: '标题' },
            { id: 'song', label: '宋体' },
            { id: 'kai', label: '楷体' },
            { id: 'cartoon', label: '卡通' },
            { id: 'handwriting', label: '手写' },
            { id: 'calligraphy', label: '书法' },
            { id: 'english', label: '英文' },
        ],
        'software': [
            { id: 'design', label: '设计软件' },
            { id: 'windows', label: 'Windows' },
            { id: 'mac', label: 'macOS' },
            { id: 'android', label: 'Android' },
        ],
        'design-assets': [
            { id: 'logo-mockup', label: 'LOGO样机' },
            { id: 'vi-mockup', label: 'VI样机' },
            { id: 'others', label: '其他' },
        ]
    },

    // Tool Data
    MOCK_TOOLS: [
        {
            id: 't1', category: 'image', type: 'recommend',
            name: 'Remove.bg', description: '基于 AI 的图片自动去背景工具，精准识别主体，一键透明化。',
            imageUrl: 'https://picsum.photos/id/48/600/300',
            url: '#', isFree: true
        },
        {
            id: 't2', category: 'color', type: 'recommend',
            name: 'Coolors', description: '超快速的配色方案生成器，设计师必备的色彩灵感来源。',
            imageUrl: 'https://picsum.photos/id/180/600/300',
            url: '#', isFree: true
        },
        {
            id: 't3', category: 'image', type: 'recommend',
            name: 'TinyPNG', description: '智能 WebP、PNG 和 JPEG 图片压缩工具，保证画质的同时极大减小体积。',
            imageUrl: 'https://picsum.photos/id/96/600/300',
            url: '#', isFree: true
        },
        {
            id: 't4', category: 'ai-tools', type: 'recommend',
            name: 'Midjourney', description: '目前最强大的 AI 绘画生成工具，支持 Discord 交互，出图质量极高。',
            imageUrl: 'https://picsum.photos/id/250/600/300',
            url: '#', isFree: false
        },
        {
            id: 't5', category: 'resource', type: 'recommend',
            name: 'Shape.so', description: '拥有 26000+ 图标和插画的可自定义设计资源库。',
            imageUrl: 'https://picsum.photos/id/160/600/300',
            url: '#', isFree: false
        }
    ],

    // AI Prompts Data
    MOCK_AI_PROMPTS: [
        {
            id: '1', category: 'realistic', type: 'ai-prompts',
            title: '赛博朋克街景', model: 'Midjourney v6',
            imageUrl: 'https://picsum.photos/id/237/600/400',
            prompt: 'A futuristic cyberpunk city street at night, neon lights reflecting on wet pavement, towering skyscrapers with holographic advertisements, cinematic lighting, highly detailed, photorealistic 8k',
        },
        {
            id: '2', category: 'anime', type: 'ai-prompts',
            title: '魔法森林精灵', model: 'Niji 5',
            imageUrl: 'https://picsum.photos/id/1003/600/400',
            prompt: 'Anime style illustration of a magical forest spirit resembling a deer, glowing blue antlers, surrounded by floating light particles, deep forest background, studio ghibli style, vibrant colors',
        },
        {
            id: '3', category: '3d', type: 'ai-prompts',
            title: '抽象玻璃几何', model: 'Stable Diffusion XL',
            imageUrl: 'https://picsum.photos/id/106/600/400',
            prompt: 'Abstract composition of floating glass spheres and cubes, iridescent materials, caustic lighting effects, clean white background, 3D render, blender cycles, octane render',
        },
        {
            id: '4', category: 'realistic', type: 'ai-prompts',
            title: '复古人像摄影', model: 'Midjourney v6',
            imageUrl: 'https://picsum.photos/id/64/600/400',
            prompt: 'Portrait of an elderly fisherman with a weathered face, natural lighting, wearing a yellow raincoat, stormy sea background, emotional expression, 35mm film photography style',
        }
    ],

    // Fonts Data
    MOCK_FONTS: [
        {
            id: 'f1', category: 'sans', type: 'fonts',
            name: 'Inter Display', author: 'Rasmus Andersson', isPaid: false,
            description: '专为电脑屏幕精心设计和制作的可变字体系列。',
            imageUrl: 'https://picsum.photos/id/20/600/300',
            downloadUrl: '#',
        },
        {
            id: 'f2', category: 'title', type: 'fonts',
            name: 'Editorial New', author: 'Pangram Pangram', isPaid: true,
            description: '一款精准而优雅的窄衬线字体，专为长篇阅读设计。',
            imageUrl: 'https://picsum.photos/id/24/600/300',
            downloadUrl: '#',
        },
        {
            id: 'f3', category: 'title', type: 'fonts',
            name: 'Bebas Neue', author: 'Ryoichi Tsunekawa', isPaid: false,
            description: 'Bebas Neue 是基于原始 Bebas Neue 免费字体的无衬线字体系列。',
            imageUrl: 'https://picsum.photos/id/26/600/300',
            downloadUrl: '#',
        },
        {
            id: 'f4', category: 'handwriting', type: 'fonts',
            name: 'Signature Pro', author: 'CreativeMarket', isPaid: true,
            description: '外观自然的签名手写字体，包含大量连字以获得真实感。',
            imageUrl: 'https://picsum.photos/id/42/600/300',
            downloadUrl: '#',
        }
    ],

    // Software Data
    MOCK_SOFTWARE: [
        {
            id: 's1', category: 'design', type: 'software',
            title: 'Figma Desktop', version: '116.15.4',
            description: '协作界面设计工具。在一个地方进行设计、原型制作和收集反馈，性能卓越。',
            imageUrl: 'https://picsum.photos/id/1/200/200',
            downloads: [
                { label: 'macOS (Intel)', url: '#' },
                { label: 'Windows x64', url: '#' }
            ]
        },
        {
            id: 's2', category: 'windows', type: 'software',
            title: 'VS Code', version: '1.85.1',
            description: '代码编辑，重新定义。免费、开源、跨平台运行。现代编辑器的标杆。',
            imageUrl: 'https://picsum.photos/id/6/200/200',
            downloads: [
                { label: 'Windows x64', url: '#' },
                { label: 'macOS Universal', url: '#' }
            ]
        },
        {
            id: 's3', category: 'mac', type: 'software',
            title: 'Raycast', version: '1.63.0',
            description: 'Raycast 是一个极速、完全可扩展的启动器。',
            imageUrl: 'https://picsum.photos/id/96/200/200',
            downloads: [
                { label: 'macOS Universal', url: '#' }
            ]
        },
        {
            id: 's4', category: 'android', type: 'software',
            title: 'VS Code', version: '1.85.1',
            description: '代码编辑，重新定义。免费、开源、跨平台运行。现代编辑器的标杆。',
            imageUrl: 'https://picsum.photos/id/6/200/200',
            downloads: [
                { label: 'Windows x64', url: '#' },
                { label: 'macOS Universal', url: '#' }
            ]
        }
    ],

    // Assets Data
    MOCK_ASSETS: [
        {
            id: 'a1', category: 'logo-mockup', type: 'design-assets',
            name: '3D Glass Logo Mockup', author: 'MockupWorld',
            description: '高质感 3D 玻璃门牌 Logo 样机，智能对象一键替换，适合企业品牌展示。',
            imageUrl: 'https://picsum.photos/id/201/600/300',
            downloadUrl: '#'
        },
        {
            id: 'a2', category: 'vi-mockup', type: 'design-assets',
            name: 'Clean Stationery Kit', author: 'Pixeden',
            description: '极简风格办公文具 VI 视觉识别系统展示样机，包含名片、信纸、信封等。',
            imageUrl: 'https://picsum.photos/id/366/600/300',
            downloadUrl: '#'
        },
        {
            id: 'a3', category: 'others', type: 'design-assets',
            name: 'Vintage Paper Texture', author: 'ResourceBoy',
            description: '20+ 高清复古做旧纸张纹理背景，提升设计复古质感。',
            imageUrl: 'https://picsum.photos/id/400/600/300',
            downloadUrl: '#'
        },
        {
            id: 'a4', category: 'logo-mockup', type: 'design-assets',
            name: 'Embossed Paper Logo', author: 'Freepik',
            description: '精美纸张压印凹凸效果 Logo 样机，展现低调奢华的品牌调性。',
            imageUrl: 'https://picsum.photos/id/445/600/300',
            downloadUrl: '#'
        }
    ]
};