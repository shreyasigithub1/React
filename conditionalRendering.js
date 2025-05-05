let flag = true;

const App = () => {
    let firstName = "Alexa";
    let lastName = "Diaz";//If empty string different result
  return (
    <>
          {/* <h1>Hello {(flag ? "Alexa" : "User")}!</h1>
          <p>{ flag && "Welcome to the Website"}</p> */}
          <h1>Hello { lastName || firstName}</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
