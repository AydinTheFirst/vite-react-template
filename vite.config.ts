import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Generouted from "@generouted/react-router/plugin";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    eslint({
      fix: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
    }),
    react(),
    Generouted(),
  ],
});
