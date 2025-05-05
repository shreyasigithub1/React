import { useState } from "react";
import React from "react";
import { TimerTwo } from "./Timer/TimerTwo";
import TimerThree from "./Timer/TimerThree";
import { ComponentA } from "./ComponentA";
import { ComponentB } from "./ComponentB";
import ErrorBoundary from "./ErrorBoundary";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       mount: false,
//     }
//   }
//   handleMount=()=>  {
//     this.setState((prevState) =>({mount:!prevState.mount}))

//   }
//   render() {
//     return (
//       <>
//         <button onClick={this.handleMount}>{this.state.mount?"Un-mount":"Mount" }</button>
//         {this.state.mount?<TimerTwo />:null}
//       </>
//     )
//   }

// }

// class App extends React.Component {
//   constructor() {
//         super();
//         this.state = {
//           timerOn: false,
//         }
//       }
//       handleTimerOn = () => {
//         this.setState((prevState) => {
//           return {
//             timerOn: !prevState.timerOn
//           }
//         })
//       };
//   render() {
//     return (
//       <>
//         <TimerThree timerOn={this.state.timerOn} />
//         <button onClick={this.handleTimerOn}>{this.state.timerOn ? "STOP" : "START"}</button>
//       </>
//     )
//   }

// }

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Name List</h1>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
