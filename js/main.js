function showMenu() {
  document.getElementById("menu").style.opacity = "1";
  document.getElementById("menu").style.zIndex = "2";
  document.getElementById("menu").style.top = "0";
}

function closeMenu() {
  document.getElementById("menu").style.opacity = "0";
  document.getElementById("menu").style.zIndex = "-1";
  document.getElementById("menu").style.top = "-2000px";
}
