# Revisão mobile — Grand Amour

Data: 17/10/2026. Objetivo: preservar o layout aprovado e melhorar uso pelo toque antes da adaptação à Nuvemshop.

## Verificações

Chromium com emulação de toque em 320×568, 360×800, 390×844, 430×932 e 844×390. Menu, seleção dos cinco produtos, fechamento do diálogo e FAQ exercitados por toque. Nenhum erro JavaScript ou transbordamento lateral encontrado. Imagens completas, sem cortar embalagens. Diálogo utilizável em celular pequeno e com fechamento acessível.

Build e suíte de 24 testes passaram. A suíte cobre também navegação, cópia, download, fallback manual, galeria, WhatsApp sintético isolado, acessibilidade automática WCAG A/AA, metadados, redução de movimento e larguras até 1440 px.

## Melhorias

- Botão principal com texto de 12 px em vez de 9–10 px no celular; em telas até 360 px ocupa a largura disponível. Ações podem quebrar de linha sem sobreposição.
- Links do hero, logos e links do rodapé com área de toque de pelo menos 44 px de altura no celular.
- Campo de cópia manual com fonte de 16 px no celular, evitando o gatilho usual de zoom automático ao focar no iOS.
- Seis fotos convertidas para WebP **sem perda**, mantendo os PNGs originais. Comparação de pixels com ImageMagick retornou AE=0 em todas as imagens. Nenhum rótulo, cor, proporção ou conteúdo visual foi modificado. Total de 4.976.959 para 2.520.228 bytes: redução de 49,36% nas fotos utilizadas.
- Preload da imagem principal no HTML, derivado de `visuals.hero` para manter a configuração centralizada.
- Símbolo aprovado, demais elementos desktop e fluxo comercial preservados. Nenhuma dependência instalada.

## Laboratório de desempenho

Servidor local de produção Vite; Chromium, viewport 390×844, CPU 4× mais lenta, rede simulada de 1,6 Mbps e latência de 150 ms. Uma medição por versão, cache novo: LCP de aproximadamente 8,1 s antes para 2,5 s depois; CLS aproximadamente 0,009 em ambas. Resultados indicativos de laboratório, sujeitos a variação; não são Core Web Vitals de usuários reais ou auditoria da hospedagem Netlify. O servidor local e a CDN pública têm compressão e cache diferentes.

## Limites

Não validado em aparelho físico, Safari/iOS, Chrome Android real ou conexão móvel real. As verificações não concluem acessibilidade integral nem validação de checkout. Nenhum pedido ou pagamento foi efetuado. A adaptação ao tema Nuvemshop e o teste no ambiente real da loja ainda estão pendentes.

Capturas e medições locais em `/workspace/artifacts/auditoria-mobile/`.
