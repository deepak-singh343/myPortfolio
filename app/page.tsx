import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
