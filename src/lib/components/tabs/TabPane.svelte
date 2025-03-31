<script>
	let { id, active = false, category = '', tabPaneContent } = $props();
</script>

<div
	class={`tab-pane fade ${active ? 'show active' : ''}`}
	{id}
	role="tabpanel"
	data-category={category}
>
	<div class="container">
		{@render tabPaneContent()}
	</div>
</div>
