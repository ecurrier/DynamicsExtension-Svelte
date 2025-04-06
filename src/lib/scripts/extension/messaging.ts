import { writable, derived } from 'svelte/store';

export let messageStore = writable([]);
export let toastNotificationStore = derived(messageStore, ($messageStore) => {
	return (
		$messageStore.filter((message) => message.command === 'displayNotification').slice(-1)[0] ||
		null
	);
});

export function addMessage(category, command, data) {
	messageStore.update((messages) => [
		...messages,
		{ category, command, data, timestamp: Date.now() }
	]);
}
