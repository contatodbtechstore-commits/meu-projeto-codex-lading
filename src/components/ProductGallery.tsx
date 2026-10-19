"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Expand, ImageIcon, X } from "lucide-react";
import type { Photo } from "@/content";
import { ProductVisual } from "@/components/ProductVisual";

export function ProductGallery({ images }: { images: Photo[] }) {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  if (!images.length) {
    return (
      <div>
        <ProductVisual className="min-h-[390px] md:min-h-[520px]" />
        <p className="mt-4 text-center text-xs leading-5 text-ink/50">
          Fotos reais do kit ainda não cadastradas. A composição acima é meramente ilustrativa.
        </p>
      </div>
    );
  }
  const active = images[Math.min(selected, images.length - 1)];
  return (
    <>
      <div className="relative aspect-[4/5] overflow-hidden rounded-4xl bg-blush shadow-card sm:aspect-square">
        <Image src={active.src} alt={active.alt} fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
        <button type="button" onClick={() => dialog.current?.showModal()} className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-xs font-bold text-plum shadow-card" aria-label="Ampliar foto selecionada">
          <Expand size={16} aria-hidden="true" /> Ampliar
        </button>
      </div>
      {images.length > 1 && (
        <div role="group" aria-label="Miniaturas do produto" className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button key={image.src + index} type="button" onClick={() => setSelected(index)}
              aria-label={"Exibir foto " + (index + 1) + ": " + image.alt}
              aria-pressed={selected === index}
              className={"relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 bg-blush " + (selected === index ? "border-pink" : "border-transparent")}>
              <Image src={image.src} alt="" fill unoptimized sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
      <dialog ref={dialog} aria-label="Foto ampliada do produto" className="max-h-[92vh] w-[min(92vw,800px)] rounded-3xl bg-white p-4 shadow-float">
        <div className="flex items-center justify-between gap-4 pb-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-ink/70"><ImageIcon size={16} /> Visualização ampliada</span>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Fechar ampliação" className="grid h-10 w-10 place-items-center rounded-full bg-blush text-plum"><X size={20}/></button>
        </div>
        <div className="relative aspect-square max-h-[72vh] w-full bg-blush">
          <Image src={active.src} alt={active.alt} fill unoptimized sizes="90vw" className="object-contain" />
        </div>
      </dialog>
    </>
  );
}
