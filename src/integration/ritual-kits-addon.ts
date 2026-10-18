import { ritualKits } from "../rituals";
import css from "../components/ritual-kits.css?inline";

type Host = HTMLElement & { gaCheckoutPendente?: boolean; gaCartPendente?: boolean };
const instances = new Map<Host, () => void>();
const escape = (value: string) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
const money = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
const icon = (path: string, size = 20) => `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
const arrow = icon('<path d="M7 17 17 7M7 7h10v10"/>', 18);
const right = icon('<path d="M5 12h14m-6-6 6 6-6 6"/>');
const left = icon('<path d="M19 12H5m6-6-6 6 6 6"/>');
const cart = icon('<path d="M2 3h2l3 12h12l3-9H5M7 15l-1 3h14"/><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>', 22);
const plus = icon('<path d="M12 5v14M5 12h14"/>', 12);

function markup() {
  const hero = ritualKits[3];
  return `<div class="container">
    <div class="ritual-intro">
      <div class="ritual-intro-copy">
        <span class="eyebrow">KITS GRAND AMOUR</span>
        <h2 id="ritual-heading">Seu ritual,<br><em>em boa companhia.</em></h2>
        <p>O cuidado fica ainda mais especial quando se encontra. Descubra combinações Grand Amour para incluir na sua rotina, do seu jeito.</p>
        <a class="ritual-intro-link" href="#ritual-carousel">Encontre o seu kit ${right}</a>
      </div>
      <div class="ritual-intro-art">
        <span class="ritual-orbit" aria-hidden="true"></span>
        <span class="ritual-art-note">PEQUENOS PASSOS. UM MOMENTO SEU.</span>
        <img src="${escape(hero.image)}" alt="Kit Controle e Equilíbrio Grand Amour: sabonete facial, sérum e bruma" width="640" height="640" loading="lazy" decoding="async">
        <div class="ritual-intro-seal"><span class="brand-symbol" aria-hidden="true"></span><span>Feitos para<br><em>cuidar de você.</em></span></div>
      </div>
    </div>
    <div class="ritual-carousel-heading" id="ritual-carousel">
      <div><span class="eyebrow">ESCOLHA SUA COMBINAÇÃO</span><h3>Um kit para o <em>seu momento.</em></h3></div>
      <div class="ritual-controls" aria-label="Controles dos kits">
        <button type="button" data-ritual-previous aria-label="Ver kits anteriores" aria-controls="ritual-track" disabled>${left}</button>
        <button type="button" data-ritual-next aria-label="Ver próximos kits" aria-controls="ritual-track">${right}</button>
      </div>
    </div>
    <div class="ritual-carousel" role="region" aria-label="Kits Grand Amour" aria-roledescription="carrossel">
      <ul class="ritual-track" id="ritual-track" tabindex="0" aria-label="Deslize para conhecer os quatro kits">
        ${ritualKits.map((kit, index) => `<li class="ritual-card" data-ritual-id="${escape(kit.id)}">
          <div class="ritual-card-image">
            <span class="ritual-count">${kit.count} produtos · 1 ritual</span>
            <span class="ritual-card-number" aria-hidden="true">0${index + 1}</span>
            <a href="${escape(kit.url)}" aria-label="Conhecer o kit ${escape(kit.name)} na MKC Magazine"><img src="${escape(kit.image)}" alt="Kit ${escape(kit.name)} Grand Amour: ${escape(kit.composition)}" width="640" height="640" loading="lazy" decoding="async"></a>
          </div>
          <div class="ritual-card-copy">
            <span class="ritual-card-label">${escape(kit.label)}</span>
            <h4>${escape(kit.name)}</h4>
            <p class="ritual-composition">${escape(kit.composition)}</p>
            <p class="ritual-description">${escape(kit.description)}</p>
            <div class="ritual-price"><s>${money(kit.regularPrice)}</s><strong>${money(kit.price)}</strong></div>
            <div class="ritual-card-actions">
              <a href="${escape(kit.url)}" class="ritual-buy" aria-label="Adquira já o seu: Kit ${escape(kit.name)}"><span>Adquira já o seu</span>${arrow}</a>
              <button type="button" class="ritual-add" aria-label="Adicionar 1 Kit ${escape(kit.name)} ao carrinho na MKC Magazine" title="Adicionar ao carrinho">${plus}${cart}</button>
            </div>
            <p class="ritual-notice" role="status"></p>
          </div>
        </li>`).join("")}
      </ul>
    </div>
    <div class="ritual-bottom"><p>Seu próximo cuidado está logo ao lado. <span>Deslize para descobrir.</span></p><div class="ritual-dots" aria-label="Posição no carrossel"></div></div>
    <p class="ritual-price-note">Preços de referência consultados na MKC Magazine. Confira valores, estoque e condições ao comprar.</p>
  </div>`;
}

async function request(url: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  try { return await fetch(url, { ...options, signal: controller.signal }); }
  finally { clearTimeout(timeout); }
}

function initialize(host: Host, root: ShadowRoot) {
  let section: HTMLElement | null = null;
  let stopCarousel = () => {};
  const observer = new MutationObserver(mount);
  observer.observe(root, { childList: true, subtree: true });

  function mount() {
    if (section?.isConnected || root.getElementById("kits-grand-amour")) return;
    const products = root.getElementById("kits");
    if (!products) return;
    const stylesheet = document.createElement("style");
    stylesheet.id = "ga-ritual-kits-style";
    stylesheet.textContent = css + `
      .ritual-notice {font-size:12px;line-height:1.8;color:#4b1f3c;margin-top:12px}
      .ritual-notice:empty {display:none}
      .ritual-notice a {color:inherit;text-decoration:underline;font-weight:600}
      .ritual-card-actions [aria-busy="true"] {opacity:.65;cursor:wait}
    `;
    root.getElementById(stylesheet.id)?.remove();
    root.appendChild(stylesheet);
    section = document.createElement("section");
    section.id = "kits-grand-amour";
    section.className = "ritual-section";
    section.setAttribute("aria-labelledby", "ritual-heading");
    section.innerHTML = markup();
    products.after(section);
    stopCarousel = carousel(section);
    section.addEventListener("click", purchase);
  }

  async function purchase(event: MouseEvent) {
    const action = (event.target as Element).closest<HTMLAnchorElement | HTMLButtonElement>(".ritual-buy,.ritual-add");
    if (!action) return;
    if (action instanceof HTMLAnchorElement && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return;
    const card = action.closest<HTMLElement>("[data-ritual-id]")!;
    const kit = ritualKits.find((item) => item.id === card.dataset.ritualId);
    if (!kit) return;
    event.preventDefault();
    event.stopPropagation();
    if (host.gaCheckoutPendente || host.gaCartPendente) return;
    if (!["mkcmagazine.com", "www.mkcmagazine.com"].includes(location.hostname)) {
      location.assign(kit.url); return;
    }
    const checkout = action.classList.contains("ritual-buy");
    const notice = card.querySelector<HTMLElement>(".ritual-notice")!;
    const path = new URL(kit.url).pathname;
    host.gaCheckoutPendente = true;
    action.setAttribute("aria-busy", "true");
    action.setAttribute("aria-disabled", "true");
    if (action instanceof HTMLButtonElement) action.disabled = true;
    notice.textContent = checkout ? "Abrindo compra…" : "Adicionando…";
    let navigating = false;
    try {
      const page = await request(path, { credentials: "same-origin", cache: "no-store" });
      if (!page.ok) throw new Error("Produto indisponível");
      const doc = new DOMParser().parseFromString(await page.text(), "text/html");
      const form = doc.querySelector<HTMLFormElement>("form#product_form");
      const buy = form?.querySelector<HTMLInputElement>('[data-store="product-buy-button"]');
      const target = form && new URL(form.getAttribute("action") || "", location.href);
      if (!form || form.querySelector("select") || !buy || buy.disabled || /esgotado|indisponível|sem estoque/i.test(buy.value) || target?.origin !== location.origin || target.pathname !== "/comprar/") throw new Error("Confira as opções na loja");
      const data = new URLSearchParams();
      new FormData(form).forEach((value, name) => { if (typeof value === "string") data.append(name, value); });
      if (data.get("add_to_cart") !== kit.productId) throw new Error("Produto alterado");
      data.set("quantity", "1");
      data.delete("go_to_checkout");
      const added = await request("/comprar/", { method: "POST", credentials: "same-origin", body: data });
      if (!added.ok) throw new Error("Não foi possível adicionar");
      if (!section?.isConnected) return;
      if (checkout) {
        const next = document.createElement("form");
        next.method = "POST";
        next.action = "/comprar/";
        next.target = "_self";
        next.hidden = true;
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "go_to_checkout";
        input.value = "Iniciar compra";
        next.appendChild(input);
        document.body.appendChild(next);
        HTMLFormElement.prototype.submit.call(next);
        navigating = true;
      } else {
        notice.textContent = "Solicitação enviada. ";
        const link = document.createElement("a");
        link.href = "/comprar/";
        link.textContent = "Ver carrinho";
        notice.appendChild(link);
      }
    } catch {
      if (checkout) { location.assign(path); navigating = true; }
      else {
        notice.textContent = "Confira as opções e o estoque. ";
        const link = document.createElement("a");
        link.href = path;
        link.textContent = "Ver kit";
        notice.appendChild(link);
      }
    } finally {
      if (!navigating) {
        host.gaCheckoutPendente = false;
        action.removeAttribute("aria-busy");
        action.removeAttribute("aria-disabled");
        if (action instanceof HTMLButtonElement) action.disabled = false;
      }
    }
  }
  function restore() {
    host.gaCheckoutPendente = false;
    section?.querySelectorAll<HTMLElement>('[aria-busy="true"]').forEach((action) => {
      action.removeAttribute("aria-busy"); action.removeAttribute("aria-disabled");
      if (action instanceof HTMLButtonElement) action.disabled = false;
    });
  }
  window.addEventListener("pageshow", restore);
  mount();
  return () => { observer.disconnect(); stopCarousel(); section?.removeEventListener("click", purchase); window.removeEventListener("pageshow", restore); };
}

function carousel(section: HTMLElement) {
  const track = section.querySelector<HTMLUListElement>(".ritual-track")!;
  const previous = section.querySelector<HTMLButtonElement>("[data-ritual-previous]")!;
  const next = section.querySelector<HTMLButtonElement>("[data-ritual-next]")!;
  const dots = section.querySelector<HTMLElement>(".ritual-dots")!;
  let active = 0, count = 0, frame = 0;
  const step = () => (track.children[1] as HTMLElement).offsetLeft - (track.children[0] as HTMLElement).offsetLeft;
  function go(index: number) {
    track.scrollTo({ left: step() * index, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  const prevClick = () => go(active - 1);
  const nextClick = () => go(active + 1);
  function update() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const last = Math.max(0, track.scrollWidth - track.clientWidth);
      const pages = Math.max(1, Math.ceil(last / Math.max(1, step())) + 1);
      previous.disabled = track.scrollLeft <= 3;
      next.disabled = track.scrollLeft >= last - 3;
      active = next.disabled ? pages - 1 : Math.round(track.scrollLeft / Math.max(1, step()));
      if (count !== pages) {
        count = pages;
        dots.replaceChildren();
        for (let i = 0; i < count; i++) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.setAttribute("aria-label", `Ir para a posição ${i + 1} dos kits`);
          dot.addEventListener("click", () => go(i));
          dots.appendChild(dot);
        }
      }
      Array.from(dots.children).forEach((dot, i) => {
        if (i === active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    });
  }
  previous.addEventListener("click", prevClick);
  next.addEventListener("click", nextClick);
  track.addEventListener("scroll", update, { passive: true });
  const resize = new ResizeObserver(update);
  resize.observe(track);
  update();
  return () => { cancelAnimationFrame(frame); resize.disconnect(); previous.removeEventListener("click", prevClick); next.removeEventListener("click", nextClick); track.removeEventListener("scroll", update); };
}

function refresh() {
  for (const [host, stop] of instances) if (!host.isConnected) { stop(); instances.delete(host); }
  const host = document.getElementById("ga-nuvemshop-page") as Host | null;
  if (!host?.shadowRoot || instances.has(host)) return;
  instances.set(host, initialize(host, host.shadowRoot));
}
refresh();
document.addEventListener("ga:ready", refresh);
document.addEventListener("DOMContentLoaded", refresh, { once: true });
window.addEventListener("ga:kits:mount", refresh);
new MutationObserver(refresh).observe(document.body, { childList: true, subtree: true });
