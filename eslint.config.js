import eslintPluginAstro from "eslint-plugin-astro";
import parserTs from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },

  // Astro's own flat config: wires up astro-eslint-parser + the
  // typescript-eslint parser for frontmatter, and extracts embedded
  // scripts into virtual files for linting.
  ...eslintPluginAstro.configs["flat/recommended"],

  {
    files: ["**/*.ts", "**/*.js", "**/*.mjs"],
    // Astro's config already lints frontmatter/scripts extracted from
    // .astro files as virtual `*.astro/*.ts` files; skip them here to
    // avoid double-linting and to keep their prettier rule disabled
    // (prettier can't format a fragment in isolation).
    ignores: ["**/*.astro/*"],
    languageOptions: {
      parser: parserTs,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },

  {
    files: ["**/*.astro"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": ["error", { parser: "astro" }],
    },
  },
];
