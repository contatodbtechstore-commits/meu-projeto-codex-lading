"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart, Menu, X } from "lucide-react";
import { content } from "@/content";
import { isValidHttpsUrl } from "@/lib/commerce";
import { BuyButton } from "@/components/BuyButton";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#kit", label: "Nosso Kit" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#duvidas", label: "Dúvidas" }
];
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks.filter(item => item.href !== "#avaliacoes" || content.testimonials.length > 0);
  const logo = content.brand.logoUrl;
  return (
    <header className="sticky top-0 z-40 border-b border-plum/5 bg-white/85 backdrop-blur-xl">
      <div className="page-wrap flex h-[76px] items-center justify-between gap-4">
        <a className="flex min-w-0 items-center gap-3" href="#inicio" aria-label={"Ir ao início de " + content.brand.name}>
          {logo && (logo.startsWith("/") || isValidHttpsUrl(logo)) ? (
            <Image src={logo} alt={"Logotipo " + content.brand.name} width={140} height={48} className="max-h-12 w-auto max-w-[140px] object-contain" unoptimized />
          ) : (
            <>
              <span className="brand-mark"><Heart size={18} fill="white" aria-hidden="true" /></span>
              <span className="truncate font-display text-xl font-bold tracking-tight text-ink">{content.brand.name}</span>
            </>
          )}
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map(item => <a key={item.href} href={item.href} className="text-xs font-semibold text-ink/65 transition-colors hover:text-pink">{item.label}</a>)}
        </nav>
        <div className="hidden lg:block"><BuyButton label="Comprar agora" compact /></div>
        <button type="button" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="grid h-11 w-11 place-items-center rounded-full bg-blush text-plum lg:hidden">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Menu móvel" className="border-t border-plum/10 bg-white px-6 py-5 shadow-card lg:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-5">
            {links.map(item => <a onClick={() => setMenuOpen(false)} key={item.href} href={item.href} className="py-1 text-sm font-semibold text-ink/80">{item.label}</a>)}
            <BuyButton compact className="w-full" label="Comprar agora" />
          </div>
        </nav>
      )}
    </header>
  );
}
