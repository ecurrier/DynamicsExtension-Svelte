<script lang="ts">
    import { onMount } from 'svelte';
	import { toastNotificationStore } from '$lib/scripts/extension/messaging';

	let message = $state('');
	let success = $state(false);
	let toastElement: HTMLElement;
	let bsToast: bootstrap.Toast;

    onMount(() => {
        if (toastElement) {
            bsToast = new bootstrap.Toast(toastElement, {
                animation: true,
                autohide: true,
                delay: 5000
            });
        }
    });

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
		class="toast hide {success ? 'bg-success' : 'bg-danger'}"
		role="alert"
		aria-live="assertive"
		aria-atomic="true"
	>
		<div class="d-flex">
			<span class="toast-icon">
				{#if success}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#007800"
						class="bi bi-check-lg"
						viewBox="0 0 16 16"
					>
						<path
							d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="#a20000"
						class="bi bi-exclamation-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
						<path
							d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"
						/>
					</svg>
				{/if}
			</span>
			<div class="toast-body toast-body-message">{message}</div>
			<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"
			></button>
		</div>
	</div>
</div>
