chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.text) {
    const url = 'https://openai-openai-detector--5smxg.hf.space/?';
    const input_text = message.text;
    const params = { url: input_text };
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url + new URLSearchParams(params), true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      sendResponse(data);
    };
    xhr.send();
    return true;
  }
});
