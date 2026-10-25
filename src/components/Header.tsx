import { site } from "../data/site";

// 顶部导航：logo + 站内跳转
const navItems = [
  { label: "关于", href: "#about" },
  { label: "作品", href: "#works" },
  { label: "联系", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold tracking-wide">
          {site.name}
        </a>
        <nav className="flex gap-6 text-sm text-white/70">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
