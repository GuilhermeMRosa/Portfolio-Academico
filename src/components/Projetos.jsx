import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import Carousel from "./Carousel";
import Modal from "./Modal";
import { projetos } from "../data/content";

export default function Projetos() {
  const [selecionado, setSelecionado] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  function cardStep() {
    const track = trackRef.current;
    const card = track?.querySelector("[data-card]");
    return card ? card.offsetWidth + 32 : 320;
  }

  function scrollByCard(dir) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  }

  function scrollToIndex(index) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * cardStep(), behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / cardStep()));
  }

  return (
    <section
      id="projetos"
      className="section flex h-screen snap-start items-center overflow-y-auto"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="flex items-center justify-between">
          <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
            <span className="h-6 w-1.5 rounded-full bg-violet" />
            Projetos
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Projeto anterior"
              className="rounded-full border border-border p-2 text-text-muted transition-colors hover:text-text"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Próximo projeto"
              className="rounded-full border border-border p-2 text-text-muted transition-colors hover:text-text"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-8 overflow-x-auto"
        >
          {projetos.map((projeto) => (
            <button
              key={projeto.titulo}
              type="button"
              data-card
              onClick={() => setSelecionado(projeto)}
              className="group w-72 flex-none snap-start text-left sm:w-80"
            >
              <div className="aspect-video w-full overflow-hidden rounded border border-border">
                {projeto.imagens[0] ? (
                  <img
                    src={projeto.imagens[0]}
                    alt={`Imagem do projeto ${projeto.titulo}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center font-mono text-xs text-text-muted"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, #141925 0 12px, #10141d 12px 24px)",
                    }}
                  >
                    [ sem imagem ]
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-text-muted">
                <span>{projeto.ano}</span>
                <span className="rounded-full border border-border px-2.5 py-1">
                  {projeto.status}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold text-teal transition-colors group-hover:text-text">
                {projeto.titulo}
              </h3>
              <p className="mt-1 text-text-muted">{projeto.resumo}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {projetos.map((projeto, index) => (
            <button
              key={projeto.titulo}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Ir para ${projeto.titulo}`}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-violet"
                  : "w-1.5 bg-text-muted/40"
              }`}
            />
          ))}
        </div>
      </div>

      <Modal open={!!selecionado} onClose={() => setSelecionado(null)}>
        {selecionado && (
          <>
            {selecionado.imagens.length > 0 ? (
              <Carousel
                images={selecionado.imagens}
                alt={`Imagens do projeto ${selecionado.titulo}`}
                className="aspect-video w-full rounded border border-border"
              />
            ) : (
              <div
                className="flex aspect-video w-full items-center justify-center rounded border border-border font-mono text-xs text-text-muted"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #141925 0 12px, #10141d 12px 24px)",
                }}
              >
                [ sem imagem ]
              </div>
            )}
            <h3 className="mt-6 font-display text-2xl font-bold">
              {selecionado.titulo}
            </h3>
            <p className="font-display text-sm font-semibold text-teal">
              {selecionado.subtitulo}
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              {selecionado.descricao}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-teal">
              {selecionado.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-teal/40 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={selecionado.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-medium text-violet transition-colors hover:text-pop"
            >
              <GithubIcon width={18} height={18} />
              Ver no GitHub
            </a>
          </>
        )}
      </Modal>
    </section>
  );
}
