const searchText = document.querySelector('.search-text');
const searchButton = document.querySelector('.search-button');


searchButton.addEventListener('click', (e) => {
	e.preventDefault;
	const searchId = searchText.value
	fetch("http://localhost:3000")
    .then(response => response.json())
    .then(data => {
    	const info = data.encomendas
    	const dados = info.filter((item) => {
    		return (item.id == searchId)
    	})
    	if (dados.length !== 0){
    		//name
			const name = document.getElementById('name');
			const textHidden01 = document.getElementById('text-hidden-01');
			name.innerHTML = dados[0].cliente['id'] +' - '+dados[0].cliente['nome'];
			textHidden01.innerHTML = 'Nome do Cliente';
			//valor
			const valor = document.getElementById('valor');
			const textHidden02 = document.getElementById('text-hidden-02');
			valor.innerHTML = 'R$ ' + dados[0].valor;
			textHidden02.innerHTML = 'Valor do pedido';
			//data
			const data = document.getElementById('data');
			let dataconverter = dados[0].data;
			dataconverter = dataconverter.slice(8,10) + '/' + dataconverter.slice(5,7) + '/' + dataconverter.slice(0,4)
			const textHidden03 = document.getElementById('text-hidden-03');
			data.innerHTML = dataconverter;
			textHidden03.innerHTML = 'Data de Entrega'
			//entrega
			const textHidden04 = document.getElementById('text-hidden-04');
			textHidden04.innerHTML = 'Situação da Entrega'
			if (dados[0].entregue == true)
				entregue.innerHTML = 'Entregue';
			else
				entregue.innerHTML = 'Entregar ';
    	} else {
    		const results = document.getElementById('results');
    		results.classList.add('notFoundMessage');
    		results.innerHTML = "<p>Encomenda não encontrada!<br />Procure novamente</p>"	
    	}
		searchText.addEventListener('click', (e) => {
			e.preventDefault;
			searchText.value = '';
			location.reload()
		})
    })
})
searchText.addEventListener('click', () => {
	searchText.value = '';
})

