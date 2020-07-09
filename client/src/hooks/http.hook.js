import { useCallback, useState } from "react"
import { json } from "body-parser"

export const useHttp = ()=>{
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(
      async(url, method="POST", body=null,headers={})=>{
        try {

          setLoading(true)
          if(body){
            body = JSON.stringify(body)
            headers["Content-Type"] = "application/json"
          }
          

          const response = await fetch(url, {
            method,body,headers
          })
          const data = await response.json()

          if(!response.ok){
            let errors
            if(data.errors){
              errors = data.errors.map(e=>e.msg)
            }else{
              errors = data.message
            }
            throw new Error(errors || "Что то пошло не так")
          }

          setLoading(false)
          return data
          
        } catch (e) {
          let message = e.message.split(",")
          setError(message)
          setLoading(false)
          throw message
        }

      },
    [],
  )

  return {request,loading,error}
}