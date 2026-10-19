"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { content } from "@/content";

export function Testimonials() {
  const testimonials = content.testimonials.filter(item => item.approved);
  const [index, setIndex] = useState(0);
  if (!testimonials.length) return null;
  const testimonial = testimonials[index % testimonials.length];
  return (
    <section id="avaliacoes" aria-labelledby="reviews-title" className="bg-white py-20 md:py-28">
      <div className="page-wrap max-w-4xl">
        <div className="text-center">
          <span className="eyebrow justify-center">Experiências reais</span>
          <h2 id="reviews-title" className="display-title mt-5 text-4xl font-semibold md:text-5xl">Quem experimenta, <span className="italic text-plum">compartilha</span></h2>
        </div>
        <div aria-live="polite" aria-atomic="true" className="relative mt-12 rounded-4xl border border-rose bg-[#FFF8FC] p-8 shadow-card md:p-14">
          <Quote className="absolute right-8 top-8 text-rose" size={48} aria-hidden="true" />
          <div className="flex gap-1 text-pink" aria-label={testimonial.rating + " de 5 estrelas"}>
            {Array.from({ length: testimonial.rating }, (_, i) => <Star key={i} size={20} fill="currentColor" aria-hidden="true" />)}
          </div>
          <blockquote className="mt-8 font-display text-2xl italic leading-relaxed text-ink md:text-3xl">“{testimonial.quote}”</blockquote>
          <p className="mt-7 text-sm font-bold text-plum">{testimonial.name}</p>
          <div className="mt-8 flex items-center justify-between">
            <span className="text-xs text-ink/50">{index + 1} de {testimonials.length}</span>
            <div className="flex gap-2">
              <button type="button" onClick={() => setIndex(v => (v - 1 + testimonials.length) % testimonials.length)} aria-label="Avaliação anterior" className="grid h-11 w-11 place-items-center rounded-full border border-rose text-plum hover:bg-blush"><ArrowLeft size={19}/></button>
              <button type="button" onClick={() => setIndex(v => (v + 1) % testimonials.length)} aria-label="Próxima avaliação" className="grid h-11 w-11 place-items-center rounded-full bg-pink text-white hover:bg-plum"><ArrowRight size={19}/></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
