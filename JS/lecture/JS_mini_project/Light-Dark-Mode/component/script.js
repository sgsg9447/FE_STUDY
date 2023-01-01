const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");

// DarkMode Style
function darkMode() {
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
}

// LightMode Style
function lightMode() {
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

// Swithch Theme Dynamically
function switchTheme(e) {
  if (e.target.checked) {
    //documentElement 문서의 루트인 요소를 반환함 따라서 해당 요소에 다크테마속성 설정함
    document.documentElement.setAttribute("data-theme", "dark"); /*키, 밸류 */
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme
  ); /* 키, 밸류 */
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
