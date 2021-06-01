 let txt;
  let person = prompt("Lütfen adınızı girin", );
  
  txt =  person + " Hoşgeldin!" ;
  
  document.getElementById("guestName").innerHTML = txt;


// clock

  let weekDays = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
]

  function clock() {
    let currentDate = new Date(); 
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();
    let day = weekDays[currentDate.getDay()];
        

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    day = updateTime(day)
    document.getElementById("displayClock").innerText = hour + " : " + min + " : " + sec + " " + day; 
    let t = setTimeout(function showTime(){ clock() }, 1000); 
}

 function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

clock(); 

showTime();

// changing background


var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 20) {
  if (document.body) {
   document.body.style.backgroundColor = "red";
  }
}else {
  if (document.body) {
   document.body.style.backgroundColor = "red";
  }
}


