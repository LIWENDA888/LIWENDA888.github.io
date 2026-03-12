/**
 * fonts-data.js
 */
const FONT_DATABASE = {
    "zhisans": {
        meta: {
            title: "自在致黑 ZizaiZhisans - 自在造字",
            badge: "Version 1.0 Beta",
            tags: ["Variable", "免费"] 
        },
        hero: {
            title: "自在致黑",
            enName: "ZizaiZhisans",
            demoLink: "https://example.com/demo-page", 
            description: "融合线条与骨感美，极具视觉张力的字形结构。双轴可变（Weight & Width）。",
            lightImg: "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/zTEv/6803X1701/123-02.jpg/webp",
            darkImg: "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/i4a1/6803X1701/123-01.jpg/webp"
        },

        stats: [
            { label: "字库厂商", value: "ZizaoType Studio" },
            { label: "设计师", value: "Mutou" },
            { label: "授权协议", value: "SIL Open Source" },
            { label: "可变轴", value: "字重 (Weight)、宽度 (Width)" } // 纯文本描述
        ],

        features: [
            {
                title: "响应式字宽 (Width)",
                desc: "支持从 75% 极窄到 100% 标准宽度的无级调节。",
                icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            },
            {
                title: "油墨陷阱 (Ink Traps)",
                desc: "在内角处进行大胆的视觉补偿，确保小字号不糊字。",
                icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            },
            {
                title: "中西文匹配 (Latin Match)",
                desc: "重新设计了西文部首的基线与字重，统一灰度与重心。",
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            },
            {
                title: "屏幕显像优化 (Screen Ready)",
                desc: "针对高分屏 (Retina) 进行了光栅化处理，小字号依然清晰。",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            }
        ],

        gallery: [
            "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/i4a1/6803X1701/123-01.jpg/webp",
            "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/zTEv/6803X1701/123-02.jpg/webp"
        ],
        
        download: {
            version: "1.002",
            type: "免费商用",
            date: "2025.12.16",
            link: "https://pan.baidu.com/s/example"
        }
    },
    "zhisong": {
        meta: {
            title: "自在刻宋 KeSerif - 自在造字",
            badge: "New",
            tags: ["Serif"] 
        },
        hero: {
            title: "自在刻宋",
            enName: "Zizai KeSerif",
            demoLink: "https://example.com/demo-page", 
            description: "向传统雕版印刷致敬。专为高分辨率屏幕打造的标题宋体。",
            lightImg: "https://images.unsplash.com/photo-1620317377821-6f68744155fb?q=80&w=2574&auto=format&fit=crop",
            darkImg: "https://images.unsplash.com/photo-1620317377821-6f68744155fb?q=80&w=2574&auto=format&fit=crop"
        },
        // --- 🔴 修改部分：因为不是可变字体，这里可以灵活配置不同的列 ---
        stats: [
            { label: "字库厂商", value: "ZizaoType Studio" },
            { label: "设计师", value: "Mutou" },
            { label: "授权协议", value: "商业授权 (Commercial)" },
            { label: "字形数量", value: "8,000+" } // 这里展示了灵活性的优势，可以换成任何信息
        ],
        features: [
            {
                title: "雕版风味",
                desc: "保留了刻刀的痕迹，极具人文气息。",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            },
            {
                title: "人文气息",
                desc: "传统与现代的碰撞。",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
            }
        ],
        gallery: [
            "https://pic3.fukit.cn/autoupload/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20251123/zTEv/6803X1701/123-02.jpg/webp"
        ],
        download: {
            version: "1.0 Demo",
            type: "试用版/非商用",
            date: "2026.01.01",
            link: "https://pan.baidu.com/s/example-trial"
        }
    }
};