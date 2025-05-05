let flag = false;
const car = [
  { name: "BMW", average: 10, image: "transport.png" },
  { name: "Audi", average: 12, image: "transport.png" },
  { name: "Nexa", average: 17, image: "transport.png" },
];
const student = [
  { name: "Student1", age: 12, marks: 85 },
  { name: "Student2", age: 15, marks: 74 },
  { name: "Student3", age: 14, marks: 65 },
];

const StudentComponent = () => {
  return (
    <>
      <h1>Student Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Age</th>
            <th>Student Marks</th>
          </tr>
        </thead>
        <tbody>
          {student.map((n, index) => {
            return (
              <tr key={index}>
                <td>{n.name}</td>
                <td>{n.age}</td>
                <td>{n.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
const CarComponent = () => {
  return (
    <>
      <h1>Car Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Car Average</th>
            <th>Car Image</th>
          </tr>
        </thead>
        <tbody>
          {car.map((n, index) => {
            return (
              <tr key={index}>
                <td>{n.name}</td>
                <td>{n.average}</td>
                <td>
                  <img src={n.image} alt="Car Image" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

//Conditional rendering
const App = () => {
  if (flag == true) {
    return <CarComponent />;
  }
  return (
    <>
      <StudentComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
