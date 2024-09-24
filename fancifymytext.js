function showAlert() {
    alert("Hello, world!");
}

document.getElementById("biggerButton").onclick = function() {
    showAlert();
    document.getElementById("textArea").style.fontSize = "24pt"; // Change font size
};

function changeStyle() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

document.getElementById("mooButton").onclick = function() {
    var text = document.getElementById("textArea").value;
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
    document.getElementById("textArea").value = sentences.join(". ");
};

