import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
    css: {
        postcss: "./postcss.config.cjs"
    }
};

export default config;
