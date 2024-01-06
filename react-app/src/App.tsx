import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleClickBtn = () => {
    setAlertVisibility(true);
  };
  const handleCloseBtn = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && (
        <Alert>
          <p>You Clicked Me!</p>
          <Button setOnClick={handleCloseBtn} type="btn-close"></Button>
        </Alert>
      )}
      <Button setOnClick={handleClickBtn}>Click Me!</Button>
    </div>
  );
}

// Always export components
export default App;
