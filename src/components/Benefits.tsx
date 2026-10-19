import { Gift, Heart, Ribbon, Sparkles } from "lucide-react";
import { content } from "@/content";
import { Reveal } from "@/components/Reveal";

const icons = { sparkles: Sparkles, heart: Heart, gift: Gift, ribbon: Ribbon };

export function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="benefits-title" className="bg-[#FFF8FC] py-20 md:py-28">
      <div className="page-wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">Mais do que cosméticos</span>
          <h2 id="benefits-title" className="display-title mt-5 text-4xl font-semibold md:text-5xl">
            Por que você vai <span className="italic text-plum">amar esse kit?</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-ink/60">Pequenos detalhes tornam o cuidado pessoal ainda mais especial.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon as keyof typeof icons] || Sparkles;
            return (
              <Reveal key={benefit.title} delay={index * .07}>
                <div className="group h-full rounded-[28px] border border-rose/35 bg-white p-7 shadow-[0_12px_35px_rgba(106,27,154,.045)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blush text-pink transition-colors group-hover:bg-pink group-hover:text-white">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-base font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
