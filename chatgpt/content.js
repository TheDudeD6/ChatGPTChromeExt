chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'test-selected-text') {
    const selection = window.getSelection().toString();
    sendResponse({ text: selection });
  }
});
