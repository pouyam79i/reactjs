import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  const [items, setItems] = useState([
    { description: "Mint", amount: 10, category: "Groceries" },
    { description: "Screw", amount: 50, category: "Utilities" },
    { description: "TV Show", amount: 20, category: "Entertainment" },
    { description: "Axe", amount: 100, category: "Utilities" },
  ]);

  return (
    <div>
      <Form
        setOnSubmit={(item) => {
          setItems([...items, item]);
        }}
      />
      <Table
        items={items}
        onDelete={(item) => {
          setItems(items.filter((i) => i !== item));
        }}
      />
    </div>
  );
};

export default App;
