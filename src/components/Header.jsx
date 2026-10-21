import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function Header({ visible }) {
  const [open, setOpen] = useState(false);

  function handleClick(e, href) {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-border bg-bg-header/80 backdrop-blur transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-5 sm:py-6">
        <nav className="hidden flex-wrap items-center justify-end gap-6 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-medium text-text-muted transition-colors hover:text-pop"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="text-text"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col items-end gap-4 border-t border-border px-6 py-6 sm:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-base font-medium text-text-muted transition-colors hover:text-pop"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
