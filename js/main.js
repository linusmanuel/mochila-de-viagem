const form = document.querySelector('#novoItem');
const lista = document.querySelector('.lista');
const items = JSON.parse(localStorage.getItem('items')) || [];

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	const nome = evento.target.elements['nome'];
	const quantidade = evento.target.elements['quantidade'];

	const itemAtual = {
		'nome': nome.value,
		'quantidade': quantidade.value,
	};

	creaElemento(itemAtual);

	items.push(itemAtual);

	localStorage.setItem('items', JSON.stringify(items));

	nome.value = '';
	quantidade.value = '';
});

const creaElemento = (item) => {
	const novoItem = document.createElement('li');
	novoItem.classList.add('item');

	const numeroItem = document.createElement('strong');
	numeroItem.innerHTML = item.quantidade;

	novoItem.appendChild(numeroItem);
	novoItem.innerHTML += item.nome;

	lista.appendChild(novoItem);
};

items.forEach((el) => {
	creaElemento(el);
});
