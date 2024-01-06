import ListGroup from "./components/ListGroup";

// App component
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

// Always export components
export default App;
