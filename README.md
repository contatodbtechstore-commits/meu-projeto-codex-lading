# Landing Page Premium de Kits de Cosméticos

Projeto real em **Next.js (App Router) + TypeScript + Tailwind CSS + Motion + Lucide**, mobile-first, com componentes de vendas e dados centralizados.

## Como executar

Requisitos: Node.js >= 20 e npm.

1. Clone este repositório e abra a pasta no terminal.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Acesse `http://localhost:3000`.

Para conferir a qualidade: `npm run lint`, `npm run typecheck` e `npm run build`.

## O único arquivo de configuração comercial

Edite **`src/content.ts`**. Ele contém:
- marca, logotipo, domínio, Instagram, e-mail e WhatsApp;
- nome do kit, descrição, itens e quantidade;
- galeria de fotos reais (URLs HTTPS ou imagens em `public/` com caminhos `/arquivo.jpg`);
- preço atual e original em **centavos** (por exemplo, 12990 significa R$ 129,90);
- condições de pagamento, disponibilidade real e **checkoutUrl** HTTPS;
- benefícios genéricos, perguntas e respostas verificadas e depoimentos autorizados;
- políticas, CNPJ, dados jurídicos e endereço.

**Não use fotos genéricas como se fossem fotos do produto.** Até as imagens reais serem cadastradas, a página mostra apenas uma ilustração conceitual rotulada como tal.

## Checklist obrigatório antes de publicar

- [ ] Substituir "Sua Marca" e o nome ilustrativo do kit.
- [ ] Adicionar fotos, itens, quantidade e características reais.
- [ ] Confirmar preços e condições (ou mantê-los omitidos).
- [ ] Cadastrar URL real HTTPS do checkout; todos os CTAs ficam desabilitados até então.
- [ ] Cadastrar WhatsApp com DDI, ex.: 5511999999999, para ativar o botão.
- [ ] Revisar todas as seis FAQs e mudar `verified` para true apenas quando corretas.
- [ ] Incluir somente avaliações reais e aprovadas; se vazio, depoimentos não aparecem.
- [ ] Cadastrar política de privacidade, termos, CNPJ, razão social, endereço e contatos.
- [ ] Definir `NEXT_PUBLIC_SITE_URL` para o domínio final, sempre HTTPS.
- [ ] Revisar em telas 320px, 390px, tablet, 1366px e desktop largo.
- [ ] Depois de revisar tudo, mudar `publishReady` para true em `src/content.ts`.

Enquanto `publishReady` estiver false, `robots.txt` bloqueia indexação e `sitemap.xml` fica vazio. Este controle não substitui uma proteção por senha para manter um ambiente privado.

## Componentes

`src/components/`: Header, Hero, Benefits, ProductVisual, ProductGallery, ProductOffer, LifestyleSection, Testimonials, FinalOffer, FAQ, Footer, WhatsAppButton, MobileCTA, BuyButton e Reveal.

## Observações importantes

- Este projeto **não substitui diretamente o tema Ipanema da Nuvemshop**; é uma aplicação Next.js independente. Para checkout Nuvemshop, preencha `checkoutUrl` com o link real da oferta/produto. Para integrá-lo como página dentro da Nuvemshop, avalie a limitação técnica do tema e a infraestrutura de hospedagem do domínio.
- A landing page está deliberadamente sem preço, depoimento, produto ou desconto fictícios.
- A página não foi publicada por esta entrega.
