import React from "react"

class ComponentB extends React.Component{
    constructor() {
        super();
        this.state = {
            name:"Component B"
        }
        console.log("Component B constructor");

        
    }
    static getDerivedStateFromProps() {
        console.log("Component B getDerivedStateFromProps");
        return null;
    }
    render() {
        console.log("Component B render");
        
        return (
            <>
                <h2>{this.state.name}</h2>
            </>
        )
    }
    componentDidMount() {
        console.log("Component B componentDidMount")
    }
}

export {ComponentB};