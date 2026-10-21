import { useRef, useState } from "react";
import Header from "./components/Header";
import Recepcao from "./components/Recepcao";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import Certificados from "./components/Certificados";
import Skills from "./components/Skills";
import Contato from "./components/Contato";

export default function App() {
  const containerRef = useRef(null);
  const [pastRecepcao, setPastRecepcao] = useState(false);
  const [recepcaoProgress, setRecepcaoProgress] = useState(0);

  function handleScroll() {
    const container = containerRef.current;
    if (!container) return;
    setPastRecepcao(container.scrollTop >= container.clientHeight / 2);
    setRecepcaoProgress(
      Math.min(container.scrollTop / container.clientHeight, 1)
    );
  }

  return (
    <>
      <Header visible={pastRecepcao} />
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="snap-container h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <Recepcao progress={recepcaoProgress} />
        <Hero />
        <Projetos />
        <Certificados />
        <Skills />
        <Contato />
      </div>
    </>
  );
}
