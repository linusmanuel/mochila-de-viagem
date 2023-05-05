const form = document.querySelector('#novoItem');
const lista = document.querySelector('.lista');
const items = JSON.parse(localStorage.getItem('items')) || [];

items.forEach((el) => {
	creaElemento(el);
});

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	const nome = evento.target.elements['nome'];
	const quantidade = evento.target.elements['quantidade'];

	const existe = items.find((elemento) => elemento.nome === nome.value);

	const itemAtual = {
		'nome': nome.value,
		'quantidade': quantidade.value,
	};

	if (existe) {
		itemAtual.id = existe.id;
		atualizaElemento(itemAtual);

		items[existe.id] = itemAtual;
	} else {
		itemAtual.id = items.length;
		creaElemento(itemAtual);

		items.push(itemAtual);
	}

	localStorage.setItem('items', JSON.stringify(items));

	nome.value = '';
	quantidade.value = '';
});

function creaElemento(item) {
	const novoItem = document.createElement('li');
	novoItem.classList.add('item');

	const numeroItem = document.createElement('strong');
	numeroItem.innerHTML = item.quantidade;
	numeroItem.dataset.id = item.id;
	novoItem.appendChild(numeroItem);
	novoItem.innerHTML += item.nome;

	lista.appendChild(novoItem);
}

function atualizaElemento(item) {
	document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}
