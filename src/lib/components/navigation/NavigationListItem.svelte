<script>
	import { getContext } from 'svelte';

	const extension = getContext('extension');
	let { id, landmarkPath = '', landmarkTooltip = '', label = '' } = $props();

	let navLandmarkDetails = getContext('navLandmarkDetails');
	const clickHandler = () => {
		navLandmarkDetails.path = landmarkPath;
		navLandmarkDetails.tooltip = landmarkTooltip;
		extension.utility.hideNavigation();
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
		on:click={clickHandler}
		>{label}
	</a>
</li>
