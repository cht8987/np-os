# 🪷 LotusOS — 莲 OS

> Personal OS 的官方介绍站 · Apple 风格静态网站，纯 HTML/CSS/JS，零构建零依赖。

**Live**: deployed on Vercel

## 这是什么

LotusOS 是 [Personal OS](https://github.com/cht8987/personal-os) 生态的产品介绍页：

- 🧠 **personal-os** — 桌面端核心：vault 模板 + rtk CLI + Obsidian 插件 + Hermes 夜间管家
- 📱 **osmind-app** — 移动端入口：Expo 54 App / PWA，多模态捕获 + AI 聊天

## 本地预览

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## 部署

任意静态托管即可（Vercel / Netlify / GitHub Pages）。无构建步骤。

## 技术

- 纯 HTML + CSS + 原生 JS（IntersectionObserver 滚动动画、打字机演示、数字计数器）
- 深色 Apple 产品页风格，莲花 SVG 绽放动画
- 响应式 + `prefers-reduced-motion` 支持

## License

MIT
