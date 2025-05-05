const carNames = [
  "Toyota Corolla",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Camaro",
  "BMW 3 Series",
  "Audi A4",
  "Mercedes-Benz C-Class",
  "Tesla Model 3",
  "Hyundai Elantra",
  "Nissan Altima",
];

//Functional Component
const CarList = () => {
  return (
    <>
      <h1>List of Cars</h1>
      <ul>
        {carNames.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CarList />);
