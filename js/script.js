const menuToggle = document.getElementById('btn');
const menu = document.getElementsByClassName('active');

menuToggle.addEventListener('click', () => {
  console.log("hi")
  menu.classList.toggle('active');
});

