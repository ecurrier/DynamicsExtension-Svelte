<script>
	import TabPane from './TabPane.svelte';
	import TabPaneButton from './TabPaneButton.svelte';
	import TabPaneGridRow from './TabPaneGridRow.svelte';
</script>

<TabPane id="utilities-admin-content" active={true} category="utilities">
	{#snippet tabPaneContent()}
		<TabPaneGridRow>
			{#snippet buttons()}
				<TabPaneButton
					functionName="enableAdminMode"
					title="Displays and enables all form controls (fields, tabs, sections) and removes all field requirements"
					label="Enable Admin Mode"
				/>
				<TabPaneButton
					functionName="toggleControlLogicalNames"
					title="Toggles the display of logical names on all form controls"
					label="Toggle Logical Names"
				/>
			{/snippet}
		</TabPaneGridRow>
		<TabPaneGridRow>
			{#snippet buttons()}
				<TabPaneButton
					functionName="generateUrls"
					title="Generates record urls/links based on the current form/view"
					label="Generate Record URL"
				/>
				<TabPaneButton
					functionName="refreshCommandBar"
					title="Refreshes the main command bar of the current record/view"
					label="Refresh Command Bar"
				/>
			{/snippet}
		</TabPaneGridRow>
		<TabPaneGridRow>
			{#snippet buttons()}
				<TabPaneButton
					extensionFunctionName="openMakerPortal"
					title="Opens the Maker Portal (make.powerapps.com) in a new tab"
					label="Open Maker Portal"
					openInNewTab={true}
				/>
				<TabPaneButton
					extensionFunctionName="openControlEditor"
					title="Opens the current form/view editor in the Maker Portal (make.powerapps.com)"
					label="Open Form/View Editor"
					openInNewTab={true}
				/>
			{/snippet}
		</TabPaneGridRow>
		<TabPaneGridRow>
			{#snippet buttons()}
				<TabPaneButton
					extensionFunctionName="openAdminCenter"
					title="Opens the Power Platform Admin Center (admin.powerplatform.microsoft.com) in a new tab"
					label="Open Admin Center"
					openInNewTab={true}
				/>
				<TabPaneButton
					extensionFunctionName="displayEnvironmentDetails"
					title="Opens a modal window displaying details about the current Dynamics Environment"
					label="Display Environment Details"
				/>
			{/snippet}
		</TabPaneGridRow>
	{/snippet}
</TabPane>
