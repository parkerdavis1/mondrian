const elCanvas = document.getElementById('canvas');
const resizeCanvas = function() {
  if (window.innerHeight > window.innerWidth) {
    elCanvas.style.width = "95vw";
    elCanvas.style.height = "95vw";
  } else {
    elCanvas.style.width = "95vh";
    elCanvas.style.height = "95vh";
  }
}
window.addEventListener('resize', resizeCanvas)