import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminSignup, loginAdmin } from "../RTK/Slice/adminSlice";

import { emailValidator } from "../util";

import "./Login.scss";

const initialState = {
  userName: "",
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
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state.admin);

  console.log(adminData);

  useEffect(() => {
    console.log(adminData.adminState.adminLogin);
    if (adminData.adminState.adminLogin) {
      navigate("/adminHome");
    }
  }, [adminData]);

  const submitForm = () => {
    if (!valid.validFlag) {
      dispatch(loginAdmin(auth));
    } else {
      setValid({
        ...valid,
        validFlag: true,
        errorMessage: "Form is invalid",
      });
    }
  };

  const onChangeForm = (e) => {
    if (e.target.name == "userName") {
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
            name="userName"
            placeholder="User name"
            value={auth.userName}
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
