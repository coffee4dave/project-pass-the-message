const input = document.querySelector('#input-box');
const message = document.querySelector('#message');
const form = document.querySelector('#input-form');
const alert = document.querySelector('.alert-message');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === "") {

        alert.classList.add("show");
        setTimeout(() => {
            alert.classList.remove("show");
        }, 2000);
    } else {
        message.textContent = input.value;
        input.value = "";
    }

})




























// input.addEventListener('input', updateValue);

// function updateValue(e) {
//     log.textContent = e.target.value;
// }