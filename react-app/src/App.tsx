import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like
        comment="Hello"
        onClick={(item: string) => {
          console.log("Clicked with: ", item);
        }}
      />
    </div>
  );
}

// Always export components
export default App;
