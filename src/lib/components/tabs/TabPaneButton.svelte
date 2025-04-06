<script>
	import OpenInNewTab from '../icons/OpenInNewTab.svelte';
	import { getContext } from 'svelte';

	const extension = getContext('extension');
	const category = getContext('category');

	let {
		functionName = '',
		extensionFunctionName = '',
		title,
		tooltipPlacement = 'top',
		label,
		openInNewTab = false
	} = $props();

	const clickHandler = () => {
		if (functionName) {
			extension.executeChromeScript(category, functionName);
		} else if (extensionFunctionName) {
			// TO-DO: Implement the logic to handle extension function calls
		}
	};
</script>

<div class="col d-grid">
	<button
		type="button"
		class="btn btn-outline-primary"
		data-function-name={functionName ? functionName : undefined}
		data-extension-function-name={extensionFunctionName ? extensionFunctionName : undefined}
		data-bs-toggle="tooltip"
		data-bs-placement={tooltipPlacement}
		{title}
		onclick={clickHandler}
	>
		{label}
		{#if openInNewTab}
			<OpenInNewTab />
		{/if}
	</button>
</div>
