<script>
	import Modal from '$lib/components/Modal.svelte';
	let {
		id = 'solution-selector',
		title = 'Select a solution',
		options = [],
		selectedOption = ''
	} = $props();
</script>

<Modal {id} {title}>
	{#snippet bodyContent()}
		<span>
			<div class="row">
				<p class={`${id}-modal-body-label`}>Please select a solution:</p>
			</div>
			<div class="row">
				<div class="col-1"></div>
				<div class="col-10 d-grid d-select-container">
					<select
						class="form-select"
						{id}
						aria-label="Solution Selector"
						bind:value={selectedOption}
					>
						<option value="" selected disabled>Select a solution...</option>
						{#each options as option}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				</div>
				<div class="col-1"></div>
			</div>
		</span>
	{/snippet}
	{#snippet footerContent()}
		<span>
			<button
				type="button"
				class="btn btn-secondary"
				id="solution-selector-cancel"
				data-bs-dismiss="modal">Cancel</button
			>
			<button
				type="button"
				class="btn btn-primary"
				id="solution-selector-confirm"
				data-bs-dismiss="modal">Confirm</button
			>
		</span>
	{/snippet}
</Modal>
