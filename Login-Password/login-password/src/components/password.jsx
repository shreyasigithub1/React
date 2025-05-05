import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
export default function Password(props) {
  // const [email, setEmail] = useState("");
  // useEffect(() => {
  //   let email = localStorage.getItem("email");
  //   if (email) {
  //     setEmail(email);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("email", email);
  // },[email]);
  const { email, setEmail } = useLocalStorage();

  return (
    <>
      <h1>Welcome!</h1>
      <h2>Reset Your password</h2>
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
          />
        </div>

        <div>
          <button type="button">Continue</button>
        </div>
        <div>
          <button onClick={props.handlePassword}>Back to Login</button>
        </div>
      </form>
    </>
  );
}
