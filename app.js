const dialog = document.querySelector("dialog");
dialog.showModal();
const croix = document.querySelector("#croix");
const rond = document.querySelector("#rond");
const Form = document.querySelector("form");
rond.classList.add("white");
croix.classList.remove("white");
Form.addEventListener("submit", (e) => {
	e.preventDefault();
});
croix.addEventListener("click", () => {
	rond.classList.add("white");
	croix.classList.remove("white");
});
rond.addEventListener("click", () => {
	croix.classList.add("white");
	rond.classList.remove("white");
});
