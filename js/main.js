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

function showSubmission() {
  document.getElementById("submission-container").style.opacity = "1";
  document.getElementById("submission-container").style.zIndex = "2";
  document.getElementById("submission-container").style.right = "0";
}

function closeSubmission() {
  document.getElementById("submission-container").style.opacity = "0";
  document.getElementById("submission-container").style.zIndex = "-1";
  document.getElementById("submission-container").style.right = "-2000px";
}


const slider = tns({
  container: '#my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  speed: 800,
  controlsContainer: "#customize-controls",
  mouseDrag: true,
  });

  const slider2 = tns({
    container: '#my-slider2',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 800,
    controlsContainer: "#customize-controls2",
    mouseDrag: true,
    });
