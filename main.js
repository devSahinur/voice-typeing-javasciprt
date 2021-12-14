let results = document.getElementById("results");
let interim = document.getElementById("interim");

let final_transcript = "";
let interim_transcript = "";

let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = false;

let start = function () {
  results.innerHTML = "";
  interim.innerHTML = "";
  final_transcript = "";
  interim_transcript = "";
  recognition.start();

  recognition.onresult = function (event) {
    interim_transcript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    results.innerHTML = final_transcript;
    interim.innerHTML = "currently Saying" + interim_transcript;
  };
};

let stop = function () {
  recognition.stop();
};
