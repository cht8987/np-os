# 🧠 NP-OS — NEW PERSONAL OS

> NEW PERSONAL OS 生态的官方介绍站 · Apple 风格静态网站，纯 HTML/CSS/JS，零构建零依赖。

**Live**: https://np-os.vercel.app

## NP-OS 是什么

NP-OS（NEW PERSONAL OS）是一个开源的个人 AI 操作系统生态 —— 把 **第二大脑、WIKI 知识库、笔记、知识管理、规划与 AI 个人助理** 整合在纯 Markdown 之上：

| 组件 | 角色 |
|------|------|
| [personal-os](https://github.com/cht8987/personal-os) | 桌面端核心：vault 模板 + rtk 零依赖引擎 + Obsidian 插件 + Hermes 夜间管家（v0.7.1） |
| [osmind-app](https://github.com/cht8987/osmind-app) | 移动端入口：Expo 54 App / PWA，多模态捕获 + AI 聊天 + 离线账本 |
| OSMIND Gateway | 手机唯一写入口：本地 HTTP 网关 + 内容提取管线 |
| Hindsight | 本地语义记忆引擎（三记忆库，向量检索） |
| NPOS 文档包 | 15 篇面向大众的方法论文档 |
| 备份链路 | 三链路每日自动备份到 NAS |

## 本地预览

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## 部署

任意静态托管即可（Vercel / Netlify / GitHub Pages）。无构建步骤。

## 技术

- 纯 HTML + CSS + 原生 JS（IntersectionObserver 滚动动画、打字机演示、数字计数器）
- 深色 Apple 产品页风格，OS 轨道环绕开场动画
- 响应式 + `prefers-reduced-motion` 支持

## License

MIT
