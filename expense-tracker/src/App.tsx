import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

interface ItemData {
  description: string;
  amount: number;
  category: number;
}

const App = () => {
  const [items, setItems] = useState([
    { description: "Mint", amount: 10, category: 1 },
    { description: "Screw", amount: 50, category: 2 },
    { description: "TV Show", amount: 20, category: 3 },
    { description: "Axe", amount: 100, category: 2 },
  ]);

  return (
    <div>
      <Form
        setOnSubmit={(item: ItemData) => {
          setItems([...items, item]);
        }}
      />
      <Table
        items={items}
        onDelete={(item: ItemData) => {
          setItems(items.filter((i) => i !== item));
        }}
      />
    </div>
  );
};

export default App;
