function numFunction1(){
    document.getElementById("roundUp").onclick = firstNum;
    var Up = Math.ceil(firstNum);
    var Up = document.getElementById("roundUp");
         
}

  

function numFunction2(){
  document.getElementById("secondNum", "roundDown").value.onclick = Down;
  var Down = Math.floor(Down);
  Down.attachEvent('onclick', numfunction2);
}



function numRandom(min, max){
  var random = Math.floor(Math.random() * (max - min)) + min;
  return random;
}



function addition(){
  return Up + Down + random;
}