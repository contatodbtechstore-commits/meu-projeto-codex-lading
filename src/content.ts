/** Configuração pública: substitua apenas por dados comerciais confirmados. */
const brandName = "Grand Amour";
export const brand = {
  name: brandName,
  descriptor: "BELEZA & COSMÉTICOS",
  fullName: `${brandName} — Beleza & Cosméticos`,
  signature: "amour.",
  tagline: "Beleza real. Cuidado consciente.",
  whatsapp: "", // Somente dígitos, com código do país e DDD.
  email: "",
  instagram: "", // URL HTTPS real; vazio mantém o link oculto.
};
/** Desative somente após substituir textos, fotos e informações demonstrativas. */
export const catalog = {
  demoMode: false,
  // {kit} é substituído pelo kit escolhido; {brand} é opcional.
  whatsappMessage:
    "Olá! Tenho interesse em {kit} e gostaria de saber mais sobre ele.",
};
export const seo = {
  title: `${brand.fullName} — ${brand.tagline}`,
  description: `Encontre seu momento de autocuidado com a ${brand.fullName}. Conheça os cosméticos Grand Amour e descubra um ritual de beleza só seu.`,
  // Preencha após definir o domínio público; vazio não gera URL ou canonical fictícios.
  siteUrl: "",
};

export interface ProductImage {
  image: string;
  imageAlt: string;
  imageMode: "mockup" | "photo";
  imageFit?: "contain" | "cover";
  imagePosition?: string;
}
export type KitAvailability = "available" | "on-request" | "unavailable";
export interface IncludedProduct {
  name: string;
  quantity?: number;
  details?: string;
}
export interface Kit extends ProductImage {
  id: string;
  kind?: "kit" | "product";
  name: string;
  mood: string;
  description: string;
  label: string;
  color: "rose" | "lilac" | "plum";
  detail: string;
  /** Valor numérico em reais. null oculta o preço, sem inventar condições. */
  price: number | null;
  /** Só é exibido quando há preço regular e a promoção é menor que ele. */
  promotionalPrice: number | null;
  additionalImages: ProductImage[];
  includedProducts: IncludedProduct[];
  highlights: string[];
  availability: KitAvailability;
  /** Menor número aparece primeiro. Valores iguais preservam a ordem do arquivo. */
  order: number;
  /** false remove o kit da vitrine, sem apagar a configuração. */
  published: boolean;
  /** Opcional: substitui o texto geral, usando os mesmos marcadores. */
  whatsappMessage?: string;
}
export const visuals: { hero: ProductImage; editorial: ProductImage } = {
  hero: {
    image: "/images/grand-amour/serum-editorial.png",
    imageAlt: "Sérum C+E Grand Amour: frasco âmbar, conta-gotas e embalagem original",
    imageMode: "photo",
    imageFit: "contain",
  },
  editorial: {
    image: "/images/grand-amour/nutri-skin.png",
    imageAlt: "Nutri Skin Grand Amour: creme facial e embalagem original de 60 g",
    imageMode: "photo",
    imageFit: "contain",
  },
};
/** Fotos: extraídas do PDF Grand Amour. Preços: capturas fornecidas pela marca.
 * Estoque e condições de pagamento não foram confirmados. */
