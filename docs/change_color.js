setInterval(function (){
  var i = 0;
  return function(){
    document.getElementById("p1").style.color = "rgb(" + (255-i) + ",0," + i + ")";
    i = (i+4) % 256;
  }
}(),100)
