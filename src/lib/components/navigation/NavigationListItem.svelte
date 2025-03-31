<script>
	import { getContext } from 'svelte';

	let { id, landmarkPath = '', landmarkTooltip = '', label = '' } = $props();

    let navLandmarkDetails = getContext('navLandmarkDetails');
	const clickHandler = () => {
        navLandmarkDetails.path = landmarkPath;
        navLandmarkDetails.tooltip = landmarkTooltip;
        hideNavigation();
	};

    const hideNavigation = () => {
		const offcanvas = document.querySelector('.offcanvas');
		if (offcanvas) {
			const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
			if (offcanvasInstance) {
				offcanvasInstance.hide();
			}
		}
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
