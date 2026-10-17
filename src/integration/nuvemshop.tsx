import { Component, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import App from "../App";
import { faqs, kits, visuals, type Kit } from "../content";
import css from "../styles.css?inline";

const publicBase = new URL("../", import.meta.url);
const asset = (path: string) => new URL(path.replace(/^\//, ""), publicBase).href;
const productPaths: Record<string, string> = {
  "serum-ce": "serum-facial-vitamina-c-e-grand-amour-19jg5",
  "serum-niacin": "serum-facial-de-niacinamida-grand-amour-11qq3",
  "nutri-skin": "creme-facial-de-hidratacao-nutri-skin-grand-amour-1or54",
  "puri-derma": "puri-derma-sabonete-de-limpeza-facial-grand-amour-db2u5",
  "hidra-derm": "bruma-facial-hidra-derm-hidratante-grand-amour-1qgn0",
};
const products: Kit[] = kits.map((kit) => ({
  ...kit,
  priceSource: "reference",
  image: asset(kit.image),
  additionalImages: kit.additionalImages.map((image) => ({ ...image, image: asset(image.image) })),
  purchaseUrl: productPaths[kit.id]
    ? `https://mkcmagazine.com/produtos/${productPaths[kit.id]}/` : undefined,
}));
// This entry is a separate bundle. The standalone Netlify page keeps its configuration.
visuals.hero.image = asset(visuals.hero.image);
visuals.editorial.image = asset(visuals.editorial.image);
const questions = faqs.map((faq, index) => index === 3 ? {
  question: "Como faço para comprar?",
  answer: "Selecione seu produto e clique em “Comprar na MKC Magazine”. Na página da loja, confira preço, opções e disponibilidade antes de adicionar ao carrinho. Frete, pagamento e finalização são feitos pela Nuvemshop.",
} : index === 4 ? {
  question: "Onde consulto preço, entrega e formas de pagamento?",
  answer: "O preço vigente, o estoque, o frete e as condições de pagamento são apresentados pela MKC Magazine na página do produto e no checkout. Ao explorar a linha, esta página tenta consultar os valores públicos da loja. Se a consulta não estiver disponível, os valores permanecem identificados como referências.",
} : faq);

const style = css
  .replace(/:root/g, ":host")
  .replace(/\bhtml\b/g, ":host")
  .replace(/\bbody\b/g, ".ga-surface")
  .replaceAll("Cormorant Garamond", "GA Cormorant Garamond")
  .replaceAll("Manrope", "GA Manrope")
  .replace(/url\((["']?)(\/images\/[^)"']+)\1\)/g, (_match, _quote: string, path: string) => `url("${asset(path)}")`);

// FontFace registers distinct family names; the theme's fonts remain untouched.
for (const [family, file, weight, fontStyle] of [
  ["GA Manrope", "manrope-latin-400-normal.woff2", "400", "normal"],
  ["GA Manrope", "manrope-latin-500-normal.woff2", "500", "normal"],
  ["GA Manrope", "manrope-latin-600-normal.woff2", "600", "normal"],
  ["GA Cormorant Garamond", "cormorant-garamond-latin-400-normal.woff2", "400", "normal"],
  ["GA Cormorant Garamond", "cormorant-garamond-latin-400-italic.woff2", "400", "italic"],
  ["GA Cormorant Garamond", "cormorant-garamond-latin-500-normal.woff2", "500", "normal"],
]) {
  const font = new FontFace(family, `url("${asset(`nuvemshop/fonts/${file}`)}")`, {
    weight, style: fontStyle, display: "swap",
  });
  document.fonts.add(font);
  void font.load().catch(() => { /* Accessible system fallbacks remain available. */ });
}

class Boundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() {
    return this.state.failed ? <section style={{ padding: "32px", font: "16px sans-serif" }}>
      <h1>Grand Amour</h1><p>Conheça os produtos na MKC Magazine.</p>
      <ul>{products.map((product) => <li key={product.id}><a href={product.purchaseUrl}>{product.name}</a></li>)}</ul>
    </section> : this.props.children;
  }
}

const mounted = new Map<HTMLElement, { root: Root; render: () => void; cleanup: () => void }>();
const requested = new Set<string>();
async function refreshProduct(id: string) {
  const product = products.find((item) => item.id === id);
  if (!product?.purchaseUrl || requested.has(id)) return;
  requested.add(id);
  try {
    // Public GET on the storefront's own origin. No API keys, cookies or admin access.
    const path = new URL(product.purchaseUrl).pathname;
    const response = await fetch(path, { credentials: "omit", signal: AbortSignal.timeout(6000), headers: { Accept: "text/html" } });
    if (!response.ok) return;
    const doc = new DOMParser().parseFromString(await response.text(), "text/html");
    for (const node of doc.querySelectorAll('script[type="application/ld+json"]')) {
      let data;
      try { data = JSON.parse(node.textContent || ""); } catch { continue; }
      const entity = data?.["@type"] === "WebPage" ? data.mainEntity : data;
      if (entity?.["@type"] !== "Product") continue;
      const identity = entity["@id"] || entity.mainEntityOfPage?.["@id"] || entity.offers?.url;
      if (typeof identity !== "string" || new URL(identity, location.origin).pathname !== path) continue;
      const offer = entity.offers;
      if (offer?.priceCurrency !== "BRL" || typeof offer.price !== "string" && typeof offer.price !== "number") continue;
      const price = Number(offer.price);
      if (!Number.isFinite(price) || price < 0 || String(offer.price).trim() === "") continue;
      product.price = price;
      product.promotionalPrice = null;
      product.priceSource = "store";
      const availability = String(offer.availability || "").split("/").pop();
      product.availability = availability === "InStock" ? "available" : availability === "OutOfStock" ? "unavailable" : "on-request";
      for (const instance of mounted.values()) instance.render();
      return;
    }
  } catch { /* References stay clearly labelled if the public store cannot be queried. */ }
}
function mount(host: HTMLElement) {
  if (mounted.has(host)) return;
  const shadow = host.attachShadow({ mode: "open" });
  const stylesheet = document.createElement("style");
  stylesheet.textContent = `${style}\n:host{display:block;min-width:0;font-size:16px;line-height:1.5;font-weight:400;font-style:normal;text-align:left;letter-spacing:normal;direction:ltr} .ga-surface{overflow:clip;overflow-clip-margin:0px} .ga-surface .header{z-index:30}`;
  const surface = document.createElement("div");
  surface.className = "ga-surface";
  const container = document.createElement("div");
  surface.append(container);
  shadow.append(stylesheet, surface);
  const navigate = (event: Event) => {
    const anchor = event.composedPath().find((node) => node instanceof HTMLAnchorElement) as HTMLAnchorElement | undefined;
    const href = anchor?.getAttribute("href");
    if (!href?.startsWith("#")) return;
    const target = shadow.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    if (href === "#conteudo") {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  };
  shadow.addEventListener("click", navigate);
  const modal = new MutationObserver(() => {
    host.toggleAttribute("data-ga-dialog-open", !!shadow.querySelector("dialog[open]"));
  });
  modal.observe(shadow, { subtree: true, attributes: true, attributeFilter: ["open"] });
  const root = createRoot(container);
  const observed = new WeakSet<Element>();
  const catalogObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) {
      const id = entry.target.getAttribute("data-ga-product");
      if (id) void refreshProduct(id);
      catalogObserver.unobserve(entry.target);
    }
  }, { rootMargin: "150px" });
  const watchProducts = new MutationObserver(() => {
    for (const card of shadow.querySelectorAll("[data-ga-product]")) {
      if (!observed.has(card)) { observed.add(card); catalogObserver.observe(card); }
    }
  });
  watchProducts.observe(shadow, { childList: true, subtree: true });
  const render = () => root.render(<Boundary onError={() => host.removeAttribute("data-ga-ready")}>
    <App scope={shadow} products={products} questions={questions} storeHomeUrl="https://mkcmagazine.com/" />
  </Boundary>);
  mounted.set(host, { root, render, cleanup: () => {
    modal.disconnect(); shadow.removeEventListener("click", navigate);
    catalogObserver.disconnect(); watchProducts.disconnect();
    host.removeAttribute("data-ga-ready"); host.removeAttribute("data-ga-dialog-open");
  } });
  render();
  host.setAttribute("data-ga-ready", "");
  host.dispatchEvent(new CustomEvent("ga:ready", { bubbles: true }));
}

function refresh() {
  for (const [host, current] of mounted) {
    if (!host.isConnected) { current.root.unmount(); current.cleanup(); mounted.delete(host); }
  }
  const host = document.getElementById("ga-nuvemshop-page");
  if (host) {
    try { mount(host); }
    catch { host.dispatchEvent(new CustomEvent("ga:error", { bubbles: true })); }
  }
}
refresh();
document.addEventListener("DOMContentLoaded", refresh, { once: true });
window.addEventListener("ga:mount", refresh);
// The Ipanema editor can replace a custom block without reloading the document.
new MutationObserver(refresh).observe(document.body, { childList: true, subtree: true });
