<script>
	let visible = $state(false);
	let visibleClass = $state('');
	let message = $state('Loading...');

	$effect(() => {
		visible;
		visibleClass = visible ? 'visible' : '';
	});

	const showLoadingIndicator = (showIndicator = true, indicatorMessage = null) => {
		showIndicator ? (visible = true) : (visible = false);
		indicatorMessage ? (message = indicatorMessage) : (message = 'Loading...');
	};
</script>

<div id="progress-indicator" class="loading-ui full-screen {visibleClass}" role="alert">
	<div>
		<div class="spinner">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				width="50px"
				height="50px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
				aria-hidden="true"
			>
				<g>
					<circle cx="83.321" cy="75.568" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="0s"
						></animateTransform>
					</circle>
					<circle cx="75.568" cy="83.321" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.062s"
						></animateTransform>
					</circle>
					<circle cx="66.073" cy="88.803" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.125s"
						></animateTransform>
					</circle>
					<circle cx="55.482" cy="91.641" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.187s"
						></animateTransform>
					</circle>
					<circle cx="44.518" cy="91.641" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.25s"
						></animateTransform>
					</circle>
					<circle cx="33.927" cy="88.803" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.312s"
						></animateTransform>
					</circle>
					<circle cx="24.432" cy="83.321" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.375s"
						></animateTransform>
					</circle>
					<circle cx="16.679" cy="75.568" r="6">
						<animateTransform
							attributeName="transform"
							type="rotate"
							calcMode="spline"
							values="0 50 50;360 50 50"
							times="0;1"
							keySplines="0.5 0 0.5 1"
							repeatCount="indefinite"
							dur="1.4s"
							begin="-0.437s"
						></animateTransform>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						calcMode="spline"
						values="0 50 50;0 50 50"
						times="0;1"
						keySplines="0.5 0 0.5 1"
						repeatCount="indefinite"
						dur="1.4s"
					></animateTransform>
				</g>
			</svg>
		</div>
		<p id="progress-indicator-message">{message}</p>
	</div>
</div>
