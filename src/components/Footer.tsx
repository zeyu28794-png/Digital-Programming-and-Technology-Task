import { site } from "../data/site";

// 页脚：版权 + 定位语
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.tagline}</p>
      </div>
    </footer>
  );
}
