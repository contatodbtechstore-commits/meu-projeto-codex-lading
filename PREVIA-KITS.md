# Prévia dos kits Grand Amour

A seção `#kits-grand-amour` entra depois dos cinco produtos e antes dos benefícios na página independente de prévia. Não foi acrescentada ao bundle imutável `ga-nuvemshop-v1.0.0` nem à página publicada na Nuvemshop. O código de instalação será preparado depois da aprovação visual.

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
