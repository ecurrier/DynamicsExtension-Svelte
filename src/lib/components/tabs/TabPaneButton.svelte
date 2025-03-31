<script>
	import OpenInNewTab from '../icons/OpenInNewTab.svelte';

	let {
		functionName = '',
		extensionFunctionName = '',
		title,
		tooltipPlacement = 'top',
		label,
		openInNewTab = false
	} = $props();
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
	>
		{label}
		{#if openInNewTab}
			<OpenInNewTab />
		{/if}
	</button>
</div>
