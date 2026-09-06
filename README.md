# 希流 Xflow — 公司官网

依据《希流 Xflow · 品牌定稿方案 v2.0》搭建：**Xflow Limited**（中国香港注册），
业务定位「大模型研究 × AI Token × AIGC 平台」，品牌主标语
「让每一个 Token 都流向创造 · Let Every Token Flow to Creation」。

- 品牌色板：#001447 深蓝 / #0544E9 科技蓝 / #0295F4 青蓝 / #05AFFE 亮青蓝（主渐变 135°）
- 字体：Helvetica Neue → Arial（英文）、PingFang SC → 微软雅黑（中文），Logo 矢量已转曲
- 曾用名 hinnflow 仅保留作域名资产，站内不展示

基于 **Next.js 16 + React + Tailwind CSS 4**，首页背景为
[@paper-design/shaders-react](https://www.npmjs.com/package/@paper-design/shaders-react)
的 `MeshGradient` 流动网格渐变（黑 + 紫双色流体）。

## 本地运行

```bash
npm install
npm run dev        # 开发模式 http://localhost:3000
```

生产构建与启动：

```bash
npm run build
npm run start      # 默认 3000 端口，可用 npm run start -- --port 3100 指定
```

## 目录结构

```
app/
  layout.tsx        # 字体（Figtree / Instrument Serif / Noto Serif SC）与 SEO 元信息
  page.tsx          # 页面组装：背景 → 导航 → 各区块 → 页脚
  globals.css       # 设计系统：配色令牌、玻璃拟态、区块样式、进场动效
  icon.svg          # 站点图标（浏览器标签页 favicon）
components/
  shader-background.tsx   # 全站固定流动背景（双层 MeshGradient）+ SVG 玻璃滤镜 + WebGL 兜底
  header.tsx              # 顶部导航（滚动毛玻璃、移动端汉堡菜单）
  hero.tsx                # 首屏：玻璃徽章、大标题、CTA、旋转文字徽章、滚动提示
  sections.tsx            # 数据指标 / 三大支柱 / 「流」的三重含义 / 为什么选择 / 关于我们 / 联系我们
  contact-form.tsx        # 联系表单（当前为模拟提交）
  counter.tsx             # 进入视口时的数字滚动动画
  reveal.tsx              # 滚动进场动画容器
  footer.tsx              # 页脚
```

## 待替换的占位内容

业务文案已按品牌定稿（三大支柱 / 「流」的三重含义 / 让智能流淌）撰写，以下仍为占位，替换为真实信息即可：

- 数据指标：`components/sections.tsx` 中 `STATS`（Tokens 数量、场景数为示例值）
- 联系方式：`components/sections.tsx` 中 `hello@xflow.ai`、`400-800-XXXX`、地址
- 页脚公司信息：`components/footer.tsx`（Xflow Limited 注册地址待补充）
- 首屏与区块文案微调：`components/hero.tsx`、`components/sections.tsx`
- 表单接入：`components/contact-form.tsx` 中 `onSubmit` 目前仅本地模拟，TODO 处替换为真实接口

## 部署

- **Vercel**：直接导入仓库即可。
- **静态托管 / 自有服务器**：`next.config.ts` 中加 `output: "export"` 后 `npm run build`，
  产物在 `out/`，可部署到 Nginx、对象存储静态网站等任意静态托管。
