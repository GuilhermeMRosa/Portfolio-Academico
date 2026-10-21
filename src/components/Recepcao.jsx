import SkyScene from "./SkyScene";
import ThemeToggle from "./ThemeToggle";

export default function Recepcao({ progress = 0 }) {
  return (
    <section
      id="recepcao"
      className="section relative flex h-screen snap-start items-center overflow-y-auto"
    >
      <SkyScene
        progress={progress}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <ThemeToggle className="absolute top-6 right-6 z-10 bg-bg/60 backdrop-blur" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <p className="font-mono text-sm tracking-widest text-teal uppercase">
            Seja bem-vindo
          </p>
          <h1 className="font-display gradient-text mt-4 text-4xl font-bold sm:text-5xl">
            Portfólio
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Estudante de Análise e Desenvolvimento de Sistemas, construindo
            projetos e aprendendo um pouco mais a cada dia. Fique à vontade
            pra conhecer meu trabalho.
          </p>
        </div>
      </div>
    </section>
  );
}
