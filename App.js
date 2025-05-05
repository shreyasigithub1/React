const jsxHeading = <h1>This is jsx heading 🐥</h1>; // Press Cmd + Ctrl + Space to open the emoji picker.
const title = <span>Hello{jsxHeading}</span>;

const FunctionalComponent1 = () => {
  return <h1>First functional component.</h1>;
};
const number = 1000;
const FunctionalComponent2 = () => {
  return (
    <div>
          {jsxHeading}
          {FunctionalComponent1()}
      <FunctionalComponent1 />
      <FunctionalComponent1> </FunctionalComponent1> 
      <h2>{number}</h2>
      <h3>{100 + 200}</h3>
      <h3>{100 + 200}</h3>
      <h3>{console.log("React")}</h3>
      <h1>Second functional component.</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent2 />);
// root.render(title);
