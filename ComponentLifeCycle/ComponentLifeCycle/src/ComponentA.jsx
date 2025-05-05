import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
      data: {},
    };
    console.log("Component A constructor");
  }
  static getDerivedStateFromProps() {
    console.log("Component A getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("Component A render");
    console.log(this.state.data);

    return (
      <>
        <ul>
          {this.state.data.users?.map((u) => {
            return <li key={u.id}>{u.firstName}</li>;
          })}
        </ul>
      </>
    );
  }
  componentDidMount() {
    console.log("Component A componentDidMount");
    fetch("https://dummyjson") //https://dummyjson.com/users
      .then((response) => response.json())
      .then((data) => {
        console.log(data.users[0].firstName);
        this.setState({ data: data });
      });
  }
}

export { ComponentA };
