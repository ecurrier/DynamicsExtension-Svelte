<script>
	let { id, label, listItems } = $props();
</script>

<li class="nav-item dropdown">
	<a
		class="nav-link dropdown-toggle"
		href="#"
		id="offcanvas-{id}-dropdown"
		role="button"
		data-bs-toggle="dropdown"
		aria-expanded="false"
	>
		{label}
	</a>
	<ul class="dropdown-menu" aria-labelledby="offcanvas-{id}-dropdown">
		{@render listItems()}
	</ul>
</li>
