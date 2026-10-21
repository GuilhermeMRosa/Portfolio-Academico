import { useState } from "react";
import { Download } from "lucide-react";
import Modal from "./Modal";
import { certificados } from "../data/content";

export default function Certificados() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section
      id="certificados"
      className="section flex h-screen snap-start items-center overflow-y-auto bg-bg-alt"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
          <span className="h-6 w-1.5 rounded-full bg-violet" />
          Certificados
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certificados.map((cert) => (
            <button
              key={cert.titulo}
              type="button"
              onClick={() => setSelecionado(cert)}
              className="group text-left"
            >
              <div className="aspect-4/3 w-full overflow-hidden rounded-xl border border-border">
                <img
                  src={cert.imagem}
                  alt={`Certificado — ${cert.titulo}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-teal transition-colors group-hover:text-text">
                {cert.titulo}
              </h3>
            </button>
          ))}
        </div>
      </div>

      <Modal open={!!selecionado} onClose={() => setSelecionado(null)}>
        {selecionado && (
          <>
            <img
              src={selecionado.imagem}
              alt={`Certificado — ${selecionado.titulo}`}
              className="aspect-4/3 w-full rounded border border-border object-cover"
            />
            <h3 className="mt-6 font-display text-2xl font-bold">
              {selecionado.titulo}
            </h3>
            <a
              href={selecionado.pdf}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet px-5 py-2 font-medium text-violet transition-colors hover:border-pop hover:text-pop"
            >
              <Download size={16} />
              Baixar certificado
            </a>
          </>
        )}
      </Modal>
    </section>
  );
}
