const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");

const toggleModal = () => {
    modal.classList.toggle("hide");
}

[openModalButton, closeModalButton].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})