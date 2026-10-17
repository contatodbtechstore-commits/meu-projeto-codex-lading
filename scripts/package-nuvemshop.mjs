import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const version = "ga-nuvemshop-v1.0.0";
const cdn = `https://cdn.jsdelivr.net/gh/contatodbtechstore-commits/meu-projeto-codex-lading@${version}/public/`;
const bundle = await readFile("public/nuvemshop/grand-amour.js");
const integrity = `sha384-${createHash("sha384").update(bundle).digest("base64")}`;
await mkdir("public/nuvemshop/fonts", { recursive: true });
await mkdir("public/nuvemshop/licenses", { recursive: true });
for (const [family, files] of [
  ["manrope", ["manrope-latin-400-normal.woff2", "manrope-latin-500-normal.woff2", "manrope-latin-600-normal.woff2"]],
  ["cormorant-garamond", ["cormorant-garamond-latin-400-normal.woff2", "cormorant-garamond-latin-400-italic.woff2", "cormorant-garamond-latin-500-normal.woff2"]],
]) {
  for (const file of files) await cp(`node_modules/@fontsource/${family}/files/${file}`, `public/nuvemshop/fonts/${file}`);
  await cp(`node_modules/@fontsource/${family}/LICENSE`, `public/nuvemshop/licenses/${family}.txt`);
}
const block = `<!-- Grand Amour ${version} — substitua todo o bloco de preparação por este código. -->
<style>
body:has(#ga-nuvemshop-page)>header.js-header,
body:has(#ga-nuvemshop-page) #MainContent>#ns-section-heading,
body:has(#ga-nuvemshop-page) #MainContent>#ns-section-page_content:not(:has(#ga-nuvemshop-page)) {
  display:none!important;
}
body:has(#ga-nuvemshop-page) #MainContent {
  padding:0!important;margin:0!important;max-width:none!important;width:100%!important;
}
body:has(#ga-nuvemshop-page) #MainContent .container:has(#ga-nuvemshop-page),
body:has(#ga-nuvemshop-page) #MainContent .ns-section:has(#ga-nuvemshop-page) {
  padding:0!important;margin:0!important;max-width:none!important;width:100%!important;
}
body:has(#ga-nuvemshop-page[data-ga-ready])>footer#ns-section-footer {display:none!important}
html:has(#ga-nuvemshop-page) {scroll-padding-top:104px}
html:has(#ga-nuvemshop-page[data-ga-dialog-open]) {overflow:hidden!important}
#ga-nuvemshop-page {display:block!important;width:100%;min-width:0;margin:0;padding:0}
#ga-nuvemshop-page>.ga-loading {padding:32px 24px;color:#492c37;background:#fff8f7;font:16px/1.7 sans-serif}
#ga-nuvemshop-page>.ga-loading a {color:#9b334d;text-decoration:underline}
@media(max-width:640px){html:has(#ga-nuvemshop-page){scroll-padding-top:88px}}
</style>
<link rel="preload" as="image" href="${cdn}images/grand-amour/serum-editorial.webp" fetchpriority="high">
<div id="ga-nuvemshop-page" data-ga-version="${version}">
  <section class="ga-loading" aria-label="Grand Amour">
    <h1>Grand Amour</h1>
    <p data-ga-status role="status">Carregando sua experiência de cuidado…</p>
    <p>Você também pode conhecer os produtos na MKC Magazine:</p>
    <ul>
      <li><a href="https://mkcmagazine.com/produtos/serum-facial-vitamina-c-e-grand-amour-19jg5/">Sérum C+E</a></li>
      <li><a href="https://mkcmagazine.com/produtos/serum-facial-de-niacinamida-grand-amour-11qq3/">Sérum Niacin</a></li>
      <li><a href="https://mkcmagazine.com/produtos/creme-facial-de-hidratacao-nutri-skin-grand-amour-1or54/">Nutri Skin</a></li>
      <li><a href="https://mkcmagazine.com/produtos/puri-derma-sabonete-de-limpeza-facial-grand-amour-db2u5/">Puri Derma</a></li>
      <li><a href="https://mkcmagazine.com/produtos/bruma-facial-hidra-derm-hidratante-grand-amour-1qgn0/">Hidra Derm</a></li>
    </ul>
  </section>
</div>
<script>
(function(){
  var id='ga-nuvemshop-runtime';
  var host=document.getElementById('ga-nuvemshop-page');
  if(!host)return;
  var fail=function(){
    var status=host.querySelector('[data-ga-status]');
    if(status)status.textContent='Não foi possível carregar a apresentação. Os links abaixo continuam disponíveis para comprar na loja.';
  };
  host.addEventListener('ga:error',fail,{once:true});
  var previous=document.getElementById(id);
  if(previous){
    if(previous.dataset.gaFailed){previous.remove();}
    else{window.dispatchEvent(new Event('ga:mount'));return;}
  }
  var script=document.createElement('script');
  script.id=id;
  script.type='module';
  script.src='${cdn}nuvemshop/grand-amour.js';
  script.integrity='${integrity}';
  script.crossOrigin='anonymous';
  script.onerror=function(){script.dataset.gaFailed='true';fail();};
  document.head.appendChild(script);
})();
</script>
`;
if (block.length >= 50000 || Buffer.byteLength(block) >= 50000) throw new Error("Limite de 50 mil excedido");
await mkdir("integration/nuvemshop", { recursive: true });
await writeFile("integration/nuvemshop/01-instalar.html", block);
await writeFile("public/nuvemshop/instalar.html", block);
await writeFile("integration/nuvemshop/manifest.json", JSON.stringify({ version, cdn, integrity, characters: block.length, bytes: Buffer.byteLength(block), bundleBytes: bundle.length }, null, 2));
console.log(`Um bloco completo: ${block.length} caracteres; ${Buffer.byteLength(block)} bytes. Sem iframe. Versão ${version}.`);
