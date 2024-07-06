import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test:{
    environment:"jsdom",
    globals:true,
    setupFiles:'tests/setup.ts'
  },
  plugins: [react()],
});
