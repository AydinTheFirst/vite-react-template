import Generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Generouted()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
