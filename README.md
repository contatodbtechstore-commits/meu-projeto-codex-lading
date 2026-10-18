# Aura Bloom Beauty

A marca atual da página é **Grand Amour**. A nova seção de kits da prévia está documentada em [PREVIA-KITS.md](PREVIA-KITS.md); suas capas usam o CDN original da MKC e exigem acesso externo a `dcdn-us.mitiendanube.com` durante a verificação de imagens.

Landing page de cosméticos em português brasileiro, com React, TypeScript, Vite, Tailwind CSS 4, Motion e Lucide React. Layout editorial responsivo, fontes hospedadas localmente, mockups vetoriais originais e navegação por âncoras. A vitrine assimétrica dá destaque ao Kit Premium e usa composições próprias para Glow e Essencial. O hero combina tipografia expressiva, texturas suaves e produtos em camadas; a seção da marca explora um recorte de campanha em close.

## Executar

Requer Node.js 22.12+ (validado com Node.js 24) e npm.

```sh
npm ci
npm run dev
```

O Vite informa o endereço do servidor. Para gerar e conferir a versão de produção:

```sh
npm run build
npm run preview
```

A pasta `dist/` pode ser publicada em uma hospedagem de arquivos estáticos. Não há backend, checkout, rastreamento ou coleta de dados pessoais.

## Personalizar

O guia completo de kits, WhatsApp e publicação está em [COMERCIAL.md](COMERCIAL.md).

Todos os dados públicos principais ficam em `src/content.ts`:

- `brandName`, `brand.descriptor`, `brand.fullName`, `brand.signature` e `brand.tagline`: identidade. O nome é reutilizado na interface, nas mensagens e nos metadados. O favicon e os rótulos desenhados dentro dos SVGs continuam sendo artes separadas; substitua-os pela identidade e pelas fotos da marca.
- `kits`: nome, descrição, textos, etiqueta e composição de cada kit. Preserve os IDs únicos; `color` aceita `rose`, `lilac` ou `plum` e mantém a direção de arte aprovada.
- `price` e `promotionalPrice`: preço regular e promoção opcional. A promoção exige preço regular e deve ser menor. `price` é um valor numérico **em reais**, por exemplo `149.9`. Use `null` para ocultar. O preço aparece no card e no resumo da seleção; o site não inventa descontos, parcelamento ou taxas.
- `image` e `imageAlt`: caminho da foto e descrição acessível. Prefira arquivos locais em `public/images/`, em WebP/AVIF/JPEG bem comprimido. Para uma foto real sem as margens dos mockups, configure `imageMode: "photo"`. Use `imageFit: "contain"` para mostrar o produto inteiro ou `"cover"` para preencher o quadro; `imagePosition` ajusta o enquadramento, como `"center"` ou `"50% 35%"`. As ilustrações atuais usam `"mockup"` e preservam a composição original.
- `visuals.hero` e `visuals.editorial`: imagem, texto alternativo e enquadramento das duas composições maiores, com os mesmos campos das fotos dos kits.
- `additionalImages`, `includedProducts`, `highlights`, `availability`, `published` e `order`: galeria, composição, destaques, disponibilidade, publicação e ordem dos kits, conforme o guia comercial. Os campos permanecem vazios ou a confirmar nos demonstrativos.
- `brand.whatsapp`: telefone comercial real com país e DDD. O formato é validado antes de exibir o link. A mensagem leva o kit selecionado; só o visitante pode enviá-la no WhatsApp. Sem número válido, permanecem cópia, alternativa manual e download do resumo.
- `brand.email` e `brand.instagram`: contatos opcionais. O Instagram exige URL HTTPS. Não inclua credenciais: são dados públicos.
- `catalog.demoMode`: mantenha `true` enquanto os dados forem demonstrativos. Depois de inserir dados reais, revisar as respostas de `faqs` e substituir as fotos, use `false` para retirar os avisos de vitrine demonstrativa. A seleção continua sem efetuar compra.
- `seo.title` e `seo.description`: são inseridos no **HTML estático** pelo Vite, incluindo Open Graph. Preencha `seo.siteUrl` somente com o domínio HTTPS público definitivo para gerar canonical e `og:url`. Sem domínio informado, nenhum endereço fictício é gerado. Refaça `npm run build` após alterações.

