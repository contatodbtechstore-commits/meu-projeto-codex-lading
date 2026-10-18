# Prévia dos kits Grand Amour

A seção `#kits-grand-amour` entra depois dos cinco produtos e antes dos benefícios. Após a aprovação da prévia pela usuária, foi preparado o complemento independente `ga-kits-v1.0.0`, instalado por `integration/nuvemshop/07-kits-grand-amour.html`. O bundle original imutável `ga-nuvemshop-v1.0.0` permanece intacto. A colagem e publicação no painel da Nuvemshop são feitas pela usuária.

## Conteúdo

Chamada: **Seu ritual, em boa companhia.** Os quatro cards usam as capas principais originais do CDN público da loja. As fotos ficam inteiras, sem recorte, e não foram redesenhadas. As descrições apresentam a composição, sem acrescentar promessas clínicas.

Dados consultados nas quatro páginas fornecidas pela usuária em 17/10/2026 (horário de São Paulo):

| Kit | ID nativo | De | Por |
| --- | --- | --- | --- |
| Hidratação Diária | 374883330 | R$147,98 | R$125,78 |
| Adeus Oleosidade | 374843357 | R$132,98 | R$113,03 |
| Pele Radiante | 374883353 | R$132,98 | R$113,03 |
| Controle e Equilíbrio | 374883315 | R$192,97 | R$164,02 |

Os valores promocionais vieram de `#price_display[data-product-price]`, em centavos, e os anteriores de `#compare_price_display`. O JSON-LD da loja conserva os preços regulares. Os valores da prévia são referências; não se promete atualização automática, desconto no Pix ou estoque em tempo real.

## Navegação e compra na prévia

- Carrossel sem reprodução automática, com gesto horizontal, botões anterior/próximo, indicadores e foco acessível. Uma fração do próximo card aparece no celular.
- “Adquira já o seu” abre a página exata do kit na MKC Magazine. Na hospedagem de prévia, não se promete salto direto ao checkout.
- O botão de carrinho envia um formulário nativo para `https://mkcmagazine.com/comprar/`, com o ID confirmado e `quantity=1`, sem `go_to_checkout`. O navegador passa para a loja; não se simula um carrinho local nem uma confirmação de pedido.
- O envio foi testado com interceptação de rede, sem modificar carrinhos reais. Sessões de compra entre o domínio temporário e a MKC ainda precisam de verificação em navegador real. Ao portar para a Nuvemshop, usar o fluxo de mesma origem já adotado e preservar os itens existentes.

## Verificação

`npm run build` e `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test -- --workers=2`.

Os testes novos verificam posicionamento da seção, controles e limites em 320/390/768/1440px, os quatro destinos e IDs, envio de uma unidade, teclado e acessibilidade automática. As capas remotas precisam de acesso a `dcdn-us.mitiendanube.com`; o teste geral de carregamento de imagens não passa se esse domínio estiver bloqueado no ambiente.

Os arquivos novos são `src/rituals.ts`, `src/components/RitualKits.tsx`, `src/components/ritual-kits.css` e `tests/ritual-kits.spec.ts`. O ponto de inserção fica em `src/App.tsx`.

## Complemento para a Nuvemshop

`npm run build:kits-addon` compila somente o complemento, sem apagar nem reconstruir o bundle original. Os dados e o CSS são compartilhados com a prévia aprovada. A implementação DOM de `src/integration/ritual-kits-addon.ts` insere a seção dentro do Shadow DOM, depois de `#kits`, e aguarda a renderização original quando necessário. Não altera a página inicial ou outras páginas da loja.

O botão principal, na própria MKC, solicita adicionar uma unidade e depois inicia a finalização nativa em um POST separado. O carrinho solicita apenas a adição e oferece “Ver carrinho”, permanecendo na landing. Ambos validam o formulário atual, ID, opções e estado do botão de compra. O bloqueio de cliques simultâneos é compartilhado com o código dos cinco produtos. Falhas, variantes ou indisponibilidade permitem consultar o kit na página nativa, sem confirmar falsamente uma adição.

O instalador curto carrega um arquivo público versionado, com integridade SHA-384 e CORS. Cole-o no final do campo de código existente. Não mover a tag depois de publicada. Para qualquer alteração no arquivo distribuído, gerar nova versão, novo hash e novo instalador.

`tests/kits-addon.spec.ts` usa o bundle original e os ajustes anteriores para verificar os quatro tamanhos de tela, convivência com os cinco produtos, carregamento antecipado, repetição do instalador, recriação do host no editor, carrinhos, início do checkout dos quatro kits, indisponibilidade/variantes/ID divergente, falha de rede, teclado e acessibilidade. As operações de carrinho e checkout são interceptadas: não criam pedidos ou modificam carrinhos reais. Confirmar os fluxos na página publicada, fora do editor.
