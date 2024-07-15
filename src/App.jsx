import "./App.css";
import GameButtons from "./components/GameButtons";
import GameStatus from "./components/GameStatus";
import Keyboard from "./components/Keyboard";
import Personnage from "./components/Personnage";
import RightLetters from "./components/RightLetters";
import WrongLetters from "./components/WrongLetters";

function App() {
  return (
    <div>
      <Personnage/>
      <RightLetters/>
      <WrongLetters/>
      <Keyboard/>
      <GameStatus/>
      <GameButtons/>
    </div>
  );
}

export default App;
