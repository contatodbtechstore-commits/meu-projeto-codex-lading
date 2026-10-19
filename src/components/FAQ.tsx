import { ChevronDown, HelpCircle } from "lucide-react";
import { content } from "@/content";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="bg-white py-20 md:py-28">
      <div className="page-wrap grid gap-11 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <Reveal>
          <span className="eyebrow">Tudo com transparência</span>
          <h2 id="faq-title" className="display-title mt-5 text-4xl font-semibold md:text-5xl">
            Ficou alguma <span className="italic text-plum">dúvida?</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-8 text-ink/60">
            Reunimos aqui as informações importantes para você escolher com tranquilidade.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-blush px-5 py-4 text-xs leading-6 text-plum">
            <HelpCircle size={24} className="shrink-0 text-pink" aria-hidden="true" />
            Informações ainda não confirmadas serão sinalizadas para revisão.
          </div>
        </Reveal>
        <Reveal delay={.08} className="space-y-3">
          {content.faqs.map((faq, index) => (
            <details key={faq.question} className="group rounded-2xl border border-rose/50 bg-[#FFFAFD] open:bg-blush/45">
              <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold marker:hidden md:px-7">
                <span>{String(index + 1).padStart(2, "0")} <span className="ml-3">{faq.question}</span></span>
                <ChevronDown className="shrink-0 text-plum transition-transform group-open:rotate-180" size={21} aria-hidden="true" />
              </summary>
              <div className="px-5 pb-6 text-sm leading-7 text-ink/70 md:px-7">
                {!faq.verified && <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-plum">Informação provisória</span>}
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
