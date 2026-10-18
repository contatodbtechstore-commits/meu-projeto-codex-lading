import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "public/nuvemshop",
    emptyOutDir: false,
    copyPublicDir: false,
    target: "es2020",
    lib: { entry: "src/integration/ritual-kits-addon.ts", formats: ["iife"], name: "GrandAmourRitualKits", fileName: () => "grand-amour-kits-v1.js" },
    minify: "esbuild",
  },
});
