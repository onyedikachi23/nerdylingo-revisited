/** @format */

// @ts-check

import eslintReact from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactYouMightNotNeedAnEffect from "eslint-plugin-react-you-might-not-need-an-effect";
import { defineConfig } from "eslint/config";
import baseConfig from "./base.js";

export default defineConfig({
	extends: [
		...baseConfig,
		eslintReact.configs["recommended-typescript"],
		reactYouMightNotNeedAnEffect.configs.recommended,
		reactHooks.configs.flat.recommended,
	],
	settings: {
		react: {
			version: "detect",
		},
	},
});
