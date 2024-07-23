import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Game from "./components/Game";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game/>,
      },
      {
        path: "/leaderboard",
        element:<Leaderboard/>
      }
      
    ],
  },
]);