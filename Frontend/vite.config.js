import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This allows access from any IP address
    port: 5173, // Port on which Vite server runs
    strictPort: true, // Fail if the port is already in use,
  },
});
