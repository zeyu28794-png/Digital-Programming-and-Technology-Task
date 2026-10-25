import { site } from "../data/site";
import { skills } from "../data/skills";

// 关于我：自我介绍 + 技能标签
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold">关于我</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-white/70">{site.about}</p>

      <h3 className="mt-8 text-lg font-semibold">技能</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
