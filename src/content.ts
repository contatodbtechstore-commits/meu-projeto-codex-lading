/**
 * CONFIGURAÇÃO CENTRAL — troque somente informações confirmadas.
 * Valores null significam "não cadastrado", nunca ofertas ou provas fictícias.
 */
export type Photo = { src: string; alt: string };
export type Testimonial = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  photo?: string;
  approved: true;
};
export type Faq = { question: string; answer: string; verified: boolean };
export type Kit = {
  name: string;
  subtitle: string;
  description: string;
  quantity: number | null;
  includedProducts: string[];
  features: string[];
  images: Photo[];
  priceCents: number | null;
  originalPriceCents: number | null;
  paymentInfo: string | null;
  checkoutUrl: string | null;
  availability: string | null;
};

export const content = {
  brand: {
    name: "Sua Marca",
    logoUrl: null as string | null,
    description: "Uma experiência de beleza e autocuidado preparada com carinho.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || null,
    instagramUrl: null as string | null,
    contactEmail: null as string | null,
    whatsapp: {
      phone: null as string | null,
      message: "Olá! Tenho interesse no kit de cosméticos e gostaria de mais informações."
    },
    legal: {
      businessName: null as string | null,
      cnpj: null as string | null,
      address: null as string | null,
      privacyUrl: null as string | null,
      termsUrl: null as string | null
    }
  },
  kit: {
    name: "Seu Kit Especial",
    subtitle: "Uma seleção pensada para transformar momentos em rituais",
    description: "Personalize esta descrição com os produtos reais que compõem seu kit de cosméticos.",
    quantity: null,
    includedProducts: [],
    features: [
      "Uma experiência de cuidado para o seu dia a dia",
      "Diversos itens reunidos em uma única escolha",
      "Um carinho especial para você ou para presentear"
    ],
    images: [],
    priceCents: null,
    originalPriceCents: null,
    paymentInfo: null,
    checkoutUrl: null,
    availability: null
  } satisfies Kit,
  benefits: [
    { icon: "sparkles", title: "Beleza sem complicação", description: "Uma forma simples de organizar seu momento de cuidado." },
    { icon: "heart", title: "Um tempo só seu", description: "Transforme pequenos instantes em pausas especiais." },
    { icon: "gift", title: "Tudo em um kit", description: "Produtos reunidos para facilitar sua escolha." },
    { icon: "ribbon", title: "Um presente encantador", description: "Uma ideia delicada para demonstrar carinho." }
  ],
  faqs: [
    { question: "O que vem no kit?", answer: "A composição completa será informada aqui assim que os itens forem cadastrados.", verified: false },
    { question: "Como funciona a entrega?", answer: "Informações de regiões atendidas, prazos e frete pendentes de confirmação.", verified: false },
    { question: "Quais são as formas de pagamento?", answer: "As condições de pagamento serão informadas após a configuração do checkout.", verified: false },
    { question: "Como utilizar os produtos?", answer: "As orientações dependem dos produtos incluídos; consulte os rótulos oficiais.", verified: false },
    { question: "Posso comprar para presentear?", answer: "Consulte a equipe sobre embalagem e envio para presente.", verified: false },
    { question: "Como entrar em contato?", answer: "Os canais oficiais de atendimento serão exibidos após a configuração.", verified: false }
  ] satisfies Faq[],
  testimonials: [] as Testimonial[],
  // Habilite apenas após revisar marca, produtos, imagens, ofertas e dados legais.
  publishReady: false
};
