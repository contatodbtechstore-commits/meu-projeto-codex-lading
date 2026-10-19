import Image from "next/image";
import { Heart, Instagram, Mail, MessageCircle } from "lucide-react";
import { content } from "@/content";
import { isValidHttpsUrl, whatsappHref } from "@/lib/commerce";

export function Footer() {
  const { brand } = content;
  const whatsapp = whatsappHref();
  return (
    <footer className="border-t border-rose/50 bg-[#FFF8FC] pb-8 pt-16 md:pt-20">
      <div className="page-wrap grid gap-10 border-b border-rose/65 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Voltar ao início">
            {brand.logoUrl && (brand.logoUrl.startsWith("/") || isValidHttpsUrl(brand.logoUrl)) ? (
              <Image src={brand.logoUrl} alt={"Logotipo " + brand.name} width={140} height={50} unoptimized className="max-h-14 w-auto object-contain"/>
            ) : <><span className="brand-mark"><Heart size={18} fill="white" /></span><span className="font-display text-2xl font-bold">{brand.name}</span></>}
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-ink/60">{brand.description}</p>
          <p className="mt-4 text-xs font-medium text-plum">Autocuidado com leveza e carinho.</p>
        </div>
        <div>
          <h3 className="fine-label text-plum">Navegue</h3>
          <nav aria-label="Links do rodapé" className="mt-5 grid gap-3 text-sm">
            <a href="#inicio" className="footer-link">Início</a>
            <a href="#beneficios" className="footer-link">Benefícios</a>
            <a href="#kit" className="footer-link">Conheça o kit</a>
            <a href="#duvidas" className="footer-link">Perguntas frequentes</a>
          </nav>
        </div>
        <div>
          <h3 className="fine-label text-plum">Atendimento e informações</h3>
          <div className="mt-5 grid gap-3 text-sm">
            {isValidHttpsUrl(brand.instagramUrl) && <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2"><Instagram size={17}/> Instagram</a>}
            {whatsapp && <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="footer-link inline-flex items-center gap-2"><MessageCircle size={17}/> WhatsApp</a>}
            {brand.contactEmail && <a href={"mailto:" + brand.contactEmail} className="footer-link inline-flex items-center gap-2"><Mail size={17}/> {brand.contactEmail}</a>}
            {isValidHttpsUrl(brand.legal.privacyUrl) ? <a href={brand.legal.privacyUrl} className="footer-link">Política de Privacidade</a> : <span className="text-xs text-ink/40">Política de Privacidade: cadastro pendente</span>}
            {isValidHttpsUrl(brand.legal.termsUrl) ? <a href={brand.legal.termsUrl} className="footer-link">Termos de Uso</a> : <span className="text-xs text-ink/40">Termos de Uso: cadastro pendente</span>}
          </div>
        </div>
      </div>
      <div className="page-wrap mt-8 flex flex-col justify-between gap-4 text-xs leading-6 text-ink/55 md:flex-row">
        <p>© {new Date().getFullYear()} {brand.legal.businessName || brand.name}. Todos os direitos reservados.</p>
        <p>
          {brand.legal.cnpj && <span>CNPJ: {brand.legal.cnpj} · </span>}
          {brand.legal.address || "Dados comerciais e endereço pendentes de cadastro."}
        </p>
      </div>
    </footer>
  );
}
