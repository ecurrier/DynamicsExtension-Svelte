const refreshTooltips = (selector) => {
	const options = {
		html: true
	};

	const tooltipTriggerList = [].slice.call(document.querySelectorAll(selector));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl, options);
	});
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

export { refreshTooltips, hideNavigation };
