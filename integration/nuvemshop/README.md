# Grand Amour na Nuvemshop — instalação

## Adicionar os kits aprovados à página já instalada

Na mesma seção **Personalizada → Código** da Grand Amour, acrescente `07-kits-grand-amour.html` ao final do campo, depois dos códigos atuais. Não substitua o instalador original e não remova os ajustes anteriores. O trecho tem menos de 1.000 caracteres; carrega a seção aprovada por um arquivo público separado, com versão fixa e integridade SHA-384.

O complemento posiciona o banner e o carrossel depois dos cinco produtos, dentro do mesmo Shadow DOM. Não exige reposicionar blocos. “Adquira já o seu” solicita uma unidade e inicia o checkout nativo; o botão de carrinho solicita uma unidade e mantém a pessoa na página, com link para conferir o carrinho. Os valores dos cards são referências e as condições definitivas são as da MKC. Depois de salvar/publicar, testar pelo link da loja fora do editor, sem precisar concluir pagamento.

Para gerar a distribuição: `npm run build:kits-addon`. A versão `ga-kits-v1.0.0` é separada de `ga-nuvemshop-v1.0.0`; não sobrescrever as tags ou o bundle principal. Mais detalhes em [PREVIA-KITS.md](../../PREVIA-KITS.md).

## Instalação inicial (histórico)

Preparado para o modelo de página exclusivo Grand Amour, no Ipanema. Usa um único bloco HTML/CSS/JS, com 3.547 caracteres, abaixo do limite de 50.000. O layout React aprovado é compilado em um módulo separado. Não usa iframe, não muda DNS e não requer FTP ou credenciais de API.

## Instalação na prévia

1. Na página/modelo **Grand Amour**, abra a seção **Personalizada → Código** já criada. Mantenha **Largura: Preencher**.
2. **Substitua todo o código de preparação** pelo conteúdo completo de `01-instalar.html`. Não mantenha o marcador antigo em outro bloco: só pode existir um `id="ga-nuvemshop-page"`.
3. Confira a prévia desktop e celular antes de publicar. O cabeçalho, título e conteúdo padrão vazios do tema ficam ocultos somente nessa página. Quando a apresentação estiver carregada, seu próprio rodapé substitui visualmente o rodapé da MKC apenas nela. As configurações globais não são desativadas.
4. Teste menu, FAQ, seleção dos cinco produtos, fechar o diálogo e o botão para a página de compra na MKC. Frete, carrinho e pagamento continuam na Nuvemshop; nenhum pedido é feito pelo bloco.
5. Depois da revisão, salvar/publicar o modelo e adicionar o link da página Grand Amour à navegação da MKC. O endereço da página deve ser copiado do painel; não foi presumido um slug.

## Arquivos e hospedagem

- O bloco carrega o módulo e as imagens/fontes pelo CDN jsDelivr, a partir da versão `ga-nuvemshop-v1.0.0` deste repositório público.
- O script é protegido por SRI (SHA-384) e CORS. Não mover/sobrescrever a tag da versão depois da instalação. Futuras mudanças devem receber nova versão e novo instalador.
- CSS fica em Shadow DOM, com famílias de fonte exclusivas, preservando a aparência aprovada sem contaminar o Ipanema.
- As fotos e o símbolo completo são os mesmos ativos aprovados. Fontes têm suas licenças incluídas em `public/nuvemshop/licenses`.
- Sem o script, ou se seu carregamento falhar, ficam disponíveis o nome da marca e cinco links reais de produto. Nesse caso o rodapé da MKC continua disponível.
- O arquivo externo precisa permanecer público e acessível. Não depende da privacidade do projeto Netlify nem de um computador ligado.

## Catálogo e preços

URLs dos cinco produtos confirmadas nas páginas públicas da MKC Magazine. A apresentação consulta o HTML público de cada produto quando seu card entra em vista, sem cookies ou chaves. Lê apenas JSON-LD do produto cuja URL confere com a página solicitada, moeda BRL e preço numérico válido. Ignora produtos relacionados e código executável no HTML.

Se a consulta funcionar, atualiza valor e disponibilidade apresentados. Se a loja não responder, o editor usar uma origem incompatível ou a Nuvemshop mudar o formato dos dados, os valores ficam claramente marcados como **preços de referência**. Não é integração oficial de API nem sincronização de catálogo garantida. O preço final e as condições sempre são os da página do produto e do checkout nativo.

## Gerar uma nova versão

Ajustar a constante de versão em `scripts/package-nuvemshop.mjs` antes de uma atualização. Executar:

```
npm run build:nuvemshop
npm run build
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test -- --workers=2
```

O primeiro comando gera o módulo, copia fontes/licenças e escreve instalador e manifesto com tamanho/SRI. O build normal mantém a prévia autônoma em `dist`. Publicar os arquivos por uma nova tag imutável depois dos testes; instalar o novo bloco na prévia da Nuvemshop para revisão.

## Validação realizada

Build normal e build de integração passaram. 33 testes passaram, sendo 9 da integração. Incluem limite do bloco, SRI no navegador, recursos com CORS, isolamento contra CSS do tema, links reais dos cinco produtos, áreas de compra sem checkout falso, atualização pública de preço/estoque com respostas sintéticas isoladas, prevenção de confusão com produtos relacionados, menu, diálogo, fallback, recriação do bloco pelo editor e restauração da loja ao remover o marcador.

Inspeção visual em uma estrutura local representando o Ipanema, com estilos externos e seletores confirmados no site público. Larguras 320, 390, 768 e 1440 px, mais suíte de regressão da landing. Acessibilidade automática WCAG A/AA sem violações nos cenários testados.

**Ainda pendente:** a execução do instalador no editor real da usuária e em aparelho físico/Safari. Não houve acesso ao administrador, publicação do modelo ou alteração de DNS por este trabalho. A ocultação preliminar do cabeçalho foi confirmada pela captura enviada pela usuária.
