# Configuração comercial e publicação

O design e o fluxo de seleção foram preservados. Nenhum dado comercial foi inventado: a vitrine continua demonstrativa, com preços e promoções `null`, listas vazias, disponibilidade a confirmar e sem WhatsApp ou domínio cadastrados.

## Alterar os kits

Edite os objetos de `kits` em `src/content.ts`. Não é necessário alterar componentes para preencher estes campos:

| Campo              | Finalidade                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `id`               | Identificador único e estável: letras minúsculas, números e hífens                                            |
| `name`             | Nome exibido no card, na seleção e na mensagem                                                                |
| `description`      | Texto curto do card                                                                                           |
| `detail`           | Texto mais detalhado na seleção                                                                               |
| `mood`             | Frase editorial acima do nome                                                                                 |
| `label`            | Etiqueta curta na imagem; use `""` para omitir                                                                |
| `image`            | Imagem principal, preferencialmente arquivo local em `public/images/`                                         |
| `imageAlt`         | Descrição acessível da imagem real                                                                            |
| `imageMode`        | `"photo"` para fotos; `"mockup"` preserva as margens e composições das ilustrações atuais                     |
| `imageFit`         | `"contain"` mostra a foto inteira; `"cover"` preenche o quadro                                                |
| `imagePosition`    | Enquadramento, como `"center"` ou `"50% 35%"`                                                                 |
| `additionalImages` | Lista opcional de imagens com os mesmos campos `image`, `imageAlt`, `imageMode`, `imageFit` e `imagePosition` |
| `price`            | Preço regular em reais, numérico ou `null`                                                                    |
| `promotionalPrice` | Preço promocional em reais, numérico ou `null`                                                                |
| `includedProducts` | Lista de produtos: `name`, `quantity` opcional (inteiro positivo) e `details` opcionais                       |
| `highlights`       | Lista de textos curtos com os destaques confirmados do kit                                                    |
| `availability`     | Disponibilidade conforme a tabela abaixo                                                                      |
| `order`            | Menor número aparece primeiro; empates preservam a ordem do arquivo                                           |
| `published`        | `false` retira o kit da vitrine sem apagar sua configuração                                                   |
| `color`            | Tema do painel de seleção: `"rose"`, `"lilac"` ou `"plum"`                                                    |
| `whatsappMessage`  | Texto opcional por kit; sem ele, usa o texto geral                                                            |

A ordem é aplicada aos dados, à navegação por teclado e à sequência no celular. No desktop, os kits continuam organizados em grupos editoriais de três: dois cards compactos e o terceiro em destaque. As posições, proporções e paleta da vitrine acompanham a composição, sem ficar presas ao nome ou ID de um produto. Também é possível exibir apenas um ou dois kits ou novos grupos. Se todos estiverem ocultos, há uma mensagem visível de coleção em preparação.

`includedProducts` e `highlights` aparecem na seleção somente quando preenchidos. Não são inseridos ingredientes, quantidades, volumes ou alegações automaticamente. As imagens adicionais habilitam uma galeria acessível, sem reprodução automática; a imagem selecionada é reiniciada ao trocar de kit.

Preços são números em reais, usando ponto decimal no código. Sem preço regular, nenhum preço é exibido. A promoção só é válida quando existe preço regular e o valor promocional é menor. Não há cálculo de frete, parcelamento, taxa ou desconto percentual inventado. O build aponta configurações inconsistentes em vez de publicá-las silenciosamente.

### Disponibilidade

| Valor           | Comportamento                                                                               |
| --------------- | ------------------------------------------------------------------------------------------- |
| `"on-request"`  | Disponibilidade a confirmar; mantém “Quero este Kit”. É o padrão demonstrativo              |
| `"available"`   | Exibe “Disponível” e permite manifestar interesse                                           |
| `"unavailable"` | Exibe “Indisponível no momento”; a ação vira consulta de disponibilidade, sem fingir pedido |

A informação é mantida manualmente na configuração. Não existe integração de estoque; confirmar o pedido e as condições continua sendo responsabilidade da marca no atendimento.

## WhatsApp em um único lugar

Preencha apenas `brand.whatsapp` com o telefone comercial real, incluindo código do país e DDD. O campo atual está vazio; nenhum número de demonstração foi aplicado à vitrine.

O texto geral está em `catalog.whatsappMessage`:

```ts
"Olá! Tenho interesse no {kit} e gostaria de saber mais sobre ele.";
```

`{kit}` recebe o nome selecionado e `{brand}` pode receber o nome da marca. Se necessário, `kit.whatsappMessage` substitui o texto geral para aquele kit. A identificação do kit é mantida mesmo se o marcador for esquecido. Para um kit indisponível, o texto padrão pede informação sobre disponibilidade.

O fluxo é: CTA da página → coleção → “Quero este Kit” → resumo do kit → WhatsApp com mensagem preenchida. O cliente ainda precisa confirmar o envio no WhatsApp. O site não envia mensagens automaticamente, não confirma pedidos e não cobra pagamentos.

