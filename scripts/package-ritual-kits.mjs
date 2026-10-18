import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const version = "ga-kits-v1.0.0";
const url = `https://cdn.jsdelivr.net/gh/contatodbtechstore-commits/meu-projeto-codex-lading@${version}/public/nuvemshop/grand-amour-kits-v1.js`;
const bundle = await readFile("public/nuvemshop/grand-amour-kits-v1.js");
const integrity = `sha384-${createHash("sha384").update(bundle).digest("base64")}`;
const code = `<!-- Grand Amour — kits aprovados. Acrescente abaixo dos códigos atuais. -->
<script>
(function () {
  var id = 'ga-kits-runtime-v1';
  var anterior = document.getElementById(id);
  if (anterior && !anterior.dataset.gaFailed) {
    window.dispatchEvent(new Event('ga:kits:mount'));
    return;
  }
  if (anterior) anterior.remove();
  var script = document.createElement('script');
  script.id = id;
  script.src = '${url}';
  script.integrity = '${integrity}';
  script.crossOrigin = 'anonymous';
  script.async = true;
  script.onerror = function () { script.dataset.gaFailed = 'true'; };
  document.head.appendChild(script);
})();
</script>
`;
if (code.length >= 50000 || Buffer.byteLength(code) >= 50000) throw new Error("Bloco excede o limite");
await writeFile("integration/nuvemshop/07-kits-grand-amour.html", code);
await writeFile("integration/nuvemshop/kits-manifest.json", JSON.stringify({ version, url, integrity, characters: code.length, bytes: Buffer.byteLength(code), bundleBytes: bundle.length }, null, 2) + "\n");
console.log(`${code.length} caracteres; ${bundle.length} bytes no arquivo da seção. ${integrity}`);
