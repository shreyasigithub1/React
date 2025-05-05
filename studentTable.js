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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentComponent />);
