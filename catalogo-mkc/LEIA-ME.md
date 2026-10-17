# MKC Magazine — investigação do catálogo aguardando acesso

## Resultado desta etapa

A investigação ainda não pôde acessar o conteúdo da loja. **Nenhum produto, kit, fabricante, fotografia, preço, variante ou estoque foi confirmado.** Não há seleção de kits para aprovar neste momento; isso não significa que a loja não tenha produtos.

Fonte inicial fornecida pelo usuário: https://mkcmagazine.com

## Impedimento observado

Na tentativa de acesso HTTPS realizada em 17/10/2026, o proxy do ambiente recusou o túnel com `HTTP/1.1 403 Forbidden`. O curl retornou `CONNECT tunnel failed, response 403`, código de saída 56 e HTTP de origem `000`.

A resposta foi recebida antes de chegar ao site. Não é evidência de indisponibilidade da MKC Magazine, bloqueio feito pela loja ou ausência de catálogo. Nenhum HTML da loja foi analisado.

Os domínios `mkcmagazine.com` e `www.mkcmagazine.com` foram acrescentados ao rascunho da configuração de rede, preservando os presets existentes. O salvamento foi confirmado. Isso não altera automaticamente o acesso da máquina atual. A configuração precisa ser revisada, salva e publicada nas configurações do ambiente; essa publicação é do ambiente de desenvolvimento, não um deploy da landing page. Outros destinos de imagens só poderão ser identificados depois do acesso à loja; nenhum CDN foi presumido.

## Inventário e seleção

`inventario.csv` contém apenas o cabeçalho do inventário, sem registros fictícios. Será preenchido a partir de páginas ou exportações reais, mantendo a origem por item e por imagem.

A seleção para conferência deverá informar:

- Nome exato e URL de cada kit oficialmente comercializado.
- Marca/fabricante e composição confirmada, sem inferir quantidades pela fotografia.
- Variante, tamanho e volume quando publicados.
- Preços, promoções e disponibilidade, com data e fonte da observação.
- Fotografia oficial correspondente à variante e sua URL de origem.
- Motivo da recomendação e pontos ainda pendentes de confirmação.

Novas combinações, se houver, serão apresentadas separadamente como sugestões, sem anunciá-las como kits existentes. A substituição definitiva dos demonstrativos só será feita depois da confirmação do usuário.

## Fotografias e artes

Nenhuma fotografia oficial foi identificada, baixada ou alterada e nenhuma arte de produto foi criada nesta etapa.

A proposta de integração é preservar os arquivos originais e apresentar as fotografias em quadros com `object-fit: contain`, usando os gradientes, fundos, elementos florais e sombras do layout existente ao redor delas. Nenhum produto, embalagem, logotipo ou rótulo será redesenhado por IA. Recortes só serão considerados depois da avaliação da foto original; uma imagem que não permita recorte fiel será mantida inteira.

## Alternativa ao acesso direto

Se a rede não puder ser liberada, podem ser enviados:

- Uma exportação CSV/JSON existente do catálogo, com páginas de origem quando disponíveis.
- Arquivos ou capturas das páginas completas dos produtos e kits, com suas URLs.
- Fotografias oficiais em arquivos originais, identificadas por produto e variante.

Não é necessário adaptar uma exportação existente ao modelo CSV desta pasta. URLs do mesmo domínio, sem conteúdo anexado, continuarão dependendo da liberação de rede.

## Aplicação e aprovação

`src/content.ts`, a identidade, os demonstrativos, o design e as fotografias da landing page não foram substituídos. A aplicação não foi publicada. Os resultados atuais de build, testes e checagem comercial serão registrados em `verificacoes.md`; eles validam a aplicação demonstrativa, não o catálogo real que ainda não foi acessado.
