function translateText() {
  const text = document.getElementById("inputText").value;
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const output = document.getElementById("outputText");

  if (text.trim() === "") {
    alert("Please enter text");
    return;
  }

  output.value = "Translating...";

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      output.value = data.responseData.translatedText;
    })
    .catch(() => {
      output.value = "Translation failed";
    });
}

function copyText() {
  const text = document.getElementById("outputText").value;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

function speakText() {
  const text = document.getElementById("outputText").value;
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}
