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

		items[items.findIndex((elemento) => elemento.id === existe.id)] = itemAtual;
	} else {
		itemAtual.id = items[items.length - 1] ? items[items.length - 1].id + 1 : 0;
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
	novoItem.appendChild(botaoDeleta(item.id));

	lista.appendChild(novoItem);
}

function atualizaElemento(item) {
	document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade;
}

function botaoDeleta(id) {
	const elementoBotao = document.createElement('button');
	elementoBotao.innerText = 'x';
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

	console.log(id);
}
