import React from "react";
//
// req on localhost 5000
export const Login = (props) => {
  return (
    <div className="row">
      <h2>Login</h2>
      <form className="col s12">

        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"  />
            <label for="password">Password</label>
          </div>
        </div>

        <button className="btn">Войти</button>

      </form>
    </div>
  );
};
