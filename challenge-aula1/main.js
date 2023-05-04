const list = document.querySelector('.list');
const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	const nome = evento.target.elements['name'];
	const quantity = evento.target.elements['quantity'];
	createElement(nome.value, quantity.value);

	nome.value = '';
	quantity.value = '';
});

const createElement = (produto, quantity) => {
	console.log(produto, quantity);

	const newItem = document.createElement('li');
	const strong = document.createElement('strong');
	strong.innerHTML = quantity;

	newItem.appendChild(strong);
	newItem.innerHTML += produto;

	list.appendChild(newItem);

	localStorage.setItem('nome', produto);
	localStorage.setItem('quantity', quantity);
};