Sem telefone válido, o resumo mostra que o atendimento ainda será disponibilizado e permite copiar ou baixar o interesse. Se o navegador negar acesso ao clipboard, há cópia manual. Não é um carrinho ou checkout e não depende de backend ou credenciais.

## Inserir dados reais

1. Substitua a identidade da marca, o favicon e as fotos demonstrativas. Todos os campos de imagens dos kits e das composições maiores (`visuals`) estão em `src/content.ts`.
2. Preencha apenas preços, composição, destaques e disponibilidade confirmados. Deixe campos opcionais como `null` ou `[]` enquanto não houver informações.
3. Configure o telefone comercial e revise a mensagem. Confira pessoalmente o destinatário no WhatsApp antes de divulgar o site.
4. Revise as respostas de `faqs`, os textos editoriais e os contatos. Não publique as respostas demonstrativas como políticas comerciais da marca.
5. Depois da substituição, defina `catalog.demoMode: false`. Esse campo apenas controla os avisos demonstrativos; não cria conteúdo comercial real.
6. Preencha `seo.siteUrl` com o domínio HTTPS público definitivo. Os metadados são gerados no HTML estático do build; canonical e `og:url` não usam endereço fictício.

Use arquivos de imagem bem comprimidos em WebP, AVIF ou JPEG, com resolução suficiente para o quadro. Imagens adicionais também devem ser otimizadas: uma galeria não reduz automaticamente arquivos pesados. A validação confirma a existência dos arquivos locais; imagens externas HTTPS não são baixadas para provar disponibilidade.

## Publicação estática

Como o pedido de publicação terminou em “Verifique”, esta preparação assume **hospedagem estática na raiz do domínio**, sem escolher um fornecedor e sem publicar nada.

Requer Node.js 22.12+; o projeto foi validado com Node.js 24. Para desenvolvimento ou prévia dos demonstrativos:

```sh
npm ci
npm run build
npm run preview
```

O build normal continua aceitando demonstrações. Antes de uma publicação comercial, use:

```sh
npm run check:release
```

Esse comando verifica os dados e gera o build de produção em `dist/` **somente quando a configuração comercial passa**. Ele exige modo demonstrativo desligado, WhatsApp válido em formato internacional, domínio HTTPS definitivo e ao menos um kit publicado. Também verifica IDs, preços e promoções, composição e caminhos das imagens locais.

No estado atual, ele interrompe corretamente com três pendências: dados ainda demonstrativos, telefone ausente e domínio ausente. Isso é esperado e não impede o desenvolvimento ou a prévia. Não desligue os avisos apenas para contornar a verificação: preencha primeiro os dados reais. A aprovação técnica não confirma a existência do telefone, a veracidade das informações ou a disponibilidade de estoque.

Configuração geral em Vercel, Netlify ou serviço equivalente:

- Pasta do projeto: a pasta que contém `package.json`.
- Comando de instalação: `npm ci`.
- Comando de build comercial: `npm run check:release`.
- Diretório publicado: `dist`.
- Runtime de build: Node.js 24, ou versão compatível.
- HTTPS habilitado no domínio final.

Em hospedagem manual, publique **o conteúdo de `dist/`**, incluindo `assets/`, `images/`, `favicon.svg` e `robots.txt`. Não publique a pasta de código-fonte nem `node_modules/`. O site usa âncoras, sem páginas internas de roteador; não precisa de regras de checkout ou de uma API de pedidos.

Se a hospedagem exigir uma subpasta, solicite a configuração correspondente antes de publicar: a versão atual usa caminhos a partir da raiz. Depois de atualizar conteúdo ou fotos, refaça o build e a publicação. Configure cache longo apenas para os assets com hash; o HTML deve permitir atualização para que novos preços e disponibilidade sejam carregados.

### Conferência após publicar

- Abra o domínio real em desktop e celular e confira HTTPS, imagens, nomes e preços.
- Confira as duas composições maiores e os kits, incluindo imagens adicionais e enquadramentos reais.
- Teste menu, links, perguntas, pausa de movimento e resumo de cada kit.
- Abra o link do WhatsApp e confira destinatário e nome do kit na mensagem. Não é necessário enviar um pedido de teste para conferir o preenchimento.
- Verifique título, descrição, domínio canonical e indexação pretendida. A aplicação depende de JavaScript; buscadores sem execução de JavaScript não recebem o corpo pré-renderizado.

## Validação da preparação

Foram aprovados build TypeScript/Vite e 24 testes. A configuração comercial foi testada em uma cópia temporária isolada, incluindo ordem diferente, item oculto, preço promocional, disponibilidade, galeria, produtos incluídos, destaques, mensagem por kit, mobile e acessibilidade. O build de release passou nessa cópia; os dados de teste foram descartados e não foram aplicados à vitrine.

A versão real permanece demonstrativa. Não houve publicação, envio de mensagem ou confirmação de contato real. A validação visual usa Chromium com telas emuladas; Safari, Firefox e aparelhos físicos não foram verificados.
