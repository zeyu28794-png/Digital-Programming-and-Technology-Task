import { site } from "../data/site";

// 首页首屏：头像 + 姓名 + 定位语 + 简介 + 联系方式按钮
export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center"
    >
      <img
        src={site.avatar}
        alt={site.name}
        className="h-32 w-32 rounded-full border-2 border-white/10 object-cover shadow-xl"
      />
      <h1 className="mt-6 text-4xl font-bold sm:text-5xl">{site.name}</h1>
      <p className="text-gradient mt-3 text-lg font-medium">{site.tagline}</p>
      <p className="mt-4 max-w-xl text-white/60">{site.intro}</p>

      <div className="mt-8 flex gap-4">
        {site.github && (
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-80"
          >
            GitHub
          </a>
        )}
        {site.email && (
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-white/20 px-5 py-2 text-sm text-white transition hover:bg-white/10"
          >
            邮箱联系
          </a>
        )}
      </div>
    </section>
  );
}
