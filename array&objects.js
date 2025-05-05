const array = [5, 3, 6, 2];
const obj = {
  name: "Alexa",
  age: 10,
};

const heading = <h1>Heading</h1>;
const App = () => {
  return (
    <>
      {array.map((n) => (
        <p>{n}</p>
      ))}
      {array.filter((n) => (
        n%3 == 0
      ))}

      <h1>{obj.name}</h1>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
