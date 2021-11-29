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
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// const two = document.getElementById('two');
// two.innerText = 'height: ' + window.innerHeight + ' / width: ' + window.innerWidth;
