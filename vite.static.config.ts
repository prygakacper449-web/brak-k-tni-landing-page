import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

// Static Web Export: buduje w pełni statyczną stronę (index.html w roocie,
// zasoby w assets/, wszystkie ścieżki relatywne "./assets/...").
export default defineConfig({
  base: "./",
  root: resolve(process.cwd(), "static"),
  publicDir: resolve(process.cwd(), "public"),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": resolve(process.cwd(), "src") },
  },
  build: {
    outDir: resolve(process.cwd(), "dist-static"),
    emptyOutDir: true,
    assetsDir: "assets",
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
