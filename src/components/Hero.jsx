import { Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { curriculoPdf, email, socials } from "../data/content";

export default function Hero() {
  const github = socials.find((s) => s.icon === "github");
  const linkedin = socials.find((s) => s.icon === "linkedin");

  return (
    <section
      id="home"
      className="section relative flex h-screen snap-start items-center overflow-x-hidden overflow-y-auto"
    >
      <div
        className="pointer-events-none absolute top-16 -left-32 h-[520px] w-[520px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,.28), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-48 -right-24 h-[460px] w-[460px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(14,116,144,.28), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-16 px-6 py-24 sm:flex-row sm:justify-between">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-pop" />
            procurando estágio em backend
          </div>

          <h1 className="font-display gradient-text mt-6 text-4xl font-bold sm:text-5xl">
            Guilherme de Moraes Rosa
          </h1>
          <h2 className="mt-2 font-display text-xl font-semibold text-teal">
            Desenvolvedor Full Stack em formação
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Curso Análise e Desenvolvimento de Sistemas na Fatec São José dos
            Campos, com uma base construída ao longo dos semestres em HTML,
            CSS, Python, Java e JavaScript, além de TypeScript e React. Sou
            estagiário de desenvolvimento web na Agência Wiks e busco me
            aprofundar cada vez mais, com foco em me tornar um desenvolvedor
            full stack. Tenho interesse nas áreas de dados, cibersegurança e
            desenvolvimento de jogos.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href={github?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-pop"
            >
              <GithubIcon width={20} height={20} />
              GitHub
            </a>
            <a
              href={linkedin?.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-pop"
            >
              <LinkedinIcon width={20} height={20} />
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-text-muted transition-colors hover:text-pop"
            >
              <Mail size={20} />
              E-mail
            </a>
            <a
              href={curriculoPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet px-4 py-1.5 font-medium text-sm text-violet transition-colors hover:border-pop hover:text-pop"
            >
              <Download size={16} />
              Currículo
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[280px] flex-none sm:max-w-[320px]">
          <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-xl bg-gradient-to-br from-violet to-teal opacity-90" />
          <img
            src="/Static/foto_pessoal.jpg"
            alt="Foto de Guilherme de Moraes Rosa"
            className="relative aspect-4/5 w-full rounded-xl border border-border object-cover"
          />
          <p className="font-hand absolute -bottom-9 -left-4 -rotate-6 text-2xl font-semibold text-pop">
            (sim, sou eu mesmo)
          </p>
        </div>
      </div>
    </section>
  );
}
