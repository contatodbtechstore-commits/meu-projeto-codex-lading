import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const source = await readFile("integration/nuvemshop/mkc-kits-clean.html", "utf8");
if (source.length >= 50000 || Buffer.byteLength(source) >= 50000) throw new Error("Página excede o limite por bloco");
const scripts = [...source.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scripts.length !== 1) throw new Error("A página deve ter um único inicializador");
const markup = source.replace(scripts[0][0], "");
const bundle = `(function(){
function mount(){
 var slot=document.getElementById('mkc-campaign-slot');
 if(!slot||slot.querySelector('#mkc-kits-clean'))return;
 slot.innerHTML=${JSON.stringify(markup)};
 ${scripts[0][1]}
}
mount();
document.addEventListener('DOMContentLoaded',mount,{once:true});
window.addEventListener('mkc:campaign:mount',mount);
new MutationObserver(mount).observe(document.body,{childList:true,subtree:true});
})();\n`;
const version = "mkc-kits-clean-v1.0.0";
const url = `https://cdn.jsdelivr.net/gh/contatodbtechstore-commits/meu-projeto-codex-lading@${version}/public/nuvemshop/mkc-kits-clean-v1.js`;
const integrity = `sha384-${createHash("sha384").update(bundle).digest("base64")}`;
const installer = `<!-- Página completa MKC: usar no lugar dos códigos antigos desta campanha. -->
<div id="mkc-campaign-slot"><p role="status">Carregando a seleção MKC Magazine…</p><a href="https://mkcmagazine.com/">Visitar a loja</a></div>
<script>
(function () {
  var id = 'mkc-campaign-runtime-v1';
  var anterior = document.getElementById(id);
  if (anterior && !anterior.dataset.failed) {
    window.dispatchEvent(new Event('mkc:campaign:mount'));
    return;
  }
  if (anterior) anterior.remove();
  var script = document.createElement('script');
  script.id = id;
  script.src = '${url}';
  script.integrity = '${integrity}';
  script.crossOrigin = 'anonymous';
  script.async = true;
  script.onerror = function () {
    script.dataset.failed = 'true';
    var aviso = document.querySelector('#mkc-campaign-slot [role="status"]');
    if (aviso) aviso.textContent = 'Não foi possível carregar a seleção. Você pode acessar a loja pelo link abaixo.';
  };
  document.head.appendChild(script);
})();
</script>
`;
await writeFile("public/nuvemshop/mkc-kits-clean-v1.js", bundle);
await writeFile("integration/nuvemshop/mkc-kits-instalar.html", installer);
await writeFile("integration/nuvemshop/mkc-kits-manifest.json", JSON.stringify({ version, url, integrity, fullPageCharacters: source.length, fullPageBytes: Buffer.byteLength(source), installerCharacters: installer.length, installerBytes: Buffer.byteLength(installer), bundleBytes: Buffer.byteLength(bundle) }, null, 2) + "\n");
await writeFile("public/previa-kits-mkc.html", `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Kits de Beleza — MKC Magazine</title></head><body><main id="MainContent">${source}</main></body></html>`);
console.log(`Página completa: ${source.length} caracteres. Instalação: ${installer.length} caracteres. ${integrity}`);
