'use strict';

// window.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.button'),
	audioOfButtons = document.querySelectorAll('.sound_effect'),
	letters = document.querySelectorAll('.letter');

function addActiveClassForButton(btn) {
	btn.classList.add('activeButton');
	setTimeout(removeActiveClassForButton, 200);

	function removeActiveClassForButton() {
		btn.classList.remove('activeButton');
	}
}

document.addEventListener('keydown', (e) => {
	letters.forEach((letter, i) => {
		if (e.key === letter.innerHTML) {
			audioOfButtons[i].play();
			addActiveClassForButton(buttons[i]);
		}
	});
});

buttons.forEach((btn, i) => {
	btn.addEventListener('click', (e) => {
		audioOfButtons[i].play();
	});
});


// document.addEventListener('keydown', (e) => {
// 	if (e.key === 'a') {
// 		console.log(1);
// 	}
// });
// })