// import React from "react";
// import ReactDOM from "react-dom";

// const rootDiv = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.textContent = "Hello React";
// const paragraph = document.createElement("p");
// paragraph.textContent = "React is a JS library.It is composable."
// rootDiv.append(heading, paragraph);

//Using React

/**
 * <div id="parent">
      <div id="child">
        <h1>I am a h1 tag</h1>
      </div>
    </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);
const heading = React.createElement("h1", { id: "head" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// sibling element Using array

// const parent=[(<div id="parent">
//   <div id="child1">
//     <h1>I am a h1 tag</h1>
//   </div>
//   <div id="child2">
//     <h2>I am a h2 tag</h2>
//   </div>
// </div>),(<p>paragraph</p>)]

// sibling element Using Div

// const parent = (
//   <div>
//     <div id="parent">
//       <div id="child1">
//         <h1>I am a h1 tag</h1>
//       </div>
//       <div id="child2">
//         <h2>I am a h2 tag</h2>
//       </div>
//     </div>
//     <p>paragraph</p>
//   </div>
// );

// sibling element Using React.Fragment

// const parent = (
//   <React.Fragment>
//     <div id="parent">
//       <div id="child1">
//         <h1>I am a h1 tag</h1>
//       </div>
//       <div id="child2">
//         <h2>I am a h2 tag</h2>
//       </div>
//     </div>
//     <p>paragraph</p>
//   </React.Fragment>
// );

// sibling element Using updated version of React.Fragment which is an empty fragment
// const Parent = () => (
//   <>
//     <div id="parent">
//       <div id="child1">
//         <h1>I am a h1 tag</h1>
//       </div>
//       <div id="child2">
//         <h2>I am a h2 tag</h2>
//       </div>
//     </div>
//     <p>paragraph</p>
//   </>
// );

// function Parent() {
//   return (
//     <>
//       <div id="parent">
//         <div id="child1">
//           <h1>I am a h1 tag</h1>
//         </div>
//         <div id="child2">
//           <h2>I am a h2 tag</h2>
//         </div>
//       </div>
//       <p>paragraph</p>
//     </>
//   );
// }
//react component
//  function App() {
//   return (<>
//     <h1>React Project</h1>
//     <p>Skills used to make this Project</p>
//     <ol>
//       <li>HTML</li>
//       <li>Javascript</li>
//       <li>CSS</li>
//     </ol>
//   </>)
// }
// const Name=()=>(<h1>JSX is Javascript XML</h1>)
// const App = () => (
//   <>
//     <h1>React Project</h1>
//     <p>Skills used to make this Project</p>
//     <ol>
//       <li>HTML</li>
//       <li>Javascript</li>
//       <li>CSS</li>
//     </ol>
//   </>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(Parent());
// //root.render([<App />, < Name />]);
// root.render(<><App />,< Name/></>);//Using empty fragments
// console.log(parent);

// // const image = React.createElement("img", {
// //   src: "https://files.codingninjas.in/coding-ninjas-24647.png",
// // });
// // // ReactDOM.createRoot(document.getElementById("root")).render(image);
// // root.render(image);
