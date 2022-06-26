import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
	nitro: {
		output: {
			dir: '~~/build',
		},
	},
	srcDir: 'src',
});
