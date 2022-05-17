import React, { useState } from "react";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = {
      email: email,
      password: password,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
      {/* //{" "} */}
      <div className="loginform">
        <h1>fjiejfwfoifj</h1>
        <form className="login" action="" onSubmit={submitForm}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              //   placeholder="Email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Pasword</label>
            <input
              type="password"
              //   placeholder="Password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
