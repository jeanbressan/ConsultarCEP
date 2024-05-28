botao.addEventListener("click", clicar)

function consultaCep() {
   const cep = document.querySelector('#cep').value 
   const logradouro = document.querySelector('#logradouro')
   const complemento = document.querySelector('#complemento') 
   const bairro = document.querySelector('#bairro') 
   const cidade = document.querySelector('#cidade')
   const uf = document.querySelector('#uf') 

   fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(resposta => resposta.json())
   .then(json => {
     logradouro.value = JSON.logradouro
     complemento.value = JSON.complemento
     bairro.value = JSON.bairro
     cidade.value = JSON.cidade
     uf.value = JSON.uf
   })

   .catch(error => {
    alert('O CEP que você inseriu, não foi encontrado! Tente novamente utilizando outro CEP.')
   });
}

const salvarLStorage = window.document.getElementById("salvarLStorage")
salvarLStorage.addEventListener("click", salvarCep)

function salvarCep(){
   const cep = document.getElementById("resposta")
   localStorage.setItem("cep", cep)
   alert('Salvo com Sucesso!')
}

window.onload = salvarCep;