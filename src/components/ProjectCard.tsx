import type { Project } from "../data/projects";

// 单个项目卡片：截图 / 占位图 + 标题 + 描述 + 技术栈标签
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/25"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-40 w-full object-cover"
        />
      ) : (
        <div className="flex h-40 w-full items-center justify-center bg-white/5 text-4xl text-white/25">
          {project.title.slice(0, 1)}
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
