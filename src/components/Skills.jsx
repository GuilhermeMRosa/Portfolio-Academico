import { stackGroups } from "../data/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section flex h-screen snap-start items-center overflow-y-auto bg-bg-alt"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="font-display flex items-center justify-center gap-3 text-3xl font-bold">
          <span className="h-6 w-1.5 rounded-full bg-violet" />
          Minha stack
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stackGroups.map((grupo) => (
            <div
              key={grupo.nome}
              className="rounded-xl border border-border bg-bg p-6"
            >
              <div className="font-mono text-xs text-text-muted">
                {grupo.nome}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                {grupo.itens.map((item) => (
                  <div
                    key={item.nome}
                    className="flex min-w-0 items-center gap-3 rounded-lg border border-border bg-bg-alt p-3"
                  >
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-dashed border-text-muted/40 bg-gradient-to-br from-violet/30 to-teal/30">
                      <item.icon size={18} />
                    </div>
                    <span className="min-w-0 text-sm font-medium whitespace-nowrap">
                      {item.nome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
