// 个人网站基础信息：改这里就能更新首页、关于我、联系方式
export interface SiteLink {
  label: string;
  url: string;
}

export const site = {
  name: "周泽宇",
  tagline: "数字经济 2501 班 · 网站作品集",
  intro: "我是数字经济专业的学生，喜欢做网站。这里收录我的一些网站作品，会持续更新。",
  about: "我是周泽宇，数字经济专业的学生，对网页开发很感兴趣。这个网站用来展示我的作品。",
  avatar: "/avatar.jpg", // 头像图片，放在 public 目录
  email: "384510@whut.edu.cn",
  github: "https://github.com/zeyu28794-png",
  // 额外的社交链接，按 { label: "名称", url: "网址" } 添加
  links: [] as SiteLink[],
};
