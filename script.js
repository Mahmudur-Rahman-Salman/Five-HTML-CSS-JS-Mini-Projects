const boxes = document.querySelectorAll(".box")

window.addEventListener('scroll', checkboxes)
checkboxes();

function checkboxes() {
    console.log(window.innerHeight/ 5*4)
}