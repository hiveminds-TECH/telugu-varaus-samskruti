import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsConfigPaths(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    target: "ES2022",
    minify: "terser",
    sourcemap: false,
    outDir: "dist",
  },
  define: {
    "process.env": process.env,
  },
});
