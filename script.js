const db = {
    "INTJ": { name: "贝多芬", tags: ["意志", "重构"], desc: "独立且深邃的思考者。你不迎合平庸，擅长在无序中建立宏伟的秩序。", facts: ["在黑暗中寻找光的逻辑","专注时世界为你静止","坚信意志可以重塑命运"], best: "斯特拉文斯基", worst: "莫扎特", stats: [85, 95, 100, 95, 95, 98] },
    "INTP": { name: "勋伯格", tags: ["颠覆", "体系"], desc: "理性的探险家。你敢于拆解传承百年的规则，构建属于未来的十二音逻辑。", facts: ["对逻辑自洽有极高要求","脑海中始终进行思维风暴","不在意大众的暂时误解"], best: "韦伯恩", worst: "柴可夫斯基", stats: [40, 98, 85, 98, 100, 100] },
    "INFJ": { name: "拉威尔", tags: ["精致", "内敛"], desc: "完美的工匠。你将炽热的情感浓缩在最严苛的乐理框架下，含蓄而绚烂。", facts: ["每一丝情绪都经过计算","社交外壳下是极致细腻","追求配器法的极境美感"], best: "德彪西", worst: "莫扎特", stats: [92, 88, 85, 98, 92, 90] },
    "INFP": { name: "肖邦", tags: ["诗人", "敏感"], desc: "灵魂的诗人。你对世界有极敏锐的触觉，擅长用最轻盈的音符承载最沉重的忧郁。", facts: ["情感波动是创作源泉","在孤独中与自我对话","渴望理想化的共鸣"], best: "舒曼", worst: "巴赫", stats: [98, 30, 80, 90, 85, 95] },
    "ENTJ": { name: "李斯特", tags: ["领袖", "华丽"], desc: "时代的引领者。你不仅拥有卓越的技巧，更有掌控全局的魅力与远见。", facts: ["舞台是你的天然领地","渴望突破生理极限","极具开创精神"], best: "瓦格纳", worst: "舒伯特", stats: [85, 88, 90, 98, 95, 95] },
    "ENTP": { name: "普罗科菲耶夫", tags: ["机智", "怪诞"], desc: "机敏的博弈者。你乐于挑战常规，用出其不意的逻辑给世界带来惊喜。", facts: ["拒绝平庸的抒情方式","反应极快，热衷智力挑战","带有犀利的幽默感"], best: "斯特拉文斯基", worst: "肖邦", stats: [70, 88, 98, 85, 92, 98] },
    "ENFJ": { name: "柴可夫斯基", tags: ["感染", "真挚"], desc: "情感的共振者。你的真挚让每一个音符都能直接击中听众最柔软的内心。", facts: ["渴望被群体理解接纳","情感起伏即是生命律动","旋律线条极具歌唱性"], best: "拉赫玛尼诺夫", worst: "勋伯格", stats: [95, 45, 75, 95, 90, 95] },
    "ENFP": { name: "舒曼", tags: ["浪漫", "幻想"], desc: "永恒的追梦人。你的世界充满了文学色彩，情感炽热到甚至可以超越理性。", facts: ["文学与音乐跨界大师","灵魂中寄宿多重人格","对理想有狂热追求"], best: "肖邦", worst: "门德尔松", stats: [98, 40, 95, 90, 85, 98] },
    "ISTJ": { name: "巴赫", tags: ["秩序", "基石"], desc: "宇宙秩序的翻译者。你在最严密的复调逻辑中，触碰到了神圣的永恒。", facts: ["规则即通往自由的路径","无与伦比的勤奋严谨","建筑学般完美的逻辑"], best: "维瓦尔第", worst: "李斯特", stats: [20, 100, 100, 98, 90, 40] },
    "ISFJ": { name: "勃拉姆斯", tags: ["深沉", "守护"], desc: "传统的深情守望者。你在古典的形式中，包裹着最细腻且厚重的人文关怀。", facts: ["不动声色的情感坚持","对传承有天然敬畏心","内敛中蕴含爆发力"], best: "舒曼", worst: "瓦格纳", stats: [82, 85, 60, 90, 95, 90] },
    "ESTJ": { name: "海顿", tags: ["稳健", "幽默"], desc: "秩序的建立者。你懂得如何在结构与幽默之间寻找平衡，是群体的定海神针。", facts: ["极高产且产出稳定","懂得在规则内寻求乐趣","值得信赖的社交核心"], best: "莫扎特", worst: "贝多芬", stats: [50, 95, 60, 95, 92, 85] },
    "ESFJ": { name: "门德尔松", tags: ["优雅", "平衡"], desc: "文明的传播者。你追求和谐与极致平衡，将优雅化作了艺术的最高准则。", facts: ["厌恶极端冲突无序","擅长维护人际和谐","创作逻辑清晰明快"], best: "巴赫", worst: "舒曼", stats: [70, 75, 75, 92, 95, 88] },
    "ISTP": { name: "维瓦尔第", tags: ["敏锐", "律动"], desc: "自然的捕捉者。你拥有惊人专注力与实干精神，擅长复刻大地的律动。", facts: ["节奏感是思考轴心","极其务实的创作态度","瞬间捕捉色彩的高手"], best: "巴赫", worst: "勃拉姆斯", stats: [65, 85, 75, 90, 95, 90] },
    "ISFP": { name: "舒伯特", tags: ["纯真", "自然"], desc: "大自然的歌手。你的创作如同泉水涌出，不带一丝匠气，唯有最纯粹的真。 ", facts: ["倾向小众圈子表达","对自然有原始向往","旋律感是第二本能"], best: "李斯特", worst: "勋伯格", stats: [90, 40, 70, 85, 80, 95] },
    "ESTP": { name: "莫扎特", tags: ["自由", "天才"], desc: "直觉的宠儿。你不需要费力思考，因为整个世界的逻辑本就存在于你的直觉中。", facts: ["讨厌被陈旧教条束缚","极强即兴与应变能力","举重若轻平衡复杂性"], best: "海顿", worst: "贝多芬", stats: [80, 45, 98, 98, 88, 100] },
    "ESFP": { name: "格里格", tags: ["活力", "色彩"], desc: "民族色彩的绘图员。你热爱生活，擅长将最鲜活的人间烟火化作跳跃的音符。", facts: ["热爱具有生命力的传统","性格开朗富有同情心","极强视觉画面转化力"], best: "柴可夫斯基", worst: "巴赫", stats: [85, 35, 80, 85, 88, 95] }
};

