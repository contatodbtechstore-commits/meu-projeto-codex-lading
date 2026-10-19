import { Flower2, Heart, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function LifestyleSection() {
  return (
    <section aria-labelledby="lifestyle-title" className="relative overflow-hidden bg-[#FFF8FC] py-20 md:py-28">
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 lg:order-1">
          <div className="editorial-surface relative flex min-h-[410px] items-center justify-center overflow-hidden rounded-4xl md:min-h-[535px]">
            <div className="absolute left-[9%] top-[9%] h-[70%] w-[70%] rounded-full border border-white/80" />
            <div className="absolute -bottom-12 right-[-12%] h-72 w-72 rounded-full bg-lilac/10 blur-2xl" />
            <div className="relative grid h-72 w-72 place-items-center rounded-full border border-white/90 bg-white/45 shadow-float backdrop-blur-sm sm:h-80 sm:w-80">
              <span className="absolute left-3 top-4 text-pink/40"><Sparkles size={38}/></span>
              <Flower2 className="text-plum/60" size={124} strokeWidth={.7} aria-hidden="true" />
              <span className="absolute bottom-9 font-display text-2xl italic text-plum">Seu momento</span>
            </div>
            <span className="absolute bottom-8 left-8 text-[10px] font-bold uppercase tracking-[.18em] text-plum/55">O cuidado também é um ritual</span>
            <span className="absolute right-10 top-10 rounded-full bg-white p-3 text-pink shadow-card"><Heart size={22}/></span>
          </div>
        </Reveal>
        <Reveal delay={.1} className="order-1 lg:order-2">
          <span className="eyebrow">Um carinho para você</span>
          <h2 id="lifestyle-title" className="display-title mt-5 text-[clamp(2.6rem,4.5vw,4.7rem)] font-semibold">
            Seu momento de beleza <span className="italic text-plum">merece ser especial.</span>
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-8 text-ink/65 md:text-base">
            Entre um compromisso e outro, reserve um instante para você. Um ritual de beleza é também uma pausa para se reconectar com aquilo que faz bem.
          </p>
          <div className="mt-7 flex items-center gap-4 border-l-2 border-pink pl-5">
            <Sparkles size={28} className="shrink-0 text-pink" aria-hidden="true" />
            <p className="font-display text-lg italic text-plum">Pequenos momentos, grandes significados.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
