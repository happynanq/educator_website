import React, { useState } from 'react';
import CreateForm from './CreateForm';

const Create = ()=>{
  const [articleText, setArticleText] = useState(null)
  const [title, setTitle] = useState(null)
  const [pCount, setPCount] = useState(1)
  const [img, setImg] = useState(null)
  let arr = []
  for(let i = 1 ; i<=pCount ; i++){
    arr[i-1] = i
  }
  const handleSubmit = (formData)=>{
    
    setTitle(formData.title)
    let artt= ''
    let gImg= ''
    
    arr.map(c=>{
      let text = 'articleText_'+c
      let link = formData["articleLink_"+c]
      let image = formData["articleImg_"+c]
      if(!link ){
        link = ""
        
      }
      if( !image){
        image=""
      }
      if( !formData[text]){
        return
      }
      let l = link.split(';')
      let img = image.split(';')
      console.log(l,'link')
      let sp = formData[text].split("{__link}")
      let res = ''
      for( let i = 0; i <  sp.length; i++ ){
        let check = l[i] ? l[i] : ''
        res += sp[i] + check
      }
      // let ip = formData[text].split("{__img}")
      // for( let i = 0; i <  ip.length; i++ ){
      //   let check = img[i] ? img[i] : ''
      //   res += sp[i] + check
      // }
      // sp = sp.split("{__img}")
      console.log(typeof sp);

      artt +=  res + "__$"
      gImg += img + "$__"
    })
    setArticleText(artt)
    setImg(gImg)
    
  }
  const changePCount = (e)=>{
    const count = e.currentTarget.value
    setPCount(count)
  }
  const sendArticleText = (text, img)=>{
    if(!text){
      return
    }
    let arr = text.split("__$")
    let imgArr = img.split("$__")
    arr.pop()
    imgArr.pop()
    let i = 0 
    debugger
  return arr.map(elem=>{
    i++
    return(
      <>
      <div> {elem}</div>
      <img src={imgArr[i-1]} alt="Тут должна быть картинка"/>
      </>
    )
  })
  }
  return (
    <>
      <h2>Редактор текста</h2>
      {/* <div>Сколько будет параграфов?</div>  */}
      {/* <input className="col s1" type="number" value={pCount} onChange={changePCount}/> */}
      {/* <div>Create</div> */}
      <CreateForm arr={arr} onSubmit={handleSubmit}/>
      {/* <div>{title}</div> */}
      {/* <div>{  sendArticleText(articleText, img)}</div> */}
    </>
  )
}
export default Create