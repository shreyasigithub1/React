import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
    };
    this.timer = null;
  }
  componentDidMount() {
    document.getElementsByTagName("title")[0].textContent =
      this.state.name + " " + this.state.lastName;
    this.timer = setInterval(() => {
      console.log("window_width: ", window.innerWidth);
    }, 2000);
  }
  componentDidUpdate() {
    document.getElementsByTagName("title")[0].textContent =
      this.state.name + " " + this.state.lastName;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              className="input"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </Row>
          <Row label="Last Name">
            <input
              className="input"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </Row>
        </div>

        <h2>
          Hello,{this.state.name} {this.state.lastName}{" "}
        </h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
