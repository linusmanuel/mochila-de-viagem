const form = document.querySelector('#novoItem');
const lista = document.querySelector('.lista');

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
	console.log();
	creaElemento(
		evento.target.elements['nome'].value,
		evento.target.elements['quantidade'].value
	);
});

const creaElemento = (nome, quantidade) => {
	const novoItem = document.createElement('li');
	novoItem.classList.add('item');

	const numeroItem = document.createElement('strong');
	numeroItem.innerHTML = quantidade;

	novoItem.appendChild(numeroItem);
	novoItem.innerHTML += nome;

	lista.appendChild(novoItem);
};
