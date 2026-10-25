import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 页面整体布局：顶部导航 + 首屏 + 关于我 + 作品 + 联系方式 + 页脚
export default function App() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
