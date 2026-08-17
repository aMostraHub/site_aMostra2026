/* =====================================================================
   CRONOGRAMA DA aMOSTRA XIX  —  dados + renderização + pop-up
   ---------------------------------------------------------------------
   COMO ATUALIZAR (é só editar o array CRONOGRAMA abaixo):
   • Cada objeto de "dias" tem: rotulo (aba curta), data e uma lista "sessoes".
   • Cada sessão de PALESTRA abre um pop-up. Preencha:
       - titulo, resumo (frase curta do card), local, descricao (texto do pop-up)
       - palestrante: { nome, cargo, foto, bio, redes }
   • Fotos e redes podem ficar vazias ("") — o site coloca um avatar/oculta sozinho.
       foto ex.:  "styles/palestrantes/fulano.avif"
       redes:     instagram, linkedin, site, lattes, youtube, email  (só preencher os que tiver)
   • Sessões SEM palestrante (ex.: Coffee Break, Almoço, Abertura) viram
     linhas simples, sem pop-up. Basta usar tipo: "Intervalo".
   • Tipos aceitos (definem cor/ícone): Palestra, Minicurso, Mesa-redonda,
     Cerimônia, Intervalo.  (qualquer outro cai no estilo padrão)
   ===================================================================== */

window.CRONOGRAMA = [
  {
    rotulo: "Seg",
    data: "28/09",
    diaSemana: "Segunda-feira",
    sessoes: [
      {
        horario: "19h00",
        tipo: "Cerimônia",
        titulo: "Cerimônia de Abertura",
        resumo: "Boas-vindas e apresentação da XIX edição da aMostra.",
        local: "Auditório Jacy Monteiro — IME-USP",
        descricao:
          "Abertura oficial da aMostra de Estatística XIX. Preencha aqui a descrição completa da cerimônia quando as informações estiverem definidas.",
        palestrante: null
      },
      {
        horario: "19h30",
        tipo: "Palestra",
        titulo: "Palestra de Abertura (a definir)",
        resumo: "Uma frase curta de chamada que aparece no card.",
        local: "Auditório Jacy Monteiro — IME-USP",
        descricao:
          "Descrição completa da palestra: tema, objetivos, tópicos abordados e para quem é indicada. Substitua este texto quando tiver as informações.",
        palestrante: {
          nome: "Nome do palestrante",
          cargo: "Cargo · Instituição",
          foto: "", // vazio => avatar genérico
          bio:
            "Mini-biografia do palestrante: formação, atuação, principais trabalhos e áreas de interesse.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      }
    ]
  },
  {
    rotulo: "Ter",
    data: "29/09",
    diaSemana: "Terça-feira",
    sessoes: [
      {
        horario: "09h00",
        tipo: "Palestra",
        titulo: "Palestra (a definir)",
        resumo: "Resumo curto da atividade.",
        local: "A definir",
        descricao: "Descrição completa da palestra. Preencha quando tiver as informações.",
        palestrante: {
          nome: "Nome do palestrante",
          cargo: "Cargo · Instituição",
          foto: "",
          bio: "Mini-biografia do palestrante.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null },
      {
        horario: "11h00",
        tipo: "Minicurso",
        titulo: "Minicurso (a definir)",
        resumo: "Atividade prática, com vagas limitadas.",
        local: "A definir",
        descricao: "Descrição do minicurso: pré-requisitos, ementa e materiais necessários.",
        palestrante: {
          nome: "Ministrante",
          cargo: "Cargo · Instituição",
          foto: "",
          bio: "Mini-biografia do ministrante.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "12h30", tipo: "Intervalo", titulo: "Almoço", palestrante: null }
    ]
  },
  {
    rotulo: "Qua",
    data: "30/09",
    diaSemana: "Quarta-feira",
    sessoes: [
      {
        horario: "09h00",
        tipo: "Mesa-redonda",
        titulo: "Mesa-redonda (a definir)",
        resumo: "Debate entre convidados sobre um tema atual da área.",
        local: "A definir",
        descricao: "Descrição da mesa-redonda: tema central e pontos de discussão.",
        palestrante: {
          nome: "Convidados",
          cargo: "Participantes da mesa",
          foto: "",
          bio: "Apresente aqui os participantes da mesa-redonda.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null }
    ]
  },
  {
    rotulo: "Qui",
    data: "01/10",
    diaSemana: "Quinta-feira",
    sessoes: [
      {
        horario: "09h00",
        tipo: "Palestra",
        titulo: "Palestra (a definir)",
        resumo: "Resumo curto da atividade.",
        local: "A definir",
        descricao: "Descrição completa da palestra. Preencha quando tiver as informações.",
        palestrante: {
          nome: "Nome do palestrante",
          cargo: "Cargo · Instituição",
          foto: "",
          bio: "Mini-biografia do palestrante.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      { horario: "10h30", tipo: "Intervalo", titulo: "Coffee Break", palestrante: null }
    ]
  },
  {
    rotulo: "Sex",
    data: "02/10",
    diaSemana: "Sexta-feira",
    sessoes: [
      {
        horario: "09h00",
        tipo: "Palestra",
        titulo: "Palestra de Encerramento (a definir)",
        resumo: "Grande palestra de fechamento do evento.",
        local: "A definir",
        descricao: "Descrição completa da palestra de encerramento.",
        palestrante: {
          nome: "Nome do palestrante",
          cargo: "Cargo · Instituição",
          foto: "",
          bio: "Mini-biografia do palestrante.",
          redes: { instagram: "", linkedin: "", site: "", lattes: "", youtube: "", email: "" }
        }
      },
      {
        horario: "11h00",
        tipo: "Cerimônia",
        titulo: "Cerimônia de Encerramento",
        resumo: "Agradecimentos e encerramento da aMostra XIX.",
        local: "A definir",
        descricao: "Encerramento oficial do evento.",
        palestrante: null
      }
    ]
  }
];

/* ============================ (motor — não precisa mexer) ============================ */
(function () {
  "use strict";

  // Metadados visuais por tipo de sessão.
  const TIPOS = {
    "Palestra":     { icone: "fa-microphone",      cor: "bg-red-700",  clara: "bg-red-50 text-red-800 border-red-100" },
    "Minicurso":    { icone: "fa-laptop",          cor: "bg-red-800",  clara: "bg-amber-50 text-amber-800 border-amber-100" },
    "Mesa-redonda": { icone: "fa-users",           cor: "bg-red-600",  clara: "bg-red-50 text-red-800 border-red-100" },
    "Cerimônia":    { icone: "fa-star",            cor: "bg-gold-deep",clara: "bg-amber-50 text-amber-800 border-amber-100" },
    "Intervalo":    { icone: "fa-coffee",          cor: "bg-gray-300", clara: "bg-gray-100 text-gray-500 border-gray-200" }
  };
  const TIPO_PADRAO = { icone: "fa-calendar", cor: "bg-red-700", clara: "bg-red-50 text-red-800 border-red-100" };
  const meta = (t) => TIPOS[t] || TIPO_PADRAO;

  // Ícones das redes sociais (Font Awesome 4, já carregado no site).
  const REDES = {
    instagram: { icone: "fa-instagram",     rotulo: "Instagram" },
    linkedin:  { icone: "fa-linkedin",      rotulo: "LinkedIn"  },
    site:      { icone: "fa-globe",         rotulo: "Website"   },
    lattes:    { icone: "fa-graduation-cap",rotulo: "Lattes"    },
    youtube:   { icone: "fa-youtube-play",  rotulo: "YouTube"   },
    email:     { icone: "fa-envelope",      rotulo: "E-mail"    }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
  function href(rede, valor) {
    if (!valor) return "";
    if (rede === "email") return "mailto:" + valor;
    return /^https?:\/\//i.test(valor) ? valor : "https://" + valor;
  }

  function redesHTML(redes) {
    if (!redes) return "";
    const itens = Object.keys(REDES)
      .filter((k) => redes[k])
      .map((k) => {
        const r = REDES[k];
        return `<a href="${esc(href(k, redes[k]))}" target="_blank" rel="noreferrer"
          class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-red-700 hover:text-white transition-colors"
          title="${r.rotulo}" aria-label="${r.rotulo}"><i class="fa ${r.icone}"></i></a>`;
      });
    if (!itens.length) return "";
    return `<div class="flex flex-wrap gap-2 mt-4">${itens.join("")}</div>`;
  }

  // ---- Modal (criado uma vez e reaproveitado) ----
  let modalEl = null;
  function garantirModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.id = "modal-cronograma";
    modalEl.className = "hidden fixed inset-0 z-[60] flex items-center justify-center p-4";
    modalEl.innerHTML = `
      <div data-fechar class="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"></div>
      <div class="relative z-10 bg-white rounded-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-neutral-100"
           role="dialog" aria-modal="true" aria-labelledby="modal-cron-titulo">
        <div class="p-6 sm:p-7" id="modal-cron-conteudo"></div>
      </div>`;
    document.body.appendChild(modalEl);
    modalEl.querySelector("[data-fechar]").addEventListener("click", fecharModal);
    return modalEl;
  }
  function abrirModal(s) {
    const m = garantirModal();
    const t = meta(s.tipo);
    const p = s.palestrante;
    const foto = p && p.foto
      ? `<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-cover">`
      : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white text-2xl"><i class="fa fa-user"></i></div>`;

    const palestranteBloco = p ? `
      <div class="mt-6 pt-6 border-t border-gray-100">
        <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400">Palestrante</span>
        <div class="flex items-start gap-4 mt-3">
          <div class="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-gold/40 bg-gray-100">${foto}</div>
          <div class="min-w-0">
            <h4 class="font-spartan text-lg font-bold text-gray-900 leading-tight">${esc(p.nome)}</h4>
            ${p.cargo ? `<p class="text-sm text-red-700 font-medium">${esc(p.cargo)}</p>` : ""}
          </div>
        </div>
        ${p.bio ? `<p class="text-sm text-gray-600 leading-relaxed mt-4">${esc(p.bio)}</p>` : ""}
        ${redesHTML(p.redes)}
      </div>` : "";

    m.querySelector("#modal-cron-conteudo").innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-4">
        <span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${t.clara}">
          <i class="fa ${t.icone}"></i> ${esc(s.tipo || "Atividade")}
        </span>
        <button data-fechar class="text-neutral-400 hover:text-neutral-700 p-1 -mr-1 rounded-lg hover:bg-neutral-100 transition" aria-label="Fechar">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <h3 id="modal-cron-titulo" class="font-spartan text-2xl font-black text-gray-900 leading-tight">${esc(s.titulo)}</h3>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 text-sm text-gray-500">
        ${s.horario ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-clock-o text-gold-deep"></i> ${esc(s.horario)}</span>` : ""}
        ${s.local ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-map-marker text-gold-deep"></i> ${esc(s.local)}</span>` : ""}
      </div>
      ${s.descricao ? `<p class="text-gray-600 leading-relaxed mt-5">${esc(s.descricao)}</p>` : ""}
      ${palestranteBloco}`;

    m.querySelectorAll("[data-fechar]").forEach((b) => b.addEventListener("click", fecharModal));
    m.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
  function fecharModal() {
    if (!modalEl) return;
    modalEl.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl && !modalEl.classList.contains("hidden")) fecharModal();
  });

  // ---- Render de abas + lista ----
  function cardSessao(s) {
    const t = meta(s.tipo);
    const clicavel = !!(s.palestrante || (s.descricao && s.tipo !== "Intervalo"));
    const isIntervalo = s.tipo === "Intervalo";

    const p = s.palestrante;
    const wrap = document.createElement(clicavel ? "button" : "div");
    if (clicavel) { wrap.type = "button"; }
    wrap.className =
      "w-full text-left flex items-center gap-4 rounded-xl border p-4 transition-all " +
      (isIntervalo
        ? "bg-gray-50 border-gray-100"
        : "bg-white border-gray-100 shadow-sm" +
          (clicavel ? " relative group hover:shadow-md hover:-translate-y-0.5 hover:border-gold/40 hover:z-20 cursor-pointer" : ""));

    // Mini-avatar para o popover de hover.
    const fotoMini = p && p.foto
      ? `<img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" class="w-full h-full object-cover">`
      : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white"><i class="fa fa-user"></i></div>`;

    // Popover que aparece ao passar o mouse (desktop) — no clique/celular abre o modal completo.
    const popover = clicavel ? `
      <div class="absolute left-2 right-2 top-full mt-2 z-30 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-4 text-left">
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
          ${s.horario ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-clock-o text-gold-deep"></i> ${esc(s.horario)}</span>` : ""}
          ${s.local ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-map-marker text-gold-deep"></i> ${esc(s.local)}</span>` : ""}
        </div>
        ${s.descricao ? `<p class="text-sm text-gray-600 leading-relaxed line-clamp-3">${esc(s.descricao)}</p>` : ""}
        ${p ? `<div class="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
            <div class="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-gold/40 bg-gray-100">${fotoMini}</div>
            <div class="min-w-0">
              <p class="text-sm font-bold text-gray-900 leading-tight truncate">${esc(p.nome)}</p>
              ${p.cargo ? `<p class="text-xs text-red-700 truncate">${esc(p.cargo)}</p>` : ""}
            </div>
          </div>` : ""}
        <p class="mt-3 text-[11px] font-bold uppercase tracking-wider text-red-700">Clique para ver tudo &rarr;</p>
      </div>` : "";

    wrap.innerHTML = `
      <div class="flex-shrink-0 w-16 text-center">
        <span class="font-spartan font-bold ${isIntervalo ? "text-gray-400" : "text-red-700"} tabular-nums">${esc(s.horario || "")}</span>
      </div>
      <span class="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${t.cor} text-white">
        <i class="fa ${t.icone}"></i>
      </span>
      <div class="min-w-0 flex-grow">
        <p class="font-semibold ${isIntervalo ? "text-gray-500" : "text-gray-900"} leading-snug">${esc(s.titulo)}</p>
        ${s.palestrante && s.palestrante.nome ? `<p class="text-sm text-gray-500 truncate">${esc(s.palestrante.nome)}</p>`
          : (s.resumo && !isIntervalo ? `<p class="text-sm text-gray-500 truncate">${esc(s.resumo)}</p>` : "")}
      </div>
      ${clicavel ? `<i class="fa fa-chevron-right text-gray-300 flex-shrink-0"></i>` : ""}
      ${popover}`;

    if (clicavel) wrap.addEventListener("click", () => abrirModal(s));
    return wrap;
  }

  function render(indiceDia, refs) {
    const dia = window.CRONOGRAMA[indiceDia];
    // abas
    refs.tabs.innerHTML = "";
    window.CRONOGRAMA.forEach((d, i) => {
      const b = document.createElement("button");
      b.type = "button";
      const ativo = i === indiceDia;
      b.className =
        "px-4 py-2 rounded-full text-sm font-montserrat font-semibold transition-colors border " +
        (ativo
          ? "bg-red-700 text-white border-red-700 shadow-sm"
          : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-700");
      b.innerHTML = `${esc(d.rotulo)} <span class="opacity-70 font-normal">${esc(d.data)}</span>`;
      b.addEventListener("click", () => render(i, refs));
      refs.tabs.appendChild(b);
    });
    // lista
    refs.lista.innerHTML = "";
    if (!dia || !dia.sessoes || !dia.sessoes.length) {
      refs.vazio.classList.remove("hidden");
      return;
    }
    refs.vazio.classList.add("hidden");
    dia.sessoes.forEach((s) => refs.lista.appendChild(cardSessao(s)));
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("cronograma-lista");
    if (!lista || !Array.isArray(window.CRONOGRAMA)) return;
    const refs = {
      tabs: document.getElementById("cronograma-tabs"),
      lista: lista,
      vazio: document.getElementById("cronograma-vazio")
    };
    // Começa no dia atual do evento, se estiver rolando; senão, no primeiro dia.
    let inicio = 0;
    const hoje = new Date();
    window.CRONOGRAMA.forEach((d, i) => {
      const m = /(\d{2})\/(\d{2})/.exec(d.data || "");
      if (m && hoje.getDate() === +m[1] && (hoje.getMonth() + 1) === +m[2]) inicio = i;
    });
    render(inicio, refs);
  });
})();
