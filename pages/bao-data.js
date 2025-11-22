
window.APP_DATA = {
    // Banner 配置
    BANNER_CONFIG: {
        'ai-prompts': {
            title: '探索无限灵感',
            subtitle: '每日更新的高质量 AI 提示词库，激发你的创作潜能。',
            bgImage: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/h0ur/2500X700/index.jpg/webp'
        },
        'fonts': {
            title: '发现完美字型',
            subtitle: '精选全球设计师的优质字体，为你的设计注入灵魂。',
            bgImage: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/h0ur/2500X700/index.jpg/webp'
        },
        'software': {
            title: '提升工作效率',
            subtitle: '工欲善其事，必先利其器。设计师必备工具集合。',
            bgImage: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/h0ur/2500X700/index.jpg/webp'
        }
    },

    // 分类配置
    CATEGORIES: {
        'ai-prompts': [
            { id: 'all', label: '全部' },
            { id: 'realistic', label: '#写实' },
            { id: 'anime', label: '#二次元' },
            { id: '3d', label: '#3D艺术' },
        ],
        'fonts': [
            { id: 'all', label: '全部' },
            { id: 'vf', label: '#可变' },
            { id: 'sans', label: '#黑体' },
            { id: 'roundhand', label: '#圆体' },
            { id: 'title', label: '#标题' },
            { id: 'song', label: '#宋体' },
            { id: 'kai', label: '#楷体' },
            { id: 'cartoon', label: '#卡通' },
            { id: 'handwriting', label: '#手写' },
            { id: 'calligraphy', label: '#书法' },
            { id: 'english', label: '#英文' },
        ],
        'software': [
            { id: 'all', label: '全部' },
            { id: 'design', label: '#设计软件' },
            { id: 'dev', label: '#开发工具' },
            { id: 'utility', label: '#效率工具' },
        ]
    },

    // AI 提示词数据
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

    // 字体数据 - 已修正 category 对应 CATEGORIES['fonts']
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

    // 软件数据
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
            id: 's2', category: 'dev', type: 'software',
            title: 'VS Code', version: '1.85.1',
            description: '代码编辑，重新定义。免费、开源、跨平台运行。现代编辑器的标杆。',
            imageUrl: 'https://picsum.photos/id/6/200/200',
            downloads: [
                { label: 'Windows x64', url: '#' },
                { label: 'macOS Universal', url: '#' }
            ]
        },
        {
            id: 's3', category: 'utility', type: 'software',
            title: 'Raycast', version: '1.63.0',
            description: 'Raycast 是一个极速、完全可扩展的启动器。',
            imageUrl: 'https://picsum.photos/id/96/200/200',
            downloads: [
                { label: 'macOS Universal', url: '#' }
            ]
        }
    ]
};