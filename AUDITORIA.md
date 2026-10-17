# Auditoria final — Aura Bloom Beauty

> Este relatório registra a auditoria visual anterior. A preparação comercial posterior, com campos adicionais e validação de publicação, está documentada em [COMERCIAL.md](COMERCIAL.md).

O design aprovado foi preservado. A revisão não adicionou seções nem dependências e não substituiu a direção de arte. Hero, composições assimétricas dos kits, paleta, tipografia e recorte editorial foram conferidos no navegador.

## Correções pontuais

- Controle acessível por teclado e toque para pausar e retomar as animações contínuas da faixa e dos produtos.
- Preferência de movimento reduzido acompanhada em tempo real, inclusive quando alterada com a página aberta. A versão instalada do hook da biblioteca só mantinha o valor inicial; a aplicação agora acompanha a media query diretamente.
- Remoção de um filtro CSS redundante do hero e promoção da transformação para composição. As sombras internas dos mockups e o desenho aprovado foram mantidos.
- Menu mobile fecha ao passar para a largura de desktop, sem reaparecer aberto ao voltar ao celular.
- Botão de fechar do modal permanece acessível durante a rolagem em telas pequenas. O diálogo nativo mantém o fundo inerte, Escape, clique externo e retorno do foco.
- Preço opcional em reais no card e na seleção, oculto por padrão. Valores ausentes ou inválidos não produzem preços fictícios.
- Dados de imagens e textos alternativos centralizados, com modo para fotos reais e ajustes `contain`, `cover` e posição, preservando o modo dos mockups existentes.
- Nome da marca e metadados de SEO centralizados. Título, descrição e Open Graph são inseridos no HTML estático do build; canonical e `og:url` só são gerados quando o domínio definitivo é informado.
- Formato do telefone validado antes de montar o link do WhatsApp. Sem número válido, a alternativa local de copiar ou baixar o resumo permanece funcional.

## Validação executada

`npm run build`: compilação TypeScript e build Vite aprovados.

`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test`: **17 testes aprovados**. Cobertura: recursos locais, navegação, links internos, seleção e troca dos três kits, cópia e alternativa manual, download, retorno do foco, menu mobile, resize, FAQ, movimento reduzido dinâmico, pausa por teclado, modal em celular pequeno, SEO estático, preços e construção do link do WhatsApp.

A verificação de recursos aguarda o carregamento de cada imagem ao entrar no viewport, respeitando o carregamento lazy. A checagem do diálogo diferencia o chrome do navegador dos controles de fundo; estes continuam inertes.

| Inspeção                    | Resultado                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Desktop, 1440 × 1000        | Hero e seções conferidos; sem imagens quebradas, títulos transbordando ou links internos inválidos                                         |
| Tablet, 768 × 1024          | Composições e navegação conferidas, sem transbordamento horizontal                                                                         |
| Celular, 390 × 844          | Kits, FAQ, menu e seleção conferidos, sem transbordamento horizontal                                                                       |
| Celular pequeno, 320 px     | Layout e modal com rolagem conferidos; teste funcional também em 320 × 568                                                                 |
| Paisagem, 844 × 390         | Conteúdo e modal com rolagem conferidos                                                                                                    |
| Acessibilidade automatizada | Nenhuma violação nas regras WCAG A/AA selecionadas, para página e modal em 1440, 768, 390 e 320 px; controle de animação também verificado |
| Formatação e diff           | Prettier e `git diff --check` aprovados                                                                                                    |

A personalização foi testada em uma **cópia temporária isolada**, com outro nome de marca, preço, foto em proporção diferente, domínio de teste e telefone sintético. Foram confirmados: HTML estático com nome e escaping corretos, canonical opcional, preço no card e modal, foto contida no quadro, mensagem com o kit selecionado e retirada do aviso demonstrativo. A cópia foi removida; o domínio, o preço e o telefone de teste não foram aplicados ao projeto nem abertos externamente.

## Desempenho observado

Medição local na versão de produção, Chromium headless, sem limitação de rede. O perfil mobile usa viewport de 390 px e simulação de CPU 4× mais lenta. Valores são amostras de laboratório, não Lighthouse, métricas de usuários reais ou garantia de desempenho em aparelhos físicos.

| Amostra                                           | Desktop | Mobile com CPU 4× |
| ------------------------------------------------- | ------- | ----------------- |
| LCP observado                                     | 464 ms  | 900 ms            |
| CLS observado                                     | 0,0133  | 0,0141            |
| Intervalo mediano entre frames, após a entrada    | 17 ms   | 17 ms             |
| Frames acima de 50 ms na amostra de 90 intervalos | 0       | 0                 |

O JavaScript principal tem aproximadamente **123 kB com gzip**; o CSS, cerca de **10,6 kB com gzip**. Fontes e imagens são locais. Não houve recursos externos na amostra de carregamento. A otimização removeu o custo recorrente do filtro adicional observado no hero; ainda há trabalho inicial de carregamento e execução do React, especialmente sob simulação de CPU.

## Preparação para os produtos reais

Edite `src/content.ts`, conforme o README: identidade, kits, fotos e seus textos alternativos, preços confirmados, WhatsApp, contatos, SEO e aviso demonstrativo. Os preços continuam `null`, o telefone e o domínio continuam vazios e `catalog.demoMode` permanece `true`.

Antes de apresentar a marca real, substitua os SVGs demonstrativos e o favicon, revise o FAQ, configure o canal comercial e o domínio definitivo, desative o modo demonstrativo quando apropriado e confira novamente os enquadramentos das fotos reais.

## Limites

- Revisão visual e funcional em Chromium, com viewports emulados. Safari, Firefox, aparelhos físicos e leitores de tela não foram testados.
- A avaliação automatizada não substitui uma auditoria completa de acessibilidade ou testes com pessoas usuárias.
- O WhatsApp foi validado pela construção da URL e da mensagem, sem envio ou confirmação da existência de um número comercial real.
- O conteúdo da aplicação depende de JavaScript; os metadados de SEO estão presentes no HTML estático. Não foi realizada validação de indexação em buscadores, compartilhamento em redes sociais ou implantação pública.
- Fotos, preços, composição e políticas definitivas ainda dependem das informações reais da marca. Selecionar um kit não efetua uma compra.
