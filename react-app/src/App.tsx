import { useState } from "react";
import Button from "./components/Button";
import produce from "immer";

function App() {
  const [list, setList] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "item 1", quantity: 1 },
      { id: 2, name: "item 2", quantity: 1 },
    ],
  });

  const handle = () => {
    // Normal way:
    // setList({
    //   ...list,
    //   items: list.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });

    // Use Immer
    setList(
      produce((draft) => {
        // find the item
        const item = draft.items.find((item) => item.id === 1);
        // if found change the wanted field
        if (item) item.quantity += 1;
      })
    );
  };

  return (
    <div>
      {<p key={-1}>Discount List Items number: {list.items.length}</p>}
      {list.items.map((item) => (
        <p key={item.id}>
          {item.name} - quantity: {item.quantity}
        </p>
      ))}
      <Button setOnClick={handle} />
    </div>
  );
}

// Always export components
export default App;
