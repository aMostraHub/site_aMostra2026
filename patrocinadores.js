/* =====================================================================
   PATROCINADORES / PARCEIROS DA aMOSTRA XIX — dados + grade + pop-up
   ---------------------------------------------------------------------
   COMO ATUALIZAR (é só editar o array PATROCINADORES abaixo):
   • Os parceiros são agrupados por "categoria" (Realização, Patrocinadores,
     Apoio…). Crie/renomeie categorias à vontade.
   • Cada empresa tem:
       - nome        : nome exibido
       - logo        : caminho do logo (relativo à página, ex.: "../logos/c6.png")
       - descricao   : texto que aparece no pop-up (deixe "" enquanto não tiver)
       - site        : link do site oficial (opcional)
       - redes       : { instagram, linkedin, facebook, youtube, twitter, email }
                       preencha só as que existirem; o resto pode ficar "".
   • Todo card abre pop-up. Enquanto a descrição estiver vazia, o pop-up
     mostra "Mais informações em breve" — basta preencher depois.
   ===================================================================== */

window.PATROCINADORES = [
  {
    categoria: "Realização",
    empresas: [
      {
        nome: "IME-USP",
        logo: "../logos/ime.png",
        descricao:
          "Instituto de Matemática e Estatística da Universidade de São Paulo, onde a aMostra é realizada. Referência nacional em ensino e pesquisa nas áreas de Matemática, Estatística e Ciência da Computação.",
        site: "https://www.ime.usp.br",
        redes: { instagram: "", linkedin: "", facebook: "", youtube: "", twitter: "", email: "" }
      },
      {
        nome: "IME Júnior",
        logo: "../logos/imejr.png",
        descricao:
          "A IME Júnior é a empresa júnior de tecnologia, estatística e matemática aplicada do Instituto de Matemática e Estatística da USP. Formada inteiramente por estudantes, desenvolve projetos reais de software, análise de dados e consultoria estatística com o suporte do corpo docente da universidade.",
        site: "https://imejr.com.br/",
        redes: { instagram: "", linkedin: "", facebook: "", youtube: "", twitter: "", email: "" }
      }
    ]
  },
  {
    categoria: "Patrocinadores",
    empresas: [
      { nome: "C6 Bank",              logo: "../logos/c6.png",       descricao: "", site: "", redes: {} },
      { nome: "Casio",               logo: "../logos/casio.png",    descricao: "", site: "", redes: {} },
      { nome: "Management Solutions", logo: "../logos/ms.jpg",       descricao: "", site: "", redes: {} },
      { nome: "Santander",           logo: "../logos/santander.png",descricao: "", site: "", redes: {} },
      { nome: "Quod",                logo: "../logos/quod.png",     descricao: "", site: "", redes: {} },
      { nome: "Insper",              logo: "../logos/insper.png",   descricao: "", site: "", redes: {} },
      { nome: "FGV EMAp",            logo: "../logos/fgvemap.png",  descricao: "", site: "", redes: {} },
      { nome: "SPG",                 logo: "../logos/spg.png",      descricao: "", site: "", redes: {} }
    ]
  },
  {
    categoria: "Apoio",
    empresas: [
      { nome: "CONRE-3",  logo: "../logos/conre.jpg", descricao: "", site: "", redes: {} },
      { nome: "Edusp",    logo: "../logos/edusp.png", descricao: "", site: "", redes: {} },
      { nome: "Associação Brasileira de Estatística (ABE)", logo: "../logos/abe.png", descricao: "", site: "", redes: {} }
    ]
  }
];