export const kits: Kit[] = [
{
  "id": "serum-ce",
  "kind": "product",
  "name": "Sérum C+E",
  "mood": "Um toque de luminosidade",
  "description": "Sérum facial com vitaminas C e E para o seu ritual de cuidado.",
  "image": "/images/grand-amour/serum-ce.png",
  "imageAlt": "Sérum C+E Grand Amour, produto e embalagem original, 30 ml",
  "imageMode": "photo",
  "imageFit": "contain",
  "imagePosition": "center",
  "price": 59.99,
  "promotionalPrice": null,
  "additionalImages": [],
  "includedProducts": [],
  "highlights": [
    "30 ml",
    "Vitamina C + Vitamina E"
  ],
  "availability": "on-request",
  "order": 10,
  "published": true,
  "label": "VITAMINAS C + E",
  "color": "rose",
  "detail": "Sérum facial com vitaminas C e E para o seu ritual de cuidado."
},
{
  "id": "serum-niacin",
  "kind": "product",
  "name": "Sérum Niacin",
  "mood": "Equilíbrio no seu ritual",
  "description": "Sérum facial com niacinamida, vitamina E e extrato de salix alba.",
  "image": "/images/grand-amour/serum-niacin.png",
  "imageAlt": "Sérum Niacin Grand Amour, produto e embalagem original, 30 ml",
  "imageMode": "photo",
  "imageFit": "contain",
  "imagePosition": "center",
  "price": 59.99,
  "promotionalPrice": null,
  "additionalImages": [],
  "includedProducts": [],
  "highlights": [
    "30 ml",
    "Niacinamida",
    "Vitamina E",
    "Extrato de salix alba"
  ],
  "availability": "on-request",
  "order": 20,
  "published": true,
  "label": "NIACINAMIDA",
  "color": "lilac",
  "detail": "Sérum facial com niacinamida, vitamina E e extrato de salix alba."
},
{
  "id": "nutri-skin",
  "kind": "product",
  "name": "Nutri Skin",
  "mood": "Uma pausa para hidratar",
  "description": "Creme facial de hidratação para um momento de cuidado com a pele.",
  "image": "/images/grand-amour/nutri-skin.png",
  "imageAlt": "Nutri Skin Grand Amour, produto e embalagem original, 60 g",
  "imageMode": "photo",
  "imageFit": "contain",
  "imagePosition": "center",
  "price": 74.99,
  "promotionalPrice": null,
  "additionalImages": [],
  "includedProducts": [],
  "highlights": [
    "60 g"
  ],
  "availability": "on-request",
  "order": 30,
  "published": true,
  "label": "HIDRATAÇÃO",
  "color": "plum",
  "detail": "Creme facial de hidratação para um momento de cuidado com a pele."
},
{
  "id": "puri-derma",
  "kind": "product",
  "name": "Puri Derma",
  "mood": "O começo do cuidado",
  "description": "Sabonete de limpeza facial para a primeira etapa do seu ritual.",
  "image": "/images/grand-amour/puri-derma.png",
  "imageAlt": "Puri Derma Grand Amour, produto e embalagem original, 120 ml",
  "imageMode": "photo",
  "imageFit": "contain",
  "imagePosition": "center",
  "price": 72.99,
  "promotionalPrice": null,
  "additionalImages": [],
  "includedProducts": [],
  "highlights": [
    "120 ml",
    "Pantenol",
    "Algas e chá verde"
  ],
  "availability": "on-request",
  "order": 40,
  "published": true,
  "label": "LIMPEZA FACIAL",
  "color": "rose",
  "detail": "Sabonete de limpeza facial para a primeira etapa do seu ritual."
},
{
  "id": "hidra-derm",
  "kind": "product",
  "name": "Hidra Derm",
  "mood": "Frescor em cada pausa",
  "description": "Bruma facial hidratante para refrescar e complementar seu cuidado.",
  "image": "/images/grand-amour/hidra-derm.png",
  "imageAlt": "Hidra Derm Grand Amour, produto e embalagem original, 100 ml",
  "imageMode": "photo",
  "imageFit": "contain",
  "imagePosition": "center",
  "price": 59.99,
  "promotionalPrice": null,
  "additionalImages": [],
  "includedProducts": [],
  "highlights": [
    "100 ml"
  ],
  "availability": "on-request",
  "order": 50,
  "published": true,
  "label": "BRUMA HIDRATANTE",
  "color": "lilac",
  "detail": "Bruma facial hidratante para refrescar e complementar seu cuidado."
},
 ];
export const faqs = [
  {
    question: "Como encontro o produto ideal para mim?",
    answer: "Conheça a função de cada produto e consulte a marca sobre a escolha mais adequada à sua rotina. Para necessidades específicas da pele, procure orientação de um dermatologista.",
  },
  {
    question: "Quais produtos fazem parte da linha?",
    answer: "A linha apresentada reúne Sérum C+E, Sérum Niacin, Nutri Skin, Puri Derma e Hidra Derm. Abra cada produto para consultar sua apresentação e registrar seu interesse.",
  },
  {
    question: "As fotos são dos produtos Grand Amour?",
    answer: "Sim. As imagens foram extraídas do material de apresentação da marca e preservam as embalagens originais. Consulte a marca para confirmar a apresentação disponível no momento da compra.",
  },
  {
    question: "Como faço para comprar ou saber mais?",
    answer: "Clique em “Quero este produto” para selecionar seu favorito. Enquanto o WhatsApp não estiver cadastrado, você pode copiar ou baixar seu interesse. Nenhum pedido ou pagamento é realizado nesta página.",
  },
  {
    question: "Onde consulto entrega e formas de pagamento?",
    answer: "Confirme diretamente com a Grand Amour os valores vigentes, a disponibilidade, o pagamento e a entrega. Os preços exibidos são as referências fornecidas pela marca; condições de Pix e parcelamento não estão aplicadas nesta página.",
  },
];
