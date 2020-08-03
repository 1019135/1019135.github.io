var cNC = document.getElementById("navgt");
var cNC2 = document.getElementById("navgt2");
var cNC3 = document.getElementById("navgt3");

function colorNavChange() {
  cNC.style.color = "#FFD700";
}

function colorNavChange2() {
  cNC2.style.color = "#FFD700";
}

function colorNavChange3() {
  cNC3.style.color = "#FFD700";
}

function colorNavReverse() {
  cNC.style.color = "white";
}

function colorNavReverse2() {
  cNC2.style.color = "white";
}

function colorNavReverse3() {
  cNC3.style.color = "white";
}

cNC.addEventListener("mouseover", colorNavChange);
cNC.addEventListener("mouseleave", colorNavReverse);

cNC2.addEventListener("mouseover", colorNavChange2);
cNC2.addEventListener("mouseleave", colorNavReverse2);

cNC3.addEventListener("mouseover", colorNavChange3);
cNC3.addEventListener("mouseleave", colorNavReverse3);


