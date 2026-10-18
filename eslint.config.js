import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: { import: importPlugin, react },
    settings: { "import/resolver": { node: { extensions: [".js", ".jsx", ".mjs"] } } },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",
      "import/named": "error",
    },
    // parserOptions: {
    //   ecmaVersion: 2020,
    //   sourceType: "module",
    //   ecmaFeatures: {
    //     jsx: true,
    //   },
    // },
  },
  {
    files: ["eslint.config.js", "vite.config.js"],
    // The Node resolver predates package exports; both entry points are checked by Node/Vite.
    rules: { "import/no-unresolved": ["error", { ignore: ["^eslint/config$", "^@vitejs/plugin-react$"] }] },
  },
]);
