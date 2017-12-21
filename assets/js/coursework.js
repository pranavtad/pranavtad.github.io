function playVictors(){
    var audioElem = document.getElementById("victors");
    if (audioElem.paused)
        audioElem.play();
  else
        audioElem.pause();
}