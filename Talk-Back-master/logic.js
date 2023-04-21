function clearText() {
    var value = document.getElementById("textarea").value = "";
}

function stopButton() {
    var responseVoice = responsiveVoice.cancel($('#textarea').val(), $('#voiceselection').val());
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
/// <reference path="responsivevoice.d.ts" />
