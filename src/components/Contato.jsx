import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons/BrandIcons";
import { email, socials } from "../data/content";

const icons = { github: GithubIcon, linkedin: LinkedinIcon, instagram: InstagramIcon };

export default function Contato() {
  return (
    <footer
      id="contato"
      className="flex h-screen snap-start flex-col justify-center overflow-y-auto border-t border-border bg-bg-header"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="font-display flex items-center gap-3 text-3xl font-bold">
          <span className="h-6 w-1.5 rounded-full bg-violet" />
          Vamos conversar
        </h2>
        <p className="mt-2 flex items-center gap-2 text-text-muted">
          <Mail size={18} />
          {email}
        </p>

        <form className="mt-8 grid max-w-xl gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Nome"
            className="rounded border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus:border-violet focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="rounded border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus:border-violet focus:outline-none"
          />
          <textarea
            placeholder="Mensagem"
            rows={4}
            className="rounded border border-border bg-bg px-4 py-3 text-text placeholder:text-text-muted focus:border-violet focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-pop px-6 py-3 font-bold text-pop-ink transition-opacity hover:opacity-90"
          >
            <Send size={16} />
            Enviar
          </button>
        </form>

        <div className="mt-10 flex gap-5">
          {socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-text-muted transition-colors hover:text-pop"
              >
                <Icon width={26} height={26} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
