import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), ManifestRewritePlugin()],
	build: {
		rollupOptions: {
			input: {
				content: resolve(__dirname, 'src/content/index.ts'),
				background: resolve(__dirname, 'src/background/index.ts')
			},
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
});

function ManifestRewritePlugin() {
	return {
		name: 'manifest-rewrite',
		apply: 'build',
		closeBundle() {
			const manifestPath = path.join('build', 'manifest.json');
			let manifest = readFileSync(manifestPath, 'utf-8');

			const files = readdirSync('build/app/immutable');
			const getFile = (match: string) => files.find((f) => f.includes(match)) || '';

			manifest = manifest
				.replace('__BACKGROUND__', getFile('background') || 'background.js')
				.replace('__CONTENT__', getFile('content') || 'content.js');

			writeFileSync(manifestPath, manifest);
		}
	};
}
