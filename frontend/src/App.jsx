import Game from "./components/Game";
import "./App.css";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet/>
    </div>
    

  )
  
  
}

export default App;
