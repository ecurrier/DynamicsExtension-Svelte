<script lang="ts">
	import { onMount } from 'svelte';
	import { toastNotificationStore } from '$lib/scripts/extension/messaging';
	import SuccessCheckmark from '$lib/components/icons/SuccessCheckmark.svelte';
	import ExclamationCircle from '$lib/components/icons/ExclamationCircle.svelte';

	let message = $state('');
	let success = $state(false);
	let toastElement: HTMLElement;
	let bsToast: bootstrap.Toast;

	onMount(() => {
		initializeToast();
	});

	const initializeToast = () => {
		if (toastElement) {
			bsToast = new bootstrap.Toast(toastElement, {
				animation: true,
				autohide: true,
				delay: 5000
			});
		}
	};

	toastNotificationStore.subscribe((toastNotification) => {
		if (!toastNotification) {
			return;
		}

		displayNotification(toastNotification.data);
	});

	const displayNotification = (response: { text: string; success: boolean }) => {
		if (!response || !response.text) {
			return;
		}

		message = response.text;
		success = response.success;

		bsToast?.show();
	};
</script>

<div class="toast-container position-absolute p-3 top-0 end-0">
	<div
		bind:this={toastElement}
		id="toast-notification"
		class="toast fade {success ? 'bg-success' : 'bg-danger'}"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="d-flex">
			<span class="toast-icon">
				{#if success}
					<SuccessCheckmark />
				{:else}
					<ExclamationCircle />
				{/if}
			</span>
			<div class="toast-body toast-body-message">{message}</div>
			<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
			></button>
		</div>
	</div>
</div>
