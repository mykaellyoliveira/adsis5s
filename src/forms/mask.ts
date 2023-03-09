export default () => {
  return document
    .querySelectorAll<HTMLInputElement>('[data-mask="phone"]')
    // Continue a máscara aqui 👇
    .forEach((input) => {
      input.onfocus = (ev) =>{
        console.log("foco")
      }
      input.onblur = (ev) => {
        console.log("blur")
      }
      input.oninput = (ev) => {
        console.log(input.value)
      }
    })
}
