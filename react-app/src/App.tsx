import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        setOnClick={(item) => {
          console.log("You have clicked the button with text: ", item);
        }}
      >
        Hello
      </Button>
      <Button
        setOnClick={(item) => {
          console.log("You have clicked the button with text: ", item);
        }}
        color="secondary"
      >
        Goodbye
      </Button>
    </div>
  );
}

// Always export components
export default App;
