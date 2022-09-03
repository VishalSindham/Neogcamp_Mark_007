var txtInput = document.querySelector("#txt-input");

var btnTranslate = document.querySelector("#btn-translate");

var outputText = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/valyrian.json"

function getTranslationURL(inputText){
	return url + "?" + "text=" + inputText
}

console.log(txtInput);

function clickEventHandler(){
	var input = txtInput.value;

	fetch(getTranslationURL(input))
	.then(response => response.json())
	.then(json => {
		var translatedText = json.contents.translated;
		outputText.innerText = translatedText;
	})
}

btnTranslate.addEventListener("click", clickEventHandler);