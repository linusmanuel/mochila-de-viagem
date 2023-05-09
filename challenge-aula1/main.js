const list = document.querySelector('.list');
const form = document.querySelector('[data-form]');
const items = JSON.parse(localStorage.getItem('items')) || [];
const inputs = document.querySelectorAll('[data-input]');
const btnAdicionar = document.querySelector('[data-adicionar]');

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	const nome = evento.target.elements['name'];
	const quantity = evento.target.elements['quantity'];
	const existe = items.find((elemento) => elemento.nome === nome.value);

	const itemAtual = { 'nome': nome.value, 'quantidade': quantity.value };

	if (existe) {
		itemAtual.id = existe.id;
		atualizaElemento(itemAtual);

		items[items.findIndex((elemento) => elemento.id === existe.id)] = itemAtual;
	} else {
		itemAtual.id = items[items.length - 1] ? items[items.length - 1].id + 1 : 0;
		createElement(itemAtual);

		items.push(itemAtual);
	}

	localStorage.setItem('items', JSON.stringify(items));

	nome.value = '';
	quantity.value = '';
});

const createElement = (item) => {
	const newItem = document.createElement('li');
	const strong = document.createElement('strong');
	strong.innerHTML = `${item.quantidade} - `;

	newItem.appendChild(strong);
	newItem.innerHTML += item.nome;
	newItem.appendChild(botaoDeleta());
	strong.dataset.id = item.id;

	list.appendChild(newItem);
};

function botaoDeleta(id) {
	const elementoBotao = document.createElement('button');
	elementoBotao.innerHTML = 'x';
	elementoBotao.classList.add('close');
	elementoBotao.addEventListener('click', function () {
		deletaElemento(this.parentNode, id);
	});

	return elementoBotao;
}

function deletaElemento(tag, id) {
	tag.remove();

	items.splice(
		items.findIndex((elemento) => elemento.id === id),
		1
	);

	localStorage.setItem('items', JSON.stringify(items));
}

function atualizaElemento(item) {
	document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}

items.forEach((elemento) => {
	createElement(elemento);
});
