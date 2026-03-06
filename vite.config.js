import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NivandanaDikeshiPortfolio/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false, // ❗ better for production
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
