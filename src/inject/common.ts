import { Constants } from './constants';

export class Common {
	constants: Constants;
	private category = 'common';
	pageContext = null;

	constructor() {
		this.constants = new Constants();
		this.pageContext = window.Xrm
			? Consants.PageContexts.ModelDrivenApp
			: window.portal
				? Consants.PageContexts.Portal
				: null;
		this.sendExtensionMessage('handlePageContext', this.pageContext);
	}

	sendExtensionMessage = (command, data, namespace = this.category) => {
		chrome.runtime.sendMessage(document.getElementById('extension-id').value, {
			category: namespace,
			command: command,
			data: data
		});
	};

	displayNotification = (success, message) => {
		this.sendExtensionMessage('displayNotification', { success: success, text: message });
	};
}