/* ============================ (motor — não precisa mexer) ============================ */
(function () {
  "use strict";

  const REDES = {
    instagram: { icone: "fa-instagram", rotulo: "Instagram" },
    linkedin:  { icone: "fa-linkedin",  rotulo: "LinkedIn"  },
    facebook:  { icone: "fa-facebook",  rotulo: "Facebook"  },
    youtube:   { icone: "fa-youtube-play", rotulo: "YouTube" },
    twitter:   { icone: "fa-twitter",   rotulo: "Twitter / X" },
    email:     { icone: "fa-envelope",  rotulo: "E-mail"    }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
  function url(v, email) {
    if (!v) return "";
    if (email) return "mailto:" + v;
    return /^https?:\/\//i.test(v) ? v : "https://" + v;
  }
  function temRedes(r) { return r && Object.keys(REDES).some((k) => r[k]); }

  function redesHTML(redes) {
    if (!temRedes(redes)) return "";
    const itens = Object.keys(REDES)
      .filter((k) => redes[k])
      .map((k) => {
        const r = REDES[k];
        return `<a href="${esc(url(redes[k], k === "email"))}" target="_blank" rel="noreferrer"
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-500 hover:bg-red-700 hover:text-white transition-colors"
          title="${r.rotulo}" aria-label="${r.rotulo}"><i class="fa ${r.icone} text-lg"></i></a>`;
      });
    return `<div class="flex flex-wrap gap-2 mt-5">${itens.join("")}</div>`;
  }

  // ---- Modal reaproveitável ----
  let modalEl = null;
  function garantirModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.id = "modal-patrocinador";
    modalEl.className = "hidden fixed inset-0 z-[60] flex items-center justify-center p-4";
    modalEl.innerHTML = `
      <div data-fechar class="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"></div>
      <div class="relative z-10 bg-white rounded-2xl max-w-md w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-neutral-100"
           role="dialog" aria-modal="true" aria-labelledby="modal-patro-titulo">
        <div class="p-6 sm:p-7" id="modal-patro-conteudo"></div>
      </div>`;
    document.body.appendChild(modalEl);
    modalEl.querySelector("[data-fechar]").addEventListener("click", fecharModal);
    return modalEl;
  }
  function abrirModal(e) {
    const m = garantirModal();
    const site = e.site
      ? `<a href="${esc(url(e.site))}" target="_blank" rel="noreferrer"
           class="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm">
           Visitar site <i class="fa fa-external-link"></i></a>`
      : "";
    const redes = redesHTML(e.redes);
    const rodape =
      site || redes
        ? `<div class="mt-6 pt-5 border-t border-neutral-100">${site}${redes}</div>`
        : "";

    m.querySelector("#modal-patro-conteudo").innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="h-14 flex items-center">
          <img src="${esc(e.logo)}" alt="${esc(e.nome)}" class="max-h-14 max-w-[180px] object-contain">
        </div>
        <button data-fechar class="text-neutral-400 hover:text-neutral-700 p-1 -mr-1 rounded-lg hover:bg-neutral-100 transition" aria-label="Fechar">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <h3 id="modal-patro-titulo" class="text-xl font-bold text-neutral-900 mb-2 font-spartan">${esc(e.nome)}</h3>
      <p class="text-sm text-neutral-600 leading-relaxed">${
        e.descricao ? esc(e.descricao) : "Mais informações sobre este parceiro em breve."
      }</p>
      ${rodape}`;

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

  // ---- Render da grade ----
  function cardEmpresa(e, destaque) {
    const b = document.createElement("button");
    b.type = "button";
    b.className =
      "group relative bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center overflow-hidden " +
      (destaque ? "h-44 p-8 " : "h-36 p-6 ") +
      "hover:shadow-xl hover:-translate-y-1.5 hover:border-gold/40 transition-all duration-300 cursor-pointer";
    b.innerHTML = `
      <img src="${esc(e.logo)}" alt="${esc(e.nome)}"
        class="${destaque ? "max-h-20" : "max-h-16"} max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition duration-300">
      <span class="absolute inset-x-0 bottom-0 py-2 text-[11px] font-montserrat font-bold uppercase tracking-wider text-red-700 bg-gradient-to-t from-white via-white/95 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        Saiba mais <i class="fa fa-arrow-right ml-0.5"></i>
      </span>`;
    b.addEventListener("click", () => abrirModal(e));
    return b;
  }

  function render(mount) {
    mount.innerHTML = "";
    window.PATROCINADORES.forEach((grupo) => {
      if (!grupo.empresas || !grupo.empresas.length) return;
      // Grupos pequenos (ex.: Realização) ganham cards maiores e centralizados.
      const destaque = grupo.empresas.length <= 2;
      const sec = document.createElement("div");
      sec.className = "mb-14";
      sec.innerHTML = `
        <div class="text-center mb-8">
          <span class="inline-flex items-center gap-3 text-red-700">
            <span class="h-px w-8 bg-gold"></span>
            <span class="eyebrow">${esc(grupo.categoria)}</span>
            <span class="h-px w-8 bg-gold"></span>
          </span>
        </div>`;
      const grid = document.createElement("div");
      grid.className = destaque
        ? "grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto"
        : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5";
      grupo.empresas.forEach((e) => grid.appendChild(cardEmpresa(e, destaque)));
      sec.appendChild(grid);
      mount.appendChild(sec);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("patrocinadores-lista");
    if (mount && Array.isArray(window.PATROCINADORES)) render(mount);
  });
})();
