
document.getElementById('convertButton').addEventListener('click', function() {
    let inputTextValue = document.getElementById('inputText').value;
    let upperCaseText = inputTextValue.toUpperCase();
    document.getElementById('outputText').value = upperCaseText;
    document.getElementById('inputText').value = '';
});


