/**
 * work-data.js
 * 仅负责作品数据和分类的定义。
 */

// ----------------------------------------------------
// I. 作品数据定义（包含分类字段）
// ----------------------------------------------------
const workData = [
    { name: '字造起点黑', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'font' },
    { name: '在线体验', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'design' },
    { name: '海报设计', imageUrl: 'https://tc.z.wiki/autoupload/f/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20250803/gOQi/ico.ico', categoryKey: 'design' }, 
    { name: '抽象画', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'art' }, 
    { name: '手写字', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'font' }, 
    { name: '字体展示', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'font' },
    { name: 'Logo设计案例', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'design' },
    { name: '摄影作品', imageUrl: 'https://tc-new.z.wiki/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251005/KII0/930X710/index1.jpg/webp', categoryKey: 'art' },
];

// 作品分类定义（用于生成筛选按钮）
const workCategories = [
    { key: 'all', label: '所有作品' },
    { key: 'font', label: '字体设计' },
    { key: 'design', label: '平面设计' },
    { key: 'art', label: '艺术创作' },
];