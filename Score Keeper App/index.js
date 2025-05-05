let score = 0;
let wicket = 0;
let ballWiseResult = [];
let hit = 0;
let inputRef = React.createRef();
function addOne() {
  // if (wicket < 10) {
  //   ballWiseResult.push(1);
  //   score += 1;

  // }
  hit = 1;
  root.render(<App />);
}

function addScore(num) {
  // if (wicket < 10) {
  //   ballWiseResult.push(num);
  //   score += num;
  hit = num;
  root.render(<App />);
}
function addWicket() {
  // if (wicket < 10) {
  //   ballWiseResult.push("W");
  //   wicket += 1;

  // }
  hit = "W";
  root.render(<App />);
}
const ScoreButtons = () => {
  return (
    <>
      <button onClick={() => addScore(0)}>0</button>
      <button onClick={addOne}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(5)}>5</button>
      <button onClick={() => addScore(6)}>6</button>
      <button onClick={addWicket}>Wicket</button>
    </>
  );
};

const Result = () => (
  <>
    {ballWiseResult.map((r, index) => (
      <>
        {index % 6 == 0 ? <br /> : null}
        <span style={r === "W" ? { color: "red" } : {}}>
          {r === 0 ? <strong>.</strong> : r}
        </span>
        &nbsp;&nbsp;&nbsp;
      </>
    ))}
  </>
);

function handleSubmit(event) {
  event.preventDefault();

  if (hit == "W") {
    wicket += 1;
  } else {
    score += hit;
  }
  console.log(inputRef.current.value);
  ballWiseResult.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>);
  
  hit = 0;
  inputRef.current.value = "";
  root.render(<App />);

}
const Form = () => (
  <>
    <form onSubmit={handleSubmit}>
      <input value={hit} />
      <input ref={inputRef} placeholder="Add a comment" />
      <button>Submit</button>
    </form>
  </>
);
const App = () => {
  return (
    <>
      <h1>Score Keeper</h1>
      <h1>
        Score {score}/{wicket}
      </h1>
      <ScoreButtons />
      <br />
      <Form />
      <hr />
      {ballWiseResult.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const [, animal] = ["Horse", "Cat", "Cow"];
// console.log(animal)