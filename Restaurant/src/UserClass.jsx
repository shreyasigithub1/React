import React from 'react';

export default class UserClass extends React.Component{
    constructor(props) { //props is an object
        super(props);
        this.state = {
            count1: 0,
            count2: 1,
            count3: 2,
        }
     }
     render() {
         const { name, location } = this.props;
         const { count1 } = this.state;
        return (<>
            <h1>UserClass --</h1>
            <button onClick={() => (this.setState({
                count1:count1 +1,
            }))}>Click Me</button>
            <h1>count: {count1}</h1>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
        </>)
    }
}
