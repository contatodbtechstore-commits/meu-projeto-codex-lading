import { CheckCircle2, PackageCheck, Sparkles } from "lucide-react";
import { content, type Kit } from "@/content";
import { BuyButton } from "@/components/BuyButton";
import { ProductGallery } from "@/components/ProductGallery";
import { Reveal } from "@/components/Reveal";
import { discountPercent, formatPrice } from "@/lib/commerce";

export function ProductOffer() {
  const kit: Kit = content.kit;
  const price = formatPrice(kit.priceCents);
  const oldPrice = formatPrice(kit.originalPriceCents);
  const discount = discountPercent(kit);
  return (
    <section id="kit" aria-labelledby="kit-title" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="page-wrap">
        <Reveal className="mb-12 text-center">
          <span className="eyebrow justify-center">Seu novo ritual favorito</span>
          <h2 className="display-title mt-5 text-4xl font-semibold md:text-5xl">Conheça o seu <span className="italic text-plum">kit especial</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink/60">Uma escolha para celebrar o cuidado e a beleza do seu jeito.</p>
        </Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal><ProductGallery images={kit.images} /></Reveal>
          <Reveal delay={.08}>
            <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-plum"><Sparkles size={14}/> Ritual de beleza</span>
            <h3 id="kit-title" className="display-title mt-5 text-[clamp(2.4rem,4vw,4.1rem)] font-semibold">{kit.name}</h3>
            <p className="mt-3 text-base font-medium text-plum">{kit.subtitle}</p>
            <p className="mt-5 text-sm leading-8 text-ink/65">{kit.description}</p>
            {kit.quantity !== null && (
              <span className="mt-5 inline-flex rounded-full border border-rose px-4 py-2 text-xs font-semibold text-plum">
                {kit.quantity} {kit.quantity === 1 ? "item" : "itens"} neste kit
              </span>
            )}
            <div className="mt-7 space-y-3 border-y border-rose/60 py-6">
              {kit.features.map(feature => (
                <p key={feature} className="flex items-start gap-3 text-sm text-ink/75">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-pink" aria-hidden="true" />{feature}
                </p>
              ))}
            </div>
            {kit.includedProducts.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-sm font-bold">O que vem no kit</h4>
                <ul className="mt-3 grid gap-2 text-sm text-ink/65">
                  {kit.includedProducts.map((item, i) => <li key={i} className="flex items-start gap-2"><PackageCheck size={17} className="mt-0.5 shrink-0 text-lilac"/>{item}</li>)}
                </ul>
              </div>
            ) : <p className="mt-6 rounded-xl bg-blush/55 px-4 py-3 text-xs text-plum">Composição completa: aguardando cadastro dos itens reais.</p>}
            <div className="mt-7">
              {price ? (
                <>
                  {oldPrice && discount !== null && <p className="text-sm text-ink/50"><span className="line-through">{oldPrice}</span><span className="ml-3 rounded-full bg-blush px-2 py-1 text-xs font-bold text-plum">{discount}% OFF</span></p>}
                  <p className="mt-1 text-4xl font-bold tracking-tight text-ink">{price}</p>
                  {kit.paymentInfo && <p className="mt-2 text-xs text-ink/60">{kit.paymentInfo}</p>}
                </>
              ) : <p className="text-sm font-semibold text-plum">Preço a ser informado pela loja</p>}
              {kit.availability && <p className="mt-3 text-xs font-medium text-ink/60">{kit.availability}</p>}
            </div>
            <div className="mt-6"><BuyButton label="GARANTIR MEU KIT" className="w-full sm:w-auto"/></div>
            <p className="mt-4 text-xs text-ink/45">Confira os itens, o preço e as condições oficiais antes de finalizar a compra.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
