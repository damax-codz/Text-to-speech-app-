function speak(){
  let text= document.getElementById("text")
  responsiveVoice.speak(text.value,'US English Female',{rate:0.9})
}


