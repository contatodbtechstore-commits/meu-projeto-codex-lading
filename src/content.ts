/** Configuração pública: substitua apenas por dados comerciais confirmados. */
const brandName = "Aura Bloom";
export const brand = {
  name: brandName,
  descriptor: "BEAUTY",
  fullName: `${brandName} Beauty`,
  signature: "bloom.",
  tagline: "Seu ritual, sua essência.",
  whatsapp: "", // Somente dígitos, com código do país e DDD.
  email: "",
  instagram: "", // URL HTTPS real; vazio mantém o link oculto.
};
/** Desative somente após substituir textos, fotos e informações demonstrativas. */
export const catalog = {
  demoMode: true,
  // {kit} é substituído pelo kit escolhido; {brand} é opcional.
  whatsappMessage:
    "Olá! Tenho interesse no {kit} e gostaria de saber mais sobre ele.",
};
export const seo = {
  title: `${brand.fullName} — ${brand.tagline}`,
  description: `Encontre seu momento de autocuidado com a ${brand.fullName}. Explore os kits de cosméticos e descubra um ritual de beleza só seu.`,
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
    image: "/images/hero.svg",
    imageAlt: `Composição ilustrativa ${brand.name}: frasco rosa, bisnaga, sérum e pote sobre um pedestal, com pétalas delicadas`,
    imageMode: "mockup",
  },
  editorial: {
    image: "/images/editorial.svg",
    imageAlt: `Mockup ${brand.name} em uma composição de pétalas, rosa suave e reflexos de luz`,
    imageMode: "mockup",
  },
};
export const kits: Kit[] = [
  {
    id: "glow",
    name: "Kit Glow",
    mood: "Um toque de luz",
    description:
      "Um convite para deixar o seu momento de beleza ainda mais especial.",
    image: "/images/glow.svg",
    imageAlt:
      "Mockup ilustrativo do Kit Glow: composição demonstrativa de cosméticos",
    imageMode: "mockup",
    imageFit: "contain",
    imagePosition: "center",
    price: null,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [],
    availability: "on-request",
    order: 10,
    published: true,
    label: "PARA FLORESCER",
    color: "rose",
    detail: "Para quem quer trazer uma nova inspiração ao ritual de beleza.",
  },
  {
    id: "essencial",
    name: "Kit Essencial",
    mood: "O cuidado de todo dia",
    description:
      "Seus favoritos reunidos para transformar a rotina em um pequeno ritual.",
    image: "/images/essencial.svg",
    imageAlt:
      "Mockup ilustrativo do Kit Essencial: composição demonstrativa de cosméticos",
    imageMode: "mockup",
    imageFit: "contain",
    imagePosition: "center",
    price: null,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [],
    availability: "on-request",
    order: 20,
    published: true,
    label: "SEU NOVO RITUAL",
    color: "lilac",
    detail:
      "Para quem valoriza a praticidade de ter o cuidado reunido em um kit.",
  },
  {
    id: "premium",
    name: "Kit Premium",
    mood: "Extraordinário, como você",
    description:
      "Uma experiência de autocuidado para viver com tempo, presença e carinho.",
    image: "/images/premium.svg",
    imageAlt:
      "Mockup ilustrativo do Kit Premium: composição demonstrativa de cosméticos",
    imageMode: "mockup",
    imageFit: "contain",
    imagePosition: "center",
    price: null,
    promotionalPrice: null,
    additionalImages: [],
    includedProducts: [],
    highlights: [],
    availability: "on-request",
    order: 30,
    published: true,
    label: "UM MOMENTO ESPECIAL",
    color: "plum",
    detail:
      "Para reservar um momento especial para si ou inspirar um presente.",
  },
];
export const faqs = [
  {
    question: "Como encontro o kit ideal para mim?",
    answer:
      "Comece pelo momento que você deseja criar: uma pausa para florescer com o Glow, um cuidado para a rotina com o Essencial ou uma experiência especial com o Premium. Selecione um kit para guardar sua escolha e preparar suas perguntas.",
  },
  {
    question: "O que vem em cada kit?",
    answer:
      "Os kits e as imagens desta vitrine são demonstrativos. A composição, os tamanhos, os ingredientes e a disponibilidade precisam ser confirmados com a marca antes de qualquer compra.",
  },
  {
    question: "Posso escolher um kit para presentear?",
    answer:
      "Sim, você pode explorar as sugestões pensando em alguém especial. Confirme com a marca a composição disponível e as opções de apresentação antes de comprar.",
  },
  {
    question: "Como faço para comprar ou saber mais?",
    answer:
      "Clique em “Quero este Kit” para selecionar seu favorito. Você poderá copiar ou baixar um resumo com suas perguntas. Quando o canal de atendimento da marca estiver disponível, ele aparecerá nessa etapa. Nenhum pedido ou pagamento é realizado nesta página.",
  },
  {
    question: "Onde consulto entrega e formas de pagamento?",
    answer:
      "Essas informações ainda não foram disponibilizadas. Consulte diretamente a marca sobre preço, pagamento, entrega e condições de compra antes de concluir seu pedido.",
  },
];
