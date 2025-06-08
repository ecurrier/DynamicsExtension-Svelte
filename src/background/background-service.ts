const AppNamespaces = ['common', 'utilities'];

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
	if (!AppNamespaces.includes(request.category)) {
		return;
	}

	chrome.runtime.sendMessage(request);
});
