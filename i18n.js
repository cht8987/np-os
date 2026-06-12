/* ═══════════ NP-OS — bilingual (zh/en) ═══════════ */

window.NP_SENTENCES = {
  zh: "今天定下了项目架构。记得明天给服务器换证书。午饭花了38块。",
  en: "Locked the project architecture today. Remember to renew the server cert tomorrow. Lunch was RM38."
};

const NP_META = {
  zh: { title: "NP-OS · NEW PERSONAL OS — 你的第二大脑操作系统", toggle: "EN" },
  en: { title: "NP-OS · NEW PERSONAL OS — Your Second-Brain Operating System", toggle: "中文" }
};

const NP_I18N = {
  // ── nav ──
  "nav.eco": { zh: `生态`, en: `Ecosystem` },
  "nav.demo": { zh: `体验`, en: `Demo` },
  "nav.brain": { zh: `第二大脑`, en: `Second Brain` },
  "nav.features": { zh: `功能`, en: `Features` },
  "nav.loop": { zh: `架构`, en: `Architecture` },
  "nav.tech": { zh: `技术`, en: `Tech` },
  "nav.compare": { zh: `性价比`, en: `Value` },

  // ── hero ──
  "hero.eyebrow": { zh: `NEW PERSONAL OS · 开源个人 AI 操作系统生态`, en: `NEW PERSONAL OS · Open-source Personal AI Operating System Ecosystem` },
  "hero.t1": { zh: `不止是笔记，`, en: `More than notes —` },
  "hero.t2": { zh: `是你的第二大脑 OS。`, en: `it's your second-brain OS.` },
  "hero.sub": {
    zh: `NP-OS 把 WIKI 知识库、笔记、知识管理、规划与 AI 个人助理<br>整合成一个长在纯 Markdown 上的操作系统 —— 你只管丢想法，数据永远属于你。`,
    en: `NP-OS unifies a wiki knowledge base, notes, knowledge management, planning and an AI personal assistant<br>into one operating system living on plain Markdown — just drop your thoughts; your data stays yours forever.`
  },
  "hero.cta1": { zh: `开始使用 — 免费开源`, en: `Get Started — Free & Open Source` },
  "hero.cta2": { zh: `了解 OS 生态 ↓`, en: `Explore the ecosystem ↓` },
  "stat.1": { zh: `第三方依赖`, en: `Third-party deps` },
  "stat.2": { zh: `大生态组件`, en: `Ecosystem components` },
  "stat.3": { zh: `类实体自动分流`, en: `Entity types auto-routed` },
  "stat.4": { zh: `% 数据自有产权`, en: `% Data ownership` },

  // ── ecosystem ──
  "eco.h2": { zh: `不是一个 App，<span class="grad">是一个 OS 生态。</span>`, en: `Not an app — <span class="grad">an OS ecosystem.</span>` },
  "eco.lead": {
    zh: `桌面核心、移动终端、网关、记忆引擎、方法论、备份链路 —— 六大组件各司其职，<br>每一层都可替换、可扩展、可自托管。这才叫操作系统。`,
    en: `Desktop core, mobile terminal, gateway, memory engine, methodology, backup chain — six components, each one<br>replaceable, extensible and self-hostable. That's what makes it an operating system.`
  },
  "eco.b1": { zh: `核心 · v0.7.1`, en: `Core · v0.7.1` },
  "eco.d1": { zh: `桌面端核心系统：vault 模板 + rtk 零依赖引擎 + 自带 Obsidian 插件 + Hermes 夜间管家 + install.sh 一键安装。`, en: `The desktop core: vault template + zero-dependency rtk engine + bundled Obsidian plugin + Hermes night butler + one-command install.sh.` },
  "eco.b2": { zh: `移动端`, en: `Mobile` },
  "eco.d2": { zh: `口袋里的捕获终端：文字 / 语音 / PDF / 网页一键投递，离线账本，AI 聊天，PWA 装进主屏幕。`, en: `A capture terminal in your pocket: text / voice / PDF / web pages in one tap, offline ledger, AI chat, installable PWA.` },
  "eco.b3": { zh: `网关`, en: `Gateway` },
  "eco.d3": { zh: `手机的唯一写入口：本地 HTTP 网关，配对 Token 鉴权，内容提取管线，输入永不丢失。`, en: `Your phone's single write entry: a local HTTP gateway with pairing-token auth and a content-extraction pipeline — no input ever lost.` },
  "eco.b4": { zh: `记忆引擎`, en: `Memory Engine` },
  "eco.d4": { zh: `本地语义记忆引擎：OS / 项目 / 学习三个记忆库，向量检索，让 AI 真的「记得你」。`, en: `A local semantic memory engine: three banks (OS / projects / learning) with vector recall, so the AI truly remembers you.` },
  "eco.b5": { zh: `方法论`, en: `Methodology` },
  "eco.d5": { zh: `15 篇面向大众的上手文档：信息流、记忆规范、AI 安全边界、15 分钟 Quick Start。`, en: `15 beginner-friendly docs: information flow, memory specs, AI safety boundaries, and a 15-minute Quick Start.` },
  "eco.b6": { zh: `数据安全`, en: `Data Safety` },
  "eco.d6": { zh: `三链路每日自动备份到 NAS：库快照 + 引擎核心 + 记忆数据库，里程碑永久保留。`, en: `Three backup chains to your NAS daily: vault snapshot + engine core + memory database; milestones kept forever.` },
  "eco.t6": { zh: `备份链路`, en: `Backup Chain` },
  "eco.note": {
    zh: `<b>生态的意义：</b>单个 App 会被淘汰，生态会自我生长。MIT 开源 + 可插拔 LLM + 纯文本存储，任何人都能在 NP-OS 上长出自己的模块。`,
    en: `<b>Why an ecosystem matters:</b> single apps get abandoned; ecosystems grow. MIT-licensed + pluggable LLMs + plain-text storage — anyone can grow their own module on NP-OS.`
  },

  // ── magic demo ──
  "magic.h2": { zh: `一次输入。<span class="grad">三份秩序。</span>`, en: `One input. <span class="grad">Three kinds of order.</span>` },
  "magic.lead": {
    zh: `传统笔记要你先想清楚「放哪、打什么标签」。NP-OS 反过来：<br>唯一动作是把想法丢进 Inbox，AI 管线替你拆分一切。`,
    en: `Traditional notes make you decide where it goes and what to tag first. NP-OS flips it:<br>your only move is dropping a thought into the Inbox — the AI pipeline splits up everything else.`
  },
  "dc1.p": { zh: `今天定下了项目架构`, en: `Locked the project architecture today` },
  "dc2.p": { zh: `给服务器换证书 <b>明天到期</b>`, en: `Renew the server cert <b>due tomorrow</b>` },
  "dc2.m": { zh: `→ 截止日自动换算`, en: `→ due date auto-parsed` },
  "dc3.p": { zh: `午饭 <b>¥38</b>`, en: `Lunch <b>RM38</b>` },
  "dc3.m": { zh: `→ 月度账本自动追加`, en: `→ appended to monthly ledger` },
  "magic.note": {
    zh: `没有 API Key？引擎自动降级为本地规则引擎 —— <b>绝不丢失任何一条输入。</b>`,
    en: `No API key? The engine falls back to a local rule engine — <b>not a single input is ever lost.</b>`
  },

  // ── second brain ──
  "brain.h2": { zh: `五种角色，<span class="grad">一个第二大脑。</span>`, en: `Five roles, <span class="grad">one second brain.</span>` },
  "brain.lead": { zh: `市面上你要订阅五个 App 才能凑齐的能力，在 NP-OS 里是同一套数据、同一条管线。`, en: `Capabilities you'd need five subscriptions to assemble — in NP-OS they share one dataset and one pipeline.` },
  "br1.t": { zh: `WIKI 资料库`, en: `Wiki Library` },
  "br1.n": { zh: `<b>现在：</b>网页剪藏、PDF、学习素材自动蒸馏成结构化 Wiki 条目，双链互联，原文永不删除。`, en: `<b>Now:</b> web clips, PDFs and study material are auto-distilled into structured wiki entries, cross-linked, originals never deleted.` },
  "br1.f": { zh: `<b>前景：</b>长成你的专属知识图谱 —— AI 回答问题时引用的是<i>你自己</i>积累的出处，而不是互联网的平均值。`, en: `<b>Ahead:</b> it grows into your personal knowledge graph — the AI cites <i>your</i> accumulated sources, not the internet average.` },
  "br2.t": { zh: `笔记系统`, en: `Notes` },
  "br2.n": { zh: `<b>现在：</b>零门槛捕获 —— 桌面、手机、语音、CLI 随手丢，纯 Markdown 落盘，无需思考归属。`, en: `<b>Now:</b> zero-friction capture — desktop, phone, voice or CLI; plain Markdown on disk, no filing decisions needed.` },
  "br2.f": { zh: `<b>前景：</b>一份二十年后依然打得开的人生档案。平台会倒闭，纯文本不会。`, en: `<b>Ahead:</b> a life archive that still opens twenty years from now. Platforms die; plain text doesn't.` },
  "br3.t": { zh: `知识管理`, en: `Knowledge Management` },
  "br3.n": { zh: `<b>现在：</b>双轨记忆自动运转 —— 动态流水每日归档，静态知识库定期蒸馏，无需手动打标签。`, en: `<b>Now:</b> dual-track memory runs itself — the daily flow gets archived nightly, the static base gets distilled regularly, no manual tagging.` },
  "br3.f": { zh: `<b>前景：</b>经验产生复利。每个决策、每个教训都可检索，同一个坑不会踩第二次。`, en: `<b>Ahead:</b> experience compounds. Every decision and lesson is searchable — you never fall into the same pit twice.` },
  "br4.t": { zh: `规划助手`, en: `Planning` },
  "br4.n": { zh: `<b>现在：</b>任务、项目、目标、账单一屏总览；日报自动生成，周复盘有数据支撑。`, en: `<b>Now:</b> tasks, projects, goals and spending on one dashboard; daily reports auto-generated, weekly reviews backed by data.` },
  "br4.f": { zh: `<b>前景：</b>人生复盘从「凭感觉」变成「凭数据」—— 时间和金钱的流向第一次清晰可见。`, en: `<b>Ahead:</b> life reviews shift from gut feeling to data — you finally see where your time and money go.` },
  "br5.t": { zh: `AI 个人助理`, en: `AI Personal Assistant` },
  "br5.n": { zh: `<b>现在：</b>24 小时在岗：白天随时对话捕获，夜里 23:30 自动整理归档，懂你的全部上下文。`, en: `<b>Now:</b> on duty 24h — chat-capture anything by day, automatic organizing at 23:30 every night, full context of who you are.` },
  "br5.f": { zh: `<b>前景：</b>AI 时代真正的私人参谋 —— 它站在你全部历史之上给建议，而且越用越懂你。`, en: `<b>Ahead:</b> a true private counsel for the AI era — advice built on your entire history, getting sharper the more you use it.` },
  "br6.t": { zh: `= 第二大脑`, en: `= A Second Brain` },
  "br6.n": { zh: `五种角色共享同一套记忆。你在笔记里写下的，规划里能引用；Wiki 里沉淀的，助理对话时记得。`, en: `Five roles share one memory. What you write in notes can be cited in planning; what settles into the wiki, the assistant remembers in conversation.` },
  "br6.f": { zh: `<b>这就是 OS 和 App 的区别。</b>`, en: `<b>That's the difference between an OS and an app.</b>` },

  // ── features ──
  "feat.h2": { zh: `白天随手丢，<span class="grad">夜里自动长。</span>`, en: `Toss things in by day, <span class="grad">watch them grow by night.</span>` },
  "f1.t": { zh: `夜间管家 Hermes`, en: `Hermes, the Night Butler` },
  "f1.d": { zh: `每晚 23:30 自动夜巡：消化队列、分发归档、生成日报、滞留告警。睡眠错过？醒来自动补跑。你睡觉的时候，系统在替你整理人生。`, en: `Patrols every night at 23:30: digests the queue, files and archives, writes the daily report, flags stale items. Slept through it? It catches up when you wake. While you sleep, the system tidies your life.` },
  "f1.z1": { zh: `归档 ✓`, en: `Archived ✓` },
  "f1.z2": { zh: `日报 ✓`, en: `Report ✓` },
  "f1.z3": { zh: `告警 0`, en: `Alerts 0` },
  "f2.t": { zh: `多模态捕获`, en: `Multi-modal Capture` },
  "f2.d": { zh: `文字、语音、PDF、网页链接 —— 手机一键投递，全部汇入同一条管线。`, en: `Text, voice, PDFs, web links — one tap from your phone, all into the same pipeline.` },
  "f3.t": { zh: `双轨记忆 + 语义检索`, en: `Dual Memory + Semantic Recall` },
  "f3.d": { zh: `动态流水 + 静态知识库，接入 Hindsight 语义索引：问它「我上次为什么放弃那个方案」，它真的记得。`, en: `Dynamic flow + static knowledge base, indexed by Hindsight: ask “why did I drop that plan last time” — it actually remembers.` },
  "f4.t": { zh: `离线优先`, en: `Offline-first` },
  "f4.d": { zh: `断网时写入本地离线账本，恢复连接自动补发。地铁里、飞机上，照常记录。`, en: `No network? Entries go to a local offline ledger and auto-sync once you're back online. Subway, plane — keep capturing.` },
  "f5.t": { zh: `隐私铁律`, en: `Privacy Iron Rules` },
  "f5.d": { zh: `S0–S3 数据分级、<code>private: true</code> 永不外泄、AI 目录权限矩阵、画像变更必须人工确认、PIN 锁。`, en: `S0–S3 data tiers, <code>private: true</code> never leaves home, AI directory permission matrix, profile changes require human confirmation, PIN lock.` },
  "f6.t": { zh: `三链路备份`, en: `Triple Backup Chains` },
  "f6.d": { zh: `库快照 + 引擎核心 + 记忆数据库，每日自动备份到 NAS。7 天滚动保留，里程碑永久豁免。`, en: `Vault snapshot + engine core + memory database, backed up to NAS daily. 7-day rolling retention; milestones exempt forever.` },
  "f7.t": { zh: `总览看板`, en: `Overview Dashboard` },
  "f7.d": { zh: `自带 Obsidian 插件：统计卡片、消费柱状图、任务完成环 —— 一屏看清你的生活。`, en: `Bundled Obsidian plugin: stat cards, spending bars, task completion rings — your life at a glance.` },

  // ── loop ──
  "loop.h2": { zh: `一条闭环，<span class="grad">从口袋到永久记忆。</span>`, en: `One loop, <span class="grad">from pocket to permanent memory.</span>` },
  "loop.lead": { zh: `每一步都自动发生。你唯一要做的事，在第一步就结束了。`, en: `Every step happens automatically. The only thing you do ends at step one.` },
  "p1.t": { zh: `捕获`, en: `Capture` },
  "p1.d": { zh: `手机 App / PWA / 桌面 / CLI，想法随时投递`, en: `Phone app / PWA / desktop / CLI — drop thoughts anytime` },
  "p2.t": { zh: `网关`, en: `Gateway` },
  "p2.d": { zh: `本地 Gateway 接收，LLM 解析五类实体`, en: `Local gateway receives; LLM parses five entity types` },
  "p3.t": { zh: `收件箱`, en: `Inbox` },
  "p3.d": { zh: `结构化落桶，一切输入先到 Inbox`, en: `Structured landing — everything hits the Inbox first` },
  "p4.t": { zh: `夜巡`, en: `Night Patrol` },
  "p4.d": { zh: `23:30 自动分发归档，生成日报`, en: `Auto-files and archives at 23:30, writes the daily report` },
  "p5.t": { zh: `记忆`, en: `Memory` },
  "p5.d": { zh: `双轨记忆沉淀，语义索引可检索`, en: `Settles into dual-track memory, semantically searchable` },
  "p6.t": { zh: `备份`, en: `Backup` },
  "p6.d": { zh: `三链路每日备份，数据永不丢失`, en: `Three backup chains daily — data never lost` },

  // ── why ──
  "why.h2": { zh: `AI 时代，<span class="grad">记忆就是主权。</span>`, en: `In the AI era, <span class="grad">memory is sovereignty.</span>` },
  "w1.t": { zh: `🏛️ 数据自有产权`, en: `🏛️ Own Your Data` },
  "w1.d": { zh: `你的日记、决策、账单、教训，全部是你硬盘上的纯 Markdown 文件。不锁在任何平台里，不依赖任何订阅，二十年后依然打得开。<b>平台会倒闭，纯文本不会。</b>`, en: `Your journals, decisions, bills and lessons are plain Markdown files on your own disk. Not locked in any platform, no subscription required — still opens twenty years on. <b>Platforms die; plain text doesn't.</b>` },
  "w2.t": { zh: `📈 经验复利`, en: `📈 Compounding Experience` },
  "w2.d": { zh: `大多数人的人生经验在三个月后蒸发。NP-OS 把每一次决策、每一个教训沉淀为可检索的资产 —— 让你<b>不再重复踩同一个坑</b>，让 AI 越来越懂你。`, en: `Most people's life experience evaporates within three months. NP-OS turns every decision and lesson into a searchable asset — <b>never trip over the same stone twice</b>, while the AI keeps learning you.` },
  "w3.t": { zh: `🧘 认知减负`, en: `🧘 Cognitive Relief` },
  "w3.d": { zh: `「先想清楚放哪」是传统笔记最大的暴政。NP-OS 把分类的认知负担全部转移给机器，你的大脑只负责一件事：<b>产生想法。</b>做减法是美德。`, en: `“Decide where it goes first” is the tyranny of traditional notes. NP-OS shifts the whole filing burden onto machines; your brain keeps a single job: <b>having ideas.</b> Subtraction is a virtue.` },
  "w4.t": { zh: `🤝 真正的 AI 协作`, en: `🤝 Real AI Collaboration` },
  "w4.d": { zh: `通用 AI 不认识你。NP-OS 给 AI 一份关于你的完整上下文 —— 你的目标、原则、历史、反目标 —— 让每一次对话都站在你全部经验之上，而不是从零开始。`, en: `Generic AI doesn't know you. NP-OS hands the AI your full context — goals, principles, history, anti-goals — so every conversation starts from your entire experience, not from zero.` },

  // ── growth ──
  "grow.h2": { zh: `它改变的不是笔记，<span class="grad">是你这个人。</span>`, en: `It doesn't change your notes — <span class="grad">it changes you.</span>` },
  "g1.w": { zh: `第 1 周`, en: `Week 1` },
  "g1.t": { zh: `不再丢失`, en: `Nothing Gets Lost` },
  "g1.d": { zh: `每个闪念、每笔开销、每条待办都有去处。焦虑感先消失 —— 因为「我是不是忘了什么」这个后台进程被关掉了。`, en: `Every flash of thought, every expense, every todo has a home. The anxiety goes first — the background process called “am I forgetting something?” gets killed.` },
  "g2.w": { zh: `第 1 个月`, en: `Month 1` },
  "g2.t": { zh: `开始看见模式`, en: `Patterns Emerge` },
  "g2.d": { zh: `日报和消费看板让你第一次客观看见自己的时间和金钱流向。复盘从「凭感觉」变成「凭数据」。`, en: `Daily reports and the spending dashboard show you, objectively and for the first time, where your time and money flow. Reviews go from gut feeling to data.` },
  "g3.w": { zh: `第 3 个月`, en: `Month 3` },
  "g3.t": { zh: `决策有了底气`, en: `Confident Decisions` },
  "g3.d": { zh: `「上次类似情况我是怎么决定的？结果如何？」—— 一次检索就有答案。你开始引用自己的历史，而不是重新发明轮子。`, en: `“How did I decide last time, and how did it turn out?” — one search away. You start citing your own history instead of reinventing wheels.` },
  "g4.w": { zh: `第 1 年`, en: `Year 1` },
  "g4.t": { zh: `拥有系统资产`, en: `A System Asset` },
  "g4.d": { zh: `一座持续生长的个人知识库、一套了解你的 AI 协作系统、一份可复盘的人生档案。这是<b>留给未来自己最好的礼物。</b>`, en: `A growing personal knowledge base, an AI collaboration system that knows you, a reviewable life archive. <b>The best gift you can leave your future self.</b>` },

  // ── tech ──
  "tech.h2": { zh: `克制的技术，<span class="grad">为了二十年后还能跑。</span>`, en: `Restrained tech choices, <span class="grad">built to still run in twenty years.</span>` },
  "tech.lead": { zh: `没有花哨框架，没有供应商锁定。每个技术选型都回答同一个问题：十年后它还在吗？`, en: `No fancy frameworks, no vendor lock-in. Every choice answers one question: will this still exist in ten years?` },
  "tc1.h": { zh: `📦 存储层`, en: `📦 Storage` },
  "tc1.p": { zh: `<b>纯 Markdown + YAML</b>`, en: `<b>Plain Markdown + YAML</b>` },
  "tc1.s": { zh: `人类可读、Git 友好、永不过时的开放格式`, en: `Human-readable, Git-friendly, never-obsolete open format` },
  "tc2.h": { zh: `⚙️ 引擎层`, en: `⚙️ Engine` },
  "tc2.p": { zh: `<b>Python 标准库（零依赖）</b>`, en: `<b>Python stdlib (zero deps)</b>` },
  "tc2.s": { zh: `macOS 自带环境直接跑，无需 pip install 任何东西`, en: `Runs on stock macOS — no pip install of anything` },
  "tc3.h": { zh: `🖥️ 显示层`, en: `🖥️ Display` },
  "tc3.p": { zh: `<b>Obsidian + 自带插件</b>`, en: `<b>Obsidian + bundled plugin</b>` },
  "tc3.s": { zh: `可替换的显示层，个人使用免费`, en: `A replaceable display layer, free for personal use` },
  "tc4.h": { zh: `📱 移动端`, en: `📱 Mobile` },
  "tc4.p": { zh: `<b>Expo 54 · React Native · PWA</b>`, en: `<b>Expo 54 · React Native · PWA</b>` },
  "tc4.s": { zh: `OSMIND App：iOS / Android / 浏览器全覆盖`, en: `OSMIND App: iOS / Android / browser — all covered` },
  "tc5.h": { zh: `🤖 智能层`, en: `🤖 Intelligence` },
  "tc5.p": { zh: `<b>可插拔 LLM</b>`, en: `<b>Pluggable LLMs</b>` },
  "tc5.s": { zh: `默认 DeepSeek 高性价比，一行配置切换任意 OpenAI 兼容 API`, en: `DeepSeek by default for value; one line switches to any OpenAI-compatible API` },
  "tc6.h": { zh: `🧠 记忆层`, en: `🧠 Memory` },
  "tc6.p": { zh: `<b>Hindsight 语义引擎</b>`, en: `<b>Hindsight semantic engine</b>` },
  "tc6.s": { zh: `本地 Docker 容器，向量检索，数据不出家门`, en: `Local Docker container, vector recall, data never leaves home` },
  "tc7.h": { zh: `⏰ 调度层`, en: `⏰ Scheduling` },
  "tc7.p": { zh: `<b>macOS launchd</b>`, en: `<b>macOS launchd</b>` },
  "tc7.s": { zh: `系统级定时，睡眠错过自动补跑，无守护进程`, en: `System-level timing; missed runs catch up after sleep, no daemons` },
  "tc8.h": { zh: `🌐 网关层`, en: `🌐 Gateway` },
  "tc8.p": { zh: `<b>本地 HTTP Gateway</b>`, en: `<b>Local HTTP Gateway</b>` },
  "tc8.s": { zh: `手机唯一写入口，配对 Token 鉴权，局域网即用`, en: `The phone's single write entry, pairing-token auth, works on LAN` },
  "cov.h3": { zh: `📡 便利覆盖：在哪都能用`, en: `📡 Coverage: works wherever you are` },
  "chip.1": { zh: `💻 Mac 桌面插件`, en: `💻 Mac desktop plugin` },
  "chip.2": { zh: `📱 iPhone / Android App`, en: `📱 iPhone / Android app` },
  "chip.3": { zh: `🌐 浏览器 PWA`, en: `🌐 Browser PWA` },
  "chip.4": { zh: `⌨️ 终端 CLI`, en: `⌨️ Terminal CLI` },
  "chip.5": { zh: `🗣️ 语音输入`, en: `🗣️ Voice input` },
  "chip.6": { zh: `🔗 iOS 快捷指令`, en: `🔗 iOS Shortcuts` },
  "chip.7": { zh: `✈️ 完全离线可用`, en: `✈️ Fully offline-capable` },

  // ── compare ──
  "cmp.h2": { zh: `一杯咖啡的成本，<span class="grad">一个团队的能力。</span>`, en: `The cost of a coffee, <span class="grad">the capability of a team.</span>` },
  "cmp.table": {
    zh: `<thead><tr><th>&nbsp;</th><th class="hl">🧠 NP-OS</th><th>Notion AI</th><th>Evernote</th><th>人工助理</th></tr></thead><tbody>
<tr><td>年成本</td><td class="hl"><b>≈ RM 0–60</b><span>仅 LLM API 按量</span></td><td>≈ RM 560/年</td><td>≈ RM 700/年</td><td>≈ RM 30,000+/年</td></tr>
<tr><td>数据归属</td><td class="hl"><b>100% 本地自有</b></td><td>平台云端</td><td>平台云端</td><td>—</td></tr>
<tr><td>离线可用</td><td class="hl"><b>✓ 完全离线</b></td><td>部分</td><td>部分</td><td>✓</td></tr>
<tr><td>自动分类归档</td><td class="hl"><b>✓ 全自动</b></td><td>手动 + AI 辅助</td><td>手动</td><td>✓</td></tr>
<tr><td>夜间自动整理</td><td class="hl"><b>✓ 每晚 23:30</b></td><td>✗</td><td>✗</td><td>要加班费</td></tr>
<tr><td>长期记忆检索</td><td class="hl"><b>✓ 语义级</b></td><td>关键词</td><td>关键词</td><td>会忘</td></tr>
<tr><td>隐私</td><td class="hl"><b>数据不出家门</b></td><td>上传云端</td><td>上传云端</td><td>人会说漏</td></tr>
<tr><td>可定制 / 开源</td><td class="hl"><b>✓ MIT 开源</b></td><td>✗</td><td>✗</td><td>—</td></tr>
<tr><td>24 小时在岗</td><td class="hl"><b>✓</b></td><td>✓</td><td>✗</td><td>✗</td></tr></tbody>`,
    en: `<thead><tr><th>&nbsp;</th><th class="hl">🧠 NP-OS</th><th>Notion AI</th><th>Evernote</th><th>Human assistant</th></tr></thead><tbody>
<tr><td>Annual cost</td><td class="hl"><b>≈ RM 0–60</b><span>pay-as-you-go LLM API only</span></td><td>≈ RM 560/yr</td><td>≈ RM 700/yr</td><td>RM 30,000+/yr</td></tr>
<tr><td>Data ownership</td><td class="hl"><b>100% local & yours</b></td><td>Platform cloud</td><td>Platform cloud</td><td>—</td></tr>
<tr><td>Works offline</td><td class="hl"><b>✓ Fully</b></td><td>Partial</td><td>Partial</td><td>✓</td></tr>
<tr><td>Auto classify & archive</td><td class="hl"><b>✓ Fully automatic</b></td><td>Manual + AI assist</td><td>Manual</td><td>✓</td></tr>
<tr><td>Nightly auto-organizing</td><td class="hl"><b>✓ 23:30 every night</b></td><td>✗</td><td>✗</td><td>Overtime pay</td></tr>
<tr><td>Long-term memory recall</td><td class="hl"><b>✓ Semantic</b></td><td>Keyword</td><td>Keyword</td><td>Forgets</td></tr>
<tr><td>Privacy</td><td class="hl"><b>Data never leaves home</b></td><td>Cloud upload</td><td>Cloud upload</td><td>People leak</td></tr>
<tr><td>Customizable / open source</td><td class="hl"><b>✓ MIT</b></td><td>✗</td><td>✗</td><td>—</td></tr>
<tr><td>On duty 24 h</td><td class="hl"><b>✓</b></td><td>✓</td><td>✗</td><td>✗</td></tr></tbody>`
  },
  "cmp.note": {
    zh: `参考价按 2026 年公开订阅价估算。NP-OS 软件本体 MIT 协议永久免费，唯一可选成本是按量计费的 LLM API（高性价比模型每月通常只需几块钱）。`,
    en: `Reference prices based on public 2026 subscription rates. NP-OS itself is MIT-licensed and free forever; the only optional cost is pay-as-you-go LLM API (a few ringgit a month with value models).`
  },

  // ── philosophy / cta / footer ──
  "phil.q": { zh: `做减法是美德。<br>系统包裹复杂，把简单还给你。`, en: `Subtraction is a virtue.<br>The system wraps the complexity and hands you back the simplicity.` },
  "phil.p": { zh: `NP-OS 的每一个设计决定，都在回答一个问题：<br>能不能让用户少做一件事？`, en: `Every design decision in NP-OS answers one question:<br>can we let the user do one less thing?` },
  "cta.h2": { zh: `五分钟，<span class="grad">启动你的第二大脑。</span>`, en: `Five minutes <span class="grad">to boot your second brain.</span>` },
  "cta.cmt": { zh: `# 克隆并安装 —— 交互式向导自动配置一切`, en: `# Clone & install — the interactive wizard configures everything` },
  "cta.b1": { zh: `🧠 personal-os — 桌面端核心`, en: `🧠 personal-os — desktop core` },
  "cta.b2": { zh: `📱 osmind-app — 移动端入口`, en: `📱 osmind-app — mobile entry` }
};

function npApplyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = NP_I18N[el.dataset.i18n];
    if (entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
  });
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
  document.title = NP_META[lang].title;
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = NP_META[lang].toggle;
  // if the typing demo already played, swap the full sentence
  const typed = document.getElementById("typed");
  if (typed && typed.textContent.length > 0 && window.npDemoPlayed) {
    typed.textContent = window.NP_SENTENCES[lang];
  }
  localStorage.setItem("np-lang", lang);
  window.npLang = lang;
}

window.npLang = localStorage.getItem("np-lang") || "zh";
document.addEventListener("DOMContentLoaded", () => {
  if (window.npLang !== "zh") npApplyLang(window.npLang);
  else { const btn = document.getElementById("langToggle"); if (btn) btn.textContent = NP_META.zh.toggle; }
  const btn = document.getElementById("langToggle");
  if (btn) btn.addEventListener("click", () => npApplyLang(window.npLang === "zh" ? "en" : "zh"));
});
