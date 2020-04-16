import { s } from './src/utils/dom.js';

let $cep = s.$('#cep');
$cep.addEventListener('input', function(e){
	let cep = this.value;
	cep = cep.replace('-', '');
	if (cep.length >= 8){
		const promise = getAddress(cep);

		promise
			.then( data => {
				console.log('success');
				showAddress(data);
			})
			.catch( err => {
				console.log('s');
				console.log(err.message);
			});
	}
});

function showAddress(address){
 let $street = s.$('#street');
 let $neighborhood = s.$('#neighborhood');
 let $city = s.$('#city');
 let $state = s.$('#state');

 $street.value = address.logradouro;
 $neighborhood.value = address.bairro;
 $city.value = address.localidade;
 $state.value = address.uf;
}

async function getAddress(cep){
	let url = `https://viacep.com.br/ws/${cep}/json/`;
	const response = await fetch(url);

	if(!response.ok) throw new Error('Something went wrong. Please check CEP');

	const json = await response.json();
	return json;	
}