import React from "react";

export default class Student extends React.Component{

    render() {
        const { name, marks } = this.props;
        return (
            <>
                <h1>Name:{name}</h1>
                <h1>Marks:{marks}</h1>
                <hr/>
            </>
        )
    }
}
