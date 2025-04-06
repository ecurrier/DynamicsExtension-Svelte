<script>
	import { getContext, setContext } from 'svelte';
	import InfoTooltip from '../icons/InfoTooltip.svelte';
	import NavigationListItem from './NavigationListItem.svelte';
	import NavigationListItemDropdown from './NavigationListItemDropdown.svelte';

	const extension = getContext('extension');
	let navLandmarkDetails = $state({
		path: '',
		tooltip: ''
	});

	setContext('navLandmarkDetails', navLandmarkDetails);

	$effect(() => {
		navLandmarkDetails.tooltip;
		extension?.Utility?.refreshTooltips('.nav-landmark-tooltip');
	});
</script>

<nav class="navbar navbar-light bg-light">
	<div class="container-fluid">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasNavbar"
			aria-controls="offcanvasNavbar"
			aria-label="Open Navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<span>
			<a class="navbar-brand nav-landmark">
				<span class="nav-landmark-path">{navLandmarkDetails.path}</span>
				<span
					class="nav-landmark-tooltip"
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					title={navLandmarkDetails.tooltip}
				>
					<InfoTooltip />
				</span>
			</a>
		</span>
		<a class="navbar-brand">Power Tools for Power Platform</a>
		<div
			class="offcanvas offcanvas-start"
			tabindex="-1"
			id="offcanvasNavbar"
			aria-labelledby="offcanvasNavbarLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
				<button
					type="button"
					class="btn-close text-reset"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div class="offcanvas-body">
				<ul class="navbar-nav justify-content-end flex-grow-1 pe-3 nav nav-pills nav-fill">
					<NavigationListItemDropdown id="utilities" label="Utilities">
						{#snippet listItems()}
							<NavigationListItem
								id="utilities-admin"
								landmarkPath="Utilities > Admin"
								landmarkTooltip="Advanced utilities pertaining to administrator functionality<br><br>Hover over individual utilities to see specific descriptions"
								label="Admin"
							/>
							<NavigationListItem
								id="utilities-developer"
								landmarkPath="Utilities > Developer"
								landmarkTooltip="Advanced utilities pertaining to developer functionality<br><br>Hover over individual utilities to see specific descriptions"
								label="Developer"
							/>
						{/snippet}
					</NavigationListItemDropdown>
					<NavigationListItemDropdown id="templates" label="Templates">
						{#snippet listItems()}
							<NavigationListItem
								id="templates-prepopulate"
								landmarkPath="Templates > Pre-populate"
								landmarkTooltip="Allows the user to generate a template of pre-populated data from an existing record<br><br>The template can then be applied to any record in order to quickly pre-populated a form with specific data"
								label="Pre-populate Forms"
							/>
						{/snippet}
					</NavigationListItemDropdown>
					<NavigationListItemDropdown id="webapi" label="Web API">
						{#snippet listItems()}
							<NavigationListItem
								id="webapi-update-fields"
								landmarkPath="Web API > Update"
								landmarkTooltip="Allows the user to update any field for a record using the Web API<br><br>To begin, navigate to a record and click Load Attribute Metadata"
								label="Update Fields"
							/>
							<NavigationListItem
								id="webapi-retrieve-records"
								landmarkPath="Web API > Retrieve"
								landmarkTooltip="Allows the user to write and execute Fetch XML queries<br><br>To automatically generate Fetch XML, please navigate to Utilities > Developer"
								label="Retrieve Records"
							/>
						{/snippet}
					</NavigationListItemDropdown>
					<NavigationListItem
						id="security"
						landmarkPath="Security Management"
						landmarkTooltip="Allows the user to apply and remove security roles from other system users in the environment<br><br>In order to apply and remove security roles, your user will need the necessary privileges"
						label="Security Management"
					/>
					<NavigationListItemDropdown id="settings" label="Settings">
						{#snippet listItems()}
							<NavigationListItem
								id="settings-environments"
								landmarkPath="Settings > Environments"
								landmarkTooltip="Allows the user to configure and save environment urls for easy access<br><br>Setting up environments will also enable certain utilities that require a Power Apps Maker Portal url"
								label="Environments"
							/>
							<NavigationListItem
								id="settings-extension-settings"
								landmarkPath="Settings > Extension Settings"
								landmarkTooltip="Configure settings for various utilities used within this extension"
								label="Extension Settings"
							/>
						{/snippet}
					</NavigationListItemDropdown>
				</ul>
			</div>
		</div>
	</div>
</nav>
