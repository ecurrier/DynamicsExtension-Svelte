<script>
	import { createEventDispatcher } from 'svelte';

	let { id, landmarkPath = '', landmarkTooltip = '', label = '' } = $props();

	const dispatch = createEventDispatcher();

	const hideNavigation = () => {
		dispatch('hideNavigation');
	};
</script>

<li class="nav-item">
	<a
		class="nav-link"
		aria-current="page"
		data-bs-toggle="pill"
		data-bs-target="#{id}-content"
		data-nav-landmark-path={landmarkPath}
		data-nav-landmark-tooltip={landmarkTooltip}
		href="#"
		on:click={hideNavigation}
		>{label}
	</a>
</li>
