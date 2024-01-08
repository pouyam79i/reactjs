import { useState } from "react";
import Button from "./components/Button";
import produce from "immer";

function App() {
  const [game, setGame] = useState({
    id: 1,
    players: {
      name: "Pouya",
    },
  });

  const handle = () => {
    // to update objects you can use spread '...' notation to copy all fields before updating any other field
    // setGame({ ...game, players: { ...game.players, name: "Reza" } });

    // or use immer
    setGame(
      produce((draft) => {
        draft.players.name = "Reza";
      })
    );
  };

  return (
    <div>
      {
        <p>
          {game.id} - players: {game.players.name}
        </p>
      }
      <Button setOnClick={handle} />
    </div>
  );
}

// Always export components
export default App;
