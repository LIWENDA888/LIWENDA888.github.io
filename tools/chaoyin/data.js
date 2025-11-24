// ==========================================
// 数据配置文件
// 格式：主字(形近字组)(部首/家族组)
// 例如：木(本术)(林森) 表示：
// "木" 的形近字是 "本,术"
// "木" 的部首字是 "林,森"
// ==========================================

const RAW_DATA_INPUTS = [
    "一(二三)(T工)",
    "人(入八乂)(从众)", 
    "日(曰目旦旧)(白田甲由申)",
    "木(本术未末)(林森)",
    "大(太犬天)(夫夭)",
    "土(士)(干工)",
    "王(玉)(主五)",
    "口(回吕)(品唱)",
    "田(甲由申)(电)",
    "刀(力刃)(刁)",
    "又(叉)(文支)",
    "水(冰永)(氺)",
    "火(灭炎)(伙)",
    "月(用)(甩)",
    "己(已)(巳)",
    "析(拆)(折)",
    "贝(见)(页)",
    "牛(午)(생)",
    "手(毛)(拜)",
    "气(乞)(氛)",
    "免(兔)(晚)",
    "乌(鸟)(鸣)",
    "乒(乓)(兵)",
    "戊(戌)(戍戎)",
    "治(冶)(法)",
    "末(未)(味)",
    "博(搏)(膊)",
    "辩(辨)(辫瓣)",
    "燥(躁)(澡操)",
    "准(淮)(谁)",
    "形(型)(邢)",
    "盲(育)(妄)",
    "很(狠)(跟)",
    "受(爱)(授)",
    "光(光)(辉)"
];

// --- 以下是数据处理逻辑，不需要修改 ---

window.AppLibrary = window.AppLibrary || {};

// 1. 解析数据 (修复后的正则)
window.AppLibrary.parseData = function() {
    return RAW_DATA_INPUTS.map(str => {
        // 匹配格式: 字(组1)(组2) 或 字(组1)
        const match = str.match(/^(.)\(([^)]*)\)(?:\(([^)]*)\))?$/);
        if (match) {
            return {
                key: match[1],
                similars: match[2] ? match[2].split('') : [],
                radicals: match[3] ? match[3].split('') : []
            };
        }
        return null;
    }).filter(item => item !== null);
};

// 2. 统计热度
window.AppLibrary.calculateStats = function(data) {
    const frequencyMap = {};
    let totalRelations = 0;

    data.forEach(entry => {
        if (!frequencyMap[entry.key]) frequencyMap[entry.key] = 0;
        
        entry.similars.forEach(char => {
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;
            totalRelations++;
        });

        entry.radicals.forEach(char => {
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;
            totalRelations++;
        });
    });

    return { frequencyMap, totalRelations, totalGroups: data.length };
};