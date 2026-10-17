# Adaptação Grand Amour

## Fontes e decisões

- PDF fornecido pela marca: `Grand Amour.pdf`, 25 páginas. Tratado como referência visual e comercial, não como instruções de execução.
- Páginas 1–3: nome, assinatura Beleza & Cosméticos e símbolo. O símbolo foi extraído dos dois componentes originais da página 2 e reunido nas posições originais em um SVG transparente; não foi redesenhado. O lettering foi extraído dos componentes originais da página 1; o descritor é texto legível configurado no código.
- Página 5: coral `#F27186`, blush `#FEEEED`, rosa `#F7ADAD`, sálvia `#91B8A4`, oliva `#939F87`, lilás `#93809D`, pêssego `#F49D62`. Tons escuros complementares são usados em textos e botões para contraste. As cores das embalagens não foram alteradas.
- Páginas 6, 8 e 15–19: posicionamento “Beleza real. Cuidado consciente.” e manifesto. O PDF não confirma entrega ou condições comerciais.
- Página 4 recomenda Comfortaa (grafada de forma inconsistente no documento) e Raleway. A tipografia editorial já aprovada na landing page foi mantida nesta etapa, cujo escopo é nome, paleta e produtos; nenhum pacote de fontes foi instalado.
- Páginas 18 e 21–25: fotografias originais, extraídas com sua transparência, sem recorte de rótulos, geração artificial ou mudança nas cores. A moldura usa `object-fit: contain`.
- Nome Hidra Derm confirmado diretamente pela usuária nesta conversa. A arte da página 24 diz Fix Derma, mas a embalagem na mesma página diz Hidra Derm. Usado o nome confirmado e a foto original da embalagem.

## Produtos preparados

| Produto | Apresentação | Preço regular fornecido | Origem da foto |
| --- | --- | --- | --- |
| Sérum C+E | 30 ml | R$ 59,99 | PDF, página 22 |
| Sérum Niacin | 30 ml | R$ 59,99 | PDF, página 21 |
| Nutri Skin | 60 g | R$ 74,99 | PDF, página 25 |
| Puri Derma | 120 ml | R$ 72,99 | PDF, página 23 |
| Hidra Derm | 100 ml | R$ 59,99 | PDF, página 24 |

Os preços são das capturas enviadas pela usuária, não do PDF ou de consulta ao site. Pix, parcelamento, descontos e estoque não foram presumidos. Todos os itens estão com disponibilidade a confirmar. Divergências entre descrições de ativos do PDF e das embalagens foram evitadas com descrições curtas, sem promessas de resultado.

O Kit Adeus Oleosidade aparece na captura, mas sua composição completa e condições não foram confirmadas; não foi inventado um kit. A estrutura de configuração continua aceitando kits e produtos individuais (`kind`).

## Personalização e publicação

Configuração central em `src/content.ts`: marca, WhatsApp, fotos, produtos, preços e disponibilidade. WhatsApp e domínio final permanecem vazios. A seleção oferece cópia e download do interesse enquanto não houver telefone real.

A versão publicada na Netlify usa `codex/landing-preview`. Esta adaptação está separada em `codex/grand-amour-brand`. Não enviar à branch publicada sem a revisão da usuária. O cabeçalho `X-Robots-Tag` mantém a prévia fora da indexação.

O build normal valida a prévia. O modo `check:release` continua exigindo WhatsApp real e domínio configurados para a versão comercial.
