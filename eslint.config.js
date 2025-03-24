import simpleImportSort from "eslint-plugin-simple-import-sort"
import eslintPluginImport from "eslint-plugin-import"
import react from "eslint-plugin-react"
import typescript from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    excludedFiles: ["eslint.config.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      import: eslintPluginImport,
      react: react,
      "@typescript-eslint": typescript,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]
