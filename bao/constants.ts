
import { AiPromptItem, FontItem, SoftwareItem, Category } from './types';

export const CATEGORIES: Record<string, Category[]> = {
  'ai-prompts': [
    { id: 'all', label: '全部' },
    { id: 'realistic', label: '写实摄影' },
    { id: 'anime', label: '动漫风格' },
    { id: '3d', label: '3D 渲染' },
    { id: 'logo', label: 'Logo 设计' },
  ],
  'fonts': [
    { id: 'all', label: '全部' },
    { id: 'serif', label: '衬线体' },
    { id: 'sans-serif', label: '无衬线体' },
    { id: 'display', label: '艺术体' },
    { id: 'handwritten', label: '手写体' },
  ],
  'software': [
    { id: 'all', label: '全部' },
    { id: 'design', label: '图形设计' },
    { id: 'dev', label: '开发工具' },
    { id: 'utility', label: '效率工具' },
  ]
};

export const BANNER_CONFIG = {
  'ai-prompts': {
    title: '探索无限灵感',
    subtitle: '每日更新的高质量 AI 提示词库，激发你的创作潜能。',
    gradient: 'from-indigo-500 to-purple-600'
  },
  'fonts': {
    title: '发现完美字型',
    subtitle: '精选全球设计师的优质字体，为你的设计注入灵魂。',
    gradient: 'from-emerald-500 to-teal-600'
  },
  'software': {
    title: '提升工作效率',
    subtitle: '工欲善其事，必先利其器。设计师必备工具集合。',
    gradient: 'from-blue-500 to-cyan-600'
  }
};

export const EXTERNAL_TOOLS = [
  { name: '一键抠图 (Remove.bg)', url: 'https://www.remove.bg' },
  { name: '图片压缩 (TinyPNG)', url: 'https://tinypng.com' },
  { name: '配色生成 (Coolors)', url: 'https://coolors.co' },
  { name: 'SVG 压缩 (SVGOMG)', url: 'https://jakearchibald.github.io/svgomg/' },
  { name: '谷歌字体 (Google Fonts)', url: 'https://fonts.google.com' },
];

export const MOCK_AI_PROMPTS: AiPromptItem[] = [
  {
    id: '1',
    type: 'ai-prompts',
    category: 'realistic',
    title: '赛博朋克街景',
    model: 'Midjourney v6',
    imageUrl: 'https://picsum.photos/id/237/600/400',
    prompt: 'A futuristic cyberpunk city street at night, neon lights reflecting on wet pavement, towering skyscrapers with holographic advertisements, cinematic lighting, highly detailed, photorealistic 8k.',
    tags: ['#Cyberpunk', '#Neon', '#Cityscape', '#8k']
  },
  {
    id: '2',
    type: 'ai-prompts',
    category: 'anime',
    title: '魔法森林精灵',
    model: 'Niji 5',
    imageUrl: 'https://picsum.photos/id/1003/600/400',
    prompt: 'Anime style illustration of a magical forest spirit resembling a deer, glowing blue antlers, surrounded by floating light particles, deep forest background, studio ghibli style, vibrant colors.',
    tags: ['#Anime', '#Fantasy', '#Ghibli', '#Forest']
  },
  {
    id: '3',
    type: 'ai-prompts',
    category: '3d',
    title: '抽象玻璃几何',
    model: 'Stable Diffusion XL',
    imageUrl: 'https://picsum.photos/id/106/600/400',
    prompt: 'Abstract composition of floating glass spheres and cubes, iridescent materials, caustic lighting effects, clean white background, 3D render, blender cycles, octane render.',
    tags: ['#3D', '#Abstract', '#Glass', '#Clean']
  },
  {
    id: '4',
    type: 'ai-prompts',
    category: 'realistic',
    title: '复古人像摄影',
    model: 'Midjourney v6',
    imageUrl: 'https://picsum.photos/id/64/600/400',
    prompt: 'Portrait of an elderly fisherman with a weathered face, natural lighting, wearing a yellow raincoat, stormy sea background, emotional expression, 35mm film photography style.',
    tags: ['#Portrait', '#Photography', '#Vintage', '#Film']
  }
];

export const MOCK_FONTS: FontItem[] = [
  {
    id: 'f1',
    type: 'fonts',
    category: 'sans-serif',
    name: 'Inter Display',
    author: 'Rasmus Andersson',
    isPaid: false,
    description: '专为电脑屏幕精心设计和制作的可变字体系列。',
    imageUrl: 'https://picsum.photos/id/20/600/300',
    downloadUrl: '#',
    format: 'OTF',
    size: '2.4 MB'
  },
  {
    id: 'f2',
    type: 'fonts',
    category: 'serif',
    name: 'Editorial New',
    author: 'Pangram Pangram',
    isPaid: true,
    description: '一款精准而优雅的窄衬线字体，专为长篇阅读设计。',
    imageUrl: 'https://picsum.photos/id/24/600/300',
    downloadUrl: '#',
    format: 'TTF',
    size: '1.8 MB'
  },
  {
    id: 'f3',
    type: 'fonts',
    category: 'display',
    name: 'Bebas Neue',
    author: 'Ryoichi Tsunekawa',
    isPaid: false,
    description: 'Bebas Neue 是基于原始 Bebas Neue 免费字体的无衬线字体系列。',
    imageUrl: 'https://picsum.photos/id/26/600/300',
    downloadUrl: '#',
    format: 'OTF',
    size: '0.5 MB'
  },
  {
    id: 'f4',
    type: 'fonts',
    category: 'handwritten',
    name: 'Signature Pro',
    author: 'CreativeMarket',
    isPaid: true,
    description: '外观自然的签名手写字体，包含大量连字以获得真实感。',
    imageUrl: 'https://picsum.photos/id/42/600/300',
    downloadUrl: '#',
    format: 'WOFF2',
    size: '1.2 MB'
  }
];

export const MOCK_SOFTWARE: SoftwareItem[] = [
  {
    id: 's1',
    type: 'software',
    category: 'design',
    title: 'Figma Desktop',
    version: '116.15.4',
    description: '协作界面设计工具。在一个地方进行设计、原型制作和收集反馈，性能卓越。',
    imageUrl: 'https://picsum.photos/id/1/200/200',
    downloads: [
      { label: 'macOS (Intel)', url: '#' },
      { label: 'macOS (Silicon)', url: '#' },
      { label: 'Windows x64', url: '#' },
      { label: 'Windows ARM', url: '#' }
    ]
  },
  {
    id: 's2',
    type: 'software',
    category: 'dev',
    title: 'VS Code',
    version: '1.85.1',
    description: '代码编辑，重新定义。免费、开源、跨平台运行。现代编辑器的标杆。',
    imageUrl: 'https://picsum.photos/id/6/200/200',
    downloads: [
      { label: 'Windows x64', url: '#' },
      { label: 'macOS Universal', url: '#' },
      { label: 'Linux x64', url: '#' }
    ]
  },
  {
    id: 's3',
    type: 'software',
    category: 'utility',
    title: 'Raycast',
    version: '1.63.0',
    description: 'Raycast 是一个极速、完全可扩展的启动器。它可以让你完成任务、计算、分享常用链接等等。',
    imageUrl: 'https://picsum.photos/id/96/200/200',
    downloads: [
      { label: 'macOS Universal', url: '#' },
      { label: 'Beta Access', url: '#' }
    ]
  }
];