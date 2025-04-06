import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), manifestRewritePlugin(), contentScriptRewrite()],
	build: {
		rollupOptions: {
			input: {
				contentScript: resolve(__dirname, 'src/content/content-script.ts'),
				backgroundService: resolve(__dirname, 'src/background/background-service.ts'),
				appInject: resolve(__dirname, 'src/inject/app-inject.ts')
			},
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
});

function manifestRewritePlugin() {
	return {
		name: 'manifest-rewrite',
		apply: 'build',
		closeBundle() {
			const manifestPath = path.join('build', 'manifest.json');
			let manifest = readFileSync(manifestPath, 'utf-8');

			const files = readdirSync('build/app/immutable');
			const getFile = (match: string) => files.find((f) => f.includes(match)) || '';

			manifest = manifest
				.replace('__BACKGROUND-SERVICE__', `app/immutable/${getFile('backgroundService')}` || 'backgroundService.js')
				.replace('__CONTENT-SCRIPT__', `app/immutable/${getFile('contentScript')}` || 'contentScript.js');

			writeFileSync(manifestPath, manifest);
		}
	};
}

function contentScriptRewrite() {
	return {
		name: 'content-script-rewrite',
		apply: 'build',
		closeBundle() {
			const files = readdirSync('build/app/immutable');
			const getFile = (match: string) => files.find((f) => f.includes(match)) || '';

			const contentFilePath = `build/app/immutable/${getFile('content')}`;
			let contentFile = readFileSync(contentFilePath, 'utf-8');

			contentFile = contentFile.replace('__APP-INJECT__', `app/immutable/${getFile('appInject')}` || 'appInject.js');

			writeFileSync(contentFilePath, contentFile);
		}
	};
}
