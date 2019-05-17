var radio = document.getElementsByClassName("onoff");
var icon = document.getElementsByTagName("i");
var txt = document.getElementsByTagName("h4");
var bg = document.getElementById("bg");
for (var i = 0; i < radio.length; i++) {
  txt[0].style.display = "block";
  icon[0].style.fontSize =
    "2em"; /*
  icon[0].style.color = "#ffb3c8";
  icon[1].style.color = "#fee7d4";
  icon[2].style.color = "#acfeea";
  icon[3].style.color = "#6cdeff";
  txt[0].style.color = "#ffb3c8";
  txt[1].style.color = "#fee7d4";
  txt[2].style.color = "#acfeea";
  txt[3].style.color = "#6cdeff";*/
  radio[i].addEventListener("change", function(e) {
    for (var i = 0; i < radio.length; i++) {
      if (this.value != i) {
        txt[i].style.display = "none";
        icon[i].style.fontSize = "1.5em";
      } else {
        txt[parseInt(this.value)].style.display = "block";
        icon[i].style.fontSize = "2em";
      }
    }
  });
}
