import { useState } from "react";

function App() {
  // Concepts:
  // 1- always build your components as pure function: same x in same y out f(x)=y
  // 2- do not build deeply nested objects cause it is hard to update
  const [info, setInfo] = useState({
    name: "Pouya",
    address: {
      street: "some street name",
      postalCode: 54841,
    },
  });

  // as you can see you have to treat objects as they are immutable
  // so updating nested ones are harder.
  setInfo({ ...info, address: { ...info.address, postalCode: 123412 } });

  // working with array:
  const [array, setArray] = useState(["Ali", "Muhammad"]);
  // Add
  setArray([...array, "Joe"]);
  // Remove
  setArray(array.filter((item) => item != "Ali"));
  // update
  setArray(array.map((item) => (item === "Joe" ? "Reza" : item)));

  // As you can see there is too many re-renders so this is NOT GOOD!
  return <div></div>;
}

// Always export components
export default App;
