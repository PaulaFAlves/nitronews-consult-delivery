const searchText = document.querySelector('.search-text');
const searchButton = document.querySelector('.search-button');


searchButton.addEventListener('click', (e) => {
	e.preventDefault;
	const searchId = searchText.value
	// console.log(searchId)
	fetch("http://localhost:3000")
    .then(response => response.json())
    .then(data => {
    	const info = data.encomendas
    	// console.log(info)
    	const dados = info.filter((item) => {
    		return (item.id == searchId)
    	})
    	// console.log(dados)
    	if (dados.length !== 0){
    		console.log(dados)
    		
    		
    		
    		
    		// textHidden01.style.visibility = 'visible'
			const name = document.getElementById('name');
			const textHidden01 = document.querySelector('.text-hidden-01');
			name.innerHTML = dados[0].cliente['nome'];
			textHidden01.innerHTML = 'Nome do Cliente';
			const valor = document.getElementById('valor');
			const textHidden02 = document.querySelector('.text-hidden-02');
			valor.innerHTML = 'R$ ' + dados[0].valor;
			textHidden02.innerHTML = 'Valor do pedido';
			const data = document.getElementById('data');
			const textHidden03 = document.querySelector('.text-hidden-03');
			data.innerHTML = dados[0].data;
			textHidden03.innerHTML = 'Data de Entrega'
			const textHidden04 = document.querySelector('.text-hidden-04');
			textHidden04.innerHTML = 'Situação da Entrega'
			if (dados[0].entregue == true)
				entregue.innerHTML = 'Encomenda entregue';
			else
				entregue.innerHTML = 'Encomenda não entregue';
    	} else {
    		const results = document.getElementById('results');
    		results.innerHTML = "<p style='margin-top: 100px; color: red'>Encomenda não encontrada<br />Procure novamente</p>"	
    	}
		searchText.addEventListener('click', () => {
			searchText.value = '';
			location.reload()
		})
  
    })
})

