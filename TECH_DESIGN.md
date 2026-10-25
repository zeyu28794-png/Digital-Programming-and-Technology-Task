# 技术设计

## 一、技术栈

| 类别 | 选型 | 说明 |
| --- | --- | --- |
| 框架 | React + TypeScript + Vite | 现代主流前端方案 |
| 样式 | Tailwind CSS | 原子化 CSS，快速写样式（用 v4 的 `@tailwindcss/vite` 插件） |
| 动画 | Framer Motion | 滚动 / 入场动画 |
| 路由 | （可选）React Router | 单页已够用，暂不引入；后续若要拆多页再加 |
| 部署 | Vercel | 免费、自动 HTTPS、push 自动重建 |

## 二、项目结构

```
src/
  components/
    Header.tsx      # 顶部导航
    Hero.tsx        # 首页大标题 + 头像 + 简介
    About.tsx       # 关于我 + 技能标签
    Projects.tsx    # 项目卡片列表容器
    ProjectCard.tsx # 单个项目卡片（可复用）
    Contact.tsx     # 联系方式
    Footer.tsx      # 页脚
  data/
    site.ts         # 个人信息（姓名/简介/联系方式/头像）
    skills.ts       # 技能列表
    projects.ts     # 作品列表
  App.tsx
  main.tsx
  index.css
```

## 三、数据管理

- 作品、技能、个人信息全部放在 `src/data/*.ts`，用 TypeScript 接口约束字段；
- 组件只负责渲染，数据从 `data/` 导入，**不在组件里硬编码**；
- 后续增改作品 / 技能只改对应 data 文件。

### 数据接口（初版）

```ts
// projects.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];      // 技术栈标签
  image: string;       // 截图 URL，留空显示占位图
  link: string;        // 线上预览地址
  repo?: string;       // 源码地址，可选
}
```

## 四、初始数据（迁移自现有 works.js）

| # | 作品 | 技术栈 | 线上地址 |
| --- | --- | --- | --- |
| 1 | 海龟汤推理馆 | React / Vite / AI 应用 | https://app-eiggs7yzey9t.miaoda.online/ |
| 2 | 原神 · 旅行者图鉴 | HTML / CSS / JavaScript | https://naifuer0927.netlify.app/ |
| 3 | 海雾来客 | HTML / CSS / JavaScript / 互动叙事 | https://seafog-visitors.netlify.app/ |
| 4 | 深海猎人：溟痕之下 | JavaScript / Canvas / Roguelite | https://abyssal-hunters1007.netlify.app/ |

技能标签（初版，可增删）：HTML、CSS、JavaScript、TypeScript、React、Vite、Canvas、Tailwind CSS。

个人信息（初版）：
- 姓名：周泽宇；定位：数字经济 2501 班 · 网站作品集
- 邮箱：384510@whut.edu.cn
- 头像：`public/avatar.jpg`（640×640，已放入项目）
- GitHub：https://github.com/zeyu28794-png

## 五、部署方案

- **首选 Vercel**：注册（建议 GitHub 登录）→ 导入仓库 → Deploy，1~2 分钟上线；
- **备选**：GitHub Pages（纯静态）、Netlify、Cloudflare Pages；
- 环境变量 / 自定义域名等按需在部署阶段配置。
