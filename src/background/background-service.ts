const AppNamespaces = ['common', 'utilities'];

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
	if (!AppNamespaces.includes(request.category)) {
		return;
	}

	chrome.runtime.sendMessage(null, request);
});
