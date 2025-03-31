<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import InfoTooltip from '../icons/InfoTooltip.svelte';
	import NavigationListItem from './NavigationListItem.svelte';
	import NavigationListItemDropdown from './NavigationListItemDropdown.svelte';

	let navLandmarkDetails = $state({
		path: '',
		tooltip: ''
	});

	setContext('navLandmarkDetails', navLandmarkDetails);

	const refreshTooltips = (selector: string) => {
		const options = {
			html: true
		};

		const tooltipTriggerList = [].slice.call(document.querySelectorAll(selector));
		tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl, options);
		});
	};

	onMount(() => {
		refreshTooltips('[data-bs-toggle="tooltip"]');
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-info-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
						<path
							d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						/>
					</svg>
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
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="offcanvas-templates-dropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Templates
						</a>
						<ul class="dropdown-menu" aria-labelledby="offcanvas-templates-dropdown">
							<li>
								<a
									class="nav-link"
									href="#"
									data-bs-toggle="pill"
									data-bs-target="#templates-prepopulate-content"
									data-nav-landmark-path="Templates > Pre-populate"
									data-nav-landmark-tooltip="Allows the user to generate a template of pre-populated data from an existing record<br><br>The template can then be applied to any record in order to quickly pre-populated a form with specific data"
									>Pre-populate Forms</a
								>
							</li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="offcanvas-webapi-dropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Web API
						</a>
						<ul class="dropdown-menu" aria-labelledby="offcanvas-webapi-dropdown">
							<li>
								<a
									class="nav-link"
									href="#"
									data-bs-toggle="pill"
									data-bs-target="#webapi-update-fields-content"
									data-nav-landmark-path="Web API > Update"
									data-nav-landmark-tooltip="Allows the user to update any field for a record using the Web API<br><br>To begin, navigate to a record and click Load Attribute Metadata"
									>Update Fields</a
								>
							</li>
							<li>
								<a
									class="nav-link"
									href="#"
									data-bs-toggle="pill"
									data-bs-target="#webapi-retrieve-records-content"
									data-nav-landmark-path="Web API > Retrieve"
									data-nav-landmark-tooltip="Allows the user to write and execute Fetch XML queries<br><br>To automatically generate Fetch XML, please navigate to Utilities > Developer"
									>Retrieve Records</a
								>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							aria-current="page"
							data-bs-toggle="pill"
							data-bs-target="#security-content"
							data-nav-landmark-path="Security Management"
							data-nav-landmark-tooltip="Allows the user to apply and remove security roles from other system users in the environment<br><br>In order to apply and remove security roles, your user will need the necessary privileges"
							href="#">Security Management</a
						>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="offcanvas-settings-dropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Settings
						</a>
						<ul class="dropdown-menu" aria-labelledby="offcanvas-settings-dropdown">
							<li>
								<a
									class="nav-link"
									href="#"
									data-bs-toggle="pill"
									data-bs-target="#settings-environments-content"
									data-nav-landmark-path="Settings > Environments"
									data-nav-landmark-tooltip="Allows the user to configure and save environment urls for easy access<br><br>Setting up environments will also enable certain utilities that require a Power Apps Maker Portal url"
									>Environments</a
								>
							</li>
							<li>
								<a
									class="nav-link"
									href="#"
									data-bs-toggle="pill"
									data-bs-target="#settings-extension-settings-content"
									data-nav-landmark-path="Settings > Extension Settings"
									data-nav-landmark-tooltip="Configure settings for various utilities used within this extension"
									>Extension Settings</a
								>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
