<script>
	let { id, title, bodyContent, footerContent } = $props();
</script>

<div
	class="modal fade"
	id={`${id}-modal`}
	data-bs-backdrop="static"
	data-bs-keyboard="false"
	tabindex="-1"
	aria-labelledby={`${id}-modal-label`}
	aria-hidden="true"
	data-category="global"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id={`${id}-modal-label`}>{title}</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class={`modal-body ${id}-modal-body`}>
				{@render bodyContent()}
			</div>
			<div class={`modal-footer`}>
				{@render footerContent()}
			</div>
		</div>
	</div>
</div>
