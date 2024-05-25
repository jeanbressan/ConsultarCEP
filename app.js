function consultaCep() {
   const cep = document.querySelector('#cep').value 
   const logradouro = document.querySelector('#logradouro')
   const number = document.querySelector('#number') 
   const bairro = document.querySelector('#bairro') 
   const city = document.querySelector('#city')
   const estado = document.querySelector('#estado') 

   fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(resposta => resposta.json())
//    .then(json => console.log(json))
   .then(json => {
     logradouro.value = JSON.stringify(json)
     number.value = JSON.stringify(json)
     bairro.value = JSON.stringify(json)
     city.value = JSON.stringify(json)
     estado.value = JSON.stringify(json)
   })

   .catch(error => {
    alert('O CEP que você inseriu, não foi encontrado! Tente novamente utilizando outro CEP.')
   });
}