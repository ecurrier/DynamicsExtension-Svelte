<script>
	import Modal from '$lib/components/Modal.svelte';
	let {
		id = 'input-confirmation',
		title = 'Input Required',
		message = 'Input required:',
		inputValue = ''
	} = $props();
</script>

<Modal {id} {title}>
	{#snippet bodyContent()}
		<span>
			<p class={`${id}-modal-body-label`}>{message}</p>
			<input id={`${id}-modal-input`} class="form-control" type="text" bind:value={inputValue} />
		</span>
	{/snippet}
	{#snippet footerContent()}
		<span>
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary" id="input-confirmation-modal-confirm"
				>Confirm</button
			>
		</span>
	{/snippet}
</Modal>
