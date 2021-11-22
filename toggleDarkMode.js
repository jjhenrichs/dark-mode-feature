var checkbox = document.querySelector("input[name=darkMode]");
var container = document.getElementById("container");
var slider = document.getElementById("slider");

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        console.log("true");
        container.style.backgroundColor = "#333";
        slider.setAttribute('title', 'Light Mode');
    } else {
        console.log("false");
        container.style.backgroundColor = "#ccc";
        slider.setAttribute('title', 'Dark Mode');
    }
    
});