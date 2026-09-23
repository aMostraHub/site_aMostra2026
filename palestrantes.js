/* =====================================================================
   PALESTRANTES DA aMOSTRA XIX — grade + pop-up (dados vêm do cronograma.js)
   ---------------------------------------------------------------------
   Não há dados próprios aqui: esta página lê window.CRONOGRAMA (definido
   em ../cronograma.js, incluído antes deste arquivo) e monta a grade de
   palestrantes acadêmicos automaticamente — assim o resumo de cada um só
   precisa ser mantido em um lugar só (o cronograma).
   • Só entram palestrantes SEM a marca "parceiro: true" (empresas
     patrocinadoras ficam de fora, elas já têm a página de Parceiros).
   • Quem aparece em mais de uma sessão (ex.: também na mesa-redonda)
     é listado uma única vez, na primeira aparição.
   ===================================================================== */

(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }
  // Os caminhos de foto no cronograma.js são relativos à raiz do site (uso
  // em index.html). Esta página vive em pages/, então soma "../" na frente.
  function fotoSrc(foto) {
    return foto ? "../" + foto : "";
  }

  // Lista única de { palestrante, sessao, dia }, sem repetir nomes nem
  // separar por dia — todo mundo entra no mesmo grid.
  function coletarPalestrantes() {
    const vistos = new Set();
    const pessoas = [];
    (window.CRONOGRAMA || []).forEach((dia) => {
      (dia.sessoes || []).forEach((sessao) => {
        const lista = sessao.palestrantes && sessao.palestrantes.length
          ? sessao.palestrantes
          : (sessao.palestrante ? [sessao.palestrante] : []);
        lista.forEach((p) => {
          if (!p || p.parceiro || vistos.has(p.nome)) return;
          vistos.add(p.nome);
          pessoas.push({ palestrante: p, sessao: sessao, dia: dia });
        });
      });
    });
    return pessoas;
  }

  // ---- Modal (foto grande + bio completa + redes + dados da palestra) ----
  let modalEl = null;
  function garantirModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.id = "modal-palestrante";
    modalEl.className = "hidden fixed inset-0 z-[60] flex items-center justify-center p-4";
    modalEl.innerHTML = `
      <div data-fechar class="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm"></div>
      <div class="relative z-10 bg-white rounded-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-neutral-100"
           role="dialog" aria-modal="true" aria-labelledby="modal-pal-titulo">
        <div class="p-6 sm:p-7" id="modal-pal-conteudo"></div>
      </div>`;
    document.body.appendChild(modalEl);
    modalEl.querySelector("[data-fechar]").addEventListener("click", fecharModal);
    return modalEl;
  }
  function fecharModal() {
    if (!modalEl) return;
    modalEl.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl && !modalEl.classList.contains("hidden")) fecharModal();
  });

  function abrirModal(p, sessao, dia) {
    const m = garantirModal();
    const foto = p.foto
      ? `<img src="${esc(fotoSrc(p.foto))}" alt="${esc(p.nome)}" loading="lazy" class="block w-full h-full object-cover object-center">`
      : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white text-3xl"><i class="fa fa-user"></i></div>`;
    const redes = typeof window.redesHTML === "function" ? window.redesHTML(p.redes) : "";

    m.querySelector("#modal-pal-conteudo").innerHTML = `
      <div class="flex items-start justify-between gap-4 mb-5">
        <div class="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-gold/40 bg-gray-100">${foto}</div>
        <button data-fechar class="text-neutral-400 hover:text-neutral-700 p-1 -mr-1 rounded-lg hover:bg-neutral-100 transition" aria-label="Fechar">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <h3 id="modal-pal-titulo" class="font-spartan text-2xl font-black text-gray-900 leading-tight">${esc(p.nome)}</h3>
      ${p.cargo ? `<p class="text-sm text-red-700 font-semibold mt-1">${esc(p.cargo)}</p>` : ""}
      ${p.bio ? `<p class="text-gray-600 leading-relaxed mt-5">${esc(p.bio)}</p>` : ""}
      ${redes}
      <div class="mt-6 pt-6 border-t border-gray-100">
        <span class="text-[11px] font-bold uppercase tracking-wider text-gray-400">Palestra na aMostra</span>
        <h4 class="font-spartan text-base font-bold text-gray-900 leading-snug mt-2">${esc(sessao.titulo || "")}</h4>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
          <span class="inline-flex items-center gap-1.5"><i class="fa fa-calendar text-gold-deep"></i> ${esc(dia.diaSemana || dia.rotulo || "")} (${esc(dia.data || "")})</span>
          ${sessao.horario ? `<span class="inline-flex items-center gap-1.5"><i class="fa fa-clock-o text-gold-deep"></i> ${esc(sessao.horario)}</span>` : ""}
        </div>
        <a href="../index.html#cronograma" class="inline-flex items-center gap-2 mt-4 text-sm font-bold text-red-700 hover:text-red-800 transition">
          Ver no cronograma <i class="fa fa-arrow-right"></i>
        </a>
      </div>`;

    m.querySelectorAll("[data-fechar]").forEach((b) => b.addEventListener("click", fecharModal));
    m.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  // ---- Card (grade) ----
  function cardPalestrante(p, sessao, dia) {
    const foto = p.foto
      ? `<img src="${esc(fotoSrc(p.foto))}" alt="${esc(p.nome)}" loading="lazy" class="block w-full h-full object-cover object-center group-hover:scale-105 transition duration-500">`
      : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-800 to-red-600 text-white text-4xl"><i class="fa fa-user"></i></div>`;

    const el = document.createElement("button");
    el.type = "button";
    el.id = "palestrante-" + (window.slugifyNome ? window.slugifyNome(p.nome) : "");
    el.className = "group flex flex-col text-left bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300";
    el.innerHTML = `
      <div class="aspect-[4/5] w-full overflow-hidden bg-gray-100 flex" style="aspect-ratio: 4 / 5;">${foto}</div>
      <div class="p-4">
        <h3 class="font-spartan font-bold text-gray-900 leading-tight">${esc(p.nome)}</h3>
        ${p.cargo ? `<p class="text-xs text-red-700 font-medium mt-1 line-clamp-2">${esc(p.cargo)}</p>` : ""}
        <p class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-montserrat font-bold uppercase tracking-wider text-gray-400">
          <span class="inline-flex items-center gap-1.5"><i class="fa fa-calendar text-gold-deep"></i> ${esc(dia.data || "")}</span>
          <span class="inline-flex items-center gap-1.5"><i class="fa fa-clock-o text-gold-deep"></i> ${esc(sessao.horario || "")}</span>
        </p>
      </div>`;
    el.addEventListener("click", () => abrirModal(p, sessao, dia));
    return el;
  }

  function render(mount) {
    mount.innerHTML = "";
    const pessoas = coletarPalestrantes();
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto";
    pessoas.forEach((item) => grid.appendChild(cardPalestrante(item.palestrante, item.sessao, item.dia)));
    mount.appendChild(grid);

    // Se a URL trouxer #slug (link vindo do cronograma), abre o perfil direto.
    if (location.hash) {
      const alvo = document.getElementById(location.hash.slice(1));
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth", block: "center" });
        alvo.click();
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("palestrantes-lista");
    if (!mount || !Array.isArray(window.CRONOGRAMA)) return;
    render(mount);
  });
})();
