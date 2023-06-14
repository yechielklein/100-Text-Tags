const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const random = limit => Math.floor(Math.random() * limit);

const getRandomTag = () => tags[random(tags.length)];

const form = document.querySelector('#form');
const label = document.querySelector('#label');
const input = document.querySelector('#input');
const button = document.querySelector('#button');
const div = document.querySelector('#div');

form.addEventListener('submit', event => {
	event.preventDefault();

	input.value = input.value.trim();

	if (input.value) {
		form.style.display = 'none';
		button.style.display = 'block';
	
		for (let i = 0; i < 100; i++) {
			const textElement = document.createElement(getRandomTag());
	
			textElement.innerText = input.value;
			textElement.style = `
				top: ${random(window.innerHeight)}px;
				left: ${random(window.innerWidth)}px;
				rotate :${random(360)}deg;
			`;
			
			div.append(textElement);
		}
	}
});

button.addEventListener('click', () => {
	div.innerHTML = '';
	form.style.display = 'block';
	button.style.display = 'none';
	input.select();
});