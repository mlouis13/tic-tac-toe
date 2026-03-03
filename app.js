const dialog = document.querySelector("dialog");
document.addEventListener("DOMContentLoaded", () => {
	dialog.showModal();
});
const croix = document.querySelector("#croix");
const rond = document.querySelector("#rond");
const Form = document.querySelector("form");

rond.classList.add("white-background");
rond.classList.add("blue-text");
croix.classList.add("black-background");
croix.classList.add("silver-text");
Form.addEventListener("submit", (e) => {
	e.preventDefault();
	dialog.close();
});
croix.addEventListener("click", () => {
	croix.classList.remove("black-background");
	croix.classList.remove("silver-text");
	rond.classList.remove("white-background");
	rond.classList.remove("blue-text");
	croix.classList.add("white-background");
	croix.classList.add("blue-text");
	rond.classList.add("black-background");
	rond.classList.add("silver-text");
});
rond.addEventListener("click", () => {
	rond.classList.remove("black-background");
	rond.classList.remove("silver-text");
	croix.classList.remove("white-background");
	croix.classList.remove("silver-text");
	rond.classList.add("white-background");
	rond.classList.add("blue-text");
	croix.classList.add("black-background");
	croix.classList.add("silver-text");
});
