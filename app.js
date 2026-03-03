const dialog = document.querySelector("dialog");
dialog.showModal();
const croix = document.querySelector("#croix");
const rond = document.querySelector("#rond");
const Form = document.querySelector("form");
const O = document.querySelector("O");
const X = document.querySelector("X");
rond.classList.add("white");
croix.classList.remove("white");

Form.addEventListener("submit", (e) => {
	e.preventDefault();
});
croix.addEventListener("click", () => {
	rond.classList.add("white");
	croix.classList.remove("white");
	X.style.fill = "#1a2a33";
	O.style.fill = "#a8bfc9";
});
rond.addEventListener("click", () => {
	croix.classList.add("white");
	rond.classList.remove("white");
	X.style.fill = "#a8bfc9";
	O.style.fill = "#1a2a33";
});
