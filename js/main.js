const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

/*parallax =====================*/
const parallax = document.querySelector('.parallax');
const back = document.querySelector('.back-layer');

//sensitivity for layers
const sBack = 315;

parallax.addEventListener('mousemove', e=>{
  const x = e.clientX;
  const y = e.clientY;

  back.style.transform = `
  translate(
  ${x / sBack}%,
  ${y / sBack}%
  )`;
});