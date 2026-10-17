import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: { "process.env.NODE_ENV": '"production"' },
  build: {
    outDir: "public/nuvemshop",
    emptyOutDir: true,
    copyPublicDir: false,
    target: "es2022",
    lib: { entry: "src/integration/nuvemshop.tsx", formats: ["es"], fileName: () => "grand-amour.js" },
    minify: "esbuild",
  },
});
