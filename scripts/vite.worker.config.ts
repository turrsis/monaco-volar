import { defineConfig } from "vite";
import * as path from "path";
import { externalCjsToEsmPlugin } from "./plugin";
import { externals } from "./config";

export default defineConfig({
  optimizeDeps: {
    exclude: externals,
    esbuildOptions: {
      plugins: [externalCjsToEsmPlugin(externals)],
    },
  },
  resolve: {
    alias: {
      path: "path-browserify",
      "@vue/compiler-dom": "@vue/compiler-dom/dist/compiler-dom.cjs.js",
      "@vue/compiler-core": "@vue/compiler-core/dist/compiler-core.cjs.js",
    },
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "../src/vue.worker.ts"),
      formats: ["es"],
      name: "vue.worker.js",
    },
    sourcemap: false,
    outDir: path.resolve(__dirname, "../dist/worker"),
    rollupOptions: {
      output: {
        format: "es",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
      },
      external: externals,
    },
  },
});
