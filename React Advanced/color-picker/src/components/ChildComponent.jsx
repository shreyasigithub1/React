import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
      border: `2px solid black`,
      margin: "15px",
      padding: "10px",
      width: "100px",
      height:"70px"
    }}
  >
    <GrandChildComponent color={props.color} />
  </div>
);

export default ChildComponent;
