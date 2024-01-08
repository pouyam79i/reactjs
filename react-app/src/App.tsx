import { useState } from "react";
import NavBar from "./components/NavBar";
import ListGroup from "./components/ListGroup";

function App() {
  const [list, updateList] = useState(["Item 1", "Item 2", "Item 3"]);
  return (
    <div>
      <NavBar itemNumbers={list.length} />
      <ListGroup
        items={list}
        onSelectItem={(key) => {
          updateList(list.filter((item) => item !== key));
        }}
      />
    </div>
  );
}

// Always export components
export default App;