const questions = [
    { q: "面对复杂任务时，你倾向于先建立清晰的逻辑框架，而非直接投入情感。", type: "T" },
    { q: "在社交场合，你通常是那个主动发起话题、能通过交流获得能量的人。", type: "E" },
    { q: "你更习惯为每天的计划设定明确的进度，并倾向于按部就班地完成。", type: "J" },
    { q: "你经常被抽象的、甚至有些古怪的理念吸引，而非具体的现实细节。", type: "N" },
    { q: "比起未来的各种可能性，你更倾向于关注此时此刻看得见、摸得着的现实。", type: "S" },
    { q: "你更喜欢独自钻研或进行深度的私密对谈，大型聚会往往让你感到疲惫。", type: "I" },
    { q: "处理争议时，你会优先考虑事实的逻辑准确性，即便这可能会让人感到冷淡。", type: "T" },
    { q: "你享受随性而发的即兴感，认为‘计划赶不上变化’是一种常态。", type: "P" },
    { q: "你认为经典和传统是极其宝贵的，任何创新都应建立在对传统的尊重之上。", type: "S" },
    { q: "你非常在意他人的感受，愿意为了维护团队的和谐而调整自己的计划。", type: "F" },
    { q: "你喜欢在最后期限（DDL）的压力下寻找爆发的快感，这能激发你的创意。", type: "P" },
    { q: "你受客观客观真理的驱动程度，远高于受个人情感或价值观的驱动程度。", type: "T" },
    { q: "在创作或工作时，安静独立的空间对你来说是绝对必要的。", type: "I" },
    { q: "你经常被描述为一个‘脑洞很大’的人，喜欢探索跨界和超前的理论。", type: "N" },
    { q: "你认为生活应该是有条理、可预测的，秩序感能带给你最大的安全感。", type: "J" },
    { q: "你会因为艺术作品中纯粹的情感张力而深受触动，而非仅仅关注其技术难度。", type: "F" },
    { q: "你享受成为焦点的瞬间，观众的瞩目会让你感到充满力量。", type: "E" },
    { q: "你倾向于通过亲手实践来解决问题，而非长时间停留在理论分析阶段。", type: "S" },
    { q: "为了达到某种完美的境界，你愿意推翻已经做好的大部分工作，重新开始。", type: "P" },
    { q: "你认为在人际关系中，情感的真挚沟通比‘谁是对的’重要得多。", type: "F" }
];

let step = 0;
let sc = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

function start() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    update();
}

function update() {
    document.getElementById('q-num').innerText = step + 1;
    document.getElementById('q-text').innerText = questions[step].q;
    document.getElementById('inner-bar').style.width = `${((step+1)/questions.length)*100}%`;
}

function next(v) {
    const q = questions[step];
    const opp = {E:'I', I:'E', S:'N', N:'S', T:'F', F:'T', J:'P', P:'J'};
    if(v > 0) sc[q.type] += v;
    else if(v < 0) sc[opp[q.type]] += Math.abs(v);
    step++;
    if(step < questions.length) update();
    else show();
}

function show() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    const m = (sc.E>=sc.I?'E':'I')+(sc.S>=sc.N?'S':'N')+(sc.T>=sc.F?'T':'F')+(sc.J>=sc.P?'J':'P');
    const p = db[m] || db["INTJ"];
    
    document.getElementById('res-mbti').innerText = m;
    document.getElementById('res-name').innerText = p.name;
    document.getElementById('res-tags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('res-desc').innerText = p.desc;
    document.getElementById('res-facts').innerHTML = p.facts.map(f => `<p>${f}</p >`).join('');
    document.getElementById('res-best').innerText = p.best;
    document.getElementById('res-worst').innerText = p.worst;

    new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
            labels: ['天赋', '情感', '技法', '辨识', '影响', '创新'],
            datasets: [{ 
                data: p.stats, 
                backgroundColor: 'rgba(108,92,231,0.1)', 
                borderColor: '#6c5ce7', 
                borderWidth: 2, 
                pointRadius: 3, 
                pointBackgroundColor: '#6c5ce7'
            }]
        },
        options: { 
            scales: { 
                r: { 
                    min:0, max:100, 
                    ticks:{display:false}, 
                    grid:{color:'rgba(0,0,0,0.03)'},
                    angleLines: { color: 'rgba(0,0,0,0.03)' },
                    pointLabels: { font: { size: 11, weight: 'bold' } }
                } 
            }, 
            plugins:{legend:{display:false}} 
        }
    });
}
