chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
      if (request.msg == "get_content") {
          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4) {
                  if (xmlhttp.status == 200) {
                      document.getElementsByTagName('html')[0].innerHTML = xmlhttp.responseText;
                  } else {
                      alert('Cannot reach russiangram.com');
                  }
              }
          }
          xmlhttp.open("POST", "https://russiangram.com/translate/Default.aspx", true);
          xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xmlhttp.send(document.getElementsByTagName('html')[0].innerHTML);
          sendResponse({ data: 'success' });
      }
  });
