const dialog = document.querySelector("dialog");
document.addEventListener("DOMContentLoaded", () => {
	dialog.showModal();
});
const croix = document.querySelector("#croix");
const rond = document.querySelector("#rond");
const Form = document.querySelector("form");
const span = document.querySelector("#difference");
const reset = document.querySelector("#reset");
const restart = document.querySelector("#restart");
const no = document.querySelector("#no");
const span2 = document.querySelector("#difference2");
const morpions = document.querySelectorAll("#morpion");
const yes = document.querySelector("#yes");
let joueur = "O";
const grille = ["", "", "", "", "", "", "", "", ""];
const rondwin = document.querySelector("#rondwin");
const croixwin = document.querySelector("#croixwin");
const no2 = document.querySelectorAll("#no2");
span.textContent = "O";
span2.textContent = "O";
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
	span.textContent = "X";
	joueur = "X";
	span2.textContent = "X";
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
	span.textContent = "O";
	joueur = "O";
	span2.textContent = "O";
});
reset.addEventListener("click", () => {
	restart.showModal();
});
no.addEventListener("click", () => {
	restart.close();
});
for (let i = 0; i < morpions.length; i++) {
	const info = morpions[i];
	info.addEventListener("click", () => {
		if (grille[i] !== "") {
			return;
		}
		console.log(i);

		if (joueur == "X") {
			info.innerHTML = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M62.5838 10.4906L52.9719 0.87868C51.8003 -0.292893 49.9008 -0.292893 48.7293 0.87868L31.7313 17.8767L14.7333 0.87868C13.5617 -0.292893 11.6622 -0.292893 10.4906 0.87868L0.87868 10.4906C-0.292893 11.6622 -0.292893 13.5617 0.87868 14.7333L17.8767 31.7313L0.87868 48.7293C-0.292893 49.9008 -0.292893 51.8003 0.87868 52.9719L10.4906 62.5838C11.6622 63.7554 13.5617 63.7554 14.7333 62.5838L31.7313 45.5858L48.7293 62.5838C49.9008 63.7554 51.8003 63.7554 52.9719 62.5838L62.5838 52.9719C63.7554 51.8003 63.7554 49.9008 62.5838 48.7293L45.5858 31.7313L62.5838 14.7333C63.7554 13.5617 63.7554 11.6622 62.5838 10.4906Z" fill="#31C3BD"/>
</svg>
`;
			info.classList.add("hover1");
			grille[i] = joueur;
			joueur = "O";
			span2.textContent = "O";
		} else if (joueur == "O") {
			info.innerHTML = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32ZM18.963 32C18.963 24.7998 24.7998 18.963 32 18.963C39.2002 18.963 45.037 24.7998 45.037 32C45.037 39.2002 39.2002 45.037 32 45.037C24.7998 45.037 18.963 39.2002 18.963 32Z" fill="#F2B137"/>
</svg>
`;
			info.classList.add("hover2");
			grille[i] = joueur;
			joueur = "X";
			span2.textContent = "X";
		}
		if (grille[i] == grille[8]) {
			if (grille[i] == grille[4] && grille[i] == grille[0]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[2] && grille[i] == grille[5]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[7] && grille[i] == grille[6]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[4]) {
			if (grille[i] == grille[0] && grille[i] == grille[8]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[3] && grille[i] == grille[5]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[1] && grille[i] == grille[7]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[2] && grille[i] == grille[6]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[0]) {
			if (grille[i] == grille[4] && grille[i] == grille[8]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[1] && grille[i] == grille[2]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[3] && grille[i] == grille[6]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[1]) {
			if (grille[i] == grille[4] && grille[i] == grille[7]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[2] && grille[i] == grille[0]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[2]) {
			if (grille[i] == grille[5] && grille[i] == grille[8]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[0] && grille[i] == grille[1]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[4] && grille[i] == grille[6]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[3]) {
			if (grille[i] == grille[4] && grille[i] == grille[5]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[0] && grille[i] == grille[6]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[5]) {
			if (grille[i] == grille[2] && grille[i] == grille[8]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[4] && grille[i] == grille[3]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		} else if (grille[i] == grille[6]) {
			if (grille[i] == grille[3] && grille[i] == grille[0]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[4] && grille[i] == grille[2]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[7] && grille[i] == grille[8]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		}
		if (grille[i] == grille[7]) {
			if (grille[i] == grille[6] && grille[i] == grille[8]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			} else if (grille[i] == grille[1] && grille[i] == grille[4]) {
				if (joueur == "X") {
					croixwin.showModal();
				} else if (joueur == "O") {
					rondwin.showModal();
				}
			}
		}
	});
}

yes.addEventListener("click", () => {
	window.location.href = "index.html";
});
no2.addEventListener("click", () => {
	window.location.href = "index.html";
});

// rondwin.showModal();

// croixwin.showModal();
