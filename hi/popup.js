let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      // switchM('zne_kc_icon','http://passport2.chaoxing.com/mooc.jsp?v=0&s=bd56d3792f8dff93ba0fa620e8e590a9')
      {code: "document.getElementById('zne_kc_icon').click()"});
  });
};