Exemplo de campos para um kit real (valores apenas ilustrativos de configuração):

```ts
image: "/images/meu-kit.webp",
imageAlt: "Descreva os produtos reais que aparecem na foto",
imageMode: "photo",
imageFit: "contain",
imagePosition: "center",
price: null, // insira somente o preço confirmado
```

`src/styles.css` controla tipografia e direção de arte. `index.html` é o template de metadados; os marcadores `__SITE_*__` são preenchidos automaticamente. As imagens atuais são ilustrações SVG originais, sem alegação de composição ou volumes reais. Depois de inserir fotos e textos definitivos, confira os enquadramentos e as quebras novamente em celular e desktop.

As fontes Manrope e Cormorant Garamond são distribuídas pelos pacotes `@fontsource`, com suas respectivas licenças SIL Open Font License incluídas nos pacotes. Não há requisições a provedores externos de fontes ou imagens.

## Interações e acessibilidade

Menu mobile com estado expandido, fechamento por Escape e fechamento ao passar para desktop, indicador de seção ativa, FAQ nativo acessível pelo teclado, modal nativo com contenção e retorno do foco, fechamento por Escape e clique fora, cópia com alternativa manual quando indisponível e download local do resumo. O controle na faixa de mensagens permite pausar e retomar a faixa e a flutuação dos produtos por teclado ou toque. O botão de fechar do modal permanece disponível durante a rolagem em telas pequenas. O movimento reduzido do sistema desativa a flutuação e o marquee, as transições CSS e a rolagem suave. As animações de entrada respeitam o MotionConfig.

## Validação

```sh
npm run build
npx playwright install chromium
npm test
```

Se o sistema já tiver Chromium instalado:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

O Playwright inicia a versão de produção na porta 4173. Execute o build antes dos testes; não ocupe essa porta com uma versão desatualizada. A suíte valida navegação, recursos locais, seleção e troca de kit, retorno do foco, clipboard e alternativa manual, download, menu mobile, FAQ por teclado, ausência de transbordamento de 320 a 1440 px, controle de movimento, resize do menu, navegação pelos links internos, rolagem do modal pequeno, metadados estáticos, preços opcionais, formatação de WhatsApp e acessibilidade automatizada. A avaliação automatizada não substitui uma auditoria completa de acessibilidade.

Os resultados e limites da revisão final estão em [AUDITORIA.md](AUDITORIA.md).

## Estrutura

```text
src/
  App.tsx                   Seções e navegação
  content.ts                Conteúdo e configuração pública
  main.tsx                  Entrada e fontes locais
  styles.css                Direção de arte e responsividade
  hooks/useMotionPreference.ts  Preferência de movimento em tempo real
  utils/commerce.ts         Preço, WhatsApp e enquadramento de fotos
  components/
    Brand.tsx               Logotipo e símbolo vetorial
    Reveal.tsx              Entrada progressiva das seções
    KitDialog.tsx           Fluxo de interesse e galeria
    KitCollection.tsx       Catálogo ordenado e publicação dos cards
    KitPrice.tsx            Preço regular e promocional opcional
public/
  favicon.svg
  images/                   Mockups SVG locais
  robots.txt
tests/
  landing.spec.ts            Testes funcionais de navegador e SEO
  commerce.spec.ts           Catálogo, preço e URL do WhatsApp
  commercial-fixture.spec.ts Configuração comercial em cópia isolada
```

Cada tarefa na nuvem já é isolada. Utilize o checkout existente; não crie um Git worktree sem solicitação explícita. Dependências e `dist/` são arquivos gerados; servidores precisam ser reiniciados em novas sessões. Nenhum segredo ou serviço externo é necessário para desenvolver e testar esta página. `npm run check:release` valida a configuração comercial antes do build; no estado demonstrativo, ele aponta as pendências esperadas descritas no guia.
