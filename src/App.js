import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="title-form">Faça Seu Login</span>
            <div className="wrap-input">
              <input
                className={email !== "" ? "has-value input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? "has-value input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="container-login-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="creat-account">
              <span className="txt-one">Não Tem uma Conta?</span>
              <a className="txt-two" href="#">
                Criar Conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
