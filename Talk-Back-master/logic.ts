interface Document {
    selection: any;
}

function clearText() { 
    var value = (<HTMLInputElement>document.getElementById("textarea")).value = ""
}


function stopButton() {
    var responseVoice = responsiveVoice.cancel($('#textarea').val(),$('#voiceselection').val());
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") { // for Internet Explorer 8 and below
        text = document.selection.createRange().text;
    }
    return text;
}
/// <reference path="responsivevoice.d.ts" />

