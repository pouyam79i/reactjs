import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Mint", amount: 10, category: 1 },
    { id: 2, description: "Screw", amount: 50, category: 2 },
    { id: 3, description: "TV Show", amount: 20, category: 3 },
    { id: 4, description: "Axe", amount: 100, category: 2 },
  ]);

  return (
    <div>
      <Form />
      <Table items={items} />
    </div>
  );
};

export default App;
