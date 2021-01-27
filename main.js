var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}


Recognition.onresult = function (event) {
    var sppech = event.results[0][0].transcript;
    console.log(event.results[0][0].transcript);
    document.getElementById("textbox").innerHTML = event.results[0][0].transcript;
    if (sppech == "take my selfie") {
        speak();
    }

}


function speak() {
    var synth = window.speechSynthesis;
    var value = "taking your selfie in 5 seconds";
    var utter = new SpeechSynthesisUtterance(value);
    synth.speak(utter);
    Webcam.attach("#camera");
    setTimeout(function () {
        snapshot();
    }, 5000);
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 100
});

function snapshot() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = '<img src="' + datauri + '" id="image">';
    });
    download();
}
function download(){
    var imagelocation=document.getElementById("image").src;
    document.getElementById("ATag").href=imagelocation;
    document.getElementById("ATag").click();
}