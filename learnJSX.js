// const LearnJSX = () => {
//   let name = "Ravi";
//   let age = 34;
//     let demo = null;
//     let bool = true;
//     let und = undefined;
//   return (
//     <>
//       <h1>Let's Learn {name}.</h1>
//       <h1>Your age is {age}</h1>
//           <h1>Value of demo is {demo}</h1>
//           <h1>Value of bool is {bool}</h1>
//           <h1>Value of und is {und}</h1>
//     </>
//   );
// };

const sum = (a, b) => a + b;
const sum2 = 4;

const SumJSX = () => {
  return (
    <>
      <h1>{sum(6, 4)}</h1>
      <h1>Result of sum</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SumJSX />);
