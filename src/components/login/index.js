import React from "react";
import { login } from "../../config/firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onLogin = () => {
    if (email && password) {
      login(email, password)
        .then((res) => {
          alert("Successfully Logged In");
          history.push("/dashboard");
        })
        .catch((e) => {
          alert(e.message);
        });

      resetFields();
    } else {
      alert("please complete your details ");
    }
  };

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginmain">
      <div className="container">
        <div className="row  ">
          <div className="col-md-7 login-col-text ">
            <h1 className="signuploginhead text-center">IMPERIAL STORES</h1>
            <br />

            <h1 className="signuploginhead text-center">
              Sell online with IMPERIAL STORES
            </h1>

            <p className="text-center">
                PARHO
            </p>
          </div>

          <div className="offset-md-1 col-md-4 p-3 text-center login ">
            <form>
              <h1 className="signuploginhead">LOGIN</h1>
              <br />
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <br />
              <br />

              <input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <br />
              <br />

              <input
                onClick={onLogin}
                type="button"
                value="Login"
                className="btn btn-success"
                type="submit"
              />
              <p
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/")}
              >
                Not a user? Create accounts
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
