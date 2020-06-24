export const  handleMessage= (func)=>{
  return func.then((data)=>{
    if(data.falseMessage){
      let fmes=data.falseMessage // fmes == falseMessage
      window.M.toast({html:fmes,classes: 'rounded'})
      return "error"

    }
    else if(data.message){
      let tmes = data.message // trueMessage
      window.M.toast({html:tmes,classes: 'rounded'})
      return data
    }
  })
}