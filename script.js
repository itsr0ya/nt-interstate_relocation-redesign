function openNav() {
  document.getElementById("mySidepanel").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

window.addEventListener('scroll', () => {
  document.getElementById('nav-inner')
    .classList.toggle('scrolled', window.scrollY > 0);
});
