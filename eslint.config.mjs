import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  ...compat.config({
    extends: ["next/core-web-vitals"],
    rules: {
      "no-console": "warn",
      "import/order": [
        "warn",
        {
          groups: [["external", "builtin"], "internal", ["sibling", "parent"], "index"],
          pathGroups: [
            {
              pattern: "components",
              group: "internal",
            },
            {
              pattern: "components/**",
              group: "internal",
            },
            {
              pattern: "constants/**",
              group: "internal",
            },
            {
              pattern: "common",
              group: "internal",
            },
            {
              pattern: "error/**",
              group: "internal",
            },
            {
              pattern: "hooks/**",
              group: "internal",
            },
            {
              pattern: "locale/**",
              group: "internal",
            },
            {
              pattern: "routes/**",
              group: "internal",
            },
            {
              pattern: "selectors",
              group: "internal",
            },
            {
              pattern: "store",
              group: "internal",
            },
            {
              pattern: "assets/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["internal"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "no-var": "error",
    },
  }),
];

export default eslintConfig;
