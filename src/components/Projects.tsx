import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

// 作品列表：遍历数据渲染卡片
export default function Projects() {
  return (
    <section id="works" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold">我的作品</h2>
      <p className="mt-2 text-sm text-white/50">共 {projects.length} 个项目</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
