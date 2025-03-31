<script>
	import { onMount } from 'svelte';

	import '$lib/styles/styles.css';

	import ConfirmationModal from '$lib/components/modals/ConfirmationModal.svelte';
	import InputConfirmationModal from '$lib/components/modals/InputConfirmationModal.svelte';
	import SolutionSelectorModal from '$lib/components/modals/SolutionSelectorModal.svelte';
	import OffCanvasNavigation from '$lib/components/navigation/OffCanvasNavigation.svelte';
	import ProgressIndicator from '$lib/components/ProgressIndicator.svelte';
	import AdminUtilitiesTab from '$lib/components/tabs/AdminUtilitiesTab.svelte';
	import DeveloperUtilitiesTab from '$lib/components/tabs/DeveloperUtilitiesTab.svelte';

	let activeTabId = null;
	const initializeTabId = async () => {
		const results = await chrome.tabs.query({ currentWindow: true, active: true });
		activeTabId = results[0].id;
	};

	onMount(async () => {
		await initializeTabId();
	});
</script>

<ProgressIndicator />
<ConfirmationModal />
<InputConfirmationModal />
<SolutionSelectorModal />

<main id="main-page-content">
	<div class="container">
		<OffCanvasNavigation />
		<div class="tab-content" id="pills-tabContent">
			<AdminUtilitiesTab />
			<DeveloperUtilitiesTab />
		</div>
	</div>
</main>
