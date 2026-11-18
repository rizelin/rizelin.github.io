import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * GitHub Pages は /projects/xxx のような URL に直接アクセスすると 404 を返すため、
 * ビルド後に index.html を 404.html としてコピーし、SPA のルーティングを維持する。
 */
function spaFallback(): Plugin {
  let outDir = "dist";
  return {
    name: "spa-fallback-404",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      copyFileSync(resolve(outDir, "index.html"), resolve(outDir, "404.html"));
    },
  };
}

export default defineConfig({
  // rizelin.github.io（ユーザーサイト）なのでルート配信
  base: "/",
  plugins: [react(), tailwindcss(), spaFallback()],
});
