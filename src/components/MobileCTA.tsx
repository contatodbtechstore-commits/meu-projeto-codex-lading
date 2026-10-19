import { content } from "@/content";
import { BuyButton } from "@/components/BuyButton";
import { formatPrice } from "@/lib/commerce";

export function MobileCTA() {
  const price = formatPrice(content.kit.priceCents);
  return (
    <aside aria-label="Barra de compra rápida" className="fixed inset-x-0 bottom-0 z-30 border-t border-rose/60 bg-white/95 px-4 pb-[calc(12px+env(safe-area-inset-bottom,0px))] pt-3 shadow-[0_-8px_35px_rgba(60,18,65,.09)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-ink">{content.kit.name}</p>
          <p className="mt-0.5 text-[11px] text-plum">{price || "Preço a confirmar"}</p>
        </div>
        <BuyButton compact label="Comprar agora" className="min-w-[178px] text-[11px]" />
      </div>
    </aside>
  );
}
