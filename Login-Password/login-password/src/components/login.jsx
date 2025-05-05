import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
export default function Login(props) {
  //const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { email, setEmail } = useLocalStorage();

  // useEffect(() => {
  //   let email = localStorage.getItem("email");
  //   if (email) {
  //     setEmail(email);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("email", email);
  // }, [email]);

  return (
    <>
      <h1>Welcome!</h1>
      <h2>Login to the Portal</h2>
      <form>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <button onClick={props.handlePassword}>Forgot Password</button>
        </div>
      </form>
    </>
  );
}
