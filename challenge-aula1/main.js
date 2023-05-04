const list = document.querySelector('.list');
const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	createElement(
		evento.target.elements['name'].value,
		evento.target.elements['quantity'].value
	);
});

const createElement = (produto, quantity) => {
	console.log(produto, quantity);

	const newItem = document.createElement('li');
	const strong = document.createElement('strong');
	strong.innerHTML = quantity;

	newItem.appendChild(strong);
	newItem.innerHTML += produto;

	list.appendChild(newItem);
};
