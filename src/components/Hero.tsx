import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { content } from "@/content";
import { ProductVisual } from "@/components/ProductVisual";
import { BuyButton } from "@/components/BuyButton";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const photo = content.kit.images[0];
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      <span className="glow-shape -left-32 top-10 h-72 w-72 bg-rose/30" aria-hidden="true" />
      <span className="glow-shape -right-24 top-28 h-80 w-80 bg-lilac/10" aria-hidden="true" />
      <div className="page-wrap relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        <Reveal className="relative z-10">
          <span className="pill mb-7 gap-2 px-4 py-2 text-[11px] font-semibold text-plum">
            <Sparkles size={14} className="text-pink" aria-hidden="true" /> Seu ritual de beleza começa aqui
          </span>
          <h1 id="hero-title" className="display-title max-w-[750px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold text-ink">
            Realce sua beleza. <span className="bg-gradient-to-r from-pink to-plum bg-clip-text italic text-transparent">Celebre seu momento.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-ink/65 md:text-base">
            Descubra uma experiência de beleza e cuidado com nosso kit especial de cosméticos, pensado para tornar sua rotina ainda mais encantadora.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BuyButton className="w-full sm:w-auto" />
            <a href="#kit" className="cta-outline w-full sm:w-auto">
              Conhecer o kit <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-ink/60">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="text-lilac" size={17} />Escolha prática</span>
            <span className="inline-flex items-center gap-2"><Heart className="text-pink" size={17} />Carinho nos detalhes</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="text-lilac" size={17} />Ritual especial</span>
          </div>
        </Reveal>
        <Reveal delay={.12} className="relative">
          {photo ? (
            <div className="relative min-h-[420px] overflow-hidden rounded-4xl bg-blush shadow-float md:min-h-[560px]">
              <Image src={photo.src} alt={photo.alt} fill priority unoptimized sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
            </div>
          ) : <ProductVisual />}
          <div className="shimmer absolute -bottom-6 left-3 flex max-w-[220px] items-center gap-3 rounded-2xl border border-white/70 px-4 py-3 shadow-card md:-left-8">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pink text-white"><Heart size={18} fill="white" /></span>
            <span className="text-xs font-semibold leading-5 text-ink">Momentos de beleza que ficam na memória</span>
          </div>
          <a href="#beneficios" aria-label="Ver benefícios" className="absolute -right-1 -top-6 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-plum shadow-card md:flex">
            <ArrowDownRight size={23} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
