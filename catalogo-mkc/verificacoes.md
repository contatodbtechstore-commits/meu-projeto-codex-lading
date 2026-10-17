# Verificações da aplicação demonstrativa

Executadas nesta etapa, sem substituição dos produtos:

- `npm run build`: aprovado, incluindo TypeScript e validação dos arquivos locais.
- `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test`: 24 testes aprovados, sem testes ignorados nessa execução.
- `npm run check:release`: interrompido como esperado pela validação comercial: `catalog.demoMode` ainda é `true`, `brand.whatsapp` está vazio e `seo.siteUrl` está vazio.

Esses resultados confirmam o funcionamento da versão demonstrativa e de seus cenários comerciais de teste. Não verificam produtos, fotografias, preços ou páginas da MKC Magazine: o acesso HTTPS ao domínio foi recusado pelo proxy antes de alcançar a loja.

O domínio fornecido como fonte de catálogo não foi presumido como domínio de publicação da nova landing page. Nenhum telefone, preço ou dado comercial foi inferido.

Nenhum produto foi substituído, nenhuma fotografia ou embalagem foi redesenhada e nenhum deploy foi realizado. A seleção com fontes e a validação visual de fotografias reais permanecem pendentes até haver acesso ou arquivos e, depois, aprovação da seleção pelo usuário.
