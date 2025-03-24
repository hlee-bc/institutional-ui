import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import tsconfigPaths from "vite-tsconfig-paths"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true })],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "institutional-ui",
      fileName: "institutional-ui",
    },
    // bundler options
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib"),
    },
  },
})
