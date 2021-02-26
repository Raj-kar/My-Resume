// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
const toggleSwitch = document.querySelector('input[type="checkbox"]');


document.getElementById("neon-btn").style.visibility = "hidden";
// Swith theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("avatar").classList.add("avatar_dark");
    document.getElementById("icon").classList.remove("fa-sun");
    document.getElementById("icon").classList.add("fa-moon");
    document.getElementById("btn-light").style.visibility = "hidden";
    document.getElementById("btn-light").style.position = "absolute";
    document.getElementById("neon-btn").style.visibility = "visible";
    document.getElementsByClassName("col")[0].style.marginTop = "5rem";
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("avatar").classList.remove("avatar_dark");
    document.getElementById("icon").classList.remove("fa-moon");
    document.getElementById("icon").classList.add("fa-sun");
    document.getElementById("neon-btn").style.visibility = "hidden";
    document.getElementById("btn-light").style.position = "";
    document.getElementById("btn-light").style.visibility = "visible";
    document.getElementsByClassName("col")[0].style.marginTop = "0";
  }
}

// Event Lisetner
toggleSwitch.addEventListener('change', switchTheme);