import { useEffect, useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLastname(e) {
    setLastName(e.target.value);
  }

  useEffect(() => {
    document.title = name + " " + lastName;
  });

  useEffect(() => {
    console.log("Effect ran");
    const timer = setInterval(() => {
      console.log("window_width: ", window.innerWidth);
    }, 2000);
    return () => {
      console.log("Cleanup ");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => handleName(e)}
          />
        </Row>
        <Row label="Last Name">
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => handleLastname(e)}
          />
        </Row>
      </div>

      <h2>
        Hello,{name} {lastName}!
      </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
