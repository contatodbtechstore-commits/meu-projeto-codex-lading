# MKC — campanha Kits promocionais, versão clean

Página de origem: https://mkcmagazine.com/kits-promocionais/ . Redesenho completo solicitado pela usuária, preservando a proposta, os produtos, as fotos e a paleta desta campanha, sem aplicar a identidade da landing Grand Amour.

## Identidade e organização

Paleta extraída dos estilos atuais: fúcsia `#c92b68`, ênfase `#d52e73`, rosa-claro `#fff4f7`, rosa `#fbe7ef`, texto ameixa `#482936`, texto secundário `#795e6a` e bordas `#efdce4`. Arial e Georgia seguem as famílias empregadas nos blocos originais.

A página passa a ter uma entrada com a marca MKC, uma oferta principal da Necessaire com sua galeria reunida, quatro kits secundários, duas entradas de maquiagem/cuidados, etapas da compra, FAQ, chamada final e rodapé compacto. A apresentação repetida da Necessaire que ficava depois do encerramento foi reunida à oferta principal. A chamada de escassez “Últimas unidades” foi retirada, pois não houve confirmação dessa condição.

Os preços foram conferidos nas páginas públicas dos cinco produtos em 17/10/2026 (São Paulo): Necessaire R$89,90 / Pix R$85,41; Abacaxi R$44,90; Romã R$91,99; Brumas R$34,99; Abacate R$34,99. As condições de Pix foram lidas no elemento nativo `.js-payment-discount-price-product`, com identificação do método Pix, sem aplicar desconto presumido.

A página identifica os valores iniciais como referência e, dentro do domínio MKC, tenta consultar novamente os produtos visíveis. Só atualiza quando o canonical corresponde à página solicitada e o valor em centavos é válido. Falhas preservam as referências; ausência de condição Pix na consulta bem-sucedida oculta o valor antigo. Indisponibilidade altera a chamada para consulta. A compra continua nos links reais das páginas dos produtos, sem efetuar pedidos automaticamente.

As artes de maquiagem e cuidados continuam identificadas como inspiração. As cinco fotos da Necessaire vêm da galeria original. O link de maquiagem agora aponta à categoria real `/maquiagem/`, e o de Grand Amour à página `/grand-amour/`, ambas encontradas na navegação pública da MKC.

## Instalar

1. Criar uma cópia do modelo da campanha, denominada **Kits MKC — Clean**, e atribuí-la somente à página `/kits-promocionais/`.
2. Nessa cópia, substituir os blocos da landing antiga por uma única seção **Personalizada → Código**, com largura completa/preencher e espaçamentos zerados.
3. Colar `mkc-kits-instalar.html`. Este é o instalador da página inteira, não um complemento para os blocos antigos. Ele carrega a distribuição pública versionada, com SHA-384 e CORS. A fonte completa HTML/CSS/JS também está disponível em `mkc-kits-clean.html`, abaixo de 50.000 caracteres/bytes, caso se prefira colar tudo diretamente. Usar somente uma das duas formas.
4. Conferir celular e computador no editor. Depois de publicar, testar os links no endereço real da campanha.

Os seletores que ocultam cabeçalho/rodapé e removem margens do Ipanema só têm efeito quando o marcador `#mkc-kits-clean` existe. A página inclui seu próprio cabeçalho e rodapé com informações legais. As demais páginas e suas configurações globais não são alteradas. Manter o modelo exclusivo evita compartilhar o novo conteúdo com outras páginas.

## Arquivos e distribuição

- Fonte completa: `integration/nuvemshop/mkc-kits-clean.html`.
- Instalador: `integration/nuvemshop/mkc-kits-instalar.html`.
- Manifesto: `integration/nuvemshop/mkc-kits-manifest.json`.
- Distribuição: `public/nuvemshop/mkc-kits-clean-v1.js`, tag imutável `mkc-kits-clean-v1.0.0`.
- Prévia estática independente: `public/previa-kits-mkc.html`.
- Gerar: `npm run build:mkc-campaign`.
- Conferir build do projeto: `npm run build`.
- Testar: `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test -- tests/mkc-campaign.spec.ts --workers=2`.

Os 12 testes cobrem tamanhos 320/390/768/1024/1440, paleta, galerias, diálogo, teclado, carrossel, URLs dos cinco produtos, consulta de preço/Pix, falha de rede, canonical divergente, indisponibilidade, instalação repetida, restauração do tema quando o bloco sai e acessibilidade automática. As respostas de produtos são simuladas nesses testes; nenhum carrinho ou pedido real é modificado.

As URLs das fotos foram preservadas da página original. O acesso ao CDN de imagens continua bloqueado no ambiente de execução; a fotografia completa deve ser conferida na prévia da loja. Os testes não comprovam a transferência desses arquivos remotos. A nova página não foi aplicada no painel da Nuvemshop por este trabalho.
