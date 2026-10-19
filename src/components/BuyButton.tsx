import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { content } from "@/content";
import { checkoutUrl } from "@/lib/commerce";

type Props = { label?: string; className?: string; compact?: boolean };
export function BuyButton({ label = "QUERO MEU KIT AGORA", className = "", compact = false }: Props) {
  const href = checkoutUrl(content.kit);
  if (!href) {
    return (
      <button
        disabled
        type="button"
        title="Checkout ainda não configurado"
        className={"cta-primary " + (compact ? "min-h-11 px-4 " : "") + className}
      >
        <LockKeyhole aria-hidden="true" size={18} />
        Compra em configuração
      </button>
    );
  }
  return (
    <a className={"cta-primary " + (compact ? "min-h-11 px-4 " : "") + className} href={href}>
      {label}<ArrowUpRight aria-hidden="true" size={18} />
    </a>
  );
}
