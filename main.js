var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}


Recognition.onresult=function(event){
    console.log(event.results[0][0].transcript);
    document.getElementById("textbox").innerHTML=event.results[0][0].transcript;
    speak();
}
function speak(){
var synth=window.speechSynthesis;
var value=document.getElementById("textbox").value;
var utter=new SpeechSynthesisUtterance(value);
synth.speak(utter);
Webcam.attach("#camera");
}
Webcam.set({
   width:360,
   height:250,
   image_format:"png",
   png_quality:100 
});