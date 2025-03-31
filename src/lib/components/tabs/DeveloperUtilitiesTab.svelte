<script>
	import TabPane from './TabPane.svelte';
	import TabPaneButton from './TabPaneButton.svelte';
	import TabPaneGridRow from './TabPaneGridRow.svelte';
</script>

<TabPane id="utilities-developer-content" category="utilities">
	{#snippet tabPaneContent()}
		<TabPaneGridRow>
			{#snippet buttons()}
				<TabPaneButton
					functionName="generateFetchXml"
					title="Generates Fetch XML queries based on the current form/view"
					label="Generate Fetch XML"
				/>
				<TabPaneButton
					functionName="openWebApiUrl"
					title="Opens the current environment's Web API in a new tab"
					label="Open Web API URL"
					openInNewTab={true}
				/>
			{/snippet}
		</TabPaneGridRow>
		<TabPaneGridRow>
			{#snippet buttons()}
				<TabPaneButton
					functionName="generateChoiceCodeSnippets"
					title="Generates C# and JavaScript code snippets for Global and Local Choices"
					label="Generate Choice Code Snippet"
				/>
				<TabPaneButton
					extensionFunctionName="openFormXmlViewer"
					title="Opens a modal window, allowing you to view a Form's XML directly"
					label="View Form XML"
				/>
			{/snippet}
		</TabPaneGridRow>
	{/snippet}
</TabPane>
