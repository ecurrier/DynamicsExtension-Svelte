<script>
	import { onMount, setContext } from 'svelte';
	import '$lib/styles/styles.css';
	import ConfirmationModal from '$lib/components/modals/ConfirmationModal.svelte';
	import InputConfirmationModal from '$lib/components/modals/InputConfirmationModal.svelte';
	import SolutionSelectorModal from '$lib/components/modals/SolutionSelectorModal.svelte';
	import OffCanvasNavigation from '$lib/components/navigation/OffCanvasNavigation.svelte';
	import ProgressIndicator from '$lib/components/ProgressIndicator.svelte';
	import ToastContainer from '$lib/components/util/ToastContainer.svelte';
	import AdminUtilitiesTab from '$lib/components/tabs/AdminUtilitiesTab.svelte';
	import DeveloperUtilitiesTab from '$lib/components/tabs/DeveloperUtilitiesTab.svelte';
	import { Extension } from '$lib/scripts/extension/extension.js';

	let extension = new Extension();
	setContext('extension', extension);

	onMount(async () => {
		await extension.executeOnLoad();
	});
</script>

<ProgressIndicator />
<ConfirmationModal />
<InputConfirmationModal />
<SolutionSelectorModal />
<ToastContainer />

<main id="main-page-content">
	<div class="container">
		<OffCanvasNavigation />
		<div class="tab-content" id="pills-tabContent">
			<AdminUtilitiesTab />
			<DeveloperUtilitiesTab />
		</div>
	</div>
</main>
