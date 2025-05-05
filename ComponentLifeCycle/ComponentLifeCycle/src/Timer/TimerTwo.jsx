import React from "react"
class TimerTwo extends React.Component{
    constructor() {
        super();
        console.log("TimerOne Constructor")
        this.state = {
            time:0,
        }
        this.timer = null;
        
    }
    static getDerivedStateFromProps() {
        console.log("TimerOne getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(nextprops, nextState) {
        return true;
    }
    
    render() {
        console.log("TimerOne render");
        console.log(this.state.time);
        return (
            <>
                <h1>Time Spent:{new Date(this.state.time *1000).toISOString().slice(11,19)}</h1>
            </>
        )
    }
    componentDidMount() {
        console.log("TimerOne componentDidMount"); 
        
        if (!this.timer) {
            this.timer = setInterval(() => {
                this.setState((prevState) => ({ time: prevState.time + 1 }));
            }, 1000);
        }
    
    }
      componentWillUnmount() {
          console.log("UNMOUNT");
          clearInterval(this.timer);//This is to clear the first interval in strict mode
    }
    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log("TimerOne getSnapshotBeforeUpdate"); 
        return null;
    }
    componentDidUpdate() {
        console.log("TimerOne componentDidUpdate"); 
        if (this.state.time >= 5) {
            clearInterval(this.timer); //This is to clear the second interval which is still running 
            this.timer = null;
        }
       
       
    }
}
export { TimerTwo };