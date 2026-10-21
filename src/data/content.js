import {
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiFlask,
  SiGit,
  SiGithub,
  SiScrumalliance,
} from "react-icons/si";

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#projetos", label: "Projetos" },
  { href: "#certificados", label: "Certificados" },
  { href: "#skills", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export const projetos = [
  {
    titulo: "SIRAAS",
    subtitulo: "Sistema de Registro de Atestados e Avaliação Scrum",
    ano: "2025",
    status: "concluído",
    imagens: ["/Static/logo_sirass.jpg"],
    resumo:
      "Gestão de atestados médicos e avaliação de equipes Scrum para instituições de ensino e pequenas empresas.",
    descricao:
      "Sistema web voltado para o gerenciamento de atestados médicos e a avaliação de equipes Scrum, desenvolvido para atender instituições de ensino e pequenas empresas. Minha principal contribuição foi a criação da página de gerenciamento de atestados, tanto para alunos quanto para docentes. Atuei principalmente no backend, utilizando HTML, Python e o microframework Flask para desenvolver a tabela de atestados e implementar o sistema de filtro de pesquisa.",
    stack: ["Python", "Flask", "HTML"],
    link: "https://github.com/Gabrielle0905/SIRAAS",
  },
  {
    titulo: "Sphera",
    subtitulo: "Gestão de PDIs em equipe",
    ano: "2025",
    status: "concluído",
    imagens: ["/Static/Sphera Logo.png"],
    resumo:
      "Apoio a empresas na gestão e análise de Planos de Desenvolvimento Individual (PDIs), com relatórios e indicadores.",
    descricao:
      "Projeto acadêmico desenvolvido em equipe na FATEC São José dos Campos, utilizando Java e princípios do Scrum. A aplicação apoia empresas na gestão, acompanhamento e análise de PDIs, fornecendo relatórios e indicadores para gestores e equipes de RH. Atuei na integração do banco de dados com o sistema em Java, além de contribuir na implementação de funcionalidades-chave e revisão do código em equipe.",
    stack: ["Java", "Scrum"],
    link: "https://github.com/Minerva2025/Minerva",
  },
  {
    titulo: "DM Insight",
    subtitulo: "Análise de crédito sustentável",
    ano: "2026",
    status: "concluído",
    imagens: ["/Static/DM Insight Logo.jpg"],
    resumo:
      "Análises de dados sobre indicadores de crédito sustentável, com rotas de backend e frontend integrados.",
    descricao:
      "Projeto acadêmico em equipe (time Minerva) com análises de dados em Python e Pandas (Google Colab) para avaliação de indicadores de crédito sustentável. O backend tem rotas em Node.js, integradas ao frontend em React e TypeScript via hooks.",
    stack: ["Python", "Pandas", "Node.js", "React"],
    link: "https://github.com/TeamMinerva/DM-API",
  },
  {
    titulo: "Pro4Tech",
    subtitulo: "Base de conhecimento para Product Owners",
    ano: "2026",
    status: "em andamento",
    imagens: ["/Static/Pro4Tech Logo.png"],
    resumo:
      "Sistema de base de conhecimento sobre projetos e desenvolvedores, com apoio de IA, para evitar retrabalho.",
    descricao:
      "Sistema de base de conhecimento sobre projetos e desenvolvedores, desenvolvido em equipe para apoiar Product Owners: cadastra projetos, épicos, features e PBIs, e usa IA para chat contextualizado, projetos semelhantes e análise do cadastro — sem nunca decidir pelo PO. Minha contribuição foi nos merges e na integração do cadastro de projeto.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://github.com/TeamMinerva/PRO4TECH-API",
  },
];

export const certificados = [
  {
    titulo: "Curso Básico de Git — Cursa",
    imagem: "/Static/Certificado Do GIT.png",
    pdf: "/Static/Certificado Do GIT.pdf",
  },
  {
    titulo: "Curso Modelagem de Dados — Fundação Bradesco",
    imagem: "/Static/Modelagem de Dados - Fundação Bradesco.jpg",
    pdf: "/Static/Modelagem de Dados - Fundação Bradesco.pdf",
  },
  {
    titulo: "Voluntariado — DevFest SJC 2025",
    imagem: "/Static/DevFest SJC 2025 PNG.png",
    pdf: "/Static/DevFest SJC 2025.pdf",
  },
  {
    titulo: "Voluntariado — CDIO Latin America Meeting",
    imagem: "/Static/CDIO Latin America Meeting 2025.jpg",
    pdf: "/Static/CDIO Latin America Meeting 2025.pdf",
  },
];

export const stackGroups = [
  {
    nome: "// linguagens",
    itens: [
      { nome: "Python", icon: SiPython },
      { nome: "Java", icon: SiOpenjdk },
      { nome: "JavaScript", icon: SiJavascript },
      { nome: "HTML5", icon: SiHtml5 },
      { nome: "CSS3", icon: SiCss },
    ],
  },
  {
    nome: "// frameworks e dados",
    itens: [
      { nome: "React", icon: SiReact },
      { nome: "Flask", icon: SiFlask },
    ],
  },
  {
    nome: "// ferramentas",
    itens: [
      { nome: "Git", icon: SiGit },
      { nome: "GitHub", icon: SiGithub },
      { nome: "Scrum", icon: SiScrumalliance },
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/GuilhermeMRosa", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/guilherme-rosa-b59527359/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/guilherme.rozza/",
    icon: "instagram",
  },
];

export const email = "guilhermemoraesrosa7@gmail.com";
export const curriculoPdf = "/Static/Currículo - Guilherme de Moraes Rosa.pdf";
