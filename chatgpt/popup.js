// Get the selected text on the active tab
chrome.tabs.executeScript({ code: "window.getSelection().toString();" }, function(selectedText) {
  // Send a request to the OpenAI API with the selected text
  var url = "https://openai-openai-detector--5smxg.hf.space/?";
  var data = { url: selectedText[0] };
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + new URLSearchParams(data), true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the response data and open a new tab to display the results
      var response = JSON.parse(xhr.responseText);
      var realProb = response.real_probability.toFixed(2);
      var fakeProb = response.fake_probability.toFixed(2);
      var resultsHTML = "Real probability: " + realProb + "<br>" + "Fake probability: " + fakeProb;
      chrome.tabs.create({ url: "data:text/html;charset=UTF-8," + encodeURIComponent(resultsHTML) });
    }
  };
  xhr.send();
});
