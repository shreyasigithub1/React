import React from "react"
class TimerOne extends React.Component{
    constructor() {
        super();
        console.log("TimerOne Constructor")
        this.state = {
            counter:0,
        }
    }
    static getDerivedStateFromProps() {
        console.log("TimerOne getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(nextprops, nextState) {
        return true;
    }
    handleIncrease() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        })); 
    }
    render() {
        console.log("TimerOne render");
        return (
            <>
                <h1>Timer</h1>
                <button onClick={()=>this.handleIncrease()}>Click Me</button>
                <p>Counter:{this.state.counter}</p>
            </>
        )
    }
    componentDidMount() {
        console.log("TimerOne componentDidMount"); 
    }
    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log("TimerOne getSnapshotBeforeUpdate"); 
        return null;
    }
    componentDidUpdate() {
        console.log("TimerOne componentDidUpdate"); 
       
    }
}
export { TimerOne };