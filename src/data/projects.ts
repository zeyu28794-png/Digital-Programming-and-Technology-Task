// 作品列表：加一个作品就往数组里加一条
export interface Project {
  title: string; // 项目名称
  description: string; // 简短描述
  tags: string[]; // 技术栈标签
  image: string; // 截图地址，留空则显示占位图
  link: string; // 线上预览地址
  repo?: string; // 源码地址，可选
}

export const projects: Project[] = [
  {
    title: "海龟汤推理馆",
    description:
      "在线海龟汤情境推理游戏：系统担任主持人出题，玩家用文字提问、逐步还原故事真相。内置多难度题库、线索提示与答案揭晓。",
    tags: ["React", "Vite", "AI 应用"],
    image:
      "https://job-manager-artifacts-online.cdn.bcebos.com/prod/artifacts/2ba5a966-a61f-4129-ad41-69bd44ef7b94/app-eiggs7yzey9t_web_1789786789199.png",
    link: "https://app-eiggs7yzey9t.miaoda.online/",
  },
  {
    title: "原神 · 旅行者图鉴",
    description:
      "原神（Genshin Impact）游戏简介单页网站：纯手写实现，含星尘背景动画、昼夜主题切换与角色图鉴排版。",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "",
    link: "https://naifuer0927.netlify.app/",
  },
  {
    title: "海雾来客",
    description:
      "《明日方舟》同人互动叙事游戏：扮演灰雾港边检站的检查官，审查来客的证件与说辞并做出裁决，资源管理与抉择导向多结局。",
    tags: ["HTML", "CSS", "JavaScript", "互动叙事"],
    image: "",
    link: "https://seafog-visitors.netlify.app/",
  },
  {
    title: "深海猎人：溟痕之下",
    description:
      "《明日方舟》同人俯视角清版生存 Roguelite 小游戏：操控斯卡蒂、幽灵鲨等深海猎人，在海嗣群中战斗求生，含多角色、技能与肉鸽式成长。",
    tags: ["JavaScript", "Canvas", "Roguelite"],
    image: "",
    link: "https://abyssal-hunters1007.netlify.app/",
  },
];
