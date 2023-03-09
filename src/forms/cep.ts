export const cep = () => {
  const input = document.querySelector<HTMLInputElement>('#cep')
  const form = document.querySelector('form')
  const output = document.querySelector('output')
  if (input && form && output) {
    const removeLetras = /\D/g
    const formataCep = /(\d{5})(\d{3})/
    input.oninput = () => {
      input.value = input.value
        .replace(removeLetras, '')
        .replace(formataCep, '$1-$2')
    }

    input.onblur = () => {
      const cep = input.value
      if (cep.length === 9 && cep.indexOf('-') === 5) {
        const api = `https://brasilapi.com.br/api/cep/v1/${input.value}`
        fetch(api)
          .then((response) => response.json())
          .then((data) => {
            if (data.cep) {
              // colocando o retorno de cidade, uf nos inputs
              Object.keys(data).forEach(name => {
                if(form[name]){
                  form[name].value = data[name]
                }
              })         
            } else {
              // se der erro pinta a borda do input e coloca uma mensagem
              input.style.border = '1px solid red'
              output.innerText = data.message
            }
          })
      }
    }
  }
}
