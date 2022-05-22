import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { emailValidator } from "../util";

import "./Login.scss";

const initialState = {
  email: "",
  password: "",
};

const initialvalid = {
  validFlag: true,
  errorMessage: "",
};

export default function Login() {
  const [auth, setAuth] = useState({ ...initialState });
  const [valid, setValid] = useState({ ...initialvalid });

  const navigate = useNavigate();

  const submitForm = () => {
    if (
      auth.email === "admin@admin.com" &&
      auth.password == "admin" &&
      !valid.validFlag
    ) {
      navigate("/adminHome");
    } else {
      setValid({
        ...valid,
        validFlag: true,
        errorMessage: "Form is invalid",
      });
    }
  };

  const onChangeForm = (e) => {
    if (e.target.name == "email") {
      setValid({
        ...valid,
        validFlag: !emailValidator(e.target.value),
        errorMessage: !emailValidator(e.target.value) ? "Form is invalid" : "",
      });
    }
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginform">
      <div className="login" autoComplete="off">
        <div className="form-title">Login</div>
        <div className="form-element">
          <input
            autoComplete="false"
            type="text"
            name="email"
            placeholder="Email"
            value={auth.email}
            onChange={(e) => onChangeForm(e)}
          />
        </div>
        <div className="form-element">
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={auth.password}
            onChange={(e) => onChangeForm(e)}
          />
        </div>
        {valid.errorMessage !== "" && (
          <div className="error">{valid.errorMessage}</div>
        )}
        <button onClick={submitForm}>Login</button>
      </div>
    </div>
  );
}
