// Ctrl + Shift + J to open another devtools

function log(m) {
    chrome.devtools.inspectedWindow.eval('console.log("'+m+'")');
}

function ClearLog() {
	var div = document.getElementById('requested_files');
	div.innerHTML = '';
}

chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
        var div = document.getElementById('requested_files');
        div.innerHTML = div.innerHTML + '<div>' + request.request.url + '</div>';
    }
);

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("clearLog").addEventListener("click", ClearLog);
});