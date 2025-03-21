import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()], // Remove the dts plugin
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "InstitutionalUI",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          antd: "antd",
        },
      },
    },
  },
})
