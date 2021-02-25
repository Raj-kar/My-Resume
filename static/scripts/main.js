// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Swith theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("avatar").classList.add("avatar_dark");
    document.getElementById("icon").classList.remove("fa-sun");
    document.getElementById("icon").classList.add("fa-moon");
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("avatar").classList.remove("avatar_dark");
    document.getElementById("icon").classList.remove("fa-moon");
    document.getElementById("icon").classList.add("fa-sun");
  }
}

// Event Lisetner
toggleSwitch.addEventListener('change', switchTheme);