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
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("avatar").classList.remove("avatar_dark");
    document.getElementById("icon").classList.remove("fa-moon");
    document.getElementById("icon").classList.add("fa-sun");
    document.getElementById("neon-btn").style.visibility = "hidden";
    document.getElementById("btn-light").style.position = "";
    document.getElementById("btn-light").style.visibility = "visible";
    document.getElementsByClassName("col")[0].style.marginTop = "0";
    localStorage.setItem('theme', 'light');
  }
}

// Event Lisetner
toggleSwitch.addEventListener('change', switchTheme);


// Check local Storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme == "dark") {
    toggleSwitch.checked = true;
    document.getElementById("btn-light").style.visibility = "hidden";
    document.getElementById("btn-light").style.position = "absolute";
    document.getElementById("neon-btn").style.visibility = "visible";
    document.getElementById("neon-btn").style.position = "inherit";
  }
}


// Render Dynamic Copyight year
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var date = new Date();
var full_year = date.getFullYear();
var month_name = monthNames[date.getMonth()]
document.getElementById("copyright").innerHTML = `&copy; ${full_year} Raj's Resume. <br>All rights reserved.`
document.getElementById("contribute-form").innerHTML = `Jun, 2020 - ${month_name}, ${full_year}`

// Update Current Age
let birth_year = 2001
let birth_month = 6
let current_year = date.getFullYear();
let current_month = date.getMonth();

let admin_age = current_year - birth_year
if (birth_month > current_month) {
  admin_age -= 1;
}

age_tags = document.getElementsByClassName("admin-age");
for (let i = 0; i < age_tags.length; i++) {
  age_tags[i].innerHTML = admin_age;
}