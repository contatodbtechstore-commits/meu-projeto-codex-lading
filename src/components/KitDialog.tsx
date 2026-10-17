import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Heart, X } from "lucide-react";
import { brand, catalog, type Kit } from "../content";
import {
  buildKitMessage,
  availabilityLabel,
  getWhatsAppUrl,
  photoStyle,
} from "../utils/commerce";
import { KitPrice } from "./KitPrice";
export function KitDialog({
  kit,
  onClose,
}: {
  kit: Kit | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);
  const [manual, setManual] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = kit ? [kit, ...kit.additionalImages] : [];
  const image = images[imageIndex] ?? kit;
  const message = kit ? buildKitMessage(kit) : "";
  const whatsapp = getWhatsAppUrl(brand.whatsapp, message);
  useEffect(() => {
    setCopied(false);
    setManual(false);
    setImageIndex(0);
    if (kit && !ref.current?.open) ref.current?.showModal();
    if (!kit && ref.current?.open) ref.current.close();
  }, [kit]);
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setManual(true);
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([message], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    const brandSlug = brand.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    a.download = `meu-${kit?.id}-${brandSlug}.txt`;
    document.body.append(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <dialog
      ref={ref}
      className="kit-dialog"
      aria-labelledby="selection-title"
      onCancel={onClose}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const b = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < b.left ||
            e.clientX > b.right ||
            e.clientY < b.top ||
            e.clientY > b.bottom
          )
            onClose();
        }
      }}
    >
      {kit && (
        <>
          <div className="dialog-toolbar">
            <button
              className="icon-button dialog-close"
              onClick={onClose}
              aria-label="Fechar seleção"
            >
              <X size={22} />
            </button>
          </div>
          <div className={`dialog-art ${kit.color}`}>
            <img
              src={image!.image}
              alt={image!.imageAlt}
              className={
                image!.imageMode === "photo" ? "product-photo" : undefined
              }
              style={photoStyle(image!)}
              width="900"
              height="900"
            />
            {images.length > 1 && (
              <div
                className="dialog-thumbnails"
                role="group"
                aria-label={`Imagens do ${kit.name}`}
              >
                {images.map((picture, i) => (
                  <button
                    key={`${picture.image}-${i}`}
                    className="gallery-thumbnail"
                    aria-label={`Ver imagem ${i + 1} do ${kit.name}`}
                    aria-pressed={i === imageIndex}
                    onClick={() => setImageIndex(i)}
                  >
                    <img
                      src={picture.image}
                      alt=""
                      width="52"
                      height="52"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="dialog-content">
            <span className="eyebrow">
              <Heart size={14} /> SEU FAVORITO
            </span>
            <h2 id="selection-title">
              Um momento com o <em>{kit.name}.</em>
            </h2>
            <p>{kit.detail}</p>
            <KitPrice kit={kit} />
            {(!catalog.demoMode || kit.availability !== "on-request") && (
              <span className={`kit-availability ${kit.availability}`}>
                {availabilityLabel(kit)}
              </span>
            )}
            {images.length > 1 && (
              <span className="sr-only" role="status">
                Imagem {imageIndex + 1} de {images.length}: {image!.imageAlt}
              </span>
            )}
            {kit.includedProducts.length > 0 && (
              <div className="kit-details">
                <h3>O que vem no kit</h3>
                <ul>
                  {kit.includedProducts.map((product, i) => (
                    <li key={i}>
                      <strong>
                        {product.quantity ? `${product.quantity} × ` : ""}
                        {product.name}
                      </strong>
                      {product.details && <span>{product.details}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {kit.highlights.length > 0 && (
              <div className="kit-details">
                <h3>Destaques deste kit</h3>
                <ul>
                  {kit.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="selection-note">
              <strong>Sua escolha começa aqui.</strong>
              <p>
                {kit.availability === "unavailable"
                  ? "Este kit está indisponível no momento. Você pode registrar seu interesse e consultar a marca sobre uma possível disponibilidade, sem efetuar um pedido."
                  : whatsapp
                    ? "Converse com a marca para confirmar todos os detalhes do seu kit."
                    : "O canal de atendimento será disponibilizado em breve. Guarde este resumo para consultar a marca quando estiver disponível."}
              </p>
            </div>
            {whatsapp ? (
              <a
                className="button button-primary"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                {kit.availability === "unavailable"
                  ? "Consultar disponibilidade"
                  : "Consultar no WhatsApp"}{" "}
                <ArrowUpRight size={18} />
              </a>
            ) : (
              <>
                <button className="button button-primary" onClick={copy}>
                  {copied ? (
                    <>
                      <Check size={18} /> Resumo copiado
                    </>
                  ) : (
                    <>
                      <Copy size={18} /> Copiar meu interesse
                    </>
                  )}
                </button>
                <button
                  className="text-button download-button"
                  onClick={download}
                >
                  <Download size={16} /> Baixar resumo da escolha
                </button>
              </>
            )}
            {manual && (
              <label className="manual-copy">
                Selecione e copie seu resumo
                <textarea
                  readOnly
                  value={message}
                  onFocus={(e) => e.target.select()}
                  rows={5}
                />
              </label>
            )}
            <p role="status" className="copy-status">
              {copied
                ? "Pronto! Seu resumo foi copiado para a área de transferência."
                : ""}
            </p>
            <p className="fine-print">
              {catalog.demoMode ? "Vitrine demonstrativa. " : ""}Selecionar um
              kit não efetua uma compra. Composição e condições a confirmar.
            </p>
          </div>
        </>
      )}
    </dialog>
  );
}
