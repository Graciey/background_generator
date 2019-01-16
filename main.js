 var body = document.querySelector("#body");
 var color1 = document.querySelector("#color1");
 var color2 = document.querySelector("#color2");
 var text = document.querySelector("#text");
 function setGradient() {
 	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
 	text.textContent = body.style.background
 }

 color1.addEventListener("input", setGradient);
 color2.addEventListener("input", setGradient)

