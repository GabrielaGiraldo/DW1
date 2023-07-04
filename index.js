const openModal = document.getElementById("pop")
const modal = document.querySelector(".modal")
const closeModal = modal.querySelector("#cerrar")

openModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add("m--show")
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove("m--show")
})