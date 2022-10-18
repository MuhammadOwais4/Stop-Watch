var minute;
var second;
var audio;
var interval;
var button = HTMLButtonElement.value = "Resume"

function yok() {
  document.getElementById("btninput").disabled = true
  minute = document.getElementById("minute").value
  second = document.getElementById("second").value

  interval = setInterval(tambah, 1000)

  function tambah() {
    second--
    if (minute != 0 && second == -1) {
      minute--
      second = 59
    } else if (minute == 0 && second == 0) {
      clearInterval(interval)
      document.getElementById("hasill").innerHTML = "Finish!!!"
      document.getElementById("btninput").disabled = false
    }
    document.getElementById("hasil").innerHTML = minute + " : " + second
  }
}



function stop() {
  document.getElementById("btninput").disabled = false
  clearInterval(interval)

  document.getElementById("btninput").innerHTML = button;
}