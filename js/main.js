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
const backDown = document.querySelector('.back-layer__down');
const backTop = document.querySelector('.back-layer__top');
const backLeft = document.querySelector('.back-layer__left');
const backlayerloginLeft = document.querySelector('.back-layer__login__left');
const backlayerLoginRight = document.querySelector('.back-layer__login__right');

//sensitivity for layers
const sBackDown = 60;
const sBackTop = 120;
const sBackLeft = 60;
const sbacklayerloginLeft = 60;
const sbacklayerLoginRight = 60;

parallax.addEventListener('mousemove', e=>{
  const x = e.clientX;
  const y = e.clientY;

  backDown.style.transform = `
  translate(
  0,
  ${y / sBackDown}%
  )`;

  backLeft.style.transform = `
  translate(
    0,
   -${y / sBackLeft}%
  )`;

  backTop.style.transform = `
  translate(
  -${x / sBackTop}%
  )`;
  //login layer
  backlayerloginLeft.style.transform = `
  translate(
    0,
   -${y / sbacklayerloginLeft}%
  )`;
  backlayerLoginRight.style.transform = `
  translate(
  ${x / sbacklayerLoginRight}%
  )`;



});