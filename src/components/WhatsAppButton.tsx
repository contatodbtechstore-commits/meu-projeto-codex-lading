import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/commerce";

export function WhatsAppButton() {
  const href = whatsappHref();
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-[calc(100px+env(safe-area-inset-bottom,0px))] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:bottom-7 md:right-7">
      <MessageCircle size={28} strokeWidth={2.4} aria-hidden="true" />
    </a>
  );
}
