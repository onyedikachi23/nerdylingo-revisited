/** @format */

// @ts-check

import eslintJs from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig({
	ignores: ["eslint.config.js", "node_modules"],
	extends: [
		eslintJs.configs.recommended,
		tseslint.configs.recommendedTypeChecked,
	],

	languageOptions: {
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},

	plugins: {},
	rules: {
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
	},
});
