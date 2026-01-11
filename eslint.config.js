import typescriptParser from "@typescript-eslint/parser"
import reactHooks from "eslint-plugin-react-hooks"
import { defineConfig } from "eslint/config"

export default defineConfig([
    {
        ...reactHooks.configs.flat.recommended,
        files: ["**/*.{ts,tsx}"],
        ignores: ["**/dist/**/*"],
        languageOptions: { parser: typescriptParser },
    },
    {
        ignores: ["node_modules/**"],
    },
])
