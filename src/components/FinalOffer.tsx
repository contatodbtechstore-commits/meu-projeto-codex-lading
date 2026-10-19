import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Image from "next/image";
import { content, type Kit } from "@/content";
import { BuyButton } from "@/components/BuyButton";
import { ProductVisual } from "@/components/ProductVisual";
import { Reveal } from "@/components/Reveal";
import { formatPrice } from "@/lib/commerce";

export function FinalOffer() {
  const kit: Kit = content.kit;
  const photo = kit.images[0];
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-gradient-to-br from-[#fce4ec] via-[#f8c4e5] to-[#d9b6ed] py-20 md:py-28">
      <div className="glow-shape -left-20 top-0 h-96 w-96 bg-white/35" />
      <div className="page-wrap relative grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <Reveal>
          {photo ? (
            <div className="relative aspect-square overflow-hidden rounded-4xl border border-white/60 bg-white/60 shadow-float">
              <Image src={photo.src} alt={photo.alt} fill unoptimized sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain" />
            </div>
          ) : <ProductVisual className="min-h-[370px] md:min-h-[450px]" />}
        </Reveal>
        <Reveal delay={.1}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/65 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-plum"><Sparkles size={14}/> Seu próximo ritual</span>
          <h2 id="final-title" className="display-title mt-6 text-[clamp(2.9rem,5vw,5rem)] font-semibold">
            Transforme sua rotina de <span className="italic text-plum">beleza hoje.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-ink/70">Um convite para se dedicar a si mesma, com mais leveza, cuidado e beleza.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Heart className="text-pink" size={22} aria-hidden="true" />
            <p className="font-semibold text-ink">{kit.name}</p>
            {formatPrice(kit.priceCents) && <p className="text-2xl font-bold text-plum">{formatPrice(kit.priceCents)}</p>}
          </div>
          {kit.paymentInfo && <p className="mt-2 text-sm text-plum">{kit.paymentInfo}</p>}
          <div className="mt-7"><BuyButton label="QUERO GARANTIR MEU KIT" className="w-full sm:w-auto"/></div>
          <a href="#duvidas" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-plum hover:text-pink">Ainda tem dúvidas? Saiba mais <ArrowRight size={16}/></a>
        </Reveal>
      </div>
    </section>
  );
}
