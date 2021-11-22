var checkbox = document.querySelector("input[name=darkMode]");
var container = document.getElementById("container");
var slider = document.getElementById("slider");
var content = document. getElementById("content");
var header = document.getElementById("header");
var paragraph = document.getElementById("paragraph");

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        console.log("true");
        container.style.backgroundColor = "#333";
        slider.setAttribute('title', 'Light Mode');
        content.style.backgroundColor = '#333';
        header.style.backgroundColor = '#333';
        header.style.color = '#fff';
        paragraph.style.backgroundColor = '#333';
        paragraph.style.color = '#fff';
    } else {
        console.log("false");
        container.style.backgroundColor = "#ccc";
        slider.setAttribute('title', 'Dark Mode');
        content.style.backgroundColor = '#ccc';
        header.style.backgroundColor = '#ccc';
        header.style.color = '#000';
        paragraph.style.backgroundColor = '#ccc';
        paragraph.style.color = '#000';
    }
    
});