const form = document.querySelector('#novoItem');
const lista = document.querySelector('.lista');
const items = [];

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	const nome = evento.target.elements['nome'];
	const quantidade = evento.target.elements['quantidade'];
	creaElemento(nome.value, quantidade.value);

	nome.value = '';
	quantidade.value = '';
});

const creaElemento = (nome, quantidade) => {
	const novoItem = document.createElement('li');
	novoItem.classList.add('item');

	const numeroItem = document.createElement('strong');
	numeroItem.innerHTML = quantidade;

	novoItem.appendChild(numeroItem);
	novoItem.innerHTML += nome;

	lista.appendChild(novoItem);

	const itemAtual = {
		nome: nome,
		quantidade: quantidade,
	};

	items.push(itemAtual);

	localStorage.setItem('item', JSON.stringify(items));
};
