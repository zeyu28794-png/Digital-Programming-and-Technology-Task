import { site } from "../data/site";

// 联系方式：邮箱 + GitHub + 额外的社交链接
export default function Contact() {
  const items: { label: string; value: string; href: string }[] = [];

  if (site.email) {
    items.push({ label: "邮箱", value: site.email, href: `mailto:${site.email}` });
  }
  if (site.github) {
    items.push({ label: "GitHub", value: site.github.replace("https://", ""), href: site.github });
  }
  for (const link of site.links) {
    items.push({ label: link.label, value: link.url, href: link.url });
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold">联系方式</h2>
      <div className="mt-6 flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-3 text-white/80 transition hover:text-white"
          >
            <span className="w-16 text-sm text-white/50">{item.label}</span>
            <span>{item.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
