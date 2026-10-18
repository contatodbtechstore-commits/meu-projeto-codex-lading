import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus, ShoppingCart } from "lucide-react";
import { ritualKits } from "../rituals";
import { formatPrice } from "../utils/commerce";
import { Bloom } from "./Brand";
import { Reveal } from "./Reveal";
import "./ritual-kits.css";

export function RitualKits() {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [pageCount, setPageCount] = useState(ritualKits.length);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(element!.children) as HTMLElement[];
        const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
        const last = Math.max(0, element!.scrollWidth - element!.clientWidth);
        const pages = Math.max(1, Math.ceil(last / step) + 1);
        setPageCount(pages);
        setActive(element!.scrollLeft >= last - 3 ? pages - 1 : Math.round(element!.scrollLeft / step));
        setEdges({ start: element!.scrollLeft <= 3, end: element!.scrollLeft >= last - 3 });
      });
    }
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); cancelAnimationFrame(frame); };
  }, []);

  function goTo(index: number) {
    const element = track.current;
    if (!element) return;
    const cards = Array.from(element.children) as HTMLElement[];
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    element.scrollTo({ left: step * index, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section className="ritual-section" id="kits-grand-amour" aria-labelledby="ritual-heading">
      <div className="container">
        <Reveal className="ritual-intro">
          <div className="ritual-intro-copy">
            <span className="eyebrow">KITS GRAND AMOUR</span>
            <h2 id="ritual-heading">Seu ritual,<br /><em>em boa companhia.</em></h2>
            <p>O cuidado fica ainda mais especial quando se encontra. Descubra combinações Grand Amour para incluir na sua rotina, do seu jeito.</p>
            <a className="ritual-intro-link" href="#ritual-carousel">Encontre o seu kit <ArrowRight size={19} /></a>
          </div>
          <div className="ritual-intro-art">
            <span className="ritual-orbit" aria-hidden="true" />
            <span className="ritual-art-note">PEQUENOS PASSOS. UM MOMENTO SEU.</span>
            <img src={ritualKits[3].image} alt="Kit Controle e Equilíbrio Grand Amour: sabonete facial, sérum e bruma" width="640" height="640" loading="lazy" decoding="async" />
            <div className="ritual-intro-seal"><Bloom /><span>Feitos para<br /><em>cuidar de você.</em></span></div>
          </div>
        </Reveal>

        <div className="ritual-carousel-heading" id="ritual-carousel">
          <div><span className="eyebrow">ESCOLHA SUA COMBINAÇÃO</span><h3>Um kit para o <em>seu momento.</em></h3></div>
          <div className="ritual-controls" aria-label="Controles dos kits">
            <button type="button" aria-label="Ver kits anteriores" aria-controls="ritual-track" disabled={edges.start} onClick={() => goTo(active - 1)}><ArrowLeft size={21} /></button>
            <button type="button" aria-label="Ver próximos kits" aria-controls="ritual-track" disabled={edges.end} onClick={() => goTo(active + 1)}><ArrowRight size={21} /></button>
          </div>
        </div>
        <div className="ritual-carousel" role="region" aria-label="Kits Grand Amour" aria-roledescription="carrossel">
          <ul className="ritual-track" id="ritual-track" ref={track} tabIndex={0} aria-label="Deslize para conhecer os quatro kits">
            {ritualKits.map((kit, index) => (
              <li className="ritual-card" key={kit.id}>
                <div className="ritual-card-image">
                  <span className="ritual-count">{kit.count} produtos · 1 ritual</span>
                  <span className="ritual-card-number" aria-hidden="true">0{index + 1}</span>
                  <a href={kit.url} aria-label={`Conhecer o kit ${kit.name} na MKC Magazine`}><img src={kit.image} alt={`Kit ${kit.name} Grand Amour: ${kit.composition}`} width="640" height="640" loading="lazy" decoding="async" /></a>
                </div>
                <div className="ritual-card-copy">
                  <span className="ritual-card-label">{kit.label}</span>
                  <h4>{kit.name}</h4>
                  <p className="ritual-composition">{kit.composition}</p>
                  <p className="ritual-description">{kit.description}</p>
                  <div className="ritual-price"><s>{formatPrice(kit.regularPrice)}</s><strong>{formatPrice(kit.price)}</strong></div>
                  <div className="ritual-card-actions">
                    <a href={kit.url} className="ritual-buy" aria-label={`Adquira já o seu: Kit ${kit.name}`}>Adquira já o seu <ArrowUpRight size={18} /></a>
                    <form method="post" action="https://mkcmagazine.com/comprar/">
                      <input type="hidden" name="add_to_cart" value={kit.productId} />
                      <input type="hidden" name="quantity" value="1" />
                      <button type="submit" className="ritual-add" aria-label={`Adicionar 1 Kit ${kit.name} ao carrinho na MKC Magazine`} title="Adicionar ao carrinho"><Plus size={12} /><ShoppingCart size={22} /></button>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ritual-bottom">
          <p>Seu próximo cuidado está logo ao lado. <span>Deslize para descobrir.</span></p>
          <div className="ritual-dots" aria-label="Posição no carrossel">
            {Array.from({ length: pageCount }, (_, i) => <button type="button" key={i} aria-label={`Ir para a posição ${i + 1} dos kits`} aria-current={active === i ? "true" : undefined} onClick={() => goTo(i)} />)}
          </div>
        </div>
        <p className="ritual-price-note">Preços de referência consultados na MKC Magazine. Confira valores, estoque e condições ao comprar.</p>
      </div>
    </section>
  );
}
