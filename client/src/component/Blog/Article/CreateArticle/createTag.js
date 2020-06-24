export const createTag = (v)=>{
  if(v==="link"){
    let src = prompt("Введите ссылку")
    return `<a href="${src}"><a/>`
  }
  if(v==="img"){
    let src = prompt("Введите ссылку на изображение")
    return `<img src="${src}"/>`
  }
  let arr = [`<${v.toLowerCase()}></${v.toLowerCase()}>`]
  return arr
}