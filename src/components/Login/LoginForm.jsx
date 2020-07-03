import React from 'react'
import { reduxForm} from 'redux-form'
import { Field } from 'redux-form'



const LoginForm = (props)=>{
  return(
      <form action="" onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"login"} name={"login"} component={"input"}></Field>
        </div>
        <div>
          <Field placeholder={"password"} name={"password"} component={"input"}></Field>

        </div>
        <div>
          <Field type={'checkbox'} name={"rememberMe"} component={"input"}/>remember me

        </div>
        <div>
        <button>Login</button>

        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
  form:"login"
})(LoginForm)

export default LoginReduxForm