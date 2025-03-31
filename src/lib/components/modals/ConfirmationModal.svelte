<script>
	import Modal from '$lib/components/Modal.svelte';
	let { id = 'confirmation', title = 'Confirmation', message = 'Are you sure?' } = $props();
</script>

<Modal {id} {title}>
	{#snippet bodyContent()}
		<span>
			<p class={`${id}-modal-body-label`}>{message}</p>
		</span>
	{/snippet}
	{#snippet footerContent()}
		<span>
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			<button
				type="button"
				class="btn btn-primary"
				id={`${id}-modal-confirm`}
				data-bs-dismiss="modal">Confirm</button
			>
		</span>
	{/snippet}
</Modal>
