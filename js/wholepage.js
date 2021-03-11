chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.msg == "get_content") {
            var tagList = document.getElementsByTagName('*');

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4) {
                    if (xmlhttp.status === 200) {
                        var data = JSON.parse(xmlhttp.responseText);
                        updateText(data, tagList);
                    } else {
                        alert('Cannot reach russiangram.com');
                    }
                }
            }

            var collectedText = collectText(tagList);
            var data = JSON.stringify(collectedText);

            xmlhttp.open("POST", "https://russiangram.com/translate/Default.aspx", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data);
            sendResponse({data: 'success'});
        }
    });

function collectText(tagList) {

    var collectedText = {};

    forEachTextNode(tagList, function (node, uid) {
        collectedText[uid] = node.nodeValue;
        node.uid = uid;
    });

    return collectedText;
}

function updateText(collectedText, tagList) {

    forEachTextNode(tagList, function (node, uid) {
        if (node.uid !== uid) {
            alert('Oops, something went wrong. Please Try Again.\n\nThe RussianGram.com team.');
            throw new Error('While waiting for a response from the server, the DOM was changed.');
        }
        node.nodeValue = collectedText[uid];
    });
}

function forEachTextNode(tagList, callback) {
    for (var i = 0; i < tagList.length; i++) {
        var tag = tagList[i];

        for (var j = 0; j < tag.childNodes.length; j++) {
            var node = tag.childNodes[j];

            if (node.nodeType === Node.TEXT_NODE) {
                var uid = i + '' + j;

                callback(node, uid);
            }
        }
    }
}