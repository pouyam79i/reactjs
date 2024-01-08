import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bugs, updateBugs] = useState([
    { id: 1, comment: "Ths is bug", fixed: false },
    { id: 2, comment: "Ths is bug", fixed: false },
  ]);

  const handle = () => {
    updateBugs(
      bugs.map((item) => (item.id === 1 ? { ...item, fixed: true } : item))
    );
  };

  return (
    <div>
      {bugs.map((item) => (
        <p key={item.id}>
          {item.comment} {item.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <Button setOnClick={handle}>Fix Bug 1</Button>
    </div>
  );
}

// Always export components
export default App;
