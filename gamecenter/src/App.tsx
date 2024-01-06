import Button from "./components/Button";

function App() {
  const handleBtn = (item: string) => {
    return item === "primary" ? "secondary" : "primary";
  };
  return (
    <div>
      <Button setOnClick={handleBtn}>Click Me!</Button>
      <Button setOnClick={handleBtn} color="secondary">
        Click Me!
      </Button>
    </div>
  );
}

// Always export components
export default App;
