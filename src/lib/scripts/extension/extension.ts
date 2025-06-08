import { ExtensionUtility } from './utility.ts';
import { addMessage } from '$lib/scripts/extension/messaging.js';

export class Extension {
	utility: ExtensionUtility;
	activeTabId = null;

	constructor() {
		this.utility = new ExtensionUtility();
	}

	executeOnLoad = async () => {
		await this.initializeTabId();
		this.initializeListener();
		this.utility.refreshTooltips('[data-bs-toggle="tooltip"]');
	};

	private initializeTabId = async () => {
		const results = await chrome.tabs.query({ currentWindow: true, active: true });
		this.activeTabId = results[0].id;
	};
	private initializeListener = () => {
		chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
			if (!request || !request.category || !request.command) {
				return;
			}
			
			addMessage(request.category, request.command, request.data || {});
		});
	};

	executeChromeScript = (
		category,
		command,
		additionalArgs = null,
		showIndicator = true,
		indicatorMessage = null
	) => {
		//showLoadingIndicator(showIndicator, indicatorMessage);

		chrome.scripting.executeScript({
			target: { tabId: this.activeTabId },
			func: this.dispatchMessage,
			args: [category, command, additionalArgs]
		});
	};

	dispatchMessage = (category, command, additionalArgs) => {
		window.postMessage(
			{ category: category, command: command, additionalArgs: additionalArgs },
			'*'
		);
	};
}
