import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const items = ["New York", "San Diego", "California"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={() => {}} />
    </div>
  );
}

// Always export components
export default App;
