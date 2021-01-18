var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}


Recognition.onresult=function(event){
    console.log(event);
}