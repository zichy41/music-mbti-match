const db = {
    "INTJ": { name: "贝多芬", desc: "独立且深邃的思考者。在无序中建立宏伟秩序。", facts: ["在黑暗中寻找光的逻辑","意志可以重塑命运"], stats: [85, 95, 100, 95, 95, 98] },
    "INTP": { name: "勋伯格", desc: "理性的探险家。敢于拆解规则，构建未来的逻辑。", facts: ["对逻辑自洽有苛刻要求","不在意大众的暂时误解"], stats: [40, 98, 85, 98, 100, 100] },
    "INFJ": { name: "拉威尔", desc: "完美的工匠。将炽热情感浓缩在最严苛的框架下。", facts: ["每一丝情绪都经过精确计算","追求极境的美感"], stats: [92, 88, 85, 98, 92, 90] },
    "INFP": { name: "肖邦", desc: "灵魂的诗人。用最轻盈的音符承载最沉重的忧郁。", facts: ["情感波动是创作源泉","在孤独中与自我深度对话"], stats: [98, 30, 80, 90, 85, 95] },
    "ENTJ": { name: "李斯特", desc: "时代的引领者。拥有卓越技巧与掌控全局的魅力。", facts: ["舞台是天然领地","极具开创精神"], stats: [85, 88, 90, 98, 95, 95] },
    "ENTP": { name: "普罗科菲耶夫", desc: "机敏的博弈者。乐于挑战常规，带来惊喜。", facts: ["拒绝平庸的抒情","带有犀利的幽默感"], stats: [70, 88, 98, 85, 92, 98] },
    "ENFJ": { name: "柴可夫斯基", desc: "情感的共振者。你的真挚能直接击中内心柔软处。", facts: ["渴望被理解接纳","旋律极具歌唱性"], stats: [95, 45, 75, 95, 90, 95] },
    "ENFP": { name: "舒曼", desc: "永恒的追梦人。你的世界充满幻想与炽热情感。", facts: ["文学与音乐的跨界大师","对理想有狂热追求"], stats: [98, 40, 95, 90, 85, 98] },
    "ISTJ": { name: "巴赫", desc: "宇宙秩序的翻译者。在复调逻辑中触碰永恒。", facts: ["规则即是通往自由的路径","建筑学般完美的逻辑"], stats: [20, 100, 100, 98, 90, 40] },
    "ISFJ": { name: "勃拉姆斯", desc: "传统的守望者。在古典形式中包裹厚重人文关怀。", facts: ["不动声色的情感坚持","内敛中蕴含爆发力"], stats: [82, 85, 60, 90, 95, 90] },
    "ESTJ": { name: "海顿", desc: "秩序的建立者。在结构与幽默间寻找平衡。", facts: ["高产且产出稳定","值得信赖的社交核心"], stats: [50, 95, 60, 95, 92, 85] },
    "ESFJ": { name: "门德尔松", desc: "文明的传播者。追求和谐，将优雅化作准则。", facts: ["厌恶极端冲突无序","创作逻辑清晰明快"], stats: [70, 75, 75, 92, 95, 88] },
    "ISTP": { name: "维瓦尔第", desc: "自然的捕捉者。拥有惊人专注力，复刻大地律动。", facts: ["节奏感是思考轴心","极其务实的创作态度"], stats: [65, 85, 75, 90, 95, 90] },
    "ISFP": { name: "舒伯特", desc: "大自然的歌手。创作如同泉水涌出，纯粹无匠气。", facts: ["倾向于小众表达","旋律感是你的本能"], stats: [90, 40, 70, 85, 80, 95] },
    "ESTP": { name: "莫扎特", desc: "直觉的宠儿。世界的逻辑本就存在于你的直觉中。", facts: ["讨厌被教条束缚","极强的即兴应变能力"], stats: [80, 45, 98, 98, 88, 100] },
    "ESFP": { name: "格里格", desc: "民族色彩的绘图员。将烟火生活化作跳跃音符。", facts: ["热爱生命力的传统","极强的视觉转化力"], stats: [85, 35, 80, 85, 88, 95] }
};

const questions = [
    { q: "面对复杂任务时，你倾向于先建立清晰的逻辑框架，而非直接投入情感。", type: "T" },
    { q: "在社交场合，你通常是那个主动发起话题、通过交流获得能量的人。", type: "E" },
    { q: "你更习惯为每天的计划设定明确的进度，并倾向于按部就班地完成。", type: "J" },
    { q: "你经常被抽象的、甚至有些古怪的理念吸引，而非具体的现实细节。", type: "N" },
    { q: "比起未来的各种可能性，你更倾向于关注此时此刻看得见、摸得着的现实。", type: "S" },
    { q: "你更喜欢独自钻研或进行深度的私密对谈，大型聚会往往让你感到疲惫。", type: "I" },
    { q: "处理争议时，你会优先考虑事实的逻辑准确性，即便可能会让人感到冷淡。", type: "T" },
    { q: "你享受随性而发的即兴感，认为‘计划赶不上变化’是一种常态。", type: "P" },
    { q: "你认为经典和传统是极其宝贵的，创新应建立在对传统的尊重之上。", type: "S" },
    { q: "你非常在意他人的感受，愿意为了维护和谐而调整自己的计划。", type: "F" },
    { q: "你喜欢在最后期限（DDL）的压力下寻找爆发感，这能激发你的创意。", type: "P" },
    { q: "你受客观真理的驱动程度，远高于受个人情感或价值观的驱动程度。", type: "T" },
    { q: "在创作或工作时，安静独立的空间对你来说是绝对必要的。", type: "I" },
    { q: "你经常被描述为一个‘脑洞很大’的人，喜欢探索跨界和超前的理论。", type: "N" },
    { q: "你认为生活应该是有条理、可预测的，秩序感能带给你最大的安全感。", type: "J" },
    { q: "你会因为艺术作品中纯粹的情感张力而触动，而非仅仅关注技术难度。", type: "F" },
    { q: "你享受成为焦点的瞬间，观众的瞩目会让你感到充满力量。", type: "E" },
    { q: "你倾向于通过亲手实践来解决问题，而非长时间停留在理论分析阶段。", type: "S" },
    { q: "为了达到某种完美的境界，你愿意推翻大部分工作重新开始。", type: "P" },
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
    document.getElementById('p-bar').style.width = `${((step+1)/questions.length)*100}%`;
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
    document.getElementById('res-desc').innerText = p.desc;
    document.getElementById('res-facts').innerHTML = p.facts.map(f => `<div class="fact-item">${f}</div>`).join('');

    new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
            labels: ['天赋', '情感', '技法', '辨识', '影响', '创新'],
            datasets: [{ 
                data: p.stats, 
                backgroundColor: 'rgba(108,92,231,0.1)', borderColor: '#6c5ce7', borderWidth: 2, pointRadius: 2 
            }]
        },
        options: { scales: { r: { min:0, max:100, ticks:{display:false} } }, plugins:{legend:{display:false}} }
    });
}